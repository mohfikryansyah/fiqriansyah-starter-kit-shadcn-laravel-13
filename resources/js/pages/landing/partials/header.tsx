import { useState } from 'react';

interface NavLink {
    label: string;
    href: string;
}

const navLinks: NavLink[] = [
    { label: 'Features', href: '#features' },
    { label: 'Stack', href: '#stack' },
    { label: 'Docs', href: '#' },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-white/[0.08]">
            <div className="max-w-[1120px] mx-auto px-6 h-[60px] flex items-center gap-8">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2.5 text-[15px] font-bold tracking-tight text-slate-50 shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <rect x="2" y="2" width="7" height="7" rx="1.5" fill="#6366F1" />
                        <rect x="11" y="2" width="7" height="7" rx="1.5" fill="#6366F1" opacity="0.5" />
                        <rect x="2" y="11" width="7" height="7" rx="1.5" fill="#6366F1" opacity="0.5" />
                        <rect x="11" y="11" width="7" height="7" rx="1.5" fill="#6366F1" />
                    </svg>
                    StarterKit
                </a>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-1 ml-auto">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="px-3 py-1.5 text-sm text-slate-400 rounded-lg hover:text-slate-50 hover:bg-slate-800 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-2 ml-4">
                    <a
                        href="/login"
                        className="px-3 py-1.5 text-sm font-medium text-slate-400 rounded-lg hover:text-slate-50 hover:bg-slate-800 transition-colors"
                    >
                        Log in
                    </a>
                    <a
                        href="/register"
                        className="px-4 py-2 text-sm font-semibold text-white bg-indigo-500 rounded-lg hover:bg-indigo-400 hover:shadow-[0_0_24px_rgba(99,102,241,0.4)] transition-all hover:-translate-y-px"
                    >
                        Get Started
                    </a>
                </div>

                {/* Mobile toggle */}
                <button
                    className="ml-auto md:hidden p-2 text-slate-400 hover:text-slate-50 transition-colors"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        {menuOpen ? (
                            <>
                                <path d="M18 6L6 18M6 6l12 12" />
                            </>
                        ) : (
                            <>
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            </>
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden border-t border-white/[0.08] bg-slate-950 px-6 py-3 flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="px-3 py-2 text-sm text-slate-400 rounded-lg hover:text-slate-50 hover:bg-slate-800 transition-colors"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="flex gap-2 mt-2 pt-2 border-t border-white/[0.08]">
                        <a href="/login" className="flex-1 py-2 text-sm text-center text-slate-400 hover:text-slate-50 transition-colors">Log in</a>
                        <a href="/register" className="flex-1 py-2 text-sm font-semibold text-center text-white bg-indigo-500 rounded-lg hover:bg-indigo-400 transition-colors">Get Started</a>
                    </div>
                </div>
            )}
        </header>
    );
}