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
import TithesAndOffering from "@/components/TithesAndOffering";
import GivingForm from "@/components/GivingForm";
import PraiseAndWorship from "@/components/PraiseAndWorship";
import SupportMission from "@/components/SupportMission";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section>
        <Heroo />
      </section>

      {/* Blog 
      <section className="">
        <Aboutus />
      </section>

      */}

      {/* Blog */}
      <section className="">
        <SupportMission />
      </section>



      {/* About Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <LatestBlogSection />
      </section>
      

      {/* About Us */}
      <section className="">
        <PraiseAndWorship />
      </section>

      {/* Tithes */}
      <section className="">
        <TithesAndOffering />

      </section>

      {/* Events 
      <section className="">
        <Events />
      </section>
      */}

      {/* Ministries 
      <section className="">
        <Ministries />
      </section>

      */}

      {/* Visit Us */}
      <section className="">
        <VisitUs />
      </section>

      {/* Newsletter Signup 
      <section className=" bg-gray-100">
        <NewsletterSignup />
      </section>
      */}

    </main>
  );
}
