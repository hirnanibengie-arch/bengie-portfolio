// EDIT HERE. Items with ph:true show a "Placeholder" tag.
export const site={name:'Bengie Hirnani',url:'https://bengiehirnani.vercel.app',linkedin:'https://www.linkedin.com/in/bengie-hirnani-140776427/',
email:'hirnanibengie@gmail.com', // TODO: replace
facebook:'',github:'#',
title:'Accountancy Graduate | CPA Board Exam Candidate',
desc:'BS Accountancy graduate (ICCT, 2026) preparing for the CPA licensure exam. Financial reporting, auditing, taxation and Excel.'}
export const expertise=[
['Financial Accounting','Preparing journal entries, ledgers and financial statements under PFRS.'],
['Intermediate Accounting','Asset, liability and equity measurement and reporting.'],
['Cost Accounting','Job and process costing, variance and cost-volume-profit analysis.'],
['Auditing','Audit procedures, internal control and assurance concepts.'],
['Taxation','Income tax and VAT computation; hands-on VAT invoice encoding.'],
['Financial Analysis','Ratio, trend and common-size analysis of company statements.'],
['Excel Projects','Reconciliation, budgeting and dashboard templates.'],
['Accounting Case Studies','Applied cases from coursework (add your own).']].map(([title,text])=>({title,text}))
export const skills={
'Accounting':['Financial reporting','Journal entries','Bank reconciliation','Financial statements','Account analysis','VAT invoice encoding'],
'Technical':['Microsoft Excel','Word','PowerPoint','Google Workspace','Accounting software (add yours)'],
'Analytical':['Data analysis','Financial analysis','Research','Problem solving','Data entry accuracy'],
'Interpersonal':['Communication','Leadership','Teamwork','Time management','Adaptability']}
export const projects=[
['Financial Statement Analysis','Horizontal and vertical analysis of a listed Philippine company over three years.','Ratio analysis, reporting','Excel'],
['Ratio Analysis Dashboard','Liquidity, profitability and solvency ratios with charts.','Financial analysis','Excel, Google Sheets'],
['Excel Budgeting System','Monthly budget vs. actual tracker with variance flags.','Budgeting, variance analysis','Excel'],
['Cost Accounting Report','Product costing and break-even analysis for a small business.','Cost accounting','Excel, Word'],
['Internal Control Evaluation','Mapped a sales cycle, found control gaps and proposed fixes.','Auditing, risk assessment','Word, flowcharts'],
['Tax Computation Project','Income tax and VAT computation with supporting schedules.','Taxation','Excel']].map(([title,text,skills,tools])=>({title,text,skills,tools,ph:true}))
export const certs=[
{title:'Mastering the CPA Licensure Exam',text:'Seminar, March 23, 2024'},
{title:'Auditing and Assurance',text:'Seminar, January 26, 2026'},
{title:'Special Topic on Government Accounting',text:'Seminar, October 13, 2025'},
{title:'Excel certification',text:'Add certificate, issuer and date.',ph:true}]
export const achievements=[
{title:'JPIA member, 4 years',text:'Junior Philippine Institute of Accountants (2022 to 2026) and National Federation of JPIA (2023 to 2024).'},
{title:"Dean's list",text:'Add term and year if applicable.',ph:true},
{title:'Competition or leadership recognition',text:'Add event, role and date.',ph:true}]
export const timeline=[
['Nov 2015 to Oct 2016','Kitchen Staff, Golden Reef Food Services','Food prep, buffet service, inventory and stocking.'],
['Apr 2017 to Jan 2018','Pizza Maker, Sbarro (Market Market)','Food preparation and customer service.'],
['2018 to present','Counter Salesman, ABJ Auto Supply','Sales, customer service and inventory management; encodes invoice details for VAT filing.'],
['Apr 2022 to Mar 2026','BS Accountancy, ICCT Colleges Foundation Inc.','Member of JPIA and the National Federation of JPIA.'],
['Next','CPA licensure exam','Preparing to sit the board exam.'],
['Add yours','Internship or volunteer role','Accounting & Admin Intern, TRESP Multipurpose Cooperative. Completed 600 hours of on-the-job training supporting the Accounting and Admin Department. Assisted with bookkeeping, financial documentation, accounting record organization, receipt and invoice verification, VAT-related documentation, and reconciliation of accounting records.',
'Contributed to accurate financial recordkeeping, improved document organization, and supported compliance reporting through careful verification and reconciliation activities.',true]].map(([date,title,text,ph])=>({date,title,text,ph}))
export const testimonials=[
{title:'Dario M. Bautista, MBA, CPA',text:'"Bengie consistently demonstrated diligence, professionalism, and a strong commitment to academic excellence. His analytical skills, attention to detail, and ability to apply accounting concepts effectively make him a promising future accounting professional."',ph:true},
{title:'Hans Roes Gale',text:'"Working with Bengie was always productive and organized. He showed excellent leadership, communication, and teamwork throughout our projects, ensuring that deadlines were met and quality standards were maintained."',ph:true}]
export const faqs=[
['Are you available for internships or full-time roles?','Yes. I am open to accounting staff, audit associate, tax and admin roles.'],
['When will you take the CPA board exam?','I am planning to take the CPA Licensure Examination in May 2027 and am currently preparing through continuous review, practice, and professional development.'],
['Do you have work experience?','Yes, 8 years in sales and inventory, including VAT invoice encoding. Accounting internship:'],
['Which tools do you use?','Excel, Word, PowerPoint and Google Workspace.'],
['How can I reach you?','You may contact me at +63 976 058 9048, connect with me on LinkedIn at https://www.linkedin.com/in/bengie-hirnani-140776427/, or view my professional profile on JobStreet at ph.jobstreet.com/profiles/bengie-hirnani-xl90l15kgr. You may also use the contact form below.']]
