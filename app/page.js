import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import BackToTop from '@/components/BackToTop'
import {Section,Cards} from '@/components/Ui'
import {site,expertise,skills,projects,certs,achievements,timeline,testimonials,faqs} from '@/lib/data'
export default function Home(){return(<>
<Navbar/><main><Hero/>
<Section id="about" title="About me" alt><div className="max-w-2xl space-y-4 text-lg"><p>I studied Accountancy while working full time in retail sales, so I learned to balance deadlines, customers and numbers at once. At ABJ Auto Supply I handle sales, customer service and inventory, and I encode invoice details for VAT filing.</p><p>My goal is to pass the CPA board exam and join an audit, tax or advisory team where I can grow into a trusted professional.</p></div></Section>
<Section id="education" title="Education"><div className="card max-w-2xl"><h3 className="font-serif text-xl">BS Accountancy</h3><p className="text-sm text-slate-500">ICCT Colleges Foundation Inc., April 2022 to March 2026</p><p className="mt-3 text-sm">Member, Junior Philippine Institute of Accountants (2022 to 2026) and National Federation of JPIA (2023 to 2024).</p></div></Section>
<Section id="expertise" title="Accounting expertise" alt><Cards items={expertise}/></Section>
<Section id="skills" title="Skills"><div className="grid gap-5 sm:grid-cols-2">{Object.entries(skills).map(([k,v])=>(<div key={k} className="card"><h3 className="font-serif text-xl">{k}</h3><ul className="mt-3 flex flex-wrap gap-2">{v.map(s=><li key={s} className="rounded-full bg-gold/15 px-3 py-1 text-sm">{s}</li>)}</ul></div>))}</div></Section>
<Section id="projects" title="Projects and case studies" alt><Projects items={projects}/></Section>
<Section id="certs" title="Certifications and seminars"><Cards items={certs}/></Section>
<Section id="experience" title="Experience and professional timeline" alt><ol className="max-w-3xl space-y-7 border-l-2 border-gold pl-6">{[...timeline].map(t=>(<li key={t.title}>{t.ph&&<span className="ph">Placeholder</span>}<h3 className="font-serif text-xl">{t.title}</h3><p className="text-sm text-slate-500">{t.date}</p><p className="mt-1">{t.text}</p></li>))}</ol></Section>
<Section id="achievements" title="Achievements"><Cards items={achievements}/></Section>
<Section id="resume" title="Resume" alt><div className="card max-w-2xl"><p>BS Accountancy graduate (2026) preparing for the CPA licensure exam, with 8 years of customer-facing sales, inventory and VAT invoice experience. Skilled in Excel, financial reporting and reconciliation.</p><a className="btn btn-gold mt-4" href="/resume.pdf" download>Download CV (PDF)</a></div></Section>
<Section id="testimonials" title="Testimonials"><Cards items={testimonials}/></Section>
<Section id="faq" title="Frequently asked questions" alt><div className="max-w-2xl space-y-3">{faqs.map(([q,a])=>(<details key={q} className="card"><summary className="cursor-pointer font-semibold">{q}</summary><p className="mt-2 text-slate-600 dark:text-slate-300">{a}</p></details>))}</div></Section>
<Section id="contact" title="Contact"><p className="mb-6">Open to accounting, audit and admin roles. Location: Philippines.</p><Contact/></Section></main>
<footer className="bg-navy px-5 py-10 text-sm text-slate-300"><div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-6"><div><b className="font-serif text-xl text-white">{site.name}</b><p>Accountancy graduate and CPA candidate. Philippines.</p></div><div className="space-x-4"><a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><a href={`mailto:${site.email}`}>Email</a><a href={site.facebook}>Facebook</a><a href={site.github}>GitHub</a></div><p className="w-full">&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p></div></footer>
<BackToTop/></>)}
