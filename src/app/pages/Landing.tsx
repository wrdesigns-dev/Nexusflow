import { motion } from "motion/react";
import { ArrowRight, Zap, TrendingUp, Shield } from "lucide-react";
import { useEffect, useState } from "react";

export function Landing() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8">
        {/* Animated Background Grid */}
        <div 
          className="absolute inset-0 tech-grid opacity-20"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--nexus-teal)] rounded-full blur-[120px] opacity-20 pulse-node" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--nexus-mint)] rounded-full blur-[120px] opacity-20 pulse-node" style={{ animationDelay: "1s" }} />

        <div className="relative max-w-6xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-serif mb-8 leading-tight">
              Resource Allocation,
              <br />
              <span className="glow-text text-[var(--nexus-teal)]">Reimagined</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-[var(--nexus-silver)] mb-12 max-w-3xl mx-auto"
          >
            NexusFlow leverages AI-driven intelligence to optimize workforce distribution, 
            reduce operational overhead, and deliver measurable ROI for enterprise teams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 btn-gradient rounded-lg text-[var(--nexus-charcoal)] font-semibold text-lg flex items-center justify-center gap-2">
              Start Free Trial
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 glass rounded-lg text-[var(--nexus-white)] font-semibold text-lg border border-[var(--nexus-border)] hover:border-[var(--nexus-teal)] transition-colors">
              Watch Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 px-6 lg:px-8 bg-[var(--nexus-surface)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-serif mb-6">
              Platform Capabilities
            </h2>
            <p className="text-xl text-[var(--nexus-silver)] max-w-2xl mx-auto">
              Advanced features designed for modern enterprise operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Intelligent Allocation",
                description: "AI-powered algorithms analyze team capacity, skill sets, and project requirements to optimize resource distribution in real-time.",
                delay: 0
              },
              {
                icon: TrendingUp,
                title: "Predictive Analytics",
                description: "Forecast resource needs with 94% accuracy using machine learning models trained on historical performance data.",
                delay: 0.2
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "SOC 2 Type II certified with end-to-end encryption, SSO integration, and granular access controls.",
                delay: 0.4
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: capability.delay }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl card-lift"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[var(--nexus-teal)] to-[var(--nexus-mint)] rounded-xl flex items-center justify-center mb-6">
                  <capability.icon size={28} className="text-[var(--nexus-charcoal)]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{capability.title}</h3>
                <p className="text-[var(--nexus-silver)] leading-relaxed">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[var(--nexus-silver)] mb-12 text-lg">
            Trusted by industry leaders
          </p>
          
          <div className="relative">
            <div className="flex overflow-hidden">
              <div className="flex marquee space-x-16">
                {[
                  { name: "Stripe", style: "tracking-tight" },
                  { name: "OpenAI", style: "font-light" },
                  { name: "Notion", style: "tracking-wide" },
                  { name: "Figma", style: "font-semibold" },
                  { name: "Linear", style: "tracking-wider" },
                  { name: "Vercel", style: "font-bold" },
                  { name: "Stripe", style: "tracking-tight" },
                  { name: "OpenAI", style: "font-light" }
                ].map((company, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center min-w-[200px] h-20 glass rounded-xl px-8 group hover:border-[var(--nexus-teal)] transition-all"
                  >
                    <span className={`text-2xl font-bold text-[var(--nexus-silver)] group-hover:text-[var(--nexus-teal)] transition-colors ${company.style}`}>
                      {company.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Case Study Section */}
      <section className="py-24 px-6 lg:px-8 bg-[var(--nexus-surface)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 glass rounded-full text-[var(--nexus-teal)] mb-6">
                Case Study
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-serif mb-8">
                Measurable Impact at Scale
              </h2>
              <p className="text-xl text-[var(--nexus-silver)] mb-8 leading-relaxed">
                See how TechCorp reduced operational costs by 42% while increasing team productivity 
                by 67% within the first quarter of implementation.
              </p>
              <button className="px-8 py-4 btn-gradient rounded-lg text-[var(--nexus-charcoal)] font-semibold flex items-center gap-2">
                Read Full Case Study
                <ArrowRight size={20} />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { metric: "+286%", label: "MRR Growth", sublabel: "Year over Year" },
                { metric: "-58%", label: "CAC Reduction", sublabel: "First 6 Months" },
                { metric: "94%", label: "Team Utilization", sublabel: "Sustained Rate" },
                { metric: "3.2x", label: "ROI Multiple", sublabel: "Within 12 Months" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-2xl metric-item"
                >
                  <div className="text-4xl font-bold text-[var(--nexus-teal)] mb-2 text-serif">
                    {item.metric}
                  </div>
                  <div className="font-semibold mb-1">{item.label}</div>
                  <div className="text-sm text-[var(--nexus-silver)]">{item.sublabel}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center glass p-12 rounded-3xl glow-border"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-serif mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-[var(--nexus-silver)] mb-8">
            Join hundreds of enterprises optimizing their resource allocation with NexusFlow
          </p>
          <button className="px-8 py-4 btn-gradient rounded-lg text-[var(--nexus-charcoal)] font-semibold text-lg flex items-center justify-center gap-2 mx-auto">
            Get Started Today
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </section>
    </div>
  );
}