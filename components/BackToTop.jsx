'use client'
import {useEffect,useState} from 'react'
export default function BackToTop(){const [on,set]=useState(false)
useEffect(()=>{const h=()=>set(scrollY>600);addEventListener('scroll',h);return()=>removeEventListener('scroll',h)},[])
return on?<button aria-label="Back to top" onClick={()=>scrollTo({top:0,behavior:'smooth'})} className="btn btn-gold fixed bottom-5 right-5 z-30 !px-4 !py-2">Top</button>:null}
