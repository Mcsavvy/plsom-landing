import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import Link from 'next/link';

const Footer = () => {
    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Programs', href: '/programs' },
        { name: 'Enroll', href: '/enroll' },
    ];

    const courses = [
        'Doctrine 101',
        'Acts of the Apostles',
        'Evangelism and Outreach',
        'Church Administration',
        'The Pastoral',
        'Eschatology',
    ];

    return (
        <footer className="bg-gradient-to-b from-plsom-secondary-white to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* School Information */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-plsom-navy">
                            PLSOM
                        </h3>
                        <p className="text-plsom-navy/70 text-sm leading-relaxed">
                            Perfect Love School of Ministry is devoted to training and guiding the next generation
                            of Ministry leaders, empowering them to shape society for the glory of Jesus Christ.
                        </p>
                        {/* Contact Information */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3 text-plsom-navy/70 group">
                                <MapPin className="h-5 w-5 text-plsom-red" />
                                <span className="text-sm group-hover:text-plsom-navy transition-colors">
                                    124 Market St, Hyde, SK14 1EX, UK
                                </span>
                            </div>
                            <div className="flex items-center space-x-3 text-plsom-navy/70 group">
                                <Phone className="h-5 w-5 text-plsom-red" />
                                <span className="text-sm group-hover:text-plsom-navy transition-colors">
                                    +44 1234 567890
                                </span>
                            </div>
                            <div className="flex items-center space-x-3 text-plsom-navy/70 group">
                                <Mail className="h-5 w-5 text-plsom-red" />
                                <span className="text-sm group-hover:text-plsom-navy transition-colors">
                                    contact@perfectloveschoolofministry.com
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-plsom-navy mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-plsom-navy/70 hover:text-plsom-blue transition-colors text-sm flex items-center space-x-2"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-plsom-red"></span>
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h3 className="text-lg font-semibold text-plsom-navy mb-6">Our Programs</h3>
                        <ul className="space-y-3">
                            {courses.map((course) => (
                                <li key={course}>
                                    <Link
                                        href="/programs"
                                        className="text-plsom-navy/70 hover:text-plsom-blue transition-colors text-sm flex items-center space-x-2"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-plsom-red"></span>
                                        <span>{course}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold text-plsom-navy mb-6">Stay Updated</h3>
                        <p className="text-plsom-navy/70 text-sm mb-6">
                            Subscribe to our newsletter for updates on programs and events.
                        </p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 text-sm border border-plsom-secondary-blue rounded-md 
                                focus:outline-none focus:ring-2 focus:ring-plsom-blue bg-white text-plsom-navy
                                placeholder:text-plsom-navy/50"
                            />
                            <button
                                type="submit"
                                className="w-full px-4 py-3 text-sm text-white bg-plsom-red hover:bg-plsom-secondary-burgundy 
                                rounded-md transition-colors font-medium"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <Separator className="my-8 bg-plsom-secondary-blue" />

                {/* Footer Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-sm text-plsom-navy/70">
                        © {new Date().getFullYear()} Perfect Love School of Ministry. All rights reserved.
                    </p>
                    {/* Social Links */}
                    <div className="flex space-x-6">
                        <Link 
                            href="#" 
                            className="text-plsom-navy/70 hover:text-plsom-red transition-colors"
                            aria-label="Facebook"
                        >
                            <Facebook className="h-5 w-5" />
                        </Link>
                        <Link 
                            href="#" 
                            className="text-plsom-navy/70 hover:text-plsom-red transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram className="h-5 w-5" />
                        </Link>
                        <Link 
                            href="#" 
                            className="text-plsom-navy/70 hover:text-plsom-red transition-colors"
                            aria-label="Twitter"
                        >
                            <Twitter className="h-5 w-5" />
                        </Link>
                        <Link 
                            href="mailto:contact@perfectloveschoolofministry.com" 
                            className="text-plsom-navy/70 hover:text-plsom-red transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;