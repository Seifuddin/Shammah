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
import Projects from "@/components/Projects";
import Feeding from "@/components/Feeding";
import SwiperGrid from "@/components/SwiperGrid";
import ImageSlider from "@/components/ImageSlider";
import SundayCTA from "@/components/SundayCTA";
import JourneyTimeline from "@/components/JourneyTimeline";
import Testimonies from "@/components/Testimonials";
import Testimonys from "@/components/Testmonies";
import HeroSection from "@/components/Hero";
import DonationCTA from "@/components/Donate";
import UpcomingEvents from "@/components/Upcoming";
import PastEventsGallery from "@/components/PastEventsGallery";
import ChurchTV from "@/components/ChurchTv";
import Bikes from "@/components/Bikes";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section>
        <HeroSection />
        <UpcomingEvents />
      </section>
       {/* Events */}
      <section className="">
      </section>

      {/* Blog 
      <section className="">
        <Aboutus />
      </section>
      */}
      {/* Blog */}
      

      {/* Ministries 
      <section className="">
        <Ministries />
      </section>
*/}
      {/* Blog */}
      <section className="">
        <Feeding />
        <DonationCTA />
        <Projects />
      </section>

      {/* Tithes */}
      <section className="">
        <Ready />
      </section>

      {/* About Us */}
      <section className="">
        <PraiseAndWorship />
        <Testimonys />
        <ChurchTV />
      </section>

      {/* Events */}
      <section className="">
        
      </section>

      {/* About Us */}
      <section className="">
        <Bikes />
      </section>

    </main>
  );
}
