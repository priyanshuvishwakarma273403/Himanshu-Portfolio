// src/components/Badge.jsx
export default function Badge({ children, color = 'indigo', className = '' }) {
    const colors = {
        indigo: 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20',
        blue: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
        violet: 'bg-violet-500/10 text-violet-400 border border-violet-500/20',
        emerald: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
        amber: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
        rose: 'bg-rose-500/10 text-rose-400 border border-rose-500/20',
        sky: 'bg-sky-500/10 text-sky-400 border border-sky-500/20',
        zinc: 'bg-zinc-700/40 text-zinc-400 border border-zinc-700/50',
    };

    const tagColorMap = {
        'CNC': 'indigo',
        'Acoustic': 'blue',
        'Logo': 'violet',
        'Brand': 'violet',
        'Social Media': 'emerald',
        'Poster': 'amber',
        'Packaging': 'rose',
        'Vector': 'sky',
        'Laser': 'rose',
        'Print': 'amber',
        'Production': 'indigo',
    };

    const resolvedColor = tagColorMap[children] || color;

    return (
        <span className={`badge ${colors[resolvedColor] || colors.indigo} ${className}`}>
            {children}
        </span>
    );
}
