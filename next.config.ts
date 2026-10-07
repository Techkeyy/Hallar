import type {NextConfig} from 'next';
const config:NextConfig={poweredByHeader:false,turbopack:{root:process.cwd()},outputFileTracingRoot:process.cwd(),serverExternalPackages:['playwright-core','ipaddr.js'],async headers(){return [{source:'/:path*',headers:[{key:'X-Content-Type-Options',value:'nosniff'},{key:'X-Frame-Options',value:'DENY'},{key:'Referrer-Policy',value:'no-referrer'}]}];}};
export default config;
