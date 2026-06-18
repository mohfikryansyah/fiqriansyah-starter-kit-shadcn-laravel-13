interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: 'Auth Ready',
        description: 'Laravel Sanctum authentication with login, register, email verification, and password reset — wired up and ready to go.',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" />
            </svg>
        ),
        title: 'Spatie Permissions',
        description: 'Role & permission management pre-configured with a layered seeder architecture. RBAC in minutes, not hours.',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
            </svg>
        ),
        title: 'shadcn/ui Components',
        description: 'Beautiful, accessible UI components with Tailwind CSS. Dark mode support out of the box with a clean design system.',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        title: 'TypeScript First',
        description: "Full TypeScript setup on the frontend with strict mode. Inertia page props are typed so your IDE always knows what's available.",
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 7h16M4 12h16M4 17h7" />
            </svg>
        ),
        title: 'DataTable Built-in',
        description: 'Server-side paginated data table using TanStack Table with sorting, filtering, and Wayfinder type-safe routing.',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        ),
        title: 'Optimized DX',
        description: 'Vite HMR, ESLint, Prettier, and Husky pre-commit hooks configured. From clone to productive in under five minutes.',
    },
];

export default function Features() {
    return (
        <section id="features" className="relative z-10 py-20">
            <div className="max-w-[1120px] mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="inline-block text-[11px] font-semibold tracking-[0.12em] uppercase text-indigo-400 mb-3">
                        What's included
                    </span>
                    <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight text-slate-50 mb-4">
                        Everything you need to ship
                    </h2>
                    <p className="text-base text-slate-400 max-w-[480px] mx-auto leading-relaxed">
                        Skip the boilerplate. Every piece of this kit is production-tested
                        and structured for real-world projects.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="bg-slate-800 border border-white/[0.08] rounded-xl p-7 hover:border-indigo-500 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(99,102,241,0.12)] transition-all duration-200"
                        >
                            <div className="w-11 h-11 flex items-center justify-content-center bg-indigo-500/10 border border-indigo-500/25 rounded-[10px] text-indigo-400 mb-5 flex items-center justify-center">
                                {feature.icon}
                            </div>
                            <h3 className="text-[15px] font-semibold text-slate-50 mb-2 tracking-tight">
                                {feature.title}
                            </h3>
                            <p className="text-[13px] text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}