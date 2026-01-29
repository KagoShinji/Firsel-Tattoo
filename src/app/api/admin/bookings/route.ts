import { NextResponse } from 'next/server';
import { getBookings, updateBookingStatus, Booking } from '@/lib/bookingStore';

export async function GET() {
    const bookings = getBookings();
    // Sort by created date desc
    bookings.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return NextResponse.json({ bookings });
}

export async function PUT(request: Request) {
    try {
        const body = await request.json();
        const { id, status } = body;

        if (!id || !status) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        updateBookingStatus(id, status);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Error' }, { status: 500 });
    }
}
