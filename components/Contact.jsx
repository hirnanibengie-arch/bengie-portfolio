'use client'
import {site} from '@/lib/data'
export default function Contact(){
const send=e=>{e.preventDefault();const f=e.target;location.href=`mailto:${site.email}?subject=${encodeURIComponent('Portfolio message from '+f.n.value)}&body=${encodeURIComponent(f.m.value+'\n\n'+f.e.value)}`}
const f='w-full rounded-lg border border-slate-300 bg-white p-3 dark:border-slate-600 dark:bg-navy-card'
return(<form onSubmit={send} className="grid max-w-xl gap-4">
<label className="grid gap-1 text-sm">Name<input name="n" required autoComplete="name" className={f}/></label>
<label className="grid gap-1 text-sm">Email<input name="e" type="email" required autoComplete="email" className={f}/></label>
<label className="grid gap-1 text-sm">Message<textarea name="m" rows={4} required className={f}/></label>
<button className="btn btn-gold w-fit" type="submit">Send message</button></form>)}
