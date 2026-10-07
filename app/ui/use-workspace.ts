'use client';
import {useEffect,useReducer} from 'react';
import type {Job,Profile,Stage} from '../../core/types';
export type Screen='landing'|'learning'|'profile'|'research'|'results'|'error';
type State={screen:Screen;stage:Stage;url:string;profile:Profile|null;job:Job|null;busy:boolean;error:string;ready:boolean;frozen:boolean};
const initial:State={screen:'landing',stage:'PRODUCT_PROFILE_READY',url:'',profile:null,job:null,busy:false,error:'',ready:false,frozen:true};
const terminal=(status:string)=>['QUALIFIED','REJECTED','INSUFFICIENT_EVIDENCE','FAILED'].includes(status);
function reducer(state:State,action:Partial<State>){return {...state,...action};}
export function useWorkspace(){
 const [s,patch]=useReducer(reducer,initial);
 useEffect(()=>{let live=true;(async()=>{const data=await fetch('/api/session').then(r=>r.json()).catch(()=>({}));if(!live)return;const job=data.job??null;patch({ready:true,frozen:!!data.externalFrozen,profile:data.profile??null,url:data.profile?.productUrl??'',job,screen:job?(job.status==='FAILED'?'error':terminal(job.status)?'results':'research'):data.profile?'profile':'landing',stage:job?.status??'PRODUCT_PROFILE_READY'});})();return()=>{live=false;};},[]);
 useEffect(()=>{if(!s.job||terminal(s.job.status))return;let active=true;const timer=setInterval(async()=>{try{const d=await fetch('/api/jobs/'+s.job!.id).then(r=>r.json());if(active&&d.job)patch({job:d.job,stage:d.job.status,screen:d.job.status==='FAILED'?'error':terminal(d.job.status)?'results':'research'});}catch{}},2000);return()=>{active=false;clearInterval(timer);};},[s.job?.id,s.job?.status]);
 async function reset(){try{const r=await fetch('/api/reset',{method:'POST'});const d=await r.json();if(!r.ok)throw Error(d.error);patch({...initial,ready:true,frozen:s.frozen});}catch(e){patch({error:e instanceof Error?e.message:'New search could not start.'});}}
 async function analyze(){if(s.frozen){patch({error:'Research is temporarily unavailable. Your product URL stays here, ready to try again.'});return;}patch({busy:true,error:'',screen:'learning',stage:'ANALYZING_PRODUCT',job:null});try{const r=await fetch('/api/analyze',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({url:s.url})});const d=await r.json();if(!r.ok)throw Error(d.error);patch({profile:d.profile,screen:'profile',stage:'PRODUCT_PROFILE_READY'});}catch(e){patch({screen:'landing',error:e instanceof Error?e.message:'Product analysis could not finish. Try a public product page.'});}finally{patch({busy:false});}}
 async function scout(){if(s.frozen){patch({error:'Scouting is temporarily unavailable. Your product brief is still here.'});return;}if(!s.profile)return;patch({busy:true,error:''});try{const r=await fetch('/api/scout',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({profile:s.profile})});const d=await r.json();if(!r.ok)throw Error(d.error);patch({job:d.job,stage:d.job.status,screen:'research'});}catch(e){patch({error:e instanceof Error?e.message:'The scout could not start. Your brief is still here.'});}finally{patch({busy:false});}}
 return {s,patch,reset,analyze,scout};
}