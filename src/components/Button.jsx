// src/components/Button.jsx
import { Link } from 'react-router-dom';

export default function Button({
    children,
    variant = 'primary',
    to,
    href,
    onClick,
    className = '',
    type = 'button',
    disabled = false,
    download = false,
    ...props
}) {
    const base = variant === 'primary' ? 'btn-primary' : 'btn-ghost';
    const cls = `${base} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

    if (to) {
        return (
            <Link to={to} className={cls} {...props}>
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a
                href={href}
                className={cls}
                download={download || undefined}
                target={download ? undefined : '_blank'}
                rel={download ? undefined : 'noopener noreferrer'}
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <button type={type} onClick={onClick} className={cls} disabled={disabled} {...props}>
            {children}
        </button>
    );
}
