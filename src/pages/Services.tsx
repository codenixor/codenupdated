import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Globe, Layers, MonitorSmartphone, ShoppingCart, Bot, Palette,
  Search, Rocket, Wrench, CheckCircle, ArrowRight
} from "lucide-react";

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

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "We build fast, beautiful, and high-converting websites that represent your brand and drive real business results. From corporate sites to complex web apps.",
    benefits: ["Performance-optimized and SEO-ready", "Fully responsive across all devices", "Built with modern frameworks (React, Next.js)", "Custom animations and interactions"],
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    desc: "User-centered design that looks stunning and converts. We create interfaces that are intuitive, accessible, and a pleasure to use.",
    benefits: ["User research and wireframing", "Interactive prototypes", "Design systems and component libraries", "Accessibility-first approach"],
  },
  {
    icon: MonitorSmartphone,
    title: "Landing Pages",
    desc: "High-converting landing pages engineered to capture leads and drive sales. Every element is optimized for your specific goal.",
    benefits: ["Conversion-focused copy and layout", "A/B testing ready", "Fast load times", "Integrated analytics and tracking"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    desc: "Scalable online stores that delight customers and grow revenue. We build on Shopify, WooCommerce, or custom solutions.",
    benefits: ["Secure payment integration", "Inventory management", "Mobile-first shopping experience", "Performance and SEO optimized"],
  },
  {
    icon: Bot,
    title: "Business Automation",
    desc: "Eliminate repetitive tasks and streamline your operations with smart automation workflows tailored to your business.",
    benefits: ["CRM and tool integrations", "Automated email and notifications", "Custom workflow builders", "Time and cost savings"],
  },
  {
    icon: Palette,
    title: "Brand Identity",
    desc: "From logo to full brand system, we create visual identities that are memorable, professional, and built to last.",
    benefits: ["Logo design and variations", "Color palette and typography", "Brand guidelines document", "Marketing collateral"],
  },
  {
    icon: Search,
    title: "SEO & Content Support",
    desc: "Get found on Google with a strategic SEO approach. We optimize your site structure, content, and technical foundations.",
    benefits: ["Technical SEO audit and fixes", "Keyword research and strategy", "On-page optimization", "Content structure planning"],
  },
  {
    icon: Rocket,
    title: "Startup MVP Development",
    desc: "Validate your idea fast. We build lean, functional MVPs that get you to market in weeks — ready for real users.",
    benefits: ["Rapid prototyping", "Core feature focus", "Scalable architecture", "Launch-ready in 2–4 weeks"],
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    desc: "Keep your website running at peak performance. Security updates, bug fixes, content updates, and ongoing improvements.",
    benefits: ["Monthly maintenance plans", "Security monitoring and updates", "Performance optimization", "Content and feature updates"],
  },
];

export default function Services() {
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
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-4">What We Offer</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Services Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0072FF]">
                Growth
              </span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              From concept to launch and beyond — every service we offer is designed to create measurable impact for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <FadeUp key={service.title} delay={Math.min(i * 0.05, 0.25)}>
                <div
                  className="group relative bg-card border border-border rounded-2xl p-8 h-full flex flex-col hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 overflow-hidden"
                  data-testid={`card-service-${i}`}
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/4 group-hover:to-transparent transition-all duration-300 rounded-2xl pointer-events-none" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00C6FF]/15 to-[#0072FF]/15 flex items-center justify-center mb-5 group-hover:from-[#00C6FF]/25 group-hover:to-[#0072FF]/25 transition-all duration-300">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>

                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-200">{service.title}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.desc}</p>

                    <ul className="space-y-2.5 mb-8 flex-1">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2.5 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span className="text-foreground/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/pricing">
                      <Button
                        variant="outline"
                        className="w-full rounded-full border-border/60 hover:border-primary/60 hover:bg-primary/5 hover:text-primary transition-all group/btn"
                        data-testid={`button-get-started-${i}`}
                      >
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden bg-secondary/20 dark:bg-card/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,hsl(200_100%_50%_/_0.08),transparent)]" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Not sure which service you need?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
              Let's talk. We'll help you figure out the right solution for your goals.
            </p>
            <Link href="/about">
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-[#00C6FF] to-[#0072FF] text-white border-0 hover:opacity-90 px-10 py-6 text-base font-semibold shadow-lg shadow-primary/25"
                data-testid="button-contact-us"
              >
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
