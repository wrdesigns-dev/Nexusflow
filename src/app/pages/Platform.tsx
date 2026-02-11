import { motion } from "motion/react";
import { Brain, Network, Cpu, ArrowRight, BarChart3 } from "lucide-react";

export function Platform() {
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
              Intelligence Engine
            </h1>
            <p className="text-xl md:text-2xl text-[var(--nexus-silver)] max-w-3xl mx-auto">
              A deep dive into the neural architecture powering enterprise-grade resource optimization
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Architecture */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 glass rounded-full text-[var(--nexus-teal)] mb-6">
                Core Technology
              </div>
              <h2 className="text-5xl font-bold text-serif mb-6">
                Agentic Neural Network
              </h2>
              <p className="text-lg text-[var(--nexus-silver)] mb-6 leading-relaxed">
                Our proprietary multi-agent system leverages reinforcement learning to continuously 
                optimize allocation strategies based on real-time performance metrics.
              </p>
              <ul className="space-y-4">
                {[
                  "Distributed computation across 12 specialized agents",
                  "Real-time learning from 50M+ allocation decisions",
                  "Sub-100ms latency for enterprise-scale operations"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[var(--nexus-teal)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-[var(--nexus-charcoal)] rounded-full" />
                    </div>
                    <span className="text-[var(--nexus-silver)]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl relative overflow-hidden"
            >
              {/* Network Graph Visualization */}
              <div className="relative h-96">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  {/* Connections */}
                  <g stroke="var(--nexus-teal)" strokeWidth="1" opacity="0.3">
                    <line x1="200" y1="200" x2="100" y2="100" />
                    <line x1="200" y1="200" x2="300" y2="100" />
                    <line x1="200" y1="200" x2="100" y2="300" />
                    <line x1="200" y1="200" x2="300" y2="300" />
                    <line x1="100" y1="100" x2="300" y2="100" />
                    <line x1="100" y1="300" x2="300" y2="300" />
                    <line x1="100" y1="100" x2="100" y2="300" />
                    <line x1="300" y1="100" x2="300" y2="300" />
                  </g>
                  
                  {/* Nodes */}
                  <g>
                    {[
                      { x: 200, y: 200, size: 20, delay: 0 },
                      { x: 100, y: 100, size: 12, delay: 0.2 },
                      { x: 300, y: 100, size: 12, delay: 0.4 },
                      { x: 100, y: 300, size: 12, delay: 0.6 },
                      { x: 300, y: 300, size: 12, delay: 0.8 }
                    ].map((node, index) => (
                      <motion.circle
                        key={index}
                        cx={node.x}
                        cy={node.y}
                        r={node.size}
                        fill="var(--nexus-teal)"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: node.delay }}
                        className="pulse-node"
                      />
                    ))}
                  </g>
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Cognitive Load Balancing",
                description: "Analyzes team cognitive capacity alongside technical skills to prevent burnout and maximize sustainable performance."
              },
              {
                icon: Network,
                title: "Cross-Team Orchestration",
                description: "Identifies dependencies and optimizes collaboration patterns across distributed teams and time zones."
              },
              {
                icon: Cpu,
                title: "Adaptive Scheduling",
                description: "Dynamically adjusts resource allocation based on priority shifts, deadline changes, and emerging bottlenecks."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl card-lift"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[var(--nexus-teal)] to-[var(--nexus-mint)] rounded-xl flex items-center justify-center mb-6">
                  <feature.icon size={28} className="text-[var(--nexus-charcoal)]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-[var(--nexus-silver)] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Rich UI Mockup */}
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
              Real-Time Dashboard
            </h2>
            <p className="text-xl text-[var(--nexus-silver)] max-w-2xl mx-auto">
              Monitor performance metrics and optimization insights at a glance
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl"
          >
            {/* Mock Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {[
                { label: "Active Resources", value: "247" },
                { label: "Utilization Rate", value: "87.3%" },
                { label: "Avg. Response Time", value: "12ms" },
                { label: "Cost Efficiency", value: "+42%" }
              ].map((stat, index) => (
                <div key={index} className="bg-[var(--nexus-charcoal)] p-6 rounded-xl">
                  <div className="text-3xl font-bold text-[var(--nexus-teal)] mb-2 text-serif">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--nexus-silver)]">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Mock Chart Area */}
            <div className="bg-[var(--nexus-charcoal)] p-8 rounded-xl h-64 relative overflow-hidden">
              {/* Performance Chart */}
              <svg className="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
                {/* Grid Lines */}
                <g stroke="rgba(255,255,255,0.1)" strokeWidth="1">
                  <line x1="0" y1="50" x2="800" y2="50" />
                  <line x1="0" y1="100" x2="800" y2="100" />
                  <line x1="0" y1="150" x2="800" y2="150" />
                </g>

                {/* Area Fill */}
                <defs>
                  <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="var(--nexus-teal)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="var(--nexus-teal)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                <motion.path
                  d="M 0 150 L 100 120 L 200 130 L 300 90 L 400 100 L 500 60 L 600 70 L 700 40 L 800 50 L 800 200 L 0 200 Z"
                  fill="url(#areaGradient)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                />

                {/* Line Chart */}
                <motion.path
                  d="M 0 150 L 100 120 L 200 130 L 300 90 L 400 100 L 500 60 L 600 70 L 700 40 L 800 50"
                  stroke="var(--nexus-teal)"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Data Points */}
                {[
                  { x: 0, y: 150 },
                  { x: 100, y: 120 },
                  { x: 200, y: 130 },
                  { x: 300, y: 90 },
                  { x: 400, y: 100 },
                  { x: 500, y: 60 },
                  { x: 600, y: 70 },
                  { x: 700, y: 40 },
                  { x: 800, y: 50 }
                ].map((point, index) => (
                  <motion.circle
                    key={index}
                    cx={point.x}
                    cy={point.y}
                    r="4"
                    fill="var(--nexus-teal)"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.2 }}
                  />
                ))}
              </svg>

              {/* Chart Labels */}
              <div className="absolute bottom-2 left-8 right-8 flex justify-between text-xs text-[var(--nexus-silver)]">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>

              <div className="absolute top-2 right-8 flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-[var(--nexus-teal)] rounded-full"></div>
                <span className="text-[var(--nexus-silver)]">Efficiency Trend</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Specifications */}
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
              Technical Specifications
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { category: "Performance", specs: ["99.99% uptime SLA", "Sub-50ms p95 latency", "10K+ requests/second"] },
              { category: "Security", specs: ["SOC 2 Type II certified", "256-bit AES encryption", "GDPR & CCPA compliant"] },
              { category: "Integrations", specs: ["Slack, Teams, Discord", "Jira, Linear, Asana", "GitHub, GitLab, Bitbucket"] },
              { category: "Deployment", specs: ["Cloud-native architecture", "Private cloud option", "On-premise available"] }
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-6">{section.category}</h3>
                <ul className="space-y-3">
                  {section.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[var(--nexus-teal)] rounded-full" />
                      <span className="text-[var(--nexus-silver)]">{spec}</span>
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
            Experience the Platform
          </h2>
          <p className="text-xl text-[var(--nexus-silver)] mb-8">
            Schedule a personalized demo with our engineering team
          </p>
          <button className="px-8 py-4 btn-gradient rounded-lg text-[var(--nexus-charcoal)] font-semibold text-lg flex items-center justify-center gap-2 mx-auto">
            Book Demo
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </section>
    </div>
  );
}