// src/pages/ProjectDetails.jsx
import { useEffect, useRef, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import Container from '../components/Container';
import Badge from '../components/Badge';
import Button from '../components/Button';
import { projects } from '../data/projects';
import { useScrollReveal } from '../hooks/useGSAPAnimations';

export default function ProjectDetails() {
    const { slug } = useParams();
    const pageRef = useRef(null);
    const headerRef = useRef(null);
    useScrollReveal(pageRef);

    const projectIndex = projects.findIndex((p) => p.slug === slug);
    const project = projects[projectIndex];
    const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
    const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

    // Lightbox state
    const [lightbox, setLightbox] = useState(null);
    const [imgLoaded, setImgLoaded] = useState({});

    useEffect(() => {
        if (project) {
            document.title = `${project.title} – Himanshu Vishwakarma`;
            // Hero animate-in
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
            tl.from('[data-hero-detail]', { y: 30, opacity: 0, duration: 0.7, stagger: 0.12 });
            return () => tl.kill();
        } else {
            document.title = 'Project Not Found – Himanshu Vishwakarma';
        }
    }, [project]);

    // ── Keyboard navigation for lightbox ──
    const handleKey = useCallback((e) => {
        if (!project?.images) return;
        if (e.key === 'Escape') setLightbox(null);
        if (e.key === 'ArrowRight') setLightbox((p) => (p !== null ? (p + 1) % project.images.length : null));
        if (e.key === 'ArrowLeft') setLightbox((p) => (p !== null ? (p - 1 + project.images.length) % project.images.length : null));
    }, [project]);

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

    if (!project) {
        return (
            <section className="min-h-screen flex items-center justify-center">
                <Container>
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">🔍</div>
                        <h1 className="font-display font-bold text-white text-3xl mb-3">Project Not Found</h1>
                        <p className="text-zinc-400 mb-6">This project doesn't exist or the URL is incorrect.</p>
                        <Button to="/work" variant="primary">← Back to Work</Button>
                    </div>
                </Container>
            </section>
        );
    }

    const {
        title, shortDesc, description, category, tags, tools,
        gradient, accentColor, role, output, result, images, heroImage,
    } = project;

    const hasImages = images && images.length > 0;

    // Simulated gallery placeholders (for projects without real images)
    const placeholderItems = [1, 2, 3, 4];

    return (
        <div ref={pageRef}>
            {/* ── HERO ── */}
            <section className="relative py-28 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20`} />
                <div
                    className="absolute inset-0 opacity-10"
                    style={{ background: `radial-gradient(circle at 40% 50%, ${accentColor}66 0%, transparent 60%)` }}
                />

                <Container className="relative z-10">
                    <Link
                        to="/work"
                        className="inline-flex items-center gap-2 text-zinc-500 hover:text-indigo-400 text-sm font-medium transition-colors mb-8"
                    >
                        ← Back to Work
                    </Link>

                    <div className="max-w-3xl">
                        <div data-hero-detail className="flex flex-wrap gap-2 mb-5">
                            <span
                                className="px-3 py-1 rounded-full text-xs font-semibold"
                                style={{ background: `${accentColor}22`, color: accentColor, border: `1px solid ${accentColor}44` }}
                            >
                                {category}
                            </span>
                            {tags.map((tag) => (
                                <Badge key={tag}>{tag}</Badge>
                            ))}
                        </div>

                        <h1 data-hero-detail className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-none mb-4">
                            {title}
                        </h1>
                        <p data-hero-detail className="text-zinc-300 text-xl leading-relaxed">{shortDesc}</p>
                    </div>
                </Container>
            </section>

            {/* ── HERO BANNER IMAGE (if exists) ── */}
            {heroImage && (
                <section className="relative w-full overflow-hidden" style={{ maxHeight: '420px' }}>
                    <div className="absolute inset-0 z-10" style={{
                        background: `linear-gradient(to bottom, rgba(9,9,11,0.6) 0%, transparent 30%, transparent 70%, rgba(9,9,11,0.8) 100%)`
                    }} />
                    <div
                        className="absolute inset-0 z-10 opacity-30"
                        style={{ background: `radial-gradient(ellipse at center, ${accentColor}33 0%, transparent 70%)` }}
                    />
                    <img
                        src={heroImage}
                        alt={`${title} poster`}
                        className="w-full object-cover object-center"
                        style={{ height: '420px' }}
                    />
                    {/* Bottom label */}
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20">
                        <span
                            className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm"
                            style={{ background: `${accentColor}33`, color: accentColor, border: `1px solid ${accentColor}55` }}
                        >
                            {category} · Design Collection
                        </span>
                    </div>
                </section>
            )}

            {/* ── OVERVIEW ── */}
            <section className="py-16">
                <Container>
                    <div className="grid lg:grid-cols-3 gap-10">

                        {/* Left: Details */}
                        <div className="lg:col-span-2 space-y-10">

                            {/* Overview */}
                            <div data-gsap="fade-up">
                                <h2 className="font-display font-bold text-white text-2xl mb-4">Project Overview</h2>
                                <p className="text-zinc-400 leading-relaxed">{description}</p>
                            </div>

                            {/* Process */}
                            <div data-gsap="fade-up">
                                <h2 className="font-display font-bold text-white text-2xl mb-4">Process</h2>
                                <div className="space-y-4">
                                    {['Brief & Requirements Analysis', 'Design & File Creation', 'Client Review & Revisions', 'Production-Ready Delivery'].map((step, i) => (
                                        <div key={step} className="flex gap-4 items-start">
                                            <div
                                                className="w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
                                                style={{ background: `${accentColor}20`, color: accentColor }}
                                            >
                                                {i + 1}
                                            </div>
                                            <div>
                                                <p className="text-white font-medium text-sm">{step}</p>
                                                <p className="text-zinc-500 text-sm mt-0.5">
                                                    {[
                                                        'Thorough client consultation to understand scope, materials, and deadlines.',
                                                        'Designing precision files in CorelDRAW/Illustrator with exact tolerances.',
                                                        'Iterating on designs based on client feedback and technical constraints.',
                                                        'Final export in machine-compatible formats with documentation.',
                                                    ][i]}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* ── GALLERY ── */}
                            <div data-gsap="fade-up">
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="font-display font-bold text-white text-2xl">
                                        {hasImages ? `${category} Gallery` : 'Gallery'}
                                    </h2>
                                    {hasImages && (
                                        <span className="text-zinc-500 text-xs font-medium">
                                            {images.length} images · click to expand
                                        </span>
                                    )}
                                </div>

                                {hasImages ? (
                                    /* ── REAL IMAGES GRID ── */
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {images.map((src, idx) => (
                                            <div
                                                key={idx}
                                                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer glass-card"
                                                style={{
                                                    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                                                }}
                                                onClick={() => setLightbox(idx)}
                                                tabIndex={0}
                                                role="button"
                                                aria-label={`Branding image ${idx + 1}`}
                                                onKeyDown={(e) => e.key === 'Enter' && setLightbox(idx)}
                                            >
                                                {/* Skeleton */}
                                                {!imgLoaded[idx] && (
                                                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 animate-pulse" />
                                                )}

                                                <img
                                                    src={src}
                                                    alt={`Branding work ${idx + 1}`}
                                                    loading="lazy"
                                                    onLoad={() => setImgLoaded((prev) => ({ ...prev, [idx]: true }))}
                                                    className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${imgLoaded[idx] ? 'opacity-100' : 'opacity-0'}`}
                                                />

                                                {/* Hover overlay */}
                                                <div
                                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                                                    style={{ background: `${accentColor}55` }}
                                                >
                                                    <div className="w-10 h-10 rounded-full border-2 border-white/60 flex items-center justify-center backdrop-blur-sm bg-white/10 text-white text-sm">
                                                        ⤢
                                                    </div>
                                                </div>

                                                {/* Index badge */}
                                                <div className="absolute top-2 right-2 w-6 h-6 rounded-lg glass flex items-center justify-center">
                                                    <span className="text-zinc-300 text-[10px] font-bold">{String(idx + 1).padStart(2, '0')}</span>
                                                </div>

                                                {/* Bottom glow */}
                                                <div
                                                    className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    /* ── PLACEHOLDER GRID (for non-branding projects) ── */
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {placeholderItems.map((id) => (
                                            <div
                                                key={id}
                                                className={`h-44 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}
                                            >
                                                <div
                                                    className="absolute inset-0"
                                                    style={{
                                                        background: `radial-gradient(circle at ${30 + id * 15}% ${40 + id * 10}%, ${accentColor}33 0%, transparent 60%)`,
                                                    }}
                                                />
                                                <p className="relative z-10 text-white/30 text-sm font-medium">
                                                    Deliverable {id}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right: Sidebar */}
                        <div className="space-y-5">
                            {[
                                { label: 'Role', value: role, icon: '👤' },
                                { label: 'Output', value: output, icon: '📦' },
                                { label: 'Result', value: result, icon: '✅' },
                            ].map(({ label, value, icon }) => value && (
                                <div key={label} className="glass-card rounded-2xl p-5">
                                    <p className="text-zinc-500 text-xs uppercase tracking-wide mb-1.5 flex items-center gap-2">
                                        <span>{icon}</span> {label}
                                    </p>
                                    <p className="text-white text-sm font-medium leading-relaxed">{value}</p>
                                </div>
                            ))}

                            {/* Tools */}
                            <div className="glass-card rounded-2xl p-5">
                                <p className="text-zinc-500 text-xs uppercase tracking-wide mb-3 flex items-center gap-2">
                                    <span>🛠️</span> Tools Used
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {tools.map((tool) => (
                                        <span
                                            key={tool}
                                            className="px-2.5 py-1 rounded-lg bg-zinc-800/60 text-zinc-300 text-xs font-medium border border-zinc-700/50"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Branding badge */}
                            {hasImages && (
                                <div
                                    className="glass-card rounded-2xl p-5"
                                    style={{ border: `1px solid ${accentColor}30` }}
                                >
                                    <p className="text-zinc-500 text-xs uppercase tracking-wide mb-2 flex items-center gap-2">
                                        <span>🎨</span> Branding Assets
                                    </p>
                                    <p className="text-white text-sm font-semibold">{images.length} design deliverables</p>
                                    <p className="text-zinc-500 text-xs mt-1">Click any image to view fullscreen</p>
                                </div>
                            )}

                            {/* CTA */}
                            <div className="glass-card rounded-2xl p-5 text-center">
                                <p className="text-zinc-400 text-sm mb-4">Interested in a similar project?</p>
                                <Button to="/contact" variant="primary" className="w-full justify-center">
                                    Hire Me →
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── PREV / NEXT NAVIGATION ── */}
            <section className="pb-20">
                <Container>
                    <div className="divider mb-10" />
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                        {prevProject ? (
                            <Link
                                to={`/project/${prevProject.slug}`}
                                className="glass-card rounded-2xl p-5 flex items-center gap-4 card-hover group flex-1 max-w-sm"
                            >
                                <span className="text-zinc-500 group-hover:text-indigo-400 transition-colors text-xl">←</span>
                                <div>
                                    <p className="text-zinc-500 text-xs uppercase tracking-wide">Previous</p>
                                    <p className="text-white text-sm font-semibold leading-tight group-hover:text-indigo-300 transition-colors">
                                        {prevProject.title}
                                    </p>
                                </div>
                            </Link>
                        ) : <div />}

                        {nextProject ? (
                            <Link
                                to={`/project/${nextProject.slug}`}
                                className="glass-card rounded-2xl p-5 flex items-center gap-4 card-hover group flex-1 max-w-sm text-right sm:justify-end"
                            >
                                <div>
                                    <p className="text-zinc-500 text-xs uppercase tracking-wide">Next</p>
                                    <p className="text-white text-sm font-semibold leading-tight group-hover:text-indigo-300 transition-colors">
                                        {nextProject.title}
                                    </p>
                                </div>
                                <span className="text-zinc-500 group-hover:text-indigo-400 transition-colors text-xl">→</span>
                            </Link>
                        ) : <div />}
                    </div>
                </Container>
            </section>

            {/* ── LIGHTBOX ── */}
            {lightbox !== null && hasImages && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center"
                    style={{ background: 'rgba(9,9,11,0.96)', backdropFilter: 'blur(24px)' }}
                    onClick={() => setLightbox(null)}
                >
                    <div
                        className="relative max-w-5xl w-full mx-4 glass-card rounded-3xl overflow-hidden"
                        style={{ border: `1px solid ${accentColor}30` }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image */}
                        <div className="relative bg-zinc-950">
                            <img
                                src={images[lightbox]}
                                alt={`Branding work ${lightbox + 1}`}
                                className="w-full max-h-[70vh] object-contain"
                            />

                            {/* Close */}
                            <button
                                className="absolute top-4 right-4 w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                                onClick={() => setLightbox(null)}
                                aria-label="Close lightbox"
                            >
                                ✕
                            </button>

                            {/* Prev */}
                            <button
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                                onClick={() => setLightbox((p) => (p - 1 + images.length) % images.length)}
                                aria-label="Previous image"
                            >
                                ←
                            </button>

                            {/* Next */}
                            <button
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                                onClick={() => setLightbox((p) => (p + 1) % images.length)}
                                aria-label="Next image"
                            >
                                →
                            </button>
                        </div>

                        {/* Info bar */}
                        <div className="px-6 py-4 flex items-center justify-between gap-4">
                            <div>
                                <span
                                    className="text-xs font-semibold uppercase tracking-wide"
                                    style={{ color: accentColor }}
                                >
                                    {category} · Branding Work
                                </span>
                                <p className="text-zinc-300 text-sm mt-0.5">{title}</p>
                            </div>
                            <span className="text-zinc-600 text-sm font-bold flex-shrink-0">
                                {lightbox + 1} / {images.length}
                            </span>
                        </div>

                        {/* Dot navigation */}
                        <div className="flex justify-center gap-2 pb-4">
                            {images.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setLightbox(i)}
                                    className={`rounded-full transition-all duration-200 ${i === lightbox
                                        ? 'w-6 h-2'
                                        : 'w-2 h-2 bg-zinc-700 hover:bg-zinc-500'
                                        }`}
                                    style={i === lightbox ? { background: accentColor } : {}}
                                    aria-label={`Go to image ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
