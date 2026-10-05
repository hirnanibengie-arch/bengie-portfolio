import './globals.css'
import {Newsreader,Instrument_Sans} from 'next/font/google'
import {site} from '@/lib/data'
const serif=Newsreader({subsets:['latin'],variable:'--font-serif',weight:['500','600']})
const sans=Instrument_Sans({subsets:['latin'],variable:'--font-sans'})
export const metadata={metadataBase:new URL(site.url),title:`${site.name} | ${site.title}`,description:site.desc,
alternates:{canonical:'/'},openGraph:{title:site.name,description:site.desc,url:site.url,type:'website',locale:'en_PH'},
twitter:{card:'summary_large_image'}}
export default function RootLayout({children}){
const ld={'@context':'https://schema.org','@type':'Person',name:site.name,url:site.url,sameAs:[site.linkedin],jobTitle:'Accountancy Graduate',alumniOf:'ICCT Colleges Foundation Inc.',address:{'@type':'PostalAddress',addressCountry:'PH'}}
return(<html lang="en" suppressHydrationWarning className={`${serif.variable} ${sans.variable}`}><body>
<script dangerouslySetInnerHTML={{__html:"try{var t=localStorage.getItem('t');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dark')}catch(e){}"}}/>
<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}}/>
{children}</body></html>)}
