interface Tech {
    name: string;
    version: string;
    color: string;
}

const stack: Tech[] = [
    { name: 'Laravel', version: '12.x', color: '#FF2D20' },
    { name: 'Inertia.js', version: 'v3', color: '#9553E9' },
    { name: 'React', version: '19', color: '#61DAFB' },
    { name: 'TypeScript', version: '5.x', color: '#3178C6' },
    { name: 'Tailwind', version: 'v4', color: '#38BDF8' },
    { name: 'shadcn/ui', version: 'latest', color: '#E2E8F0' },
    { name: 'Vite', version: '6.x', color: '#646CFF' },
    { name: 'Spatie', version: 'v6', color: '#4ade80' },
    { name: 'TanStack', version: 'v8', color: '#FF4154' },
    { name: 'Wayfinder', version: 'latest', color: '#fb923c' },
];

export default function TechStack() {
    return (
        <section id="stack" className="relative z-10 py-20">
            <div className="max-w-[1120px] mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="inline-block text-[11px] font-semibold tracking-[0.12em] uppercase text-indigo-400 mb-3">
                        Tech stack
                    </span>
                    <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight text-slate-50 mb-4">
                        Built on what works
                    </h2>
                    <p className="text-base text-slate-400 max-w-[480px] mx-auto leading-relaxed">
                        Carefully chosen tools that complement each other.
                        No unnecessary dependencies, no magic you can't explain.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                    {stack.map((tech) => (
                        <div
                            key={tech.name}
                            className="flex items-center gap-2.5 px-4 py-3.5 bg-slate-900 border border-white/[0.05] rounded-lg hover:bg-slate-800 hover:border-white/[0.08] transition-all"
                        >
                            <span
                                className="w-2 h-2 rounded-full shrink-0"
                                style={{
                                    background: tech.color,
                                    boxShadow: `0 0 8px ${tech.color}55`,
                                }}
                            />
                            <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="text-[13px] font-semibold text-slate-50 truncate">{tech.name}</span>
                                <span className="text-[11px] font-mono text-slate-500">{tech.version}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-sm text-slate-400 mt-8">
                    Full dependency list in{' '}
                    <code className="font-mono text-[12px] text-indigo-400 bg-slate-800 border border-white/[0.08] rounded px-1.5 py-0.5">
                        composer.json
                    </code>
                    {' '}&amp;{' '}
                    <code className="font-mono text-[12px] text-indigo-400 bg-slate-800 border border-white/[0.08] rounded px-1.5 py-0.5">
                        package.json
                    </code>
                </p>
            </div>
        </section>
    );
}