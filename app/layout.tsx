import type {Metadata} from 'next';
import './globals.css';
import './immersive.css';
export const metadata:Metadata={title:'Hallar | Proof before pitch',description:'Hallar finds people publicly experiencing problems your product genuinely solves, verifies the fit with real evidence, and prepares useful proof before you reach out.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>;}
