// src/components/SectionTitle.jsx
export default function SectionTitle({ label, title, subtitle, centered = false, className = '' }) {
    return (
        <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
            {label && (
                <span className="inline-flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
                    <span className="w-6 h-px bg-indigo-500"></span>
                    {label}
                    <span className="w-6 h-px bg-indigo-500"></span>
                </span>
            )}
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
                {title}
            </h2>
            {subtitle && (
                <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
