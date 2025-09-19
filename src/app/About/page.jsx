// File: pages/sermons.jsx
import JourneyTimeline from '@/components/JourneyTimeline';
import Aboutus from '@/components/AboutUs';
import Ministry from '@/components/Ministry';
import Branches from '@/components/Branches';
import Tithes from '@/components/Tithes';
import CorePrinciples from '../../components/CorePrinciples';
import SundayCTA from '@/components/SundayCTA';
import Testimonys from '@/components/Testmonies';

export default function AboutPage() {
  return (
    <>
      <main className="relative overflow-x-hidden">
        <Aboutus />
        <CorePrinciples />
        <JourneyTimeline />
        <Branches />
        <Ministry />
        <Tithes />
        <SundayCTA />
        <Testimonys />
      </main>
    </>
  );
}