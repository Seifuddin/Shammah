import Heroo from "@/components/Heroo";
import AboutUs from "@/components/About";
import Events from "@/components/Events";
import Sermons from "@/components/Sermons";
import Ministries from "@/components/Ministries";
import VisitUs from "@/components/Visit";
import NewsletterSignup from "@/components/NewsletterForm";
import Aboutus from "@/components/AboutUs";
import EventsCalendar from "@/components/EventsCalendar";
import Sermon from "@/components/Sermon";
import LatestBlogSection from "@/components/BlogSection";
import TithesAndOffering from "@/components/TithesAndOffering";
import GivingForm from "@/components/GivingForm";
import PraiseAndWorship from "@/components/PraiseAndWorship";
import SupportMission from "@/components/SupportMission";
import HeroSect from "@/components/Hero";
import Ready from "@/components/Ready";
import Ministry from "@/components/Ministry";
import Videos from "@/components/Videos";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section>
        <Heroo />
      </section>
       {/* Events */}
      <section className="">
      </section>

      {/* Blog */}
      <section className="">
        <Aboutus />
      </section>

      {/* Blog */}
      <section className="bg-gray-100">
        <Ministry />
      </section>

      {/* Ministries 
      <section className="">
        <Ministries />
      </section>
*/}
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

      {/* Events */}
      <section className="">
        <Ready />
        <Sermon />
      </section>

      {/* Visit Us */}
      <section className="">
        <VisitUs />
      </section>

      

      {/* About Us */}
      <section className="">
        <LatestBlogSection />
      </section>

    </main>
  );
}
