import {session,reply,getJob} from '../../../../lib/server';
export async function GET(req:Request,{params}:{params:Promise<{id:string}>}){const s=await session(req);const {id}=await params;const job=await getJob(s.owner,id);return job?reply({job},s.cookie):reply({error:'This scouting session is unavailable.'},s.cookie,404);}
