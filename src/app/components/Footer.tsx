import { Link } from "react-router";
import { Github, Linkedin, Twitter } from "lucide-react";
import logo from "../../asset/nexusflow.png";

export function Footer() {
  return (
    <footer className="border-t border-[var(--nexus-border)] bg-[var(--nexus-surface)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="NexusFlow" 
                className="h-7 md:h-8 w-auto object-contain"
              />
            </div>
            <p className="text-[var(--nexus-silver)] text-sm">
              AI-driven resource allocation for enterprise teams
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[var(--nexus-silver)] hover:text-[var(--nexus-teal)] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-[var(--nexus-silver)] hover:text-[var(--nexus-teal)] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-[var(--nexus-silver)] hover:text-[var(--nexus-teal)] transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/platform" className="text-[var(--nexus-silver)] hover:text-[var(--nexus-teal)] transition-colors text-sm">
                  Platform
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-[var(--nexus-silver)] hover:text-[var(--nexus-teal)] transition-colors text-sm">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-[var(--nexus-silver)] hover:text-[var(--nexus-teal)] transition-colors text-sm">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[var(--nexus-silver)] hover:text-[var(--nexus-teal)] transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--nexus-silver)] hover:text-[var(--nexus-teal)] transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--nexus-silver)] hover:text-[var(--nexus-teal)] transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[var(--nexus-silver)] hover:text-[var(--nexus-teal)] transition-colors text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--nexus-silver)] hover:text-[var(--nexus-teal)] transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--nexus-silver)] hover:text-[var(--nexus-teal)] transition-colors text-sm">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--nexus-border)] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[var(--nexus-silver)] text-sm">
            © 2026 NexusFlow. All rights reserved. Powered by wrdesigns
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-[var(--nexus-silver)] hover:text-[var(--nexus-teal)] transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-[var(--nexus-silver)] hover:text-[var(--nexus-teal)] transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
