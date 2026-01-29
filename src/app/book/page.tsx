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
                </div>
            </div>
        </main>
    );
}
