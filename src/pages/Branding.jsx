// src/pages/Branding.jsx
import { useEffect, useState, useCallback } from 'react';
import Container from '../components/Container';

// ── Branding images ──
import b1 from '../assets/branding/b1.jpg';
import b2 from '../assets/branding/b2.jpg';
import b3 from '../assets/branding/b3.jpg';
import b4 from '../assets/branding/b4.jpg';
import b5 from '../assets/branding/b5.jpg';
import b6 from '../assets/branding/b6.jpg';

const brandingWork = [
    {
        id: 1,
        img: b1,
        title: 'Brand Identity Design',
        category: 'Logo & Identity',
        desc: 'Full brand identity system with logo, color palette, and typography guidelines.',
        tags: ['Logo', 'Identity', 'Brand'],
        accent: '#6366f1',
    },
    {
        id: 2,
        img: b2,
        title: 'Visual Identity System',
        category: 'Brand System',
        desc: 'Cohesive visual branding system including stationery and digital assets.',
        tags: ['Visual', 'System', 'Print'],
        accent: '#8b5cf6',
    },
    {
        id: 3,
        img: b3,
        title: 'Corporate Branding',
        category: 'Corporate Identity',
        desc: 'Professional corporate identity with complete branding collateral.',
        tags: ['Corporate', 'Identity', 'Design'],
        accent: '#3b82f6',
    },
    {
        id: 4,
        img: b4,
        title: 'Brand Strategy & Design',
        category: 'Brand Strategy',
        desc: 'Strategic brand positioning translated into compelling visual design.',
        tags: ['Strategy', 'Positioning', 'Brand'],
        accent: '#10b981',
    },
    {
        id: 5,
        img: b5,
        title: 'Packaging & Brand',
        category: 'Packaging',
        desc: 'Brand-consistent packaging design for retail and e-commerce products.',
        tags: ['Packaging', 'Brand', 'Retail'],
        accent: '#f59e0b',
    },
    {
        id: 6,
        img: b6,
        title: 'Social Media Branding',
        category: 'Digital Branding',
        desc: 'Unified digital presence across social media with branded templates.',
        tags: ['Social', 'Digital', 'Templates'],
        accent: '#ec4899',
    },
];

// ── Stat counters ──
const stats = [
    { value: '6+', label: 'Brand Projects' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '3+', label: 'Years Experience' },
    { value: '20+', label: 'Design Assets' },
];

