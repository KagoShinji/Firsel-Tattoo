import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const BOOKINGS_FILE = path.join(DATA_DIR, 'bookings.json');

export interface Booking {
    id: string;
    name: string;
    email: string;
    phone: string;
    date: string;
    description: string;
    status: 'pending' | 'confirmed' | 'rejected';
    createdAt: string;
}

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

export function getBookings(): Booking[] {
    if (!fs.existsSync(BOOKINGS_FILE)) {
        return [];
    }
    const data = fs.readFileSync(BOOKINGS_FILE, 'utf-8');
    try {
        return JSON.parse(data);
    } catch (error) {
        console.error('Error parsing bookings file:', error);
        return [];
    }
}

export function saveBooking(booking: Booking): void {
    const bookings = getBookings();
    bookings.push(booking);
    fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2));
}

export function updateBookingStatus(id: string, status: Booking['status']): void {
    const bookings = getBookings();
    const index = bookings.findIndex(b => b.id === id);
    if (index !== -1) {
        bookings[index].status = status;
        fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2));
    }
}
