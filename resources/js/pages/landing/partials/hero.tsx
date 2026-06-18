export default function Hero() {
    return (
        <section className="relative z-10 px-6 pt-28 pb-20 overflow-hidden">
            {/* Glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px]"
                style={{ background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.16) 0%, transparent 68%)' }}
            />

            <div className="relative z-10 max-w-[760px] mx-auto text-center flex flex-col items-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 bg-slate-800 border border-white/[0.08] rounded-full text-[11px] font-mono text-slate-400 tracking-wide">
                    <span className="w-[7px] h-[7px] rounded-full bg-emerald-400 shadow-[0_0_6px_#4ade80] animate-pulse" />
                    Laravel 13 · Inertia v3 · React 19 · TypeScript
                </div>

                {/* Heading */}
                <h1 className="text-[clamp(2.5rem,6vw,4.25rem)] font-extrabold tracking-[-0.04em] leading-[1.1] text-slate-50 mb-6">
                    Build faster.<br />
                    <span className="bg-gradient-to-br from-indigo-400 to-[#a5b4fc] bg-clip-text text-transparent">
                        Ship with confidence.
                    </span>
                </h1>

                {/* Sub */}
                <p className="text-[1.0625rem] text-slate-400 max-w-[540px] leading-[1.7] mb-10">
                    A production-ready starter kit combining the best of Laravel, Inertia.js,
                    and React with TypeScript — batteries included, opinions optional.
                </p>

                {/* Actions */}
                <div className="flex items-center gap-3 flex-wrap justify-center mb-14">
                    <a
                        href="/register"
                        className="inline-flex items-center gap-2 px-6 py-3 text-[15px] font-semibold text-white bg-indigo-500 rounded-xl hover:bg-indigo-400 hover:shadow-[0_0_24px_rgba(99,102,241,0.4)] hover:-translate-y-px transition-all"
                    >
                        Start Building
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 text-[15px] font-medium text-slate-50 border border-white/[0.08] rounded-xl hover:border-indigo-500 hover:bg-indigo-500/10 hover:-translate-y-px transition-all"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        View on GitHub
                    </a>
                </div>

                {/* Code block */}
                <div className="w-full max-w-[540px] bg-slate-800 border border-white/[0.08] rounded-xl overflow-hidden text-left">
                    <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/[0.05] bg-white/[0.02]">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                        <span className="ml-2 text-[11px] font-mono text-slate-500">terminal</span>
                    </div>
                    <pre className="px-5 py-4 font-mono text-[13px] leading-[2] overflow-x-auto">
                        <code>
                            <span className="text-slate-500">$</span>{' '}
                            <span className="text-indigo-400">composer</span>{' '}
                            <span className="text-slate-50">create-project</span>{' '}
                            <span className="text-emerald-400">your-org/starter-kit</span>{' '}
                            <span className="text-slate-50">my-app</span>
                            {'\n'}
                            <span className="text-slate-500">$</span>{' '}
                            <span className="text-indigo-400">cd</span>{' '}
                            <span className="text-slate-50">my-app</span>{' '}
                            <span className="text-slate-500">&&</span>{' '}
                            <span className="text-indigo-400">php artisan</span>{' '}
                            <span className="text-slate-50">serve</span>
                        </code>
                    </pre>
                </div>
            </div>
        </section>
    );
}