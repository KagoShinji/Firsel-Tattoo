'use client';

import { useState } from 'react';

export default function BookingForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        description: '',
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        try {
            const response = await fetch('/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit booking');
            }

            setStatus('success');
            setFormData({ name: '', email: '', phone: '', date: '', description: '' });
        } catch (error) {
            console.error(error);
            setStatus('error');
            setErrorMessage('Something went wrong. Please try again later.');
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-tattoo-gray p-8 rounded-lg border border-white text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-white/20 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Request Received</h2>
                <p className="text-gray-300">We&apos;ll be in touch shortly to confirm your appointment.</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2 bg-transparent border border-gray-600 text-gray-300 hover:border-white hover:text-white transition-colors rounded uppercase text-sm tracking-wider"
                >
                    Book Another
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-tattoo-gray p-8 rounded-lg border border-gray-800 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm uppercase tracking-wider text-gray-400 font-semibold">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-white transition-colors"
                        placeholder="John Doe"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm uppercase tracking-wider text-gray-400 font-semibold">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-white transition-colors"
                        placeholder="john@example.com"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm uppercase tracking-wider text-gray-400 font-semibold">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-white transition-colors"
                        placeholder="+1 (555) 000-0000"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="date" className="text-sm uppercase tracking-wider text-gray-400 font-semibold">Preferred Date</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-white transition-colors"
                        style={{ colorScheme: 'dark' }}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="description" className="text-sm uppercase tracking-wider text-gray-400 font-semibold">Tattoo Idea / Placement</label>
                <textarea
                    id="description"
                    name="description"
                    rows={4}
                    required
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-white transition-colors"
                    placeholder="Describe your idea, size, and body placement..."
                ></textarea>
            </div>

            {status === 'error' && (
                <div className="p-3 bg-red-900/30 border border-red-800 text-red-200 rounded text-sm">
                    {errorMessage}
                </div>
            )}

            <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 bg-white text-black font-bold text-lg uppercase tracking-wider hover:bg-gray-200 transition-all transform hover:scale-[1.02] rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === 'submitting' ? 'Submitting...' : 'Request Appointment'}
            </button>
        </form>
    );
}
