import Image from 'next/image';

export default function Portfolio() {
    const works = [
        { id: 1, title: 'Bald Eagle', category: 'Traditional' },
        { id: 2, title: 'Hades', category: 'Blackwork' },
        { id: 3, title: 'Dragon', category: 'Blackwork' },
        { id: 4, title: 'Sword', category: 'Cybersigilism' },
        { id: 5, title: 'Dagger', category: 'Traditional' },
        { id: 6, title: 'Flower', category: 'Minimalist' },
    ];

    return (
        <section id="portfolio" className="py-20 bg-black text-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">SELECTED WORKS</h2>
                    <div className="w-24 h-1 bg-white mx-auto"></div>
                    <p className="mt-4 text-gray-400">A curation of recent masterpieces</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {works.map((work) => (
                        <div key={work.id} className="group relative aspect-square overflow-hidden rounded-lg bg-tattoo-gray border border-gray-900 cursor-pointer">
                            <Image
                                src={`/images/work-${work.id}.jpg`}
                                alt={work.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                                <h3 className="text-xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{work.title}</h3>
                                <span className="text-white text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{work.category}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a href="https://www.instagram.com/firsel.tattoo/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors font-semibold tracking-wider uppercase border-b border-transparent hover:border-white pb-1">
                        View More on Instagram
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
