// File: components/Navbar.jsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold text-blue-700">Grace Church</h1>
        <ul className="flex space-x-4">
          {['/', '/about', '/sermons', '/events', '/ministries', '/contact'].map((path, i) => (
            <li key={i}>
              <Link href={path} className="text-gray-600 hover:text-blue-700 capitalize">
                {path === '/' ? 'Home' : path.replace('/', '')}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// File: components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Grace Church. All rights reserved.</p>
      </div>
    </footer>
  );
}

// File: components/HeroSection.jsx
export default function HeroSection() {
  return (
    <section className="bg-blue-700 text-white py-20 text-center">
      <h2 className="text-4xl font-bold mb-4">Welcome to Grace Church</h2>
      <p className="text-lg">Join us every Sunday at 10 AM for worship and fellowship</p>
    </section>
  );
}

// File: components/SermonPlayer.jsx
export default function SermonPlayer() {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-2">Latest Sermon</h2>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-64"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Sermon Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

// File: components/EventsCalendar.jsx
export default function EventsCalendar() {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-2">Church Events</h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Sunday Worship - Every Sunday at 10 AM</li>
        <li>Youth Fellowship - Fridays at 6 PM</li>
        <li>Community Outreach - First Saturday of the Month</li>
      </ul>
    </div>
  );
}

// File: components/NewsletterForm.jsx
export default function NewsletterForm() {
  return (
    <div className="bg-blue-50 p-6 rounded shadow-md text-center mt-12">
      <h2 className="text-xl font-semibold mb-2">Subscribe to Our Newsletter</h2>
      <p className="mb-4 text-gray-600">Get updates on sermons, events, and ministry activities.</p>
      <form className="flex flex-col sm:flex-row gap-2 justify-center">
        <input
          type="email"
          placeholder="Your Email"
          className="px-4 py-2 border border-gray-300 rounded w-full sm:w-auto"
        />
        <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800">
          Subscribe
        </button>
      </form>
    </div>
  );
}

// File: components/MapSection.jsx
export default function MapSection() {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-4 text-center">Our Location</h2>
      <div className="w-full h-64">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.154339291828!2d36.821946!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d469eeea89%3A0x5aa7e236637f1b08!2sNairobi!5e0!3m2!1sen!2ske!4v1620123456789!5m2!1sen!2ske"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

// File: pages/sermons.jsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SermonPlayer from '@/components/SermonPlayer';

export default function Sermons() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">Sermons</h1>
        <p className="text-gray-700">Watch or listen to our recent sermons below.</p>
        <SermonPlayer />
      </main>
      <Footer />
    </>
  );
}

// File: pages/events.jsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EventsCalendar from '@/components/EventsCalendar';

export default function Events() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">Events</h1>
        <p className="text-gray-700">Join us at our upcoming church events and gatherings.</p>
        <EventsCalendar />
      </main>
      <Footer />
    </>
  );
}

// File: pages/index.jsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import NewsletterForm from '@/components/NewsletterForm';
import MapSection from '@/components/MapSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <main className="container mx-auto px-4 py-10">
        <section className="mb-12 text-center">
          <h3 className="text-2xl font-bold">Upcoming Events</h3>
          <p className="text-gray-600">Stay updated with what's happening.</p>
        </section>
        <NewsletterForm />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}
