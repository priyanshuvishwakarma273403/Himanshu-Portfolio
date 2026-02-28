// src/pages/Work.jsx
import { useEffect, useRef, useState } from 'react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects, categories } from '../data/projects';
import { useScrollReveal } from '../hooks/useGSAPAnimations';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
    {
        title: 'Genpact Office',
        desc: 'Large-scale corporate office acoustic treatment.',
        role: 'CNC File Designer & Operator',
        output: '1000+ acoustic sheets',
        result: '15% material saved via nesting optimisation',
        icon: '🏢',
        color: 'from-indigo-900/50 to-blue-900/50',
        accent: '#6366f1',
        slug: 'genpact-acoustic-panels',
    },
    {
        title: 'Blue Star Office',
        desc: 'Precision acoustic ceiling panel production.',
        role: 'CNC File Designer',
        output: '500+ acoustic panels',
        result: '100% first-pass cut approval',
        icon: '⭐',
        color: 'from-blue-900/50 to-cyan-900/50',
        accent: '#3b82f6',
        slug: 'blue-star-acoustic',
    },
    {
        title: 'Aerocity Commercial',
        desc: 'Decorative CNC panels for commercial interiors.',
        role: 'CNC File Designer & Operator',
        output: '300+ decorative panels',
        result: 'On-time delivery, client satisfaction',
        icon: '✈️',
        color: 'from-violet-900/50 to-purple-900/50',
        accent: '#8b5cf6',
        slug: 'aerocity-project',
    },
    {
        title: 'Studio XP',
        desc: 'Studio-grade acoustic treatment panels.',
        role: 'CNC File Designer',
        output: '300+ studio panels',
        result: 'Excellent acoustic performance reported',
        icon: '🎙️',
        color: 'from-emerald-900/50 to-teal-900/50',
        accent: '#10b981',
        slug: 'studio-xp-acoustic',
    },
];

export default function Work() {
    const [active, setActive] = useState('All');
    const pageRef = useRef(null);
    const headerRef = useRef(null);

    useScrollReveal(pageRef);

    useEffect(() => {
        document.title = 'Work – Himanshu Vishwakarma';

        // Header animate-in
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.from(headerRef.current?.querySelectorAll('[data-hero]') || [], {
            y: 35,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
        });

        return () => tl.progress(1).kill();
    }, []);

    const filtered =
        active === 'All'
            ? projects
            : projects.filter((p) => p.category === active);

    return (
        <div ref={pageRef}>
            {/* ── HEADER ── */}
            <section className="py-20 relative overflow-hidden" ref={headerRef}>
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 to-transparent pointer-events-none" />
                <Container className="relative z-10">
                    <div className="max-w-2xl">
                        <span data-hero className="inline-flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
                            <span className="w-6 h-px bg-indigo-500" />
                            Portfolio
                        </span>
                        <h1 data-hero className="font-display font-black text-5xl sm:text-6xl text-white leading-none mb-4">
                            Selected <span className="gradient-text">Work.</span>
                        </h1>
                        <p data-hero className="text-zinc-400 text-lg leading-relaxed">
                            Selected design + CNC production-ready work — from brand identities and social media campaigns
                            to acoustic panel production files for corporate offices.
                        </p>
                    </div>
                </Container>
            </section>

            {/* ── FILTER TABS ── */}
            <section className="pb-12">
                <Container>
                    <div data-gsap="fade-up" className="flex flex-wrap gap-2" role="tablist">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                role="tab"
                                aria-selected={active === cat}
                                onClick={() => setActive(cat)}
                                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 
                  ${active === cat
                                        ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
                                        : 'glass-card text-zinc-400 hover:text-white hover:border-indigo-500/20 border border-transparent'
                                    }`}
                            >
                                {cat}
                                <span className="ml-2 text-xs opacity-60">
                                    ({cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length})
                                </span>
                            </button>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ── PROJECT GRID ── */}
            <section className="pb-20">
                <Container>
                    {filtered.length === 0 ? (
                        <div className="text-center py-20 text-zinc-600">No projects in this category yet.</div>
                    ) : (
                        <div data-gsap="stagger" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filtered.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    )}
                </Container>
            </section>

            {/* ── CASE STUDIES ── */}
            <section className="py-20 border-t border-zinc-800/50">
                <Container>
                    <div data-gsap="fade-up">
                        <SectionTitle
                            label="Case Studies"
                            title="CNC Production Projects"
                            subtitle="Large-scale acoustic panel production projects with measurable outcomes."
                        />
                    </div>

                    <div data-gsap="stagger" className="grid sm:grid-cols-2 gap-6">
                        {caseStudies.map((cs) => (
                            <div
                                key={cs.title}
                                className={`glass-card rounded-2xl overflow-hidden card-hover`}
                            >
                                {/* Top gradient */}
                                <div className={`h-2 bg-gradient-to-r ${cs.color.replace('/50', '')}`} />

                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div
                                            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                                            style={{ background: `${cs.accent}20` }}
                                        >
                                            {cs.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-display font-bold text-white">{cs.title}</h3>
                                            <p className="text-zinc-500 text-xs">{cs.desc}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        {[
                                            { label: 'My Role', value: cs.role, icon: '👤' },
                                            { label: 'Output', value: cs.output, icon: '📦' },
                                            { label: 'Result', value: cs.result, icon: '✅' },
                                        ].map(({ label, value, icon }) => (
                                            <div key={label} className="flex gap-3 items-start">
                                                <span className="text-sm mt-0.5">{icon}</span>
                                                <div>
                                                    <span className="text-zinc-500 text-xs uppercase tracking-wide">{label}</span>
                                                    <p className="text-zinc-300 text-sm font-medium">{value}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    );
}
