import fs from 'node:fs/promises';import path from 'node:path';
export async function providerJson(url:string,key:string,body?:unknown,timeout=90000){
 if(await fs.stat(path.join(process.cwd(),'.runtime','external-freeze')).catch(()=>null))throw new Error('Owner external freeze is active');
 const response=await fetch(url,{method:body?'POST':'GET',headers:{Authorization:`Bearer ${key}`,...(body?{'Content-Type':'application/json'}:{})},body:body?JSON.stringify(body):undefined,signal:AbortSignal.timeout(timeout)});
 const data=await response.json().catch(()=>({}));
 if(!response.ok)throw new Error(`Provider HTTP ${response.status}`);
 return data;
}
export async function structured<T>(name:string,schema:unknown,instructions:string,input:unknown,maxOutput=4000):Promise<{value:T;id:string}>{
 const key=process.env.OPENAI_API_KEY;if(!key)throw new Error('OpenAI not configured');
 const data=await providerJson('https://api.openai.com/v1/responses',key,{model:'gpt-6.1-sol',reasoning:{effort:'low'},store:false,max_output_tokens:maxOutput,instructions,input:JSON.stringify(input),text:{format:{type:'json_schema',name,strict:true,schema}}},150000);
 if(data.status!=='completed')throw new Error('Model response incomplete');
 const text=(data.output??[]).filter((x:{type:string})=>x.type==='message').flatMap((x:{content:unknown[]})=>x.content??[]).filter((x:{type:string})=>x.type==='output_text').map((x:{text:string})=>x.text).join('');
 if(!text)throw new Error('No structured response');
 return {value:JSON.parse(text) as T,id:data.id};
}
export const str={type:'string'};export const strings={type:'array',items:str};
export function object(properties:Record<string,unknown>){return {type:'object',properties,required:Object.keys(properties),additionalProperties:false};}
