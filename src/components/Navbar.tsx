
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { MenuIcon, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10',
        scrolled ? 'py-3 glass' : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="font-display font-bold text-2xl text-white tracking-wider flex items-center"
        >
          DST
          <span className="ml-1 bg-neon-blue h-2 w-2 rounded-full animate-pulse-glow"></span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#specs">Specifications</NavLink>
          <NavLink href="#gallery">Gallery</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <button className="bg-neon-blue hover:bg-neon-blue/90 text-white py-2 px-6 rounded-md font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(14,165,233,0.5)]">
            Pre-order
          </button>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          'absolute top-full left-0 right-0 glass transition-all duration-300 overflow-hidden md:hidden',
          mobileMenuOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className="px-6 py-4 space-y-4 flex flex-col">
          <MobileNavLink href="#features" onClick={() => setMobileMenuOpen(false)}>Features</MobileNavLink>
          <MobileNavLink href="#specs" onClick={() => setMobileMenuOpen(false)}>Specifications</MobileNavLink>
          <MobileNavLink href="#gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</MobileNavLink>
          <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</MobileNavLink>
          <button className="bg-neon-blue hover:bg-neon-blue/90 text-white py-2 px-6 rounded-md font-medium transition-all duration-300 mt-2">
            Pre-order
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-futuristic-silver hover:text-white transition-colors duration-300 text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-neon-blue hover:after:w-full after:transition-all after:duration-300"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, onClick, children }: { href: string, onClick?: () => void, children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-futuristic-silver hover:text-white transition-colors duration-300 text-lg font-medium"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navbar;
