
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-futuristic-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-futuristic-lightgray/20 to-transparent"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-neon-blue/5 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container px-6 md:px-10 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand column */}
          <div>
            <div className="font-display font-bold text-2xl text-white tracking-wider flex items-center mb-4">
              DST
              <span className="ml-1 bg-neon-blue h-2 w-2 rounded-full"></span>
            </div>
            <p className="text-futuristic-silver text-sm leading-relaxed mb-6">
              Pioneering the future of electric transportation with cutting-edge technology and uncompromising design.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook size={18} />} />
              <SocialLink href="#" icon={<Instagram size={18} />} />
              <SocialLink href="#" icon={<Twitter size={18} />} />
              <SocialLink href="#" icon={<Youtube size={18} />} />
            </div>
          </div>
          
          {/* Links column */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="#features">Features</FooterLink>
              <FooterLink href="#specs">Specifications</FooterLink>
              <FooterLink href="#gallery">Gallery</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
              <FooterLink href="#">Pre-order</FooterLink>
            </ul>
          </div>
          
          {/* Contact column */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-neon-blue shrink-0 mt-0.5" />
                <span className="ml-3 text-futuristic-silver text-sm">
                  100 Innovation Drive, Technology Park, CA 94301
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-neon-blue shrink-0" />
                <span className="ml-3 text-futuristic-silver text-sm">
                  info@dstelectric.com
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-neon-blue shrink-0" />
                <span className="ml-3 text-futuristic-silver text-sm">
                  +1 (800) 555-0123
                </span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter column */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-futuristic-silver text-sm mb-4">
              Subscribe to our newsletter for exclusive updates and early access offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-futuristic-darkgray border border-futuristic-lightgray/20 rounded-md py-2 px-4 text-sm text-white placeholder:text-futuristic-silver/60 focus:outline-none focus:ring-1 focus:ring-neon-blue"
              />
              <button 
                type="submit" 
                className="w-full bg-neon-blue hover:bg-neon-blue/90 text-white py-2 px-4 rounded-md font-medium text-sm transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-futuristic-lightgray/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-futuristic-silver text-xs order-2 md:order-1 mt-4 md:mt-0">
            © 2023 DST Electric. All rights reserved.
          </p>
          <div className="flex space-x-6 order-1 md:order-2">
            <a href="#" className="text-futuristic-silver hover:text-white text-xs transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-futuristic-silver hover:text-white text-xs transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-futuristic-silver hover:text-white text-xs transition-colors duration-300">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
  <a 
    href={href} 
    className="w-8 h-8 rounded-full bg-futuristic-darkgray flex items-center justify-center text-futuristic-silver hover:text-neon-blue hover:bg-futuristic-darkgray/80 transition-colors duration-300"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <li>
    <a 
      href={href}
      className="text-futuristic-silver hover:text-white transition-colors duration-300 text-sm"
    >
      {children}
    </a>
  </li>
);

export default Footer;
