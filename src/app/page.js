import Heroo from "@/components/Heroo";
import AboutUs from "@/components/About";
import Events from "@/components/Events";
import Sermons from "@/components/Sermons";
import Ministries from "@/components/Ministries";
import VisitUs from "@/components/Visit";
import NewsletterSignup from "@/components/NewsletterForm";
import Aboutus from "@/components/AboutUs";
import EventsCalendar from "@/components/Events";
import Sermon from "@/components/Sermon";
import LatestBlogSection from "@/components/BlogSection";
import TithesAndOffering from "@/components/TithesAndOffering";
import GivingForm from "@/components/GivingForm";
import PraiseAndWorship from "@/components/PraiseAndWorship";
import SupportMission from "@/components/SupportMission";
import HeroSect from "@/components/Hero";
import Ready from "@/components/Ready";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section>
        <Heroo />
      </section>

      {/* Blog */}
      <section className="">
        <Aboutus />
      </section>

      {/* Ministries */}
      <section className="">
        <Ministries />
      </section>

      {/* Blog */}
      <section className="">
        <SupportMission />
      </section>

      {/* Tithes */}
      <section className="">
        <TithesAndOffering />
      </section>

      {/* About Us */}
      <section className="">
        <PraiseAndWorship />
      </section>

      {/* Events 
      <section className="">
        <Events />
      </section>
      */}
      
      {/* Events */}
      <section className="">
        <Ready />
      </section>

      {/* Visit Us */}
      <section className="">
        <VisitUs />
      </section>

      {/* Newsletter Signup 
      <section className=" bg-gray-100">
        <NewsletterSignup />
      </section>
      */}

      {/* About Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <LatestBlogSection />
      </section>

    </main>
  );
}
