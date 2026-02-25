// src/pages/Home.jsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
import { featuredProjects } from '../data/projects';

const stats = [
    { value: '1000+', label: 'CNC Sheets Produced', icon: '⚡' },
    { value: '12+', label: 'Projects Delivered', icon: '🎯' },
    { value: '4+', label: 'Major Case Studies', icon: '📋' },
    { value: '3+', label: 'Years Experience', icon: '🏆' },
];

const tools = ['CorelDRAW', 'Illustrator', 'Photoshop', 'Canva', 'Oscillating CNC', 'Laser Cutting', 'ChatGPT', 'Gemini'];

export default function Home() {
    useEffect(() => {
        document.title = 'Himanshu Vishwakarma | Graphic Designer & CNC Operator';
    }, []);

    return (
        <>
            {/* ── HERO ── */}
            <section className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden">
                {/* Radial glow */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute"
                        style={{
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '80vw',
                            height: '80vw',
                            maxWidth: '900px',
                            maxHeight: '900px',
                            background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 65%)',
                            borderRadius: '50%',
                        }}
                    />
                </div>

                <Container className="relative z-10 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Text */}
                        <div className="animate-fade-up">
                            {/* Status pill */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-indigo-500/20 text-xs text-indigo-300 font-medium mb-6">
                                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                                Available for freelance work · New Delhi, India
                            </div>

                            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-none mb-6 text-white">
                                Hi, I'm{' '}
                                <span className="gradient-text block">Himanshu.</span>
                            </h1>

                            <p className="text-zinc-300 text-lg sm:text-xl font-light mb-3 leading-relaxed">
                                Graphic Designer <span className="text-zinc-600">·</span> CNC Operator{' '}
                                <span className="text-zinc-600">·</span> Production File Specialist
                            </p>

                            <p className="text-zinc-400 text-base max-w-lg mb-8 leading-relaxed">
                                Designing brands + precision CNC-ready production files.{' '}
                                <span className="text-indigo-300">
                                    Where creative design meets manufacturing precision.
                                </span>
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <Button to="/work" variant="primary">
                                    View My Work →
                                </Button>
                                <Button
                                    href="/Himanshu_Vishwakarma_Resume.pdf"
                                    variant="ghost"
                                    download
                                >
                                    Download CV ↓
                                </Button>
                            </div>
                        </div>

                        {/* Right: Abstract visual */}
                        <div className="hidden lg:flex items-center justify-center animate-fade-in animate-delay-300">
                            <div className="relative w-80 h-80">
                                {/* Outer ring */}
                                <div className="absolute inset-0 rounded-full border border-indigo-500/20 animate-[spin_20s_linear_infinite]" />
                                <div className="absolute inset-4 rounded-full border border-indigo-500/10 animate-[spin_15s_linear_infinite_reverse]" />

                                {/* Center card */}
                                <div className="absolute inset-8 glass rounded-3xl flex items-center justify-center animate-float">
                                    <div className="text-center p-6">
                                        <div className="text-6xl mb-3">🎨</div>
                                        <p className="gradient-text font-display font-bold text-lg">Design</p>
                                        <p className="text-zinc-500 text-xs">+</p>
                                        <p className="text-indigo-400 font-display font-bold text-lg">Precision</p>
                                    </div>
                                </div>

                                {/* Floating skill badges */}
                                {[
                                    { label: 'CNC', pos: 'top-0 right-4', color: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' },
                                    { label: 'Logo', pos: 'bottom-4 left-0', color: 'bg-violet-500/20 text-violet-300 border-violet-500/30' },
                                    { label: 'Vector', pos: 'top-12 left-0', color: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
                                    { label: 'Print', pos: 'bottom-12 right-0', color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
                                ].map(({ label, pos, color }) => (
                                    <div
                                        key={label}
                                        className={`absolute ${pos} px-3 py-1.5 rounded-full text-xs font-semibold border ${color}`}
                                    >
                                        {label}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 animate-bounce">
                    <span className="text-xs">scroll</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 3v10M8 13l-4-4M8 13l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </section>

            {/* ── STATS ── */}
            <section className="py-16 border-y border-zinc-800/50">
                <Container>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map(({ value, label, icon }, i) => (
                            <div
                                key={label}
                                className={`glass-card rounded-2xl p-6 text-center card-hover animate-fade-up animate-delay-${(i + 1) * 100}`}
                            >
                                <div className="text-3xl mb-2">{icon}</div>
                                <div className="font-display font-black text-3xl gradient-text mb-1">{value}</div>
                                <div className="text-zinc-500 text-sm">{label}</div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ── FEATURED WORK ── */}
            <section className="py-20">
                <Container>
                    <SectionTitle
                        label="Selected Work"
                        title="Featured Projects"
                        subtitle="A curated selection of design and CNC production work across multiple industries."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                        {featuredProjects.slice(0, 6).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                    <div className="text-center">
                        <Button to="/work" variant="ghost">
                            View All Projects →
                        </Button>
                    </div>
                </Container>
            </section>

            {/* ── TOOLS MARQUEE ── */}
            <section className="py-10 border-y border-zinc-800/50 overflow-hidden">
                <div className="flex gap-8 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
                    {[...tools, ...tools].map((tool, i) => (
                        <span key={i} className="inline-flex items-center gap-2 text-zinc-600 font-medium text-sm">
                            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                            {tool}
                        </span>
                    ))}
                </div>
            </section>

            {/* ── CTA STRIP ── */}
            <section className="py-20">
                <Container>
                    <div className="glass-card rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden">
                        {/* Background glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-blue-900/20 pointer-events-none" />
                        <div className="relative z-10">
                            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4 leading-tight">
                                Need a designer who also{' '}
                                <span className="gradient-text">understands production?</span>
                            </h2>
                            <p className="text-zinc-400 text-base mb-8 max-w-xl mx-auto">
                                From logo to laser-cut — I bridge the gap between design and manufacturing.
                                Let's create something exceptional together.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <Button to="/contact" variant="primary">
                                    Let's Talk →
                                </Button>
                                <Button to="/about" variant="ghost">
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </>
    );
}
