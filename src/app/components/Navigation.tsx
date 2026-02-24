import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../asset/12872256e8193e70901ed0951c69a226eb7d78f2.png";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/platform", label: "Platform" },
    { to: "/solutions", label: "Solutions" },
    { to: "/pricing", label: "Pricing" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky-nav glass border-b border-[var(--nexus-border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="NexusFlow" 
              className="h-8 md:h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sans transition-colors ${
                  isActive(link.to)
                    ? "text-[var(--nexus-teal)]"
                    : "text-[var(--nexus-silver)] hover:text-[var(--nexus-white)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button className="px-6 py-2.5 btn-gradient rounded-lg text-[var(--nexus-charcoal)] font-semibold">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[var(--nexus-white)]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block text-sans transition-colors ${
                  isActive(link.to)
                    ? "text-[var(--nexus-teal)]"
                    : "text-[var(--nexus-silver)] hover:text-[var(--nexus-white)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full px-6 py-2.5 btn-gradient rounded-lg text-[var(--nexus-charcoal)] font-semibold">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
