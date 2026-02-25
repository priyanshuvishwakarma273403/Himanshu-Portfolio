// src/components/Footer.jsx
import { Link } from 'react-router-dom';

const footerLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Work', to: '/work' },
    { label: 'Contact', to: '/contact' },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative border-t border-zinc-800/60 bg-zinc-950/80 backdrop-blur-sm">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="font-display text-xl font-bold gradient-text block mb-3">
                            Himanshu<span className="text-indigo-400">.</span>
                        </Link>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                            Graphic Designer & CNC Operator based in New Delhi, India.
                            Designing brands + precision CNC-ready production files.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-4">Navigation</h4>
                        <ul className="space-y-2">
                            {footerLinks.map(({ label, to }) => (
                                <li key={to}>
                                    <Link
                                        to={to}
                                        className="text-zinc-500 hover:text-indigo-400 text-sm transition-colors duration-200"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-4">Get In Touch</h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="mailto:vishwakarmahimanshu898@gmail.com"
                                    className="text-zinc-500 hover:text-indigo-400 text-sm transition-colors duration-200 break-all"
                                >
                                    vishwakarmahimanshu898@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+918957751874"
                                    className="text-zinc-500 hover:text-indigo-400 text-sm transition-colors duration-200"
                                >
                                    +91-8957751874
                                </a>
                            </li>
                            <li>
                                <span className="text-zinc-500 text-sm">New Delhi, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="divider mb-6" />
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600">
                    <span>© {year} Himanshu Vishwakarma. All rights reserved.</span>
                    <span className="flex items-center gap-1">
                        Crafted with <span className="text-rose-500">♥</span> in New Delhi
                    </span>
                </div>
            </div>
        </footer>
    );
}
