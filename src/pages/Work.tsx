import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ExternalLink, Quote, ArrowRight, Code2, Smartphone, Search, Zap } from "lucide-react";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const technologies = [
  { icon: Code2, name: "React + TypeScript" },
  { icon: Smartphone, name: "Responsive Design" },
  { icon: Search, name: "SEO Optimized" },
  { icon: Zap, name: "Performance First" },
];

const placeholderProjects = [
  { name: "Project Alpha", category: "E-Commerce", desc: "A full-featured online store with custom checkout and inventory management." },
  { name: "Project Beta", category: "Brand Identity", desc: "Complete brand system including logo, colors, typography, and marketing materials." },
];

export default function Work() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,hsl(200_100%_50%_/_0.12),transparent)]" />
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-4">Our Portfolio</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Work That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0072FF]">
                Speaks
              </span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Real projects, real results. Every engagement we take on is a commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Study — Nexstaffra */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_100%_50%,hsl(200_100%_50%_/_0.07),transparent)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeUp className="mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1.5">
              Featured Case Study
            </div>
          </FadeUp>

          {/* Project Card */}
          <FadeUp>
            <div className="bg-card border border-border rounded-3xl overflow-hidden mb-16 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/8">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Visual side */}
                <div className="bg-gradient-to-br from-[#0D1117] via-[#0f1d35] to-[#1a2744] min-h-[320px] flex items-center justify-center p-12 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,hsl(200_100%_50%_/_0.15),transparent)]" />
                  <div className="relative z-10 text-center">
                    <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0072FF] mb-3">NX</div>
                    <div className="text-white/50 text-sm tracking-widest uppercase">nexstaffra.in</div>
                  </div>
                </div>
                {/* Info side */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">Nexstaffra</h2>
                  <p className="text-primary text-sm font-medium mb-6">Staffing & Workforce Platform</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Nexstaffra needed a professional digital presence that conveyed trust, reliability, and modern capability to enterprise clients. We delivered a comprehensive website redesign focused on conversion, credibility, and performance.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {technologies.map(({ icon: Icon, name }) => (
                      <div key={name} className="flex items-center gap-1.5 bg-secondary text-secondary-foreground text-xs rounded-full px-3 py-1.5">
                        <Icon className="w-3.5 h-3.5 text-primary" />
                        {name}
                      </div>
                    ))}
                  </div>
                  <a href="https://nexstaffra.in" target="_blank" rel="noreferrer">
                    <Button
                      className="rounded-full bg-gradient-to-r from-[#00C6FF] to-[#0072FF] text-white border-0 hover:opacity-90 w-fit"
                      data-testid="link-nexstaffra-live"
                    >
                      Visit Live Site
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Case Study Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <FadeUp>
              <div className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/30 transition-all duration-300">
                <h3 className="text-lg font-bold mb-3 text-primary">The Challenge</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Nexstaffra was operating with an outdated digital presence that didn't reflect their capabilities or build confidence with enterprise clients. They needed a modern, professional website that could communicate their value proposition clearly, work flawlessly on all devices, and handle SEO for competitive staffing industry keywords.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/30 transition-all duration-300">
                <h3 className="text-lg font-bold mb-3 text-primary">Our Solution</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  We redesigned the entire platform from scratch — starting with a thorough UX audit, then building a custom React + TypeScript frontend optimized for performance. The result: a crisp, professional website with strong visual hierarchy, clear calls-to-action, and a seamless mobile experience that builds instant trust with visitors.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/30 transition-all duration-300">
                <h3 className="text-lg font-bold mb-3 text-primary">Technologies Used</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> React + TypeScript</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Tailwind CSS</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Framer Motion animations</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> SEO best practices & structured data</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Vercel deployment</li>
                </ul>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/30 transition-all duration-300">
                <h3 className="text-lg font-bold mb-3 text-primary">Results</h3>
                <div className="space-y-4">
                  {[
                    { metric: "Load Time", value: "< 1.5s", desc: "Lighthouse performance score 95+" },
                    { metric: "Mobile Score", value: "100%", desc: "Fully responsive across all devices" },
                    { metric: "Client Satisfaction", value: "Perfect", desc: "Delivered on time and on brief" },
                  ].map((r) => (
                    <div key={r.metric} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                      <div>
                        <span className="text-sm font-semibold">{r.metric}: </span>
                        <span className="text-sm text-primary font-bold">{r.value}</span>
                        <p className="text-xs text-muted-foreground mt-0.5">{r.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Testimonial */}
          <FadeUp>
            <div className="relative bg-gradient-to-br from-card to-card border border-primary/20 rounded-3xl p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_0%_0%,hsl(200_100%_50%_/_0.06),transparent)]" />
              <div className="relative z-10">
                <Quote className="w-10 h-10 text-primary/30 mb-6" />
                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 max-w-3xl">
                  "CodeNixor delivered a clean, professional, and modern website for Nexstaffra. The work was handled smoothly with strong attention to design, responsiveness, and business requirements."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00C6FF] to-[#0072FF] flex items-center justify-center text-white font-bold text-lg">
                    G
                  </div>
                  <div>
                    <div className="font-semibold">Gaurav Prajapati</div>
                    <div className="text-sm text-muted-foreground">Founder, Nexstaffra</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Placeholder Projects */}
      <section className="py-20 relative bg-secondary/20 dark:bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <FadeUp className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">More Projects — Coming Soon</h2>
            <p className="text-muted-foreground mt-2">We're always building. More case studies launching soon.</p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {placeholderProjects.map((project, i) => (
              <FadeUp key={project.name} delay={i * 0.1}>
                <div className="bg-card border border-dashed border-border rounded-2xl p-8 text-center opacity-60 hover:opacity-80 transition-opacity">
                  <div className="w-16 h-16 rounded-2xl bg-secondary mx-auto mb-4 flex items-center justify-center">
                    <Code2 className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div className="text-xs text-primary font-medium mb-2 uppercase tracking-widest">{project.category}</div>
                  <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
                  <p className="text-muted-foreground text-sm">{project.desc}</p>
                  <div className="mt-4 text-xs text-muted-foreground">Case study coming soon</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,hsl(200_100%_50%_/_0.09),transparent)]" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Want to be our next{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0072FF]">
                success story?
              </span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
              Let's build something you'll be proud to show the world.
            </p>
            <Link href="/pricing">
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-[#00C6FF] to-[#0072FF] text-white border-0 hover:opacity-90 px-10 py-6 text-base font-semibold shadow-lg shadow-primary/25"
                data-testid="button-start-project"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
