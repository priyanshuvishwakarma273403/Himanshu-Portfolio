// src/pages/About.jsx
import { useEffect, useRef } from 'react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Badge from '../components/Badge';
import { useScrollReveal } from '../hooks/useGSAPAnimations';

const designSkills = [
    'Logo & Brand Identity',
    'Poster & Social Media Design',
    'Packaging Design',
    'Pre-Press & Print Production',
    'Typography & Layout',
    'Corporate Identity',
    'Colour Theory',
    'Illustration & Vector Art',
];

const cncSkills = [
    '2D CNC Cutting File Design',
    'Oscillating Blade CNC Operation',
    'Acoustic Panel Production',
    'Nesting & Sheet Optimisation',
    'Laser Cutting Files',
    'File Format Conversion',
    'Tolerance & Kerf Calibration',
    'Production File QA',
];

const toolsList = [
    { name: 'CorelDRAW', icon: '🖊️', type: 'Design' },
    { name: 'Adobe Illustrator', icon: '✏️', type: 'Design' },
    { name: 'Adobe Photoshop', icon: '🖼️', type: 'Design' },
    { name: 'Canva', icon: '🎨', type: 'Design' },
    { name: 'Oscillating CNC', icon: '⚙️', type: 'CNC' },
    { name: 'Laser Cutter', icon: '🔦', type: 'CNC' },
    { name: 'ChatGPT', icon: '🤖', type: 'AI' },
    { name: 'Gemini', icon: '✨', type: 'AI' },
];

const experience = [
    {
        company: 'Unique Sign',
        role: 'Graphic Designer',
        period: '2021 – 2022',
        desc: 'Handled full-cycle graphic design: logo creation, signage artwork, banners, and print-ready production files. Worked on corporate identity projects for multiple clients.',
        color: 'indigo',
    },
    {
        company: 'Nitsa Holiday',
        role: 'Graphic Designer & Brand Consultant',
        period: '2022 – 2023',
        desc: 'Developed complete brand identity including logo, stationery, social media templates, and promotional materials. Ensured brand consistency across all touchpoints.',
        color: 'blue',
    },
    {
        company: 'World Human Rights Organisation',
        role: 'Graphic Designer (Volunteer)',
        period: '2023',
        desc: 'Created awareness campaign posters and digital assets for NGO campaigns. Focused on impactful visual storytelling for social causes.',
        color: 'violet',
    },
    {
        company: 'Freelance',
        role: 'Graphic & Visual Designer',
        period: '2023 – Present',
        desc: 'Partnered with multiple clients to deliver high-quality graphic design solutions, including customized brand identities, social media campaigns, marketing materials, and tailored print assets.',
        color: 'emerald',
    },
];

const education = [
    {
        degree: 'B.A. Programme',
        institute: 'University of Delhi',
        year: '2021–2024',
        icon: '🎓',
    },
    {
        degree: 'Diploma in Graphic Design',
        institute: 'Design Institute, New Delhi',
        year: '2020–2021',
        icon: '🎨',
    },
    {
        degree: 'CBSE 12th',
        institute: 'Central Board of Secondary Education',
        year: '2021',
        icon: '📚',
    },
    {
        degree: 'CBSE 10th',
        institute: 'Central Board of Secondary Education',
        year: '2019',
        icon: '📚',
    },
];

