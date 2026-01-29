import BookingForm from '@/components/BookingForm';
import Link from 'next/link';

export default function BookingPage() {
    return (
        <main className="min-h-screen bg-black text-white relative flex flex-col">
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-tattoo-gray via-black to-black opacity-40"></div>

            <header className="relative z-10 p-6 flex justify-between items-center container mx-auto">
                <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-tattoo-gold transition-colors">
                    FIRSEL <span className="text-tattoo-gold">TATTOO</span>
                </Link>
                <Link href="/" className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
                    Back to Home
                </Link>
            </header>

            <div className="relative z-10 flex-grow container mx-auto px-4 py-12 flex flex-col items-center justify-center">
                <div className="w-full max-w-2xl">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">BOOKING</h1>
                        <p className="text-gray-400 max-w-md mx-auto">
                            Fill out the form below to request an appointment. A non-refundable deposit is required upon confirmation.
                        </p>
                    </div>

                    <BookingForm />

                    <div className="mt-12 pt-8 border-t border-gray-800 text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">Alternative Booking</h3>
                        <p className="text-gray-400 mb-6">
                            Prefer to book directly or having trouble with the form? <br />
                            Message us on our social media channels.
                        </p>
                        <div className="flex justify-center gap-6">
                            <a href="https://www.instagram.com/firsel.tattoo/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white hover:border-tattoo-gold hover:text-tattoo-gold transition-all duration-300 group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-tattoo-gold"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                <span>Instagram</span>
                            </a>
                            <a href="https://www.facebook.com/firseltattoo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white hover:border-tattoo-gold hover:text-tattoo-gold transition-all duration-300 group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-tattoo-gold"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                <span>Facebook</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