export default function Branding() {
    const [lightbox, setLightbox] = useState(null); // index of open image
    const [imgLoaded, setImgLoaded] = useState({});
    const [hovered, setHovered] = useState(null);

    useEffect(() => {
        document.title = 'Branding – Himanshu Vishwakarma';
    }, []);

    // ── Keyboard escape to close lightbox ──
    const handleKey = useCallback((e) => {
        if (e.key === 'Escape') setLightbox(null);
        if (e.key === 'ArrowRight') setLightbox((p) => (p !== null ? (p + 1) % brandingWork.length : null));
        if (e.key === 'ArrowLeft') setLightbox((p) => (p !== null ? (p - 1 + brandingWork.length) % brandingWork.length : null));
    }, []);

    useEffect(() => {
        if (lightbox !== null) {
            document.addEventListener('keydown', handleKey);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [lightbox, handleKey]);

    const current = lightbox !== null ? brandingWork[lightbox] : null;

    return (
        <>
            {/* ── HERO HEADER ── */}
            <section className="relative py-24 overflow-hidden">
                {/* Blobs */}
                <div
                    className="blob w-[500px] h-[500px] -top-20 -left-20"
                    style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }}
                />
                <div
                    className="blob w-[400px] h-[400px] top-10 right-0"
                    style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }}
                />

                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        {/* Label */}
                        <span className="inline-flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-5">
                            <span className="w-6 h-px bg-indigo-500" />
                            Branding Portfolio
                        </span>

                        <h1 className="font-display font-black text-5xl sm:text-7xl text-white leading-none mb-6">
                            Brand{' '}
                            <span className="gradient-text">Identities.</span>
                        </h1>

                        <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                            Crafting memorable brand identities that connect with audiences — from logo design
                            and visual systems to complete branding collaterals.
                        </p>

                        {/* Stat row */}
                        <div className="flex flex-wrap gap-8 mt-12">
                            {stats.map((s) => (
                                <div key={s.label}>
                                    <div className="font-display font-black text-3xl gradient-text">{s.value}</div>
                                    <div className="text-zinc-500 text-xs uppercase tracking-wide mt-0.5">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── GALLERY GRID ── */}
            <section className="pb-24">
                <Container>
                    {/* Section label */}
                    <div className="flex items-center gap-4 mb-10">
                        <div className="divider flex-1" />
                        <span className="text-zinc-500 text-xs uppercase tracking-widest font-semibold">Gallery</span>
                        <div className="divider flex-1" />
                    </div>

                    {/* Masonry-style grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {brandingWork.map((item, idx) => (
                            <div
                                key={item.id}
                                className={`group relative glass-card rounded-2xl overflow-hidden cursor-pointer
                                    transition-all duration-500 hover:-translate-y-2
                                    ${idx === 0 || idx === 3 ? 'sm:row-span-1' : ''}
                                `}
                                style={{
                                    boxShadow: hovered === idx
                                        ? `0 24px 60px ${item.accent}30, 0 0 0 1px ${item.accent}30`
                                        : '0 0 0 1px rgba(99,102,241,0.08)',
                                    transition: 'box-shadow 0.4s ease, transform 0.4s ease',
                                }}
                                onClick={() => setLightbox(idx)}
                                onMouseEnter={() => setHovered(idx)}
                                onMouseLeave={() => setHovered(null)}
                                tabIndex={0}
                                role="button"
                                aria-label={`View ${item.title}`}
                                onKeyDown={(e) => e.key === 'Enter' && setLightbox(idx)}
                            >
                                {/* Image */}
                                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                                    {/* Skeleton loader */}
                                    {!imgLoaded[idx] && (
                                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 animate-pulse" />
                                    )}
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        loading="lazy"
                                        onLoad={() => setImgLoaded((p) => ({ ...p, [idx]: true }))}
                                        className={`w-full h-full object-cover transition-all duration-700
                                            group-hover:scale-110
                                            ${imgLoaded[idx] ? 'opacity-100' : 'opacity-0'}
                                        `}
                                    />

                                    {/* Overlay */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                                        style={{
                                            background: `linear-gradient(135deg, ${item.accent}80 0%, #09090baa 100%)`,
                                        }}
                                    >
                                        <div className="text-white text-center px-4">
                                            <div className="w-12 h-12 rounded-full border-2 border-white/60 flex items-center justify-center mx-auto mb-3 backdrop-blur-sm bg-white/10">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                </svg>
                                            </div>
                                            <p className="text-sm font-semibold">View Full</p>
                                        </div>
                                    </div>

                                    {/* Category badge */}
                                    <div className="absolute top-3 left-3">
                                        <span
                                            className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md"
                                            style={{
                                                background: `${item.accent}25`,
                                                border: `1px solid ${item.accent}50`,
                                                color: item.accent,
                                            }}
                                        >
                                            {item.category}
                                        </span>
                                    </div>

                                    {/* Index number */}
                                    <div className="absolute top-3 right-3 w-7 h-7 rounded-lg glass flex items-center justify-center">
                                        <span className="text-zinc-400 text-xs font-bold">{String(item.id).padStart(2, '0')}</span>
                                    </div>
                                </div>

                                {/* Card body */}
                                <div className="p-5">
                                    <h3 className="font-display font-bold text-white text-base mb-1 group-hover:text-indigo-300 transition-colors duration-200">
                                        {item.title}
                                    </h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed mb-4">{item.desc}</p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {item.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                                                style={{
                                                    background: `${item.accent}15`,
                                                    color: item.accent,
                                                    border: `1px solid ${item.accent}25`,
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom glow line */}
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }}
                                />
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ── PROCESS SECTION ── */}
            <section className="py-20 border-t border-zinc-800/50">
                <Container>
                    <div className="text-center mb-14">
                        <span className="inline-flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
                            <span className="w-6 h-px bg-indigo-500" />
                            My Process
                            <span className="w-6 h-px bg-indigo-500" />
                        </span>
                        <h2 className="font-display font-black text-4xl text-white">
                            How I Build <span className="gradient-text">Brands</span>
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: '01', title: 'Discovery', desc: 'Understanding your business, audience, and goals through research and briefing.', icon: '🔍', color: '#6366f1' },
                            { step: '02', title: 'Strategy', desc: 'Defining brand positioning, personality, and visual direction.', icon: '🎯', color: '#8b5cf6' },
                            { step: '03', title: 'Design', desc: 'Creating logo, color palette, typography, and all visual elements.', icon: '✏️', color: '#3b82f6' },
                            { step: '04', title: 'Deliver', desc: 'Handing over all files in every format — print ready & digital.', icon: '📦', color: '#10b981' },
                        ].map((p) => (
                            <div
                                key={p.step}
                                className="glass-card rounded-2xl p-6 card-hover relative overflow-hidden group"
                            >
                                <div
                                    className="absolute top-0 right-0 font-display font-black text-7xl opacity-5 group-hover:opacity-10 transition-opacity duration-300 leading-none pr-4 pt-2"
                                    style={{ color: p.color }}
                                >
                                    {p.step}
                                </div>
                                <div
                                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
                                    style={{ background: `${p.color}20` }}
                                >
                                    {p.icon}
                                </div>
                                <h3 className="font-display font-bold text-white text-lg mb-2">{p.title}</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ── CTA ── */}
            <section className="py-20">
                <Container>
                    <div className="relative glass-card rounded-3xl overflow-hidden p-10 md:p-16 text-center">
                        <div
                            className="blob w-80 h-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }}
                        />
                        <div className="relative z-10">
                            <p className="text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">Ready to work together?</p>
                            <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-6">
                                Let's build your <span className="gradient-text">brand.</span>
                            </h2>
                            <p className="text-zinc-400 max-w-md mx-auto mb-8">
                                Have a project in mind? I'd love to help you create a brand identity that stands out.
                            </p>
                            <a href="/contact" className="btn-primary inline-flex gap-2 px-8 py-4 text-base rounded-2xl">
                                Start a Project
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── LIGHTBOX ── */}
            {lightbox !== null && current && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center"
                    style={{ background: 'rgba(9,9,11,0.95)', backdropFilter: 'blur(20px)' }}
                    onClick={() => setLightbox(null)}
                >
                    <div
                        className="relative max-w-4xl w-full mx-4 glass-card rounded-3xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image */}
                        <div className="relative">
                            <img
                                src={current.img}
                                alt={current.title}
                                className="w-full max-h-[70vh] object-contain bg-zinc-950"
                            />

                            {/* Close */}
                            <button
                                className="absolute top-4 right-4 w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                                onClick={() => setLightbox(null)}
                                aria-label="Close"
                            >
                                ✕
                            </button>

                            {/* Prev */}
                            <button
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                                onClick={() => setLightbox((p) => (p - 1 + brandingWork.length) % brandingWork.length)}
                                aria-label="Previous"
                            >
                                ←
                            </button>

                            {/* Next */}
                            <button
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                                onClick={() => setLightbox((p) => (p + 1) % brandingWork.length)}
                                aria-label="Next"
                            >
                                →
                            </button>
                        </div>

                        {/* Info bar */}
                        <div className="p-5 flex items-center justify-between gap-4">
                            <div>
                                <span
                                    className="text-xs font-semibold uppercase tracking-wide mb-1 block"
                                    style={{ color: current.accent }}
                                >
                                    {current.category}
                                </span>
                                <h3 className="font-display font-bold text-white text-lg">{current.title}</h3>
                                <p className="text-zinc-500 text-sm mt-1">{current.desc}</p>
                            </div>
                            <div className="flex-shrink-0 text-zinc-600 text-sm font-bold">
                                {lightbox + 1} / {brandingWork.length}
                            </div>
                        </div>

                        {/* Tag row */}
                        <div className="px-5 pb-5 flex gap-2 flex-wrap">
                            {current.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 rounded-full text-xs font-medium"
                                    style={{
                                        background: `${current.accent}15`,
                                        color: current.accent,
                                        border: `1px solid ${current.accent}25`,
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Dot navigation */}
                        <div className="flex justify-center gap-2 pb-5">
                            {brandingWork.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setLightbox(i)}
                                    className={`rounded-full transition-all duration-200 ${i === lightbox
                                            ? 'w-6 h-2 bg-indigo-500'
                                            : 'w-2 h-2 bg-zinc-700 hover:bg-zinc-500'
                                        }`}
                                    aria-label={`Go to image ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
