import { NextResponse } from 'next/server';
import { saveBooking, Booking } from '@/lib/bookingStore';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, date, description } = body;

        // Basic validation
        if (!name || !email || !date) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const newBooking: Booking = {
            id: uuidv4(),
            name,
            email,
            phone,
            date,
            description,
            status: 'pending',
            createdAt: new Date().toISOString(),
        };

        saveBooking(newBooking);

        return NextResponse.json({ success: true, booking: newBooking }, { status: 201 });
    } catch (error) {
        console.error('Error saving booking:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
