export default function Projects({items}){return(<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{items.map(p=>(
<article key={p.title} className="card"><div className="mb-4 grid h-28 place-items-center rounded-lg border border-dashed border-slate-300 text-sm text-slate-400 dark:border-slate-600">Project image</div>
<span className="ph">Placeholder</span><h3 className="font-serif text-xl">{p.title}</h3><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.text}</p>
<p className="mt-3 text-sm"><b>Skills:</b> {p.skills}<br/><b>Tools:</b> {p.tools}</p>
<a href="#" className="btn btn-line mt-4 !px-4 !py-2 text-sm">Download (add file)</a></article>))}</div>)}
