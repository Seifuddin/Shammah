// File: pages/sermons.jsx
import JourneyTimeline from '@/components/JourneyTimeline';
import Aboutus from '@/components/AboutUs';

export default function AboutPage() {
  return (
    <>
      <main className="relative">
        <Aboutus />
        <JourneyTimeline />
      </main>
    </>
  );
}