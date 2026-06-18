export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative z-10 border-t border-white/[0.08] pt-20 pb-10">
            <div className="max-w-[1120px] mx-auto px-6">
                {/* CTA block */}
                <div className="text-center pb-16">
                    <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight text-slate-50 mb-3">
                        Ready to build something?
                    </h2>
                    <p className="text-base text-slate-400 mb-8">
                        Clone, customize, and ship. Your next project starts here.
                    </p>
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                        <a
                            href="/register"
                            className="inline-flex items-center gap-2 px-6 py-3 text-[15px] font-semibold text-white bg-indigo-500 rounded-xl hover:bg-indigo-400 hover:shadow-[0_0_24px_rgba(99,102,241,0.4)] hover:-translate-y-px transition-all"
                        >
                            Get Started Free
                        </a>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-3 text-sm font-medium text-slate-400 hover:text-slate-50 hover:bg-slate-800 rounded-xl transition-colors"
                        >
                            View Source
                        </a>
                    </div>
                </div>

                <hr className="border-white/[0.05] mb-6" />

                {/* Bottom bar */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-400">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                            <rect x="2" y="2" width="7" height="7" rx="1.5" fill="#6366F1" />
                            <rect x="11" y="2" width="7" height="7" rx="1.5" fill="#6366F1" opacity="0.5" />
                            <rect x="2" y="11" width="7" height="7" rx="1.5" fill="#6366F1" opacity="0.5" />
                            <rect x="11" y="11" width="7" height="7" rx="1.5" fill="#6366F1" />
                        </svg>
                        StarterKit
                    </div>
                    <p className="text-[13px] text-slate-500">
                        &copy; {year} StarterKit. Built with ❤️ using Laravel &amp; React.
                    </p>
                    <div className="flex gap-5">
                        {['Docs', 'Changelog', 'GitHub'].map((label) => (
                            <a
                                key={label}
                                href="#"
                                className="text-[13px] text-slate-500 hover:text-slate-50 transition-colors"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}