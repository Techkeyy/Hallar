import {session,reply,getSession,externalFrozen} from '../../../lib/server';
export async function GET(req:Request){const s=await session(req);return reply({...await getSession(s.owner),externalFrozen:await externalFrozen()},s.cookie);}
