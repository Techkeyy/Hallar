import type {Stage} from '../core/types';
export function Mascot({stage}:{stage:Stage|'IDLE'}){
 const active=['ANALYZING_PRODUCT','SCOUTING','QUALIFYING','VERIFYING_ASSET','PREPARING_PROOF'].includes(stage);
 return <div className={`mascot mascot-${stage.toLowerCase()} ${active?'active':''}`} aria-hidden="true"><svg viewBox="0 0 520 300" role="img">
  <ellipse cx="274" cy="274" rx="185" ry="12" fill="#e5e8df"/>
  <g className="paper-stream"><g transform="translate(348 115) rotate(8)"><rect width="72" height="94" rx="8" fill="#fdfbf5" stroke="#b8c7ba" strokeWidth="2"/><path d="M15 26h43M15 39h33M15 52h39" stroke="#b8c7ba" strokeWidth="5" strokeLinecap="round"/></g><g transform="translate(405 92) rotate(-6)"><rect width="62" height="86" rx="7" fill="#eef2e9" stroke="#cad3c4" strokeWidth="2"/><path d="M13 24h34M13 37h30M13 50h24" stroke="#cad3c4" strokeWidth="4"/></g></g>
  <g className="discarded"><rect x="82" y="104" width="56" height="73" rx="6" fill="#e9e0d7" transform="rotate(-18 110 140)"/><path d="m99 123 24 24m0-24-24 24" stroke="#b19887" strokeWidth="4"/></g>
  <g className="cart"><path d="M302 208h91l-13 41h-65z" fill="#8ac4aa" stroke="#294e42" strokeWidth="3"/><path d="m302 208-8-17h-21" stroke="#294e42" strokeWidth="4" fill="none" strokeLinecap="round"/><circle cx="324" cy="264" r="9" fill="#294e42"/><circle cx="372" cy="264" r="9" fill="#294e42"/><g className="selected-card"><rect x="329" y="149" width="53" height="71" rx="5" fill="#fffaf0" stroke="#294e42" strokeWidth="2"/><path d="M339 164h30M339 175h24M339 186h27" stroke="#9fbaa7" strokeWidth="3"/><path className="proof-check" d="m340 201 8 7 17-18" fill="none" stroke="#3c8f87" strokeWidth="5" strokeLinecap="round"/></g></g>
  <g className="courier"><path className="leg-a" d="m205 217-13 44h-19" stroke="#294e42" strokeWidth="17" strokeLinecap="round"/><path className="leg-b" d="m239 217 17 44h20" stroke="#294e42" strokeWidth="17" strokeLinecap="round"/>
   <path d="M193 131q27-19 55 0l15 97h-89z" fill="#3c8f87"/><path d="m194 140 50 68" stroke="#f0d4ac" strokeWidth="9"/><rect x="215" y="190" width="47" height="34" rx="7" fill="#c65536"/><path d="M223 199h28" stroke="#f0d4ac" strokeWidth="3"/>
   <path className="arm" d="m245 148 23 30 27 13" fill="none" stroke="#3c8f87" strokeWidth="18" strokeLinecap="round"/><circle cx="294" cy="191" r="9" fill="#dba875"/>
   <path d="m196 151-21 34 18 16" fill="none" stroke="#3c8f87" strokeWidth="17" strokeLinecap="round"/><circle cx="193" cy="201" r="9" fill="#dba875"/>
   <rect x="211" y="115" width="21" height="21" rx="7" fill="#dba875"/><ellipse cx="221" cy="91" rx="32" ry="37" fill="#efc69c"/><path d="M188 87q-5-42 35-42 35 0 32 35-19-3-28-18-4 20-39 25" fill="#294e42"/><path d="M200 44q7-19 23-9" stroke="#294e42" strokeWidth="9" fill="none" strokeLinecap="round"/>
   <circle cx="210" cy="90" r="10" fill="none" stroke="#294e42" strokeWidth="3"/><circle cx="238" cy="90" r="10" fill="none" stroke="#294e42" strokeWidth="3"/><path d="M220 90h8m-35-4 6 2" stroke="#294e42" strokeWidth="3"/><circle cx="212" cy="90" r="2" fill="#294e42"/><circle cx="240" cy="90" r="2" fill="#294e42"/><path d="M219 108q9 7 17 0" stroke="#9d613f" strokeWidth="3" fill="none" strokeLinecap="round"/>
  </g>
  <g className="magnifier"><circle cx="298" cy="137" r="23" fill="#d2ece0" fillOpacity=".7" stroke="#c65536" strokeWidth="7"/><path d="m281 155-22 24" stroke="#c65536" strokeWidth="9" strokeLinecap="round"/></g>
  <g className="product-paper"><rect x="283" y="118" width="65" height="82" rx="7" fill="#fffaf0" stroke="#d2b596" strokeWidth="2"/><rect x="297" y="131" width="37" height="24" rx="4" fill="#8ac4aa"/><path d="M297 166h37M297 179h25" stroke="#b0bfae" strokeWidth="4"/></g>
 </svg></div>;
}
