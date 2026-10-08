import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { trackEvent } from '../utils/analytics';

interface NavbarProps {
  onOpenContact: (initiative?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    trackEvent('hero_contact_click');
    onOpenContact();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        scrolled ? 'bg-[#F8F7F4]/95 backdrop-blur-md shadow-xs' : 'bg-[#F8F7F4]'
      } hairline-b`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark & Interlocking Monogram */}
        <a
          href="#top"
          className="flex items-center gap-2.5 font-editorial text-2xl lg:text-3xl font-medium tracking-tight text-[#1C1917] hover:opacity-80 transition-opacity"
          aria-label="Crystal Kizor Home"
        >
          <BrandLogo variant="monogram" className="w-7 h-7 text-[#1C1917]" />
          <span>CRYSTAL KIZOR</span>
        </a>

        {/* Zone 2: Clean Text Navigation Links */}
        <nav
          className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-[#57534E]"
          aria-label="Main Navigation"
        >
          <button
            onClick={() => handleNavClick('ecosystem')}
            className="hover:text-[#1C1917] transition-colors py-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C1917]"
          >
            Ecosystem
          </button>
          <button
            onClick={() => handleNavClick('work')}
            className="hover:text-[#1C1917] transition-colors py-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C1917]"
          >
            Selected Work
          </button>
          <button
            onClick={() => handleNavClick('ideas')}
            className="hover:text-[#1C1917] transition-colors py-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C1917]"
          >
            Ideas & Research
          </button>
          <button
            onClick={() => handleNavClick('speaking')}
            className="hover:text-[#1C1917] transition-colors py-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C1917]"
          >
            Speaking
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="hover:text-[#1C1917] transition-colors py-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C1917]"
          >
            About
          </button>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={handleContactClick}
            className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#F8F7F4] bg-[#1C1917] hover:bg-[#292524] active:bg-black transition-colors cursor-pointer inline-flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C1917]"
          >
            <span>Start a conversation</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => {
              const nextState = !mobileMenuOpen;
              setMobileMenuOpen(nextState);
              trackEvent('mobile_nav_toggle', { open: nextState });
            }}
            className="p-2 text-[#1C1917] hover:bg-[#E7E5E4] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C1917]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F8F7F4] hairline-b px-6 pt-4 pb-8 space-y-4">
          <div className="flex flex-col space-y-3 text-base font-medium text-[#1C1917]">
            <button
              onClick={() => handleNavClick('ecosystem')}
              className="text-left py-2 hover:text-[#9A3412] transition-colors cursor-pointer"
            >
              Ecosystem
            </button>
            <button
              onClick={() => handleNavClick('work')}
              className="text-left py-2 hover:text-[#9A3412] transition-colors cursor-pointer"
            >
              Selected Work
            </button>
            <button
              onClick={() => handleNavClick('ideas')}
              className="text-left py-2 hover:text-[#9A3412] transition-colors cursor-pointer"
            >
              Ideas & Research
            </button>
            <button
              onClick={() => handleNavClick('speaking')}
              className="text-left py-2 hover:text-[#9A3412] transition-colors cursor-pointer"
            >
              Speaking
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left py-2 hover:text-[#9A3412] transition-colors cursor-pointer"
            >
              About
            </button>
          </div>
          <div className="pt-4 hairline-t">
            <button
              onClick={handleContactClick}
              className="w-full py-3 text-xs font-semibold tracking-wider uppercase text-[#F8F7F4] bg-[#1C1917] hover:bg-[#292524] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Start a conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
