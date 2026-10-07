export default function Projects({items}){return(<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{items.map(p=>(
<article key={p.title} className="card"><div className="mb-4 h-40 overflow-hidden rounded-lg border border-slate-300 dark:border-slate-600">
{p.img?<img src={p.img} alt={p.title} className="h-full w-full object-cover object-top"/>:<div className="grid h-full place-items-center text-sm text-slate-400">Project image</div>}</div>
{p.ph&&<span className="ph">Placeholder</span>}<h3 className="font-serif text-xl">{p.title}</h3><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.text}</p>
<p className="mt-3 text-sm"><b>Skills:</b> {p.skills}<br/><b>Tools:</b> {p.tools}</p>
{p.file
?<a href={p.file} download className="btn btn-gold mt-4 !px-4 !py-2 text-sm">Download</a>
:<a href="#" className="btn btn-line mt-4 !px-4 !py-2 text-sm">Download (add file)</a>}</article>))}</div>)}