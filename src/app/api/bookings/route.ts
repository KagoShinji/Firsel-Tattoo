import { NextResponse } from 'next/server';
import { saveBooking, Booking } from '@/lib/bookingStore';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
    return NextResponse.json(
        { error: 'Booking system is temporarily disabled' },
        { status: 503 }
    );
}
