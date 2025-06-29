import Heroo from "@/components/Heroo";
import AboutUs from "@/components/AboutUs";
import Events from "@/components/Events";
import Sermons from "@/components/Sermons";
import Ministries from "@/components/Ministries";
import VisitUs from "@/components/Visit";
import NewsletterSignup from "@/components/NewsletterForm";
import Aboutus from "@/components/AboutUs";
import EventsCalendar from "@/components/Events";
import Sermon from "@/components/Sermon";
import LatestBlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section>
        <Heroo />
      </section>

      {/* Blog */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <Aboutus />
      </section>

      {/* About Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <LatestBlogSection />
      </section>

      {/* Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <Events />
      </section>

      {/* Sermons */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <Sermon />
      </section>

      {/* Ministries */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <Ministries />
      </section>

      {/* Visit Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <VisitUs />
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <NewsletterSignup />
      </section>
    </main>
  );
}
