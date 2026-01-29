'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StickyHeader() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show header after scrolling down 600px (past most of the Hero)
            if (window.scrollY > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold tracking-tighter text-white hover:text-gray-300 transition-colors">
                    FIRSEL <span className="text-white">TATTOO</span>
                </Link>

                <nav className="flex items-center gap-6 md:gap-8">
                    <Link href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors hidden md:block">
                        Home
                    </Link>
                    <Link href="#about" className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors hidden md:block">
                        About
                    </Link>
                    <Link href="#portfolio" className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors hidden md:block">
                        Work
                    </Link>
                    <Link
                        href="/book"
                        className="px-5 py-2 bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-gray-200 transition-all rounded-sm"
                    >
                        Book Now
                    </Link>
                </nav>
            </div>
        </header>
    );
}
