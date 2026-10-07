'use client';
import {useEffect,useRef,type ReactNode} from 'react';
export function Reveal({children,className='',delay=0}:{children:ReactNode;className?:string;delay?:number}){
 const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{const el=ref.current;if(!el)return;const reduced=matchMedia('(prefers-reduced-motion: reduce)');if(reduced.matches)return;
 const rect=el.getBoundingClientRect();if(rect.top<innerHeight*.93){el.dataset.revealed='true';return;}
 el.dataset.enhanced='true';const observer=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){el.dataset.revealed='true';observer.unobserve(el);}},{threshold:.08,rootMargin:'0px 0px -35px 0px'});observer.observe(el);const onMotion=()=>{if(reduced.matches){el.dataset.revealed='true';observer.disconnect();}};reduced.addEventListener('change',onMotion);return()=>{observer.disconnect();reduced.removeEventListener('change',onMotion);};
 },[]);
 return <div ref={ref} className={'layer-reveal '+className} style={{'--reveal-delay':delay+'ms'} as React.CSSProperties}>{children}</div>;
}
