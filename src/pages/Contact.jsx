// src/pages/Contact.jsx
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Container from '../components/Container';
import { useScrollReveal } from '../hooks/useGSAPAnimations';
import { gsap } from 'gsap';

// ── ✅ EMAILJS CONFIG ─────────────────────────────────────────────────────────
// Replace these with your actual EmailJS credentials (see emailjs_setup.md)
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // e.g. 'template_xyz456'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';   // e.g. 'AbCdEfGhIjKlMnOp'
// ─────────────────────────────────────────────────────────────────────────────

const contactInfo = [
    {
        icon: '✉️',
        label: 'Email',
        value: 'vishwakarmahimanshu898@gmail.com',
        href: 'mailto:vishwakarmahimanshu898@gmail.com',
        display: 'vishwakarmahimanshu898@gmail.com',
    },
    {
        icon: '📞',
        label: 'Phone',
        value: '+91-8957751874',
        href: 'tel:+918957751874',
        display: '+91-8957751874',
    },
    {
        icon: '📍',
        label: 'Location',
        value: 'New Delhi, India',
        href: null,
        display: 'New Delhi, India 🇮🇳',
    },
];

const socialLinks = [
    { name: 'Instagram', icon: '📸', href: 'https://www.instagram.com/', color: 'hover:text-pink-400' },
    { name: 'LinkedIn', icon: '💼', href: 'https://www.linkedin.com/', color: 'hover:text-blue-400' },
    { name: 'Behance', icon: '🎨', href: 'https://www.behance.net/', color: 'hover:text-indigo-400' },
    { name: 'WhatsApp', icon: '💬', href: 'https://wa.me/918957751874', color: 'hover:text-emerald-400' },
];

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [sendError, setSendError] = useState('');

    const pageRef = useRef(null);
    const headerRef = useRef(null);
    const formRef = useRef(null);   // EmailJS needs the form DOM ref

    useScrollReveal(pageRef);

    useEffect(() => {
        document.title = 'Contact – Himanshu Vishwakarma';

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.from(headerRef.current?.querySelectorAll('[data-hero]') || [], {
            y: 35,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
        });
        return () => tl.progress(1).kill();
    }, []);

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = 'Name is required.';
        if (!form.email.trim()) {
            errs.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            errs.email = 'Please enter a valid email.';
        }
        if (!form.message.trim()) errs.message = 'Message is required.';
        return errs;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
        if (sendError) setSendError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }

        setLoading(true);
        setSendError('');

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                { publicKey: EMAILJS_PUBLIC_KEY }
            );
            setSubmitted(true);
            setForm({ name: '', email: '', subject: '', message: '' });
        } catch (err) {
            console.error('EmailJS error:', err);
            setSendError('Something went wrong. Please try again or email me directly.');
        } finally {
            setLoading(false);
        }
    };

    const inputCls = (field) =>
        `w-full bg-zinc-900/60 border ${errors[field] ? 'border-rose-500/60' : 'border-zinc-700/60'
        } rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/60 focus:bg-zinc-900/80 transition-all duration-200`;

    return (
        <div ref={pageRef}>
            {/* ── HEADER ── */}
            <section className="py-20 relative overflow-hidden" ref={headerRef}>
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 to-transparent pointer-events-none" />
                <Container className="relative z-10">
                    <div className="max-w-xl">
                        <span data-hero className="inline-flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
                            <span className="w-6 h-px bg-indigo-500" />
                            Let's Connect
                        </span>
                        <h1 data-hero className="font-display font-black text-5xl sm:text-6xl text-white leading-none mb-4">
                            Get in <span className="gradient-text">Touch.</span>
                        </h1>
                        <p data-hero className="text-zinc-400 text-lg leading-relaxed">
                            Have a project in mind or want to discuss how I can help?
                            I'm always open to great collaborations.
                        </p>
                    </div>
                </Container>
            </section>

            {/* ── MAIN CONTENT ── */}
            <section className="pb-24">
                <Container>
                    <div className="grid lg:grid-cols-5 gap-10 items-start">

                        {/* ── LEFT: Contact Info ── */}
                        <div data-gsap="slide-left" className="lg:col-span-2 space-y-6">

                            {/* Info cards */}
                            {contactInfo.map(({ icon, label, href, display }) => (
                                <div key={label} className="glass-card rounded-2xl p-5 flex gap-4 items-start card-hover">
                                    <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                                        {icon}
                                    </div>
                                    <div>
                                        <p className="text-zinc-500 text-xs uppercase tracking-wide mb-1">{label}</p>
                                        {href ? (
                                            <a
                                                href={href}
                                                className="text-white text-sm font-medium hover:text-indigo-400 transition-colors break-all"
                                            >
                                                {display}
                                            </a>
                                        ) : (
                                            <p className="text-white text-sm font-medium">{display}</p>
                                        )}
                                    </div>
                                </div>
                            ))}

                            {/* WhatsApp CTA */}
                            <a
                                href="https://wa.me/918957751874"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 w-full px-5 py-4 rounded-2xl font-semibold text-sm text-white transition-all duration-300 group"
                                style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(37,211,102,0.35)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <span className="text-2xl">💬</span>
                                <div>
                                    <p className="font-bold">Chat on WhatsApp</p>
                                    <p className="text-emerald-100/70 text-xs font-normal">Usually replies within a few hours</p>
                                </div>
                                <span className="ml-auto text-emerald-100/60 group-hover:translate-x-1 transition-transform">→</span>
                            </a>

                            {/* Social links */}
                            <div className="glass-card rounded-2xl p-5">
                                <p className="text-zinc-500 text-xs uppercase tracking-wide mb-4">Find Me Online</p>
                                <div className="flex flex-wrap gap-3">
                                    {socialLinks.map(({ name, icon, href, color }) => (
                                        <a
                                            key={name}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title={name}
                                            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-zinc-500 text-sm transition-all duration-200 hover:bg-white/5 ${color}`}
                                        >
                                            <span>{icon}</span>
                                            <span className="font-medium">{name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ── RIGHT: Form ── */}
                        <div data-gsap="slide-right" className="lg:col-span-3">
                            <div className="glass-card rounded-3xl p-6 sm:p-8">

                                {submitted ? (
                                    /* ── SUCCESS STATE ── */
                                    <div className="text-center py-16">
                                        <div className="text-6xl mb-4" role="img" aria-label="Party popper">🎉</div>
                                        <h3 className="font-display font-bold text-white text-2xl mb-2">Message Sent!</h3>
                                        <p className="text-zinc-400 text-sm mb-6">
                                            Thanks for reaching out! I'll get back to you within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="text-indigo-400 text-sm hover:text-indigo-300 underline underline-offset-4 transition-colors"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    /* ── FORM ── */
                                    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
                                        <div>
                                            <h2 className="font-display font-bold text-white text-xl mb-1">Send a Message</h2>
                                            <p className="text-zinc-500 text-sm">Fill out the form below and I'll be in touch soon.</p>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {/* Name */}
                                            <div>
                                                <label htmlFor="name" className="text-zinc-400 text-xs font-medium block mb-1.5">
                                                    Full Name <span className="text-rose-400">*</span>
                                                </label>
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    placeholder="Your name"
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    className={inputCls('name')}
                                                />
                                                {errors.name && <p className="text-rose-400 text-xs mt-1">{errors.name}</p>}
                                            </div>

                                            {/* Email */}
                                            <div>
                                                <label htmlFor="email" className="text-zinc-400 text-xs font-medium block mb-1.5">
                                                    Email Address <span className="text-rose-400">*</span>
                                                </label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="your@email.com"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    className={inputCls('email')}
                                                />
                                                {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email}</p>}
                                            </div>
                                        </div>

                                        {/* Subject */}
                                        <div>
                                            <label htmlFor="subject" className="text-zinc-400 text-xs font-medium block mb-1.5">
                                                Subject
                                            </label>
                                            <input
                                                id="subject"
                                                name="subject"
                                                type="text"
                                                placeholder="What's this about?"
                                                value={form.subject}
                                                onChange={handleChange}
                                                className={inputCls('subject')}
                                            />
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label htmlFor="message" className="text-zinc-400 text-xs font-medium block mb-1.5">
                                                Message <span className="text-rose-400">*</span>
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={5}
                                                placeholder="Tell me about your project, requirements, timelines..."
                                                value={form.message}
                                                onChange={handleChange}
                                                className={`${inputCls('message')} resize-none`}
                                            />
                                            {errors.message && <p className="text-rose-400 text-xs mt-1">{errors.message}</p>}
                                        </div>

                                        {/* Global error */}
                                        {sendError && (
                                            <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl px-4 py-3 text-rose-400 text-sm">
                                                ⚠️ {sendError}
                                            </div>
                                        )}

                                        {/* Submit */}
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                                        >
                                            {loading ? (
                                                <span className="flex items-center gap-2">
                                                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                                    </svg>
                                                    Sending…
                                                </span>
                                            ) : (
                                                'Send Message →'
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>

                    </div>
                </Container>
            </section>
        </div>
    );
}
