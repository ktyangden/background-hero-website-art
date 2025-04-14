
import React from 'react';
import { Separator } from './ui/separator';
import { Github, Twitter, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white py-12 noise-bg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-bebas text-2xl mb-4">CHAINSAW</h3>
            <p className="text-sm text-white/70 mb-6">
              Explore the dark, brutal world of Chainsaw Man<br></br>
              through this fan-made tribute to the hit manga<br></br>
              and anime series.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Youtube size={18} />} />
              <SocialIcon icon={<Github size={18} />} />
            </div>
          </div>
          
          <div>
            <h3 className="font-bebas text-xl mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#characters">Characters</FooterLink>
              <FooterLink href="#videos">Videos</FooterLink>
              <FooterLink href="#story">Story Timeline</FooterLink>
              <FooterLink href="#support">Support</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bebas text-xl mb-4">NEWSLETTER</h3>
            <p className="text-sm text-white/70 mb-4">
              Subscribe to receive the latest news and updates about Chainsaw Man.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border border-white/20 px-4 py-2 text-sm w-full focus:outline-none focus:border-chainsaw-orange"
              />
              <button className="bg-chainsaw-orange px-4 py-2 font-bebas whitespace-nowrap">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-white/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60">
            © 2025 Chainsaw Man Fanpage. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="text-sm text-white/60">Privacy Policy</span>
            <span className="text-sm text-white/60">Terms of Service</span>
            <span className="text-sm text-white/60">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <a href="#" className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-chainsaw-orange transition-colors duration-200">
      {icon}
    </a>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <li>
      <a href={href} className="text-white/70 hover:text-chainsaw-orange transition-colors">
        {children}
      </a>
    </li>
  );
};

export default Footer;
