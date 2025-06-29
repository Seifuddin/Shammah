// File: pages/events.jsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EventsCalendar from '@/components/EventsCalendar';

export default function Events() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-10 w-full min-h-screen overflow-hidden">
        <h1 className="text-3xl font-bold mb-4 text-blue-500">Events</h1>
        <p className="text-blue-900">Join us at our upcoming church events and gatherings.</p>
        <EventsCalendar />
      </main>
      <Footer />
    </>
  );
}