import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { CheckCircle, Minus, ArrowRight } from "lucide-react";

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

type OneTimePlan = {
  name: string;
  price: string;
  popular: boolean;
  features: string[];
  missing: string[];
};

const oneTimePlans: OneTimePlan[] = [
  {
    name: "Basic",
    price: "$249",
    popular: false,
    features: [
      "Up to 5 pages",
      "Responsive Design",
      "Mobile Optimization",
      "Contact Form",
      "Basic SEO Setup",
      "30-day support",
    ],
    missing: ["Performance Optimization", "Custom Animations", "Priority Support"],
  },
  {
    name: "Standard",
    price: "$549",
    popular: true,
    features: [
      "Up to 10 pages",
      "Responsive Design",
      "Mobile Optimization",
      "Contact Forms",
      "Advanced SEO Setup",
      "Performance Optimization",
      "Custom Animations",
      "60-day support",
    ],
    missing: ["Priority Support"],
  },
  {
    name: "Premium",
    price: "$999",
    popular: false,
    features: [
      "Unlimited pages",
      "Responsive Design",
      "Mobile Optimization",
      "Contact Forms",
      "Advanced SEO Setup",
      "Performance Optimization",
      "Custom Animations",
      "Priority Support",
      "3-month support",
      "Custom integrations",
    ],
    missing: [],
  },
];

type BillingPeriod = "monthly" | "yearly";

type CarePlan = {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  desc: string;
  features: string[];
};

const carePlans: CarePlan[] = [
  {
    name: "Starter Care",
    monthlyPrice: 49,
    yearlyPrice: 39,
    desc: "Essential ongoing support for small sites.",
    features: ["Monthly backup", "Security updates", "1 content update/mo", "Email support"],
  },
  {
    name: "Growth Care",
    monthlyPrice: 99,
    yearlyPrice: 79,
    desc: "Growing businesses that need regular attention.",
    features: ["Weekly backup", "Security monitoring", "4 content updates/mo", "Priority email support", "Performance review"],
  },
  {
    name: "Business Care",
    monthlyPrice: 199,
    yearlyPrice: 159,
    desc: "Full-service maintenance for serious businesses.",
    features: ["Daily backup", "24/7 monitoring", "Unlimited content updates", "Phone + email support", "Monthly performance report", "SEO health checks"],
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");

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
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-4">Pricing</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Simple,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0072FF]">
                Transparent
              </span>{" "}Pricing
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              No hidden fees. No surprise invoices. Just great work at fair prices, with a plan for every stage of your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* One-Time Packages */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <FadeUp className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">One-Time Website Packages</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Perfect for businesses ready to launch a professional website.</p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {oneTimePlans.map((plan, i) => (
              <FadeUp key={plan.name} delay={i * 0.1}>
                <div
                  className={`relative flex flex-col bg-card border rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-xl ${
                    plan.popular
                      ? "border-primary/60 shadow-2xl shadow-primary/10 scale-[1.02]"
                      : "border-border hover:border-primary/30 hover:shadow-primary/5"
                  }`}
                  data-testid={`card-plan-${plan.name.toLowerCase()}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-[#00C6FF] to-[#0072FF] text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-md shadow-primary/30">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-end gap-1 mb-1">
                      <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0072FF]">{plan.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">One-time payment</p>
                  </div>

                  <div className="flex-1 mb-8">
                    <ul className="space-y-3">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                      {plan.missing.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm opacity-40">
                          <Minus className="w-4 h-4 mt-0.5 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className={`w-full rounded-full py-5 font-semibold ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#00C6FF] to-[#0072FF] text-white border-0 hover:opacity-90 shadow-lg shadow-primary/25"
                        : "border-border/60 hover:border-primary/50 hover:bg-primary/5"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                    data-testid={`button-plan-${plan.name.toLowerCase()}`}
                    onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly / Yearly Care Plans */}
      <section className="py-20 relative overflow-hidden bg-secondary/20 dark:bg-card/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,hsl(200_100%_50%_/_0.07),transparent)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeUp className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">Monthly Care Plans</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Ongoing maintenance and support to keep your website running at peak performance.
            </p>
            {/* Toggle */}
            <div className="inline-flex items-center gap-1 bg-card border border-border rounded-full p-1" data-testid="toggle-billing">
              <button
                onClick={() => setBilling("monthly")}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  billing === "monthly"
                    ? "bg-gradient-to-r from-[#00C6FF] to-[#0072FF] text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid="button-monthly"
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("yearly")}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  billing === "yearly"
                    ? "bg-gradient-to-r from-[#00C6FF] to-[#0072FF] text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid="button-yearly"
              >
                Yearly
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full transition-all ${billing === "yearly" ? "bg-white/20 text-white" : "bg-primary/10 text-primary"}`}>
                  Save 20%
                </span>
              </button>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {carePlans.map((plan, i) => (
              <FadeUp key={plan.name} delay={i * 0.1}>
                <motion.div
                  key={billing}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card border border-border rounded-3xl p-8 h-full flex flex-col hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
                  data-testid={`card-care-${i}`}
                >
                  <h3 className="text-xl font-bold mb-2">
                    {billing === "yearly" ? plan.name.replace("Care", "Annual") : plan.name}
                  </h3>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0072FF]">
                      ${billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-muted-foreground text-sm pb-1">/mo</span>
                  </div>
                  {billing === "yearly" && (
                    <p className="text-xs text-primary font-semibold mb-3">
                      Save ${(plan.monthlyPrice - plan.yearlyPrice) * 12}/year — billed annually
                    </p>
                  )}
                  <p className="text-muted-foreground text-sm mb-6">{plan.desc}</p>

                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="w-full rounded-full border-border/60 hover:border-primary/50 hover:bg-primary/5"
                    onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,hsl(200_100%_50%_/_0.08),transparent)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-4">Get a Custom Quote</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Ready to start?{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0072FF]">
                  Let's talk.
                </span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Fill out the form and we'll get back to you within 24 hours with a custom proposal tailored to your project.
              </p>
              <a href="mailto:contact@codenixor.com" className="text-primary font-medium hover:underline text-sm">
                contact@codenixor.com
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
