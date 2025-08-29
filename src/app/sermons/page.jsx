// File: pages/sermons.jsx
import Sermon from '@/components/Sermon';
import SermonPlayer from '@/components/SermonPlayer';

export default function Sermons() {
  return (
    <>
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">Sermons</h1>
        <p className="text-gray-700">Watch or listen to our recent sermons below.</p>
        <SermonPlayer />
        <Sermon />
      </main>
    </>
  );
}