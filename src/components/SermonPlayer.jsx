// File: components/SermonPlayer.jsx
export default function SermonPlayer() {
  return (
    <div className="relative text-left">
      <div className=" aspect-w-16 aspect-h-9">
      <h2 className="text-2xl text-blue-900 font-semibold mb-2">Latest Sermon</h2>
      
        <iframe
          className="w-full h-80"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Sermon Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}