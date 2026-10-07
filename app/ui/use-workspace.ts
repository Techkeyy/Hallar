'use client';
import {useCallback,useEffect,useReducer} from 'react';
import type {Job,Profile,Stage} from '../../core/types';
export type Screen='landing'|'learning'|'profile'|'research'|'results'|'error';
export type PreviewView='landing'|'learning'|'profile'|'search'|'discard'|'verify'|'proof'|'qualified'|'rejected'|'insufficient'|'error'|'empty';
type Snapshot={profile:Profile;job:Job;recordedAt:string;observedAt:string};
type State={screen:Screen;stage:Stage;url:string;profile:Profile|null;job:Job|null;busy:boolean;error:string;ready:boolean;preview:boolean;frozen:boolean;snapshot:Snapshot|null;previewView:PreviewView};
const initial:State={screen:'landing',stage:'PRODUCT_PROFILE_READY',url:'',profile:null,job:null,busy:false,error:'',ready:false,preview:false,frozen:true,snapshot:null,previewView:'landing'};
const terminal=(status:string)=>['QUALIFIED','REJECTED','INSUFFICIENT_EVIDENCE','FAILED'].includes(status);
function reducer(state:State,action:Partial<State>){return {...state,...action};}
export function useWorkspace(){
 const [s,patch]=useReducer(reducer,initial);
 useEffect(()=>{let live=true;(async()=>{const review=new URLSearchParams(window.location.search).get('review')==='1';const preview=review?await fetch('/api/design-preview').then(r=>r.ok?r.json():null).catch(()=>null):null;if(!live)return;
 if(preview){patch({preview:true,frozen:true,snapshot:preview,ready:true});return;}
 const data=await fetch('/api/session').then(r=>r.json()).catch(()=>({}));if(!live)return;
 const job=data.job??null;patch({ready:true,frozen:!!data.externalFrozen,profile:data.profile??null,url:data.profile?.productUrl??'',job,screen:job?(job.status==='FAILED'?'error':terminal(job.status)?'results':'research'):data.profile?'profile':'landing',stage:job?.status??'PRODUCT_PROFILE_READY'});
 })();return()=>{live=false;};},[]);
 useEffect(()=>{if(s.preview||!s.job||terminal(s.job.status))return;let active=true;const timer=setInterval(async()=>{try{const d=await fetch('/api/jobs/'+s.job!.id).then(r=>r.json());if(active&&d.job)patch({job:d.job,stage:d.job.status,screen:d.job.status==='FAILED'?'error':terminal(d.job.status)?'results':'research'});}catch{}},2000);return()=>{active=false;clearInterval(timer);};},[s.preview,s.job?.id,s.job?.status]);
 const preview=useCallback((view:PreviewView)=>{if(!s.snapshot)return;const p=structuredClone(s.snapshot.profile),job=structuredClone(s.snapshot.job);const stage:Stage=view==='learning'?'ANALYZING_PRODUCT':view==='search'?'SCOUTING':view==='discard'?'QUALIFYING':view==='verify'?'VERIFYING_ASSET':view==='proof'?'PREPARING_PROOF':view==='rejected'?'REJECTED':view==='insufficient'?'INSUFFICIENT_EVIDENCE':view==='error'?'FAILED':'QUALIFIED';
 if(view==='empty')job.result={...job.result!,opportunities:[],reviewed:0};
 patch({screen:view==='landing'?'landing':view==='learning'?'learning':view==='profile'?'profile':['search','discard','verify','proof'].includes(view)?'research':view==='error'?'error':'results',stage,profile:view==='landing'?null:p,url:view==='landing'?'':p.productUrl,job:['qualified','rejected','insufficient','empty'].includes(view)?job:null,error:'',previewView:view,busy:false});
 },[s.snapshot]);
 async function analyze(){if(s.frozen){patch({error:'Research is temporarily unavailable. Your product URL stays here, ready to try again.'});return;}patch({busy:true,error:'',screen:'learning',stage:'ANALYZING_PRODUCT',job:null});try{const r=await fetch('/api/analyze',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({url:s.url})});const d=await r.json();if(!r.ok)throw Error(d.error);patch({profile:d.profile,screen:'profile',stage:'PRODUCT_PROFILE_READY'});}catch(e){patch({screen:'landing',error:e instanceof Error?e.message:'Product analysis could not finish. Try a public product page.'});}finally{patch({busy:false});}}
 async function scout(){if(s.frozen){if(s.preview)preview('search');else patch({error:'Scouting is temporarily unavailable. Your product brief is still here.'});return;}if(!s.profile)return;patch({busy:true,error:''});try{const r=await fetch('/api/scout',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({profile:s.profile})});const d=await r.json();if(!r.ok)throw Error(d.error);patch({job:d.job,stage:d.job.status,screen:'research'});}catch(e){patch({error:e instanceof Error?e.message:'The scout could not start. Your brief is still here.'});}finally{patch({busy:false});}}
 return {s,patch,preview,analyze,scout};
}

