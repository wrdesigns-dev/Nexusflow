import { motion } from "motion/react";
import { Building2, Users, Globe, ArrowRight } from "lucide-react";

export function Solutions() {
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
              Industry Solutions
            </h1>
            <p className="text-xl md:text-2xl text-[var(--nexus-silver)] max-w-3xl mx-auto">
              Tailored resource allocation strategies for every vertical
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Solution */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--nexus-teal)] to-[var(--nexus-mint)] rounded-2xl flex items-center justify-center mb-6">
                <Building2 size={32} className="text-[var(--nexus-charcoal)]" />
              </div>
              <h2 className="text-5xl font-bold text-serif mb-6">
                Enterprise Scale
              </h2>
              <p className="text-xl text-[var(--nexus-silver)] mb-8 leading-relaxed">
                Built for Fortune 500 complexity with multi-tenant architecture, 
                advanced compliance controls, and dedicated infrastructure.
              </p>
              
              <div className="space-y-6 mb-8">
                {[
                  {
                    title: "Organizational Hierarchy",
                    description: "Support for complex org structures with 10,000+ employees across departments and business units"
                  },
                  {
                    title: "Custom Workflows",
                    description: "Configure allocation rules to match your unique approval chains and governance requirements"
                  },
                  {
                    title: "Advanced Analytics",
                    description: "Executive dashboards with predictive insights and scenario modeling capabilities"
                  }
                ].map((item, index) => (
                  <div key={index} className="glass p-6 rounded-xl">
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-[var(--nexus-silver)] text-sm">{item.description}</p>
                  </div>
                ))}
              </div>

              <button className="px-8 py-4 btn-gradient rounded-lg text-[var(--nexus-charcoal)] font-semibold flex items-center gap-2">
                Explore Enterprise
                <ArrowRight size={20} />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="glass p-8 rounded-3xl">
                <div className="bg-[var(--nexus-charcoal)] p-8 rounded-2xl">
                  <div className="space-y-4">
                    {[
                      { label: "Global Teams", value: "150+" },
                      { label: "Active Projects", value: "2,400" },
                      { label: "Resource Pool", value: "12K" },
                      { label: "Regions", value: "45" }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between py-4 border-b border-[var(--nexus-border)] last:border-0"
                      >
                        <span className="text-[var(--nexus-silver)]">{stat.label}</span>
                        <span className="text-2xl font-bold text-[var(--nexus-teal)] text-serif">
                          {stat.value}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Distributed Teams Solution */}
      <section className="py-24 px-6 lg:px-8 bg-[var(--nexus-surface)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass p-8 rounded-3xl">
                {/* Time Zone Visualization */}
                <div className="bg-[var(--nexus-charcoal)] p-8 rounded-2xl">
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <Globe size={48} className="text-[var(--nexus-teal)] mx-auto mb-4" />
                      <h4 className="font-semibold">Global Coverage</h4>
                    </div>
                    {[
                      { zone: "Americas", coverage: "85%", teams: 24 },
                      { zone: "EMEA", coverage: "92%", teams: 31 },
                      { zone: "APAC", coverage: "78%", teams: 19 }
                    ].map((region, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-[var(--nexus-silver)]">{region.zone}</span>
                          <span className="text-[var(--nexus-teal)]">{region.teams} teams</span>
                        </div>
                        <div className="h-2 bg-[var(--nexus-surface)] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: region.coverage }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-[var(--nexus-teal)] to-[var(--nexus-mint)]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--nexus-teal)] to-[var(--nexus-mint)] rounded-2xl flex items-center justify-center mb-6">
                <Users size={32} className="text-[var(--nexus-charcoal)]" />
              </div>
              <h2 className="text-5xl font-bold text-serif mb-6">
                Distributed Teams
              </h2>
              <p className="text-xl text-[var(--nexus-silver)] mb-8 leading-relaxed">
                Optimize allocation across time zones with intelligent scheduling 
                that respects work-life balance and maximizes collaboration windows.
              </p>
              
              <div className="space-y-6 mb-8">
                {[
                  {
                    title: "Timezone Intelligence",
                    description: "Automatically detect optimal meeting times and handoff points for async collaboration"
                  },
                  {
                    title: "Cultural Awareness",
                    description: "Account for regional holidays, working patterns, and communication preferences"
                  },
                  {
                    title: "Synchronous Windows",
                    description: "Maximize productivity during overlapping hours while respecting individual schedules"
                  }
                ].map((item, index) => (
                  <div key={index} className="glass p-6 rounded-xl">
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-[var(--nexus-silver)] text-sm">{item.description}</p>
                  </div>
                ))}
              </div>

              <button className="px-8 py-4 btn-gradient rounded-lg text-[var(--nexus-charcoal)] font-semibold flex items-center gap-2">
                Explore Remote Work
                <ArrowRight size={20} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Verticals Grid */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-serif mb-6">
              More Industries
            </h2>
            <p className="text-xl text-[var(--nexus-silver)] max-w-2xl mx-auto">
              Specialized solutions for every sector
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                industry: "Financial Services",
                description: "Compliance-first allocation with audit trails and SOX controls",
                stats: ["99.99% uptime", "Real-time risk scoring", "Automated compliance"]
              },
              {
                industry: "Healthcare",
                description: "HIPAA-compliant resource management for clinical teams",
                stats: ["Patient data security", "Staff burnout prevention", "Emergency protocols"]
              },
              {
                industry: "Technology",
                description: "Agile-native workflows for product and engineering teams",
                stats: ["Sprint planning", "Velocity tracking", "Tech debt management"]
              },
              {
                industry: "Manufacturing",
                description: "Shift-based scheduling with production line optimization",
                stats: ["24/7 operations", "Skills matrix", "Equipment allocation"]
              },
              {
                industry: "Consulting",
                description: "Client engagement tracking with billable hour optimization",
                stats: ["Project margins", "Utilization targets", "Client satisfaction"]
              },
              {
                industry: "Education",
                description: "Academic resource planning for institutions and districts",
                stats: ["Faculty scheduling", "Course optimization", "Budget allocation"]
              }
            ].map((vertical, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl card-lift"
              >
                <h3 className="text-2xl font-bold mb-4">{vertical.industry}</h3>
                <p className="text-[var(--nexus-silver)] mb-6">{vertical.description}</p>
                <ul className="space-y-2">
                  {vertical.stats.map((stat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-[var(--nexus-silver)]">
                      <div className="w-1.5 h-1.5 bg-[var(--nexus-teal)] rounded-full" />
                      {stat}
                    </li>
                  ))}
                </ul>
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
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-serif mb-6">
            Find Your Solution
          </h2>
          <p className="text-xl text-[var(--nexus-silver)] mb-8">
            Talk to our solutions architects about your specific needs
          </p>
          <button className="px-8 py-4 btn-gradient rounded-lg text-[var(--nexus-charcoal)] font-semibold text-lg flex items-center justify-center gap-2 mx-auto">
            Contact Sales
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </section>
    </div>
  );
}
