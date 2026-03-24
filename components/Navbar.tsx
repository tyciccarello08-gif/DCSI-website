"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { CONTACT, COMPANY, NAV_SERVICES, NAV_RESOURCES } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg-primary/96 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent/20">
              <span className="font-montserrat font-bold text-white text-base leading-none tracking-tight">DC</span>
            </div>
            <div>
              <div className="font-montserrat font-bold text-text-primary text-base leading-tight tracking-tight">
                {COMPANY.name}
              </div>
              <div className="text-accent text-[10px] font-inter tracking-[0.15em] uppercase">
                {COMPANY.tagline}
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            <Link
              href="/"
              className="px-4 py-2 text-text-secondary hover:text-text-primary text-sm font-inter font-medium transition-colors"
            >
              Home
            </Link>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1.5 px-4 py-2 text-text-secondary hover:text-text-primary text-sm font-inter font-medium transition-colors">
                Services
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-60">
                  <div className="bg-bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
                    {NAV_SERVICES.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 px-5 py-3.5 text-sm text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors border-b border-border last:border-0 group"
                      >
                        <span className="w-1 h-4 rounded-full bg-accent/0 group-hover:bg-accent transition-colors flex-shrink-0" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="px-4 py-2 text-text-secondary hover:text-text-primary text-sm font-inter font-medium transition-colors"
            >
              About
            </Link>

            {/* Resources dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button className="flex items-center gap-1.5 px-4 py-2 text-text-secondary hover:text-text-primary text-sm font-inter font-medium transition-colors">
                Resources
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {resourcesOpen && (
                <div className="absolute top-full left-0 pt-2 w-60">
                  <div className="bg-bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
                    {NAV_RESOURCES.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 px-5 py-3.5 text-sm text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors border-b border-border last:border-0 group"
                      >
                        <span className="w-1 h-4 rounded-full bg-accent/0 group-hover:bg-accent transition-colors flex-shrink-0" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="px-4 py-2 text-text-secondary hover:text-text-primary text-sm font-inter font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Phone */}
          <a
            href={CONTACT.tollFreeHref}
            className="hidden md:flex items-center gap-2 bg-accent hover:bg-accent-light text-white px-5 py-2.5 rounded-lg font-inter font-semibold text-sm transition-colors shadow-lg shadow-accent/20"
          >
            <Phone size={13} />
            {CONTACT.tollFree}
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-text-primary p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-bg-secondary border-t border-border">
          <div className="px-4 py-5 space-y-1">
            <Link href="/" className="block py-2.5 text-text-primary font-inter font-medium" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <div className="py-2">
              <div className="text-text-secondary text-[10px] uppercase tracking-[0.15em] font-inter mb-3">Services</div>
              {NAV_SERVICES.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2.5 pl-4 text-text-secondary hover:text-text-primary text-sm font-inter border-l border-border hover:border-accent transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link href="/about" className="block py-2.5 text-text-primary font-inter font-medium" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <div className="py-2">
              <div className="text-text-secondary text-[10px] uppercase tracking-[0.15em] font-inter mb-3">Resources</div>
              {NAV_RESOURCES.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2.5 pl-4 text-text-secondary hover:text-text-primary text-sm font-inter border-l border-border hover:border-accent transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link href="/contact" className="block py-2.5 text-text-primary font-inter font-medium" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
            <a
              href="tel:8663909686"
              className="flex items-center gap-2 bg-accent text-white px-5 py-3.5 rounded-lg font-inter font-semibold text-sm mt-4 shadow-lg shadow-accent/20"
            >
              <Phone size={14} />
              Call (866) 390-9686
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
