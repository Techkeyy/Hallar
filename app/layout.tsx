import type {Metadata} from 'next';
import './globals.css';
import './immersive.css';
export const metadata:Metadata={title:'Hallar | Proof before pitch',description:'Find people you can actually help. A focused scout desk with useful evidence before engagement.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>;}
