// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Button from './Button';

const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Work', to: '/work' },
    { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close menu on route change
    const handleLinkClick = () => setMenuOpen(false);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'glass border-b border-indigo-500/10 shadow-lg shadow-black/20'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-18">
                        {/* Logo */}
                        <Link
                            to="/"
                            className="font-display text-xl font-bold gradient-text select-none"
                            onClick={handleLinkClick}
                        >
                            Himanshu<span className="text-indigo-400">.</span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-1">
                            {navLinks.map(({ label, to }) => (
                                <NavLink
                                    key={to}
                                    to={to}
                                    end={to === '/'}
                                    className={({ isActive }) =>
                                        `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
                                            ? 'text-indigo-400 bg-indigo-500/10'
                                            : 'text-zinc-400 hover:text-white hover:bg-white/5'
                                        }`
                                    }
                                >
                                    {label}
                                </NavLink>
                            ))}
                        </nav>

                        {/* CTA + Hamburger */}
                        <div className="flex items-center gap-3">
                            <Button
                                to="/contact"
                                variant="primary"
                                className="hidden md:inline-flex text-xs px-4 py-2"
                            >
                                Hire Me
                            </Button>

                            {/* Hamburger */}
                            <button
                                id="mobile-menu-btn"
                                className="md:hidden p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                                onClick={() => setMenuOpen((prev) => !prev)}
                                aria-label="Toggle menu"
                            >
                                <div className="w-5 h-4 flex flex-col justify-between">
                                    <span
                                        className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''
                                            }`}
                                    />
                                    <span
                                        className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''
                                            }`}
                                    />
                                    <span
                                        className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''
                                            }`}
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="glass border-t border-indigo-500/10 px-4 py-4 flex flex-col gap-1">
                        {navLinks.map(({ label, to }) => (
                            <NavLink
                                key={to}
                                to={to}
                                end={to === '/'}
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
                                        ? 'text-indigo-400 bg-indigo-500/10'
                                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                                    }`
                                }
                            >
                                {label}
                            </NavLink>
                        ))}
                        <Button to="/contact" variant="primary" className="mt-2 w-full justify-center" onClick={handleLinkClick}>
                            Hire Me
                        </Button>
                    </div>
                </div>
            </header>
        </>
    );
}
