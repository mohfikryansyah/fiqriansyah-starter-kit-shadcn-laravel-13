import { Head } from '@inertiajs/react';
import Header from './partials/header';
import Features from './partials/features';
import Hero from './partials/hero';
import TechStack from './partials/techstack';
import Footer from './partials/footer';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome — StarterKit" />
            <div className="relative min-h-screen bg-slate-950 text-slate-50 overflow-x-hidden">
                {/* Dot grid background */}
                <div
                    aria-hidden="true"
                    className="fixed inset-0 z-0 pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
                        backgroundSize: '28px 28px',
                    }}
                />

                <Header />

                <main>
                    <Hero />
                    <Features />
                    <TechStack />
                </main>

                <Footer />
            </div>
        </>
    );
}