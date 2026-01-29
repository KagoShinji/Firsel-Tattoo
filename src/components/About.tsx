import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-20 bg-tattoo-black text-white">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
                {/* Image Placeholder */}
                <div className="w-full md:w-1/2 h-[400px] bg-tattoo-gray rounded-lg shadow-2xl border border-gray-800 flex items-center justify-center relative overflow-hidden group">
                    <Image
                        src="/images/artist.jpg"
                        alt="Artist Portrait"
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 space-y-6">
                    <h2 className="text-4xl font-bold text-white tracking-tight decoration-gray-500 underline-offset-8">THE ARTIST</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Welcome to Firsel Tattoo. I specialize in fine line, blackwork, and custom illustrative tattoos.
                        My mission is to transform your vision into permanent art with precision and care.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Located in the heart of the city, my private studio offers a safe, sterile, and welcoming environment
                        for all clients. Whether it&apos;s your first tattoo or your fiftieth, I&apos;m dedicated to providing
                        a professional experience.
                    </p>
                    <div className="pt-4">
                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div className="p-4 bg-tattoo-gray rounded border border-gray-800">
                                <span className="block text-3xl font-bold text-white">5+</span>
                                <span className="text-sm text-gray-400">Years Experience</span>
                            </div>
                            <div className="p-4 bg-tattoo-gray rounded border border-gray-800">
                                <span className="block text-3xl font-bold text-white">1k+</span>
                                <span className="text-sm text-gray-400">Tattoos Done</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
