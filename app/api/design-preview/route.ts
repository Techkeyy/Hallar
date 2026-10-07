import fs from 'node:fs/promises';
import path from 'node:path';
import {reply} from '../../../lib/server';
export async function GET(req:Request){
 const host=(req.headers.get('host')??'').split(':')[0];
 if(process.env.HALLAR_DESIGN_PREVIEW!=='1'||!['127.0.0.1','localhost'].includes(host))return reply({error:'Not available'},undefined,404);
 const raw=JSON.parse(await fs.readFile(path.join(process.cwd(),'.runtime/validation/public/report.json'),'utf8'));
 const {owner,...job}=raw.job;
 return reply({profile:raw.profile,job,recordedAt:raw.finishedAt,observedAt:raw.job.result.opportunities.find((x:{outcome:string})=>x.outcome==='QUALIFIED')?.evidence?.observedAt,externalFrozen:true});
}
