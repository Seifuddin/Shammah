// File: components/SermonPlayer.jsx
export default function SermonPlayer() {
  return (
    <div className="mt-6 bg-white">
      <h2 className="text-2xl font-semibold mb-2">Latest Sermon</h2>
      <div className="container mx-auto px-4 aspect-w-16 aspect-h-9">
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