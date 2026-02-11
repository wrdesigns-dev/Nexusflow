import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";

export function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$299",
      period: "per month",
      description: "Perfect for growing teams getting started with intelligent allocation",
      features: [
        "Up to 50 team members",
        "Basic allocation algorithms",
        "Standard integrations",
        "Email support",
        "7-day data retention",
        "Monthly usage reports"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Pro",
      price: "$899",
      period: "per month",
      description: "Advanced features for scaling organizations with complex workflows",
      features: [
        "Up to 500 team members",
        "Advanced AI optimization",
        "Custom integrations",
        "Priority support (24/7)",
        "90-day data retention",
        "Real-time analytics",
        "API access",
        "Custom workflows",
        "SSO integration"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      description: "Enterprise-grade solution with dedicated support and infrastructure",
      features: [
        "Unlimited team members",
        "Custom AI model training",
        "Dedicated infrastructure",
        "24/7 enterprise support",
        "Unlimited data retention",
        "Advanced security controls",
        "SLA guarantees",
        "On-premise deployment",
        "Custom integrations",
        "Dedicated success manager"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-[var(--nexus-charcoal)] to-[var(--nexus-surface)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-serif mb-8">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-[var(--nexus-silver)] max-w-3xl mx-auto">
              Choose the plan that scales with your organization's needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative glass p-8 rounded-3xl ${
                  tier.popular ? 'ring-2 ring-[var(--nexus-teal)] card-lift scale-105' : 'card-lift'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[var(--nexus-teal)] to-[var(--nexus-mint)] text-[var(--nexus-charcoal)] px-4 py-1.5 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-5xl font-bold text-serif text-[var(--nexus-teal)]">
                      {tier.price}
                    </span>
                    <span className="text-[var(--nexus-silver)]">{tier.period}</span>
                  </div>
                  <p className="text-[var(--nexus-silver)]">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[var(--nexus-teal)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} className="text-[var(--nexus-charcoal)]" />
                      </div>
                      <span className="text-[var(--nexus-silver)]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                    tier.popular
                      ? 'btn-gradient text-[var(--nexus-charcoal)]'
                      : 'glass border border-[var(--nexus-border)] hover:border-[var(--nexus-teal)] text-[var(--nexus-white)]'
                  }`}
                >
                  {tier.cta}
                  <ArrowRight size={20} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-24 px-6 lg:px-8 bg-[var(--nexus-surface)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-serif mb-6">
              Feature Comparison
            </h2>
            <p className="text-xl text-[var(--nexus-silver)] max-w-2xl mx-auto">
              Detailed breakdown of capabilities across all tiers
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-3xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--nexus-border)]">
                    <th className="text-left p-6 font-semibold">Feature</th>
                    <th className="text-center p-6 font-semibold">Starter</th>
                    <th className="text-center p-6 font-semibold bg-[var(--nexus-surface-elevated)]">Pro</th>
                    <th className="text-center p-6 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Team Members", starter: "50", pro: "500", enterprise: "Unlimited" },
                    { feature: "AI Optimization", starter: "Basic", pro: "Advanced", enterprise: "Custom" },
                    { feature: "Data Retention", starter: "7 days", pro: "90 days", enterprise: "Unlimited" },
                    { feature: "Support", starter: "Email", pro: "24/7 Priority", enterprise: "Dedicated Manager" },
                    { feature: "API Access", starter: "—", pro: "✓", enterprise: "✓" },
                    { feature: "Custom Integrations", starter: "—", pro: "✓", enterprise: "✓" },
                    { feature: "SSO", starter: "—", pro: "✓", enterprise: "✓" },
                    { feature: "SLA", starter: "—", pro: "—", enterprise: "99.99%" },
                    { feature: "On-Premise", starter: "—", pro: "—", enterprise: "✓" }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-[var(--nexus-border)] last:border-0">
                      <td className="p-6 text-[var(--nexus-silver)]">{row.feature}</td>
                      <td className="p-6 text-center">{row.starter}</td>
                      <td className="p-6 text-center bg-[var(--nexus-surface-elevated)] text-[var(--nexus-teal)]">
                        {row.pro}
                      </td>
                      <td className="p-6 text-center">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-serif mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Can I change plans later?",
                answer: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, ACH transfers, and wire transfers for Enterprise customers. Annual plans receive a 20% discount."
              },
              {
                question: "Is there a free trial?",
                answer: "Yes, all plans include a 14-day free trial with full access to features. No credit card required to start."
              },
              {
                question: "What happens to my data if I cancel?",
                answer: "Your data is retained for 30 days after cancellation. You can export all your data in standard formats at any time."
              },
              {
                question: "Do you offer custom pricing for large enterprises?",
                answer: "Yes, our Enterprise plan includes custom pricing based on your specific needs, team size, and deployment requirements."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl"
              >
                <h4 className="text-xl font-semibold mb-3">{faq.question}</h4>
                <p className="text-[var(--nexus-silver)] leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8 bg-[var(--nexus-surface)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center glass p-12 rounded-3xl glow-border"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-serif mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-[var(--nexus-silver)] mb-8">
            Start your 14-day free trial today. No credit card required.
          </p>
          <button className="px-8 py-4 btn-gradient rounded-lg text-[var(--nexus-charcoal)] font-semibold text-lg flex items-center justify-center gap-2 mx-auto">
            Start Free Trial
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </section>
    </div>
  );
}