export default function About() {
    const pageRef = useRef(null);
    useScrollReveal(pageRef);

    useEffect(() => {
        document.title = 'About – Himanshu Vishwakarma';
    }, []);

    return (
        <div ref={pageRef}>
            {/* ── PAGE HEADER ── */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 to-transparent pointer-events-none" />
                <Container className="relative z-10">
                    <div className="max-w-2xl">
                        <span data-gsap="fade-up" className="inline-flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
                            <span className="w-6 h-px bg-indigo-500" />
                            About Me
                        </span>
                        <h1 data-gsap="fade-up" className="font-display font-black text-5xl sm:text-6xl text-white leading-none mb-6">
                            The person <span className="gradient-text">behind the work.</span>
                        </h1>
                        <p data-gsap="fade-up" className="text-zinc-400 text-lg leading-relaxed">
                            I'm <span className="text-white font-semibold">Himanshu Vishwakarma</span>, a Graphic Designer and
                            CNC Operator based in New Delhi, India. I bridge the gap between creative visual design
                            and precision manufacturing — from crafting compelling brand identities to producing
                            CNC-ready cutting files for large-scale interior projects.
                        </p>
                    </div>
                </Container>
            </section>

            {/* ── BIO ── */}
            <section className="py-10">
                <Container>
                    <div className="grid lg:grid-cols-5 gap-10 items-start">
                        {/* Avatar */}
                        <div data-gsap="slide-left" className="lg:col-span-2 flex justify-center">
                            <div className="relative">
                                {/* Profile image */}
                                <div className="w-64 h-80 rounded-3xl overflow-hidden ring-2 ring-indigo-500/30 shadow-2xl shadow-indigo-500/20 bg-slate-900">
                                    <img
                                        src="/himanshu.jpeg"
                                        alt="Himanshu Vishwakarma"
                                        className="w-full h-full object-contain object-top hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                {/* Name badge */}
                                <div className="absolute -bottom-3 -right-3 glass rounded-2xl px-4 py-3">
                                    <p className="text-white font-semibold text-sm">Himanshu V.</p>
                                    <p className="text-indigo-400 text-xs">New Delhi, India 🇮🇳</p>
                                </div>
                                {/* Floating ring */}
                                <div className="absolute -inset-3 rounded-3xl border border-indigo-500/20 -z-10 animate-pulse-slow" />
                            </div>
                        </div>

                        {/* Text */}
                        <div data-gsap="slide-right" className="lg:col-span-3 space-y-4 text-zinc-400 leading-relaxed">
                            <p>
                                With a background spanning <span className="text-white">graphic design and CNC manufacturing</span>,
                                I bring a rare combination of visual creativity and technical precision to every project.
                                My work ranges from corporate logo systems and packaging design to complex 2D cutting files
                                for oscillating CNC machines used in acoustic interior installations.
                            </p>
                            <p>
                                Having worked with companies like <span className="text-indigo-300">Unique Sign, Nitsa Holiday</span>,
                                and the World Human Rights Organisation, and produced 1000+ acoustic panels for corporate offices
                                including Genpact and Blue Star, I understand what it means to deliver quality at scale.
                            </p>
                            <p>
                                Whether you need a <span className="text-white">brand that stands out</span> or
                                <span className="text-white"> production-ready CNC files</span> that go straight to the machine —
                                I've got you covered.
                            </p>
                            <div className="flex flex-wrap gap-3 pt-4">
                                <Button to="/contact" variant="primary">Get In Touch →</Button>
                                <Button href="/Himanshu_Vishwakarma_Resume.pdf" variant="ghost" download>Download CV ↓</Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── SKILLS ── */}
            <section className="py-20">
                <Container>
                    <div data-gsap="fade-up">
                        <SectionTitle
                            label="Expertise"
                            title="Skills & Capabilities"
                            subtitle="Dual expertise in visual design and precision CNC production."
                        />
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Design Skills */}
                            <div className="glass-card rounded-2xl p-6 card-hover">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-indigo-500/15 rounded-xl flex items-center justify-center text-xl">🎨</div>
                                    <div>
                                        <h3 className="font-display font-bold text-white">Graphic Design</h3>
                                        <p className="text-zinc-500 text-xs">Brand, Print & Digital</p>
                                    </div>
                                </div>
                                <ul className="space-y-2.5">
                                    {designSkills.map((skill) => (
                                        <li key={skill} className="flex items-center gap-2.5 text-sm text-zinc-300">
                                            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0" />
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CNC Skills */}
                            <div className="glass-card rounded-2xl p-6 card-hover">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-blue-500/15 rounded-xl flex items-center justify-center text-xl">⚙️</div>
                                    <div>
                                        <h3 className="font-display font-bold text-white">CNC & Technical</h3>
                                        <p className="text-zinc-500 text-xs">Oscillating, Laser & Production</p>
                                    </div>
                                </div>
                                <ul className="space-y-2.5">
                                    {cncSkills.map((skill) => (
                                        <li key={skill} className="flex items-center gap-2.5 text-sm text-zinc-300">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── TOOLS ── */}
            <section className="py-10">
                <Container>
                    <div data-gsap="fade-up"><SectionTitle label="Stack" title="Tools I Use" /></div>
                    <div data-gsap="stagger" className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {toolsList.map(({ name, icon, type }) => (
                            <div key={name} className="glass-card rounded-2xl p-4 flex items-center gap-3 card-hover cursor-default">
                                <span className="text-2xl">{icon}</span>
                                <div>
                                    <p className="text-white text-sm font-medium leading-tight">{name}</p>
                                    <p className="text-zinc-600 text-xs">{type}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ── EXPERIENCE ── */}
            <section className="py-20">
                <Container>
                    <div data-gsap="fade-up">
                        <SectionTitle
                            label="Career"
                            title="Experience"
                            subtitle="A journey across design studios, brand agencies, and production workshops."
                        />
                    </div>
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/20 to-transparent hidden sm:block" />

                        <div data-gsap="stagger" className="space-y-8">
                            {experience.map((exp, i) => {
                                const colors = {
                                    indigo: 'bg-indigo-500 shadow-indigo-500/30',
                                    blue: 'bg-blue-500 shadow-blue-500/30',
                                    violet: 'bg-violet-500 shadow-violet-500/30',
                                    emerald: 'bg-emerald-500 shadow-emerald-500/30',
                                };
                                const textColors = {
                                    indigo: 'text-indigo-400',
                                    blue: 'text-blue-400',
                                    violet: 'text-violet-400',
                                    emerald: 'text-emerald-400',
                                };
                                return (
                                    <div key={i} className="relative sm:pl-12">
                                        {/* Dot */}
                                        <div
                                            className={`absolute left-2.5 top-5 w-3 h-3 rounded-full shadow-lg ${colors[exp.color]} hidden sm:block`}
                                            style={{ transform: 'translateX(-50%)' }}
                                        />

                                        <div className="glass-card rounded-2xl p-6 card-hover">
                                            <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                                                <div>
                                                    <h3 className="font-display font-bold text-white text-lg">{exp.company}</h3>
                                                    <p className={`${textColors[exp.color]} text-sm font-medium`}>{exp.role}</p>
                                                </div>
                                                <span className="glass px-3 py-1 rounded-full text-xs text-zinc-400 font-medium whitespace-nowrap">
                                                    {exp.period}
                                                </span>
                                            </div>
                                            <p className="text-zinc-400 text-sm leading-relaxed">{exp.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── EDUCATION ── */}
            <section className="py-10">
                <Container>
                    <div data-gsap="fade-up"><SectionTitle label="Education" title="Academic Background" /></div>
                    <div data-gsap="stagger" className="grid sm:grid-cols-2 gap-4">
                        {education.map((edu) => (
                            <div key={edu.degree} className="glass-card rounded-2xl p-6 flex gap-4 card-hover">
                                <div className="text-3xl">{edu.icon}</div>
                                <div>
                                    <h3 className="text-white font-semibold text-sm mb-1">{edu.degree}</h3>
                                    <p className="text-zinc-500 text-xs mb-1">{edu.institute}</p>
                                    <p className="text-indigo-400 text-xs font-medium">{edu.year}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ── END CTA ── */}
            <section className="py-20">
                <Container>
                    <div className="glass-card rounded-3xl p-10 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 to-blue-900/10 pointer-events-none" />
                        <div className="relative z-10">
                            <h2 className="font-display font-bold text-2xl text-white mb-3">
                                Let's <span className="gradient-text">work together</span>
                            </h2>
                            <p className="text-zinc-400 text-sm mb-6 max-w-md mx-auto">
                                Ready to collaborate? Reach out and let's discuss how I can help bring your vision to life.
                            </p>
                            <Button to="/contact" variant="primary">Start a Conversation →</Button>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
