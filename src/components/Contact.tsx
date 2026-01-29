export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-black text-white border-t border-gray-900">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight mb-4 decoration-gray-500 underline-offset-8">FIND US</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Visit our private studio in the heart of Cebu City.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-12">
                    {/* Map Container */}
                    <div className="w-full md:w-2/3 h-[400px] bg-tattoo-gray rounded-lg border border-gray-800 overflow-hidden relative shadow-2xl grayscale hover:grayscale-0 transition-all duration-500">
                        <iframe
                            width="100%"
                            height="100%"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=F+Villa+St,+Cebu+City&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight={0}
                            marginWidth={0}
                            title="Firsel Tattoo Location"
                            className="absolute inset-0"
                        ></iframe>
                    </div>

                    {/* Contact Info */}
                    <div className="w-full md:w-1/3 flex flex-col justify-center space-y-8">
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-white">STUDIO ADDRESS</h3>
                            <p className="text-gray-400 leading-relaxed">
                                F Villa St<br />
                                Cebu City, Cebu<br />
                                Philippines
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-2 text-white">HOURS</h3>
                            <p className="text-gray-400 leading-relaxed">
                                By Appointment Only<br />
                                Daily: 10:00 AM - 8:00 PM
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-2 text-white">CONTACT</h3>
                            <div className="flex gap-4">
                                <a href="https://www.instagram.com/firsel.tattoo/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                    Instagram
                                </a>
                                <a href="https://www.facebook.com/firseltattoo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                    Facebook
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
