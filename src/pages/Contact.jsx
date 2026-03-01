// src/pages/Contact.jsx
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Container from '../components/Container';
import { useScrollReveal } from '../hooks/useGSAPAnimations';
import { gsap } from 'gsap';

// ── ✅ EMAILJS CONFIG ─────────────────────────────────────────────────────────
// Replace these with your actual EmailJS credentials (see emailjs_setup.md)
const EMAILJS_SERVICE_ID = 'service_h5g861k';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_9hsiedi';  // e.g. 'template_xyz456'
const EMAILJS_PUBLIC_KEY = 'EV1QwfUS_AfzdGi9G';   // e.g. 'AbCdEfGhIjKlMnOp'
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
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/himanshu_1874?igsh=MW43em1iZjdzbjQxbw%3D%3D&utm_source=qr',
        color: 'hover:text-pink-400',
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        ),
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/himanshu-vishwakarma-889468220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        color: 'hover:text-blue-400',
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    // {
    //     name: 'Behance',
    //     href: 'https://www.behance.net/',
    //     color: 'hover:text-indigo-400',
    //     svg: (
    //         <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    //             <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.60.41.274.733.645.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1.00-1.16 1.35-.48.348-1.05.606-1.68.767-.63.16-1.29.24-1.98.24H0V4.51h6.938v-.007zm-.34 5.798c.538 0 .976-.126 1.314-.376.336-.25.506-.65.506-1.19 0-.3-.053-.55-.16-.757-.107-.202-.253-.364-.44-.483-.186-.12-.4-.202-.645-.25-.244-.047-.507-.07-.79-.07H3.24v3.126h3.358zm.157 6.051c.302 0 .586-.028.85-.084.266-.057.497-.15.693-.28.198-.13.355-.307.475-.535.12-.228.18-.516.18-.865 0-.69-.19-1.192-.57-1.504-.38-.31-.89-.467-1.533-.467H3.24v3.735h3.515zm8.24-7.78c.46-.494 1.115-.74 1.96-.74.44 0 .845.08 1.21.238.364.158.675.38.934.666.257.285.452.617.585.995.13.378.206.786.224 1.222H12.37c.06.6.27 1.07.63 1.41.36.34.83.51 1.41.51.45 0 .83-.1 1.14-.3.31-.2.52-.43.63-.7h2.36c-.37 1.13-.94 1.96-1.7 2.48-.76.52-1.68.78-2.77.78-.752 0-1.43-.12-2.04-.37-.61-.25-1.12-.6-1.54-1.06-.42-.46-.74-1.01-.97-1.65-.23-.64-.34-1.35-.34-2.13 0-.76.12-1.46.36-2.1.24-.64.58-1.2 1.02-1.67.44-.47.97-.83 1.57-1.09.6-.26 1.27-.39 2.0-.39.82 0 1.54.16 2.16.48.62.32 1.13.74 1.53 1.28.4.54.69 1.15.87 1.83.18.68.24 1.38.18 2.08h-6.81c0-.13.01-.27.03-.42h-.01v-.02zm3.55-2.2c-.3-.33-.76-.5-1.37-.5-.4 0-.73.07-1.0.2-.27.13-.48.3-.65.5-.17.2-.28.4-.35.62-.07.22-.11.42-.12.62h4.07c-.08-.65-.3-1.12-.6-1.45v.01zM14.29 4.5h5.19v1.34h-5.19V4.5z" />
    //         </svg>
    //     ),
    // },
    {
        name: 'WhatsApp',
        href: 'https://wa.me/8957751874',
        color: 'hover:text-emerald-400',
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
        ),
    },
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
                                    {socialLinks.map(({ name, svg, href, color }) => (
                                        <a
                                            key={name}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title={name}
                                            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-zinc-500 text-sm transition-all duration-200 hover:bg-white/5 ${color}`}
                                        >
                                            {svg}
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
