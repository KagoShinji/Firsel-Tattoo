import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-tattoo-black">
            {/* Background Gradient / Image Placeholder */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-tattoo-gray via-tattoo-black to-black opacity-80"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 animate-fade-in-up">
                    FIRSEL <span className="text-white">TATTOO</span>
                </h1>
                <p className="text-lg md:text-2xl text-gray-300 mb-10 tracking-wide font-light">
                    ARTISTRY • PRECISION • PERMANENCE
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/book"
                        className="px-8 py-3 bg-white text-black font-bold text-lg uppercase tracking-wider hover:bg-gray-200 transition-all transform hover:scale-105 rounded-md"
                    >
                        Book Appointment
                    </Link>
                    <Link
                        href="#portfolio"
                        className="px-8 py-3 border border-white text-white font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-black transition-all transform hover:scale-105 rounded-md"
                    >
                        View Work
                    </Link>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
