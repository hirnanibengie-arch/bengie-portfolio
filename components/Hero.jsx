'use client'
import {motion} from 'framer-motion'
import {site} from '@/lib/data'
const rows=[['Cash','184,500'],['Inventory','326,000'],['Accounts payable','148,200'],["Owner's equity",'362,300']]
export default function Hero(){return(
<section id="home" className="mx-auto grid min-h-[calc(100vh-60px)] max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.1fr_.9fr]">
<motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.8}}>
<p className="mb-4 font-semibold text-gold">{site.title}</p>
<h1 className="font-serif text-5xl leading-tight md:text-6xl">Accurate books. Clear reports. Ready to work.</h1>
<p className="mt-5 max-w-xl text-lg text-slate-600 dark:text-slate-300">BS Accountancy graduate from ICCT (Class of 2026), preparing for the CPA licensure exam. Eight years of sales and inventory work taught me how a business really moves money.</p>
<div className="mt-7 flex flex-wrap gap-3"><a className="btn btn-gold" href="/resume.pdf" download>Download resume</a><a className="btn btn-line" href="#contact">Contact me</a><a className="btn btn-line" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><a className="btn btn-line" href={`mailto:${site.email}`}>Email</a></div></motion.div>
<motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.2}} className="rounded-2xl bg-navy p-7 text-slate-100 shadow-2xl">
<div className="mb-4 flex items-center justify-between font-serif text-lg">Trial balance<div className="grid h-16 w-16 place-items-center rounded-full border-2 border-dashed border-gold-light text-center text-[10px] text-gold-light">Add<br/>photo</div></div>
{rows.map(([a,b])=><div key={a} className="flex justify-between border-b border-white/10 py-2 text-sm tabular-nums"><span>{a}</span><span>{b}</span></div>)}
<div className="mt-2 flex justify-between border-t-2 border-gold-light pt-2 font-semibold text-gold-light tabular-nums"><span>Debits = Credits</span><span>510,500</span></div>
<p className="mt-3 text-xs opacity-70">Sample figures for illustration only.</p></motion.div></section>)}
