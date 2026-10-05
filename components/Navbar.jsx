'use client'
import {useEffect,useState} from 'react'
import {site} from '@/lib/data'
const links=[['About','about'],['Education','education'],['Skills','skills'],['Projects','projects'],['Experience','experience'],['FAQ','faq'],['Contact','contact']]
export default function Navbar(){
const [dark,setDark]=useState(false)
useEffect(()=>setDark(document.documentElement.classList.contains('dark')),[])
const toggle=()=>{const d=!dark;setDark(d);document.documentElement.classList.toggle('dark',d);try{localStorage.setItem('t',d?'dark':'light')}catch(e){}}
return(<nav aria-label="Main" className="sticky top-0 z-30 flex items-center gap-5 border-b border-slate-200 bg-slate-50/85 px-5 py-3 backdrop-blur dark:border-slate-700 dark:bg-navy-deep/85">
<a href="#home" className="mr-auto font-serif text-xl">{site.name}</a>
{links.map(([l,id])=><a key={id} href={`#${id}`} className="hidden text-sm text-slate-500 hover:text-gold lg:block">{l}</a>)}
<button onClick={toggle} aria-label="Toggle dark mode" className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm dark:border-slate-600">{dark?'Light':'Dark'}</button></nav>)}
