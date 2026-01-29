'use client';

import { useState, useEffect } from 'react';

interface Booking {
    id: string;
    name: string;
    email: string;
    phone: string;
    date: string;
    description: string;
    status: 'pending' | 'confirmed' | 'rejected';
    createdAt: string;
}

export default function AdminDashboard() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(false);

    // Simple mock authentication
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'firsel123') { // Hardcoded password for demo
            setIsAuthenticated(true);
            fetchBookings();
        } else {
            alert('Invalid password');
        }
    };

    const fetchBookings = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/admin/bookings');
            const data = await res.json();
            setBookings(data.bookings || []);
        } catch (error) {
            console.error('Failed to fetch bookings', error);
        } finally {
            setLoading(false);
        }
    };

    const handleStatusUpdate = async (id: string, newStatus: string) => {
        try {
            await fetch('/api/admin/bookings', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, status: newStatus }),
            });
            // Optimistic update
            setBookings(prev => prev.map(b => b.id === id ? { ...b, status: newStatus as any } : b));
        } catch (error) {
            console.error('Failed to update status', error);
            alert('Failed to update status');
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <form onSubmit={handleLogin} className="bg-tattoo-gray p-8 rounded-lg border border-gray-800 shadow-xl w-full max-w-sm">
                    <h1 className="text-2xl font-bold text-white mb-6 text-center">Admin Access</h1>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-black border border-gray-700 rounded p-3 text-white mb-4 focus:border-white outline-none"
                        placeholder="Enter Password"
                    />
                    <button type="submit" className="w-full bg-white text-black font-bold py-3 rounded hover:bg-gray-200 transition-colors">
                        Login
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="max-w-7xl mx-auto">
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
                    <button onClick={() => setIsAuthenticated(false)} className="text-gray-400 hover:text-white">Logout</button>
                </header>

                {loading ? (
                    <p>Loading bookings...</p>
                ) : (
                    <div className="overflow-x-auto bg-tattoo-gray rounded-lg border border-gray-800">
                        <table className="w-full text-left">
                            <thead className="bg-black/50 border-b border-gray-700 text-gray-400 text-sm uppercase">
                                <tr>
                                    <th className="p-4">Date</th>
                                    <th className="p-4">Client</th>
                                    <th className="p-4">Details</th>
                                    <th className="p-4">Request</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800">
                                {bookings.map((booking) => (
                                    <tr key={booking.id} className="hover:bg-black/30 transition-colors">
                                        <td className="p-4 whitespace-nowrap text-gray-300">
                                            {new Date(booking.date).toLocaleDateString()}
                                            <div className="text-xs text-gray-500">{new Date(booking.createdAt).toLocaleDateString()}</div>
                                        </td>
                                        <td className="p-4">
                                            <div className="font-bold text-white">{booking.name}</div>
                                            <div className="text-sm text-gray-400">{booking.email}</div>
                                            <div className="text-sm text-gray-400">{booking.phone}</div>
                                        </td>
                                        <td className="p-4 w-1/3">
                                            <p className="text-sm text-gray-300 line-clamp-3">{booking.description}</p>
                                        </td>
                                        <td className="p-4">
                                            {/* Calculate simple relative time or show raw date */}
                                            <span className="text-xs text-gray-500">Requested {new Date(booking.createdAt).toLocaleDateString()}</span>
                                        </td>
                                        <td className="p-4">
                                            <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${booking.status === 'confirmed' ? 'bg-green-900 text-green-200' :
                                                booking.status === 'rejected' ? 'bg-red-900 text-red-200' :
                                                    'bg-yellow-900 text-yellow-200'
                                                }`}>
                                                {booking.status}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => handleStatusUpdate(booking.id, 'confirmed')}
                                                    className="bg-green-700 hover:bg-green-600 text-white p-2 rounded text-xs"
                                                    title="Confirm"
                                                >
                                                    ✓
                                                </button>
                                                <button
                                                    onClick={() => handleStatusUpdate(booking.id, 'rejected')}
                                                    className="bg-red-700 hover:bg-red-600 text-white p-2 rounded text-xs"
                                                    title="Reject"
                                                >
                                                    ✕
                                                </button>
                                                <button
                                                    onClick={() => handleStatusUpdate(booking.id, 'pending')}
                                                    className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded text-xs"
                                                    title="Reset"
                                                >
                                                    ↺
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {bookings.length === 0 && (
                            <div className="p-8 text-center text-gray-500">No bookings found.</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
