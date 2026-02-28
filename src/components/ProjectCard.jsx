// src/components/ProjectCard.jsx
import { Link } from 'react-router-dom';
import Badge from './Badge';

export default function ProjectCard({ project }) {
    const { slug, title, shortDesc, category, tags, gradient, accentColor, coverImage } = project;

    return (
        <div className="group glass-card rounded-2xl overflow-hidden card-hover flex flex-col">
            {/* Card Image Area */}
            <div className={`relative h-48 bg-gradient-to-br ${gradient} overflow-hidden`}>
                {coverImage ? (
                    /* Actual cover image */
                    <img
                        src={coverImage}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    /* Fallback: abstract decorative shapes + letter */
                    <>
                        <div
                            className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: `radial-gradient(circle at 30% 40%, ${accentColor}99 0%, transparent 60%),
                                      radial-gradient(circle at 80% 70%, ${accentColor}44 0%, transparent 50%)`,
                            }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div
                                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-display font-bold opacity-40"
                                style={{ background: `${accentColor}22`, color: accentColor }}
                            >
                                {title.charAt(0)}
                            </div>
                        </div>
                    </>
                )}

                {/* Dark overlay on images so text is readable */}
                {coverImage && (
                    <div className="absolute inset-0 bg-black/30" />
                )}

                {/* Category chip */}
                <div className="absolute top-3 left-3 z-10">
                    <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm"
                        style={{ background: `${accentColor}33`, color: accentColor, border: `1px solid ${accentColor}55` }}
                    >
                        {category}
                    </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-indigo-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <Link
                        to={`/project/${slug}`}
                        className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white text-sm font-medium hover:bg-white/20 transition-colors"
                    >
                        View Details →
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-white font-semibold text-base mb-1.5 leading-snug group-hover:text-indigo-300 transition-colors">
                    {title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">
                    {shortDesc}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                    {tags.slice(0, 3).map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                    ))}
                </div>
            </div>
        </div>
    );
}
