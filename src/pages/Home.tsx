import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import {
  Code2, Zap, Target, Search, Smartphone, LifeBuoy,
  ArrowRight, Globe, ShoppingCart, Layers, Bot, Palette, Rocket,
  ChevronRight, ExternalLink
} from "lucide-react";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const whyFeatures = [
  { icon: Code2, title: "Modern Development", desc: "Built with cutting-edge tech — React, Next.js, TypeScript, and modern APIs." },
  { icon: Zap, title: "Fast Delivery", desc: "Rapid turnaround without sacrificing quality. Your deadline is our priority." },
  { icon: Target, title: "Business-Focused Design", desc: "Every design decision is tied to your conversion and growth goals." },
  { icon: Search, title: "SEO Ready", desc: "Optimized for search engines from the ground up — structure, speed, metadata." },
  { icon: Smartphone, title: "Mobile Optimized", desc: "Flawless experience across every device and screen size." },
  { icon: LifeBuoy, title: "Long-Term Support", desc: "We don't disappear after launch. Ongoing maintenance and growth support." },
];

const services = [
  { icon: Globe, title: "Website Development", desc: "High-performance websites built for speed, SEO, and conversions." },
  { icon: Layers, title: "UI/UX Design", desc: "Intuitive, beautiful interfaces that users love and businesses trust." },
  { icon: ShoppingCart, title: "E-Commerce Development", desc: "Scalable online stores that drive sales and delight customers." },
  { icon: Bot, title: "Business Automation", desc: "Smart workflows that save time, reduce errors, and scale your operations." },
  { icon: Palette, title: "Brand Identity", desc: "Logos, systems, and visual identities that make brands unforgettable." },
  { icon: Rocket, title: "Startup MVP Development", desc: "From idea to launch-ready product in weeks, not months." },
];

