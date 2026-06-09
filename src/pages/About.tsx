import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
import { Target, Eye, Heart, Zap, Shield, Users, ExternalLink } from "lucide-react";

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

const coreValues = [
  { icon: Zap, title: "Innovation", desc: "We stay ahead of the curve — adopting the best tools and practices before they become standard." },
  { icon: Shield, title: "Quality", desc: "No shortcuts. Every line of code, every design decision is crafted with care and intention." },
  { icon: Target, title: "Speed", desc: "Fast doesn't mean rushed. We move quickly and deliberately, respecting your time and deadlines." },
  { icon: Heart, title: "Reliability", desc: "We say what we'll do, and we do what we say. Every time." },
  { icon: Users, title: "Partnership", desc: "We're not just a vendor — we're a long-term partner invested in your success." },
  { icon: Eye, title: "Clarity", desc: "Clear communication, transparent pricing, and honest advice — always." },
];

export default function About() {
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
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-4">About Us</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              The Studio Behind{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0072FF]">
                The Work
              </span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              We're a small team that builds big digital experiences. Precision engineering, creative vision, and a genuine investment in your success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_0%_50%,hsl(200_100%_50%_/_0.07),transparent)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              {/* Founder visual */}
              <div className="relative">
                <div className="aspect-square max-w-sm mx-auto rounded-3xl bg-gradient-to-br from-[#0D1117] via-[#0f1d35] to-[#1a2744] flex items-center justify-center relative overflow-hidden border border-primary/20">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_30%,hsl(200_100%_50%_/_0.2),transparent)]" />
                  <div className="relative z-10 text-center px-8">
                    <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0072FF] mb-2">CA</div>
                    <div className="text-white font-bold text-xl">Chaush Ayaan</div>
                    <div className="text-white/50 text-sm mt-1">Founder & CEO</div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between opacity-30">
                    <div className="w-12 h-1 bg-gradient-to-r from-[#00C6FF] to-transparent rounded-full" />
                    <div className="w-12 h-1 bg-gradient-to-l from-[#00C6FF] to-transparent rounded-full" />
                  </div>
                </div>
                {/* Floating stat */}
                <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-2xl px-5 py-3 shadow-lg">
                  <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0072FF]">100%</div>
                  <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-4">The Founder</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Chaush Ayaan</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I started CodeNixor with a simple belief: that every business, no matter its size, deserves a world-class digital presence. Too many great companies were being held back by mediocre websites and a lack of technical expertise.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                My passion for technology and web development drove me to build a studio that bridges the gap between great design and powerful engineering. Every project I take on is treated like it's my own — because in a way, it is. Your success is CodeNixor's success.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From building MVPs for early-stage startups to redesigning enterprise platforms, I've learned that what makes the difference is never just the code — it's the care, clarity, and commitment you bring to the work.
              </p>
              <a
                href="https://www.linkedin.com/in/chaush-ayaan-380931320"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  className="rounded-full bg-[#0077B5] hover:bg-[#005885] text-white border-0 gap-2"
                  data-testid="link-founder-linkedin"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  Connect on LinkedIn
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </Button>
              </a>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative overflow-hidden bg-secondary/20 dark:bg-card/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,hsl(200_100%_50%_/_0.07),transparent)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <FadeUp>
              <div className="bg-card border border-border rounded-3xl p-8 md:p-10 h-full hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_0%_0%,hsl(200_100%_50%_/_0.05),transparent)] rounded-3xl" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00C6FF]/20 to-[#0072FF]/20 flex items-center justify-center mb-5">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    "Helping businesses build powerful digital experiences through design, development, automation, and innovation."
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="bg-card border border-border rounded-3xl p-8 md:p-10 h-full hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_100%_0%,hsl(200_100%_50%_/_0.05),transparent)] rounded-3xl" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00C6FF]/20 to-[#0072FF]/20 flex items-center justify-center mb-5">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To be the most trusted digital partner for ambitious businesses — where every engagement raises the bar for what great digital work looks like.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Core Values */}
          <FadeUp className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Core Values</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              These principles guide every decision we make — from how we write code to how we communicate.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, i) => (
              <FadeUp key={value.title} delay={i * 0.07}>
                <div className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#00C6FF]/15 to-[#0072FF]/15 flex items-center justify-center mb-4 group-hover:from-[#00C6FF]/25 group-hover:to-[#0072FF]/25 transition-all duration-300">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Trust Us */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_100%_50%,hsl(200_100%_50%_/_0.07),transparent)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeUp className="text-center mb-12">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">Trust</span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
              Why Clients Trust{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0072FF]">
                CodeNixor
              </span>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "We treat your business like our own",
                desc: "Every project gets the same level of care and strategic thinking we'd apply to our own company. No filler work, no padding.",
              },
              {
                title: "Direct communication, always",
                desc: "You work directly with the founder — not an account manager. Decisions are made fast and communication is always honest.",
              },
              {
                title: "We ship — on time, every time",
                desc: "Deadlines are commitments. We plan carefully, communicate early if anything shifts, and deliver on what we promise.",
              },
              {
                title: "We're invested in your long-term success",
                desc: "Our goal isn't just to build a website — it's to build a digital asset that generates real value for your business for years to come.",
              },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.08}>
                <div className="flex gap-4 p-6 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 relative overflow-hidden bg-secondary/20 dark:bg-card/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,hsl(200_100%_50%_/_0.08),transparent)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-4">Get in Touch</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Let's work{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0072FF]">
                  together
                </span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you have a project in mind, a question, or just want to explore what's possible — we'd love to hear from you.
              </p>
              <a href="mailto:contact@codenixor.com" className="text-primary font-medium hover:underline block mb-2">
                contact@codenixor.com
              </a>
              <a
                href="https://www.linkedin.com/in/chaush-ayaan-380931320"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mt-2"
              >
                <LinkedInIcon className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            </FadeUp>
            <FadeUp delay={0.15}>
              <ContactForm />
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
}
