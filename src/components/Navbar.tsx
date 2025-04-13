
import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-4">
      <div className="flex items-center">
        <span className="font-bebas text-2xl md:text-3xl tracking-wider text-white">CHAINSAW</span>
      </div>
      
      <div className="hidden md:flex items-center gap-6">
        <NavLink href="#about">ABOUT</NavLink>
        <NavLink href="#characters">CHARACTERS</NavLink>
        <NavLink href="#modes">GAME MODES</NavLink>
        <NavLink href="#contact">CONTACT</NavLink>
      </div>
      
      <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
        <Menu />
      </Button>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  return (
    <a 
      href={href} 
      className="font-bebas text-lg text-white opacity-80 hover:opacity-100 transition-opacity"
    >
      {children}
    </a>
  );
};

export default Navbar;
