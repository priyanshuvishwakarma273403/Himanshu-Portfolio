// src/layouts/MainLayout.jsx
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useLenis from '../hooks/useLenis';

export default function MainLayout() {
    const { pathname } = useLocation();

    // 🌊 Lenis smooth scroll — active globally
    useLenis();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [pathname]);

    return (
        <div className="min-h-screen bg-zinc-950 flex flex-col">
            {/* Subtle noise overlay */}
            <div className="noise-overlay" aria-hidden="true" />

            {/* Global ambient blobs */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
                <div
                    className="blob w-96 h-96 bg-indigo-600"
                    style={{ top: '-10%', left: '-5%', animationDelay: '0s' }}
                />
                <div
                    className="blob w-80 h-80 bg-blue-600"
                    style={{ top: '60%', right: '-10%', animationDelay: '2s' }}
                />
                <div
                    className="blob w-64 h-64 bg-violet-600"
                    style={{ bottom: '10%', left: '40%', animationDelay: '4s' }}
                />
            </div>

            <Navbar />

            <main className="relative z-10 flex-1 pt-16">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}
