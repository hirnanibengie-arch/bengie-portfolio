# Bengie Hirnani Portfolio (Next.js + Tailwind + Framer Motion)

## Run locally
1. Install Node.js 18+ (nodejs.org).
2. In this folder: `npm install` then `npm run dev`, open http://localhost:3000.

## Structure
- `lib/data.js`: ALL content (edit text, links, projects here). `ph:true` shows a Placeholder tag; delete it when real.
- `components/`: Navbar, Hero, Projects, Contact, BackToTop, Ui (Section, Cards, Reveal)
- `app/`: layout (SEO, fonts, schema), page (section order), sitemap, robots
- `public/`: put `resume.pdf`, `og.png` and project images here

## Before publishing
1. Replace `email` in `lib/data.js`. Add your photo as `public/photo.jpg` and swap it into `Hero.jsx`.
2. Add `public/resume.pdf`.
3. Replace placeholder projects, certificates, testimonials and the Excel/Dean's list items.

## Deploy: Vercel (recommended)
1. Create a free GitHub account, make a new repository, upload this folder (or `git init`, `git add .`, `git commit`, `git push`).
2. Go to vercel.com, sign in with GitHub, click Add New > Project, import the repo, click Deploy.
3. In Project Settings > Domains, add `bengiehirnani.vercel.app` if free. Otherwise use the link Vercel gives you and update `site.url` in `lib/data.js`.
Every push to GitHub redeploys automatically.

## Deploy: Netlify
1. Push to GitHub. At netlify.com choose Add new site > Import an existing project > pick the repo.
2. Build command `npm run build`, leave publish directory empty (Netlify detects Next.js). Deploy. You get `yourname.netlify.app`; rename it in Site configuration > Change site name.

## Deploy: GitHub Pages (static)
1. In `next.config.js` use: `module.exports={output:'export',images:{unoptimized:true},basePath:'/REPO_NAME'}`
2. Delete `app/sitemap.js` and `app/robots.js` or add `export const dynamic='force-static'` to each.
3. `npm run build` creates the `out/` folder. Push the repo, then in Settings > Pages use GitHub Actions (the "Next.js" starter workflow). Your link: `https://USERNAME.github.io/REPO_NAME`.

## Custom domain (e.g. www.bengiehirnani.com)
1. Buy the domain (Namecheap, Porkbun, GoDaddy; about $10 to $15 per year).
2. Vercel: Settings > Domains > Add `www.bengiehirnani.com`. Copy the DNS records Vercel shows (usually CNAME `www` to `cname.vercel-dns.com`) into your registrar's DNS page. Wait up to 24 hours. HTTPS is automatic.
3. Update `site.url` in `lib/data.js`.

## Contact form
It opens the visitor's email app (no server needed). For a real inbox form, create a free Formspree form and post to its URL.

## SEO and next steps
Submit the site to Google Search Console, add `public/og.png` (1200x630), put the link on LinkedIn (Contact info and Featured), resume header and email signature. Later: real project PDFs, a short certificate gallery, Vercel Analytics.
