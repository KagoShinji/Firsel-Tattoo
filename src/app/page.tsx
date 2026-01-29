import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import StickyHeader from '@/components/StickyHeader';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <StickyHeader />
      <Hero />
      <About />
      <Portfolio />
      <Contact />

      {/* Footer */}
      <footer className="bg-tattoo-gray py-8 text-center text-gray-500 text-sm border-t border-gray-900">
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://www.instagram.com/firsel.tattoo/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
            <span className="sr-only">Instagram</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
          </a>
          <a href="https://www.facebook.com/firseltattoo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
            <span className="sr-only">Facebook</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Firsel Tattoo. All rights reserved.</p>
        <p className="mt-2 text-xs">Designed for Artistry.</p>
      </footer>
    </main>
  );
}
