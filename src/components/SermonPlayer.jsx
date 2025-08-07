// File: components/SermonPlayer.jsx
export default function SermonPlayer() {
  return (
    <div className="relative">
      <h2 className="text-2xl text-black font-semibold mb-2 text-center">Latest Sermon</h2>
      <div className=" aspect-w-16 aspect-h-9">
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