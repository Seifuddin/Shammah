// File: components/SermonPlayer.jsx
export default function SermonPlayer() {
  return (
    <div className="relative text-left">
      <div className=" aspect-w-16 aspect-h-9">
      <h2 className="text-2xl text-blue-700 font-semibold mb-2">Latest Sermon</h2>
      <p className="text-gray-700 leading-relaxed">
            Watch or listen to our recent sermons below
          </p>
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