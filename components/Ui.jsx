'use client'
import {motion} from 'framer-motion'
export const Reveal=({children,className=''})=>(<motion.div className={className} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:.6}}>{children}</motion.div>)
export const Section=({id,title,alt,children})=>(<section id={id} className={alt?'bg-white dark:bg-navy-card/40':''}><div className="mx-auto max-w-6xl px-5 py-20"><Reveal><h2 className="mb-8 font-serif text-3xl md:text-4xl">{title}</h2>{children}</Reveal></div></section>)
export const Cards=({items})=>(<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{items.map(i=>(<div key={i.title} className="card">{i.ph&&<span className="ph">Placeholder</span>}<h3 className="font-serif text-xl">{i.title}</h3><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{i.text}</p></div>))}</div>)
