import Image from "next/image";
import { faqs, projects, services } from "@/data/site-content";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Bhawan Sewa",
  alternateName: "Ramsagar Builders",
  url: "https://bhawansewa.com",
  description: "A construction and civil engineering company serving homes, businesses, roads, public places, and infrastructure projects across Nepal.",
  areaServed: "Nepal",
  telephone: "+977-9852800195",
  email: "Consult.bhawansewa@gmail.com",
  address: { "@type": "PostalAddress", streetAddress: "Maharajgunj", addressLocality: "Kathmandu Metropolitan", addressRegion: "Bagmati Province", addressCountry: "NP" },
  sameAs: ["https://www.facebook.com/officialbhawansewa", "https://www.tiktok.com/@bhawansewa"],
};

function Header() {
  return <header className="site-header"><a className="brand" href="#top" aria-label="Bhawan Sewa home"><Image className="brand-logo" src="/images/logo.jpg" alt="Bhawan Sewa logo" width={64} height={64} priority /><span className="sr-only">Bhawan Sewa</span></a><nav className="desktop-nav" aria-label="Main navigation"><a href="#work">Our work</a><a href="#process">How we work</a><a href="#about">About us</a><a href="#faqs">FAQs</a></nav><a className="button button-dark header-cta" href="#contact">Start a conversation <span>↗</span></a></header>;
}

function SectionLabel({ number, children, light = false }: { number: string; children: React.ReactNode; light?: boolean }) {
  return <div className={`section-label${light ? " light-label" : ""}`}><span>{number}</span><span className="label-line" />{children}</div>;
}

function Hero() {
  return <section className="hero" id="top"><div className="hero-image" role="img" aria-label="A sunlit contemporary home interior" /><div className="hero-overlay" /><div className="hero-content container"><p className="eyebrow light">Across Nepal · Since 2011</p><h1>Building places<br /><i>worth coming home to.</i></h1><p className="hero-copy">Construction and civil engineering for homes, businesses, roads, public places, and the life that happens inside them.</p><div className="hero-actions"><a className="button button-accent" href="#work">Explore our work <span>↓</span></a><a className="text-link light" href="#process">See how we build <span>↗</span></a></div></div><div className="hero-note"><span className="note-line" />Built with care<br />across Nepal</div></section>;
}

function Intro() {
  return <section className="intro container" id="about"><SectionLabel number="01">The Bhawan Sewa way</SectionLabel><div className="intro-copy"><h2>Good buildings begin<br />with <i>good listening.</i></h2><div><p>We believe construction should feel clear, collaborative, and deeply human. Our job is to turn your vision into a space that feels unmistakably yours, with the craft and discipline to keep it standing beautifully.</p><a className="text-link" href="#contact">Meet the team <span>↗</span></a></div></div></section>;
}

function Services() {
  return <section className="services-band" id="process"><div className="container"><SectionLabel number="02" light>What we do</SectionLabel><div className="services-grid">{services.map((service) => <article className="service" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><span className="service-arrow">↗</span></article>)}</div></div></section>;
}

function Work() {
  return <section className="work container" id="work"><div className="work-heading"><SectionLabel number="03">Selected work</SectionLabel><h2>Spaces with a sense<br />of <i>belonging.</i></h2><a className="text-link" href="#contact">View all projects <span>↗</span></a></div><div className="project-grid">{projects.map((project, index) => <article className={`project project-${index + 1}`} key={project.name}><div className="project-image" style={{ backgroundImage: `url(${project.image})` }} /><div className="project-details"><div><h3>{project.name}</h3><p>{project.location}</p></div><span>{project.type}</span></div></article>)}</div></section>;
}

function Faqs() {
  return <section className="faq-section container" id="faqs"><div className="faq-heading"><SectionLabel number="04">Questions, answered</SectionLabel><h2>A better build<br />starts with <i>clarity.</i></h2></div><div className="faq-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div></section>;
}

function Contact() {
  return <section className="contact-band" id="contact"><div className="container contact-inner"><div><p className="eyebrow">Have a project in mind?</p><h2>Let&apos;s make<br /><i>space for it.</i></h2></div><div className="contact-action"><p>Tell us a little about what you&apos;re building, where you are in the process, and what matters most to you.</p><a className="button button-accent" href="mailto:Consult.bhawansewa@gmail.com">Email Bhawan Sewa <span>↗</span></a><p className="contact-meta">Call <a href="tel:+9779852800195">+977 985-2800195</a><br />Maharajgunj, Kathmandu Metropolitan<br />Bagmati Province, Nepal</p></div></div></section>;
}

function Footer() {
  return <footer className="site-footer"><div className="container footer-top"><a className="brand footer-brand" href="#top"><Image className="brand-logo" src="/images/logo.jpg" alt="Bhawan Sewa logo" width={82} height={82} /><span className="sr-only">Bhawan Sewa</span></a><div><p className="footer-label">Find us</p><p>Maharajgunj, Kathmandu Metropolitan<br />Bagmati Province, Nepal</p><div className="social-links" aria-label="Social media links"><a className="social-link" href="https://www.facebook.com/officialbhawansewa" target="_blank" rel="noreferrer" aria-label="Bhawan Sewa on Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.61.39-1 1-1Z" /></svg></a><a className="social-link" href="https://www.tiktok.com/@bhawansewa" target="_blank" rel="noreferrer" aria-label="Bhawan Sewa on TikTok"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 3c.31 2.29 1.59 3.66 3.5 4.02v3.07a7.37 7.37 0 0 1-3.49-1.01v6.3a5.62 5.62 0 1 1-4.86-5.57v3.18a2.48 2.48 0 1 0 1.74 2.39V3h3.11Z" /></svg></a></div></div><div><p className="footer-label">Say hello</p><p><a href="mailto:Consult.bhawansewa@gmail.com">Consult.bhawansewa@gmail.com</a><br /><a href="tel:+9779852800195">+977 985-2800195</a><br /><span className="footer-alias">Also known as Ramsagar Builders</span></p></div></div><div className="container footer-bottom"><span>© 2026 Bhawan Sewa</span><span>Built for better living.</span></div></footer>;
}

export default function HomePage() {
  return <main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><Header /><Hero /><Intro /><Services /><Work /><section className="quote-band"><div className="container quote-inner"><span className="quote-mark">“</span><blockquote>We don&apos;t just build structures.<br /><i>We build the backdrop to a life.</i></blockquote><p>— Bhawan Sewa, Kathmandu</p></div></section><Faqs /><Contact /><Footer /></main>;
}
