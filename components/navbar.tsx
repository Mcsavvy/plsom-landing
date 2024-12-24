"use client";
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Enroll', href: '/enroll', highlight: true },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="PLSOM Logo"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <span className="text-plsom-navy font-semibold text-lg hidden sm:block">
              Perfect Love School of Ministry
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-2">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.highlight ? (
                      <Link
                        href={item.href}
                        className="inline-flex items-center justify-center bg-plsom-red hover:bg-plsom-secondary-burgundy text-white px-6 py-2 rounded-md text-sm font-semibold transition-colors"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-plsom-navy hover:text-plsom-blue px-4 py-2 text-sm font-medium transition-colors relative group/navitem"
                      >
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-plsom-blue transform scale-x-0 group-hover/navitem:scale-x-100 transition-transform origin-left" />
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-plsom-navy hover:text-plsom-blue hover:bg-plsom-secondary-blue focus:outline-none focus:ring-2 focus:ring-plsom-blue transition-colors"
                  aria-label="Open main menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-white border-l border-plsom-secondary-blue"
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <nav className="flex flex-col gap-2 mt-8">
                      {navigationItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={`px-4 py-3 text-lg font-medium transition-colors rounded-md
                            ${item.highlight
                              ? 'bg-plsom-red text-white hover:bg-plsom-secondary-burgundy'
                              : 'text-plsom-navy hover:text-plsom-blue hover:bg-plsom-secondary-blue'
                            }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </nav>
                  </div>
                  <div className="py-4 px-4 border-t border-plsom-secondary-blue">
                    <p className="text-sm text-plsom-navy/70">
                      Perfect Love School of Ministry
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;