const pricingPreviews = [
  { name: "Basic", price: "$249", desc: "Perfect for small businesses getting started online.", popular: false },
  { name: "Standard", price: "$549", desc: "Comprehensive solution for growing businesses.", popular: true },
  { name: "Premium", price: "$999", desc: "Full-featured premium website with advanced capabilities.", popular: false },
];

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,hsl(200_100%_50%_/_0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_20%,hsl(220_100%_60%_/_0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_80%,hsl(200_100%_50%_/_0.06),transparent)]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Mouse-tracking glow */}
        <div
          className="absolute w-96 h-96 rounded-full pointer-events-none blur-[120px] bg-primary/10 transition-transform duration-700 ease-out"
          style={{ left: mousePos.x - 192, top: mousePos.y - 192 }}
        />

        <div className="relative z-10 container mx-auto px-4 md:px-6 pt-32 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-medium text-primary border border-primary/30 rounded-full px-4 py-1.5 mb-8 bg-primary/5 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Digital Agency — Code. Create. Innovate.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6 max-w-5xl mx-auto"
          >
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0072FF]">
              Digital Experiences
            </span>
            <br />That Grow Businesses
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            CodeNixor helps startups, businesses, and brands create high-performing websites,
            powerful digital identities, and scalable growth systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/pricing">
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-[#00C6FF] to-[#0072FF] text-white border-0 hover:opacity-90 px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25"
                data-testid="button-start-project"
              >
                Start a Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/work">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-base font-semibold border-border/60 hover:border-primary/50 hover:bg-primary/5"
                data-testid="button-view-work"
              >
                View Our Work
                <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          {/* Floating stat cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 flex flex-wrap justify-center gap-4"
          >
            {[
              { label: "Projects Delivered", value: "15+" },
              { label: "Client Satisfaction", value: "100%" },
              { label: "Avg Delivery Time", value: "2 Weeks" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-card/60 backdrop-blur-md border border-border/60 rounded-2xl px-8 py-4 text-center"
              >
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0072FF]">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* WHY CODENIXOR */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,hsl(200_100%_50%_/_0.07),transparent)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeUp className="text-center mb-16">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0072FF]">Results</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              We combine technical excellence with strategic thinking to deliver digital products that actually grow your business.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyFeatures.map((feature, i) => (
              <FadeUp key={feature.title} delay={i * 0.07}>
                <div className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-300 rounded-2xl" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00C6FF]/20 to-[#0072FF]/20 flex items-center justify-center mb-4 group-hover:from-[#00C6FF]/30 group-hover:to-[#0072FF]/30 transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 relative overflow-hidden bg-secondary/20 dark:bg-card/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_0%_50%,hsl(200_100%_50%_/_0.06),transparent)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeUp className="text-center mb-16">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">What We Do</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Services</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              From concept to launch, we cover every aspect of your digital presence.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, i) => (
              <FadeUp key={service.title} delay={i * 0.06}>
                <div className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 cursor-pointer h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00C6FF]/15 to-[#0072FF]/15 flex items-center justify-center shrink-0 group-hover:from-[#00C6FF]/25 group-hover:to-[#0072FF]/25 transition-all duration-300">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="text-center">
            <Link href="/services">
              <Button variant="outline" className="rounded-full px-8 border-border/60 hover:border-primary/50 hover:bg-primary/5">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_100%_50%,hsl(200_100%_50%_/_0.07),transparent)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeUp className="text-center mb-16">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">Featured Work</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">What We've Built</h2>
          </FadeUp>

          <FadeUp>
            <div className="group relative bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center relative z-10">
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1 mb-6 w-fit">
                    Featured Project
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Nexstaffra</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    A modern, professional platform for staffing and workforce management.
                    We delivered a clean, conversion-focused website with strong attention to 
                    design, responsiveness, and business requirements.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {["React", "TypeScript", "Tailwind CSS", "Node.js", "SEO Optimized"].map(tech => (
                      <span key={tech} className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href="https://nexstaffra.in" target="_blank" rel="noreferrer">
                      <Button className="rounded-full bg-gradient-to-r from-[#00C6FF] to-[#0072FF] text-white border-0 hover:opacity-90" data-testid="link-nexstaffra">
                        View Live Site
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </a>
                    <Link href="/work">
                      <Button variant="outline" className="rounded-full border-border/60 hover:border-primary/50">
                        Full Case Study
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#0D1117] to-[#1a2744] flex items-center justify-center p-12 min-h-[300px]">
                  <div className="text-center">
                    <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0072FF] mb-2">NX</div>
                    <div className="text-white/60 text-sm">nexstaffra.in</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="py-24 relative overflow-hidden bg-secondary/20 dark:bg-card/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,hsl(200_100%_50%_/_0.07),transparent)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeUp className="text-center mb-16">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">Pricing</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Transparent{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0072FF]">Pricing</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              No hidden fees. No surprises. Just great work at fair prices.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {pricingPreviews.map((plan, i) => (
              <FadeUp key={plan.name} delay={i * 0.1}>
                <div className={`relative bg-card border rounded-2xl p-8 transition-all duration-300 hover:shadow-xl ${
                  plan.popular
                    ? "border-primary/60 shadow-lg shadow-primary/10"
                    : "border-border hover:border-primary/30"
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-[#00C6FF] to-[#0072FF] text-white text-xs font-semibold px-4 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0072FF]">{plan.price}</div>
                  <p className="text-muted-foreground text-sm mb-6">{plan.desc}</p>
                  <Link href="/pricing">
                    <Button className={`w-full rounded-full ${plan.popular ? "bg-gradient-to-r from-[#00C6FF] to-[#0072FF] text-white border-0 hover:opacity-90" : "variant-outline border-border/60 hover:border-primary/50"}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="text-center">
            <Link href="/pricing">
              <Button variant="outline" className="rounded-full px-8 border-border/60 hover:border-primary/50 hover:bg-primary/5">
                Compare All Plans
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,hsl(200_100%_50%_/_0.1),transparent)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-4">Let's Talk</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Ready to Build Something{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0072FF]">
                  Extraordinary?
                </span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Tell us about your project and we'll get back to you within 24 hours with a tailored plan.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Free project consultation</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Custom quote within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">No commitment required</span>
                </div>
                <div className="pt-4">
                  <a href="mailto:contact@codenixor.com" className="text-primary font-medium hover:underline">
                    contact@codenixor.com
                  </a>
                </div>
              </div>
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
