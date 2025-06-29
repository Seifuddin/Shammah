// File: components/MapSection.jsx
export default function MapSection() {
  return (
    <div className="relative p-10 bg-amber-50">
      <h2 className="text-2xl font-semibold mb-4 text-center">Our Location</h2>
      <div className="w-full h-64">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.154339291828!2d36.821946!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d469eeea89%3A0x5aa7e236637f1b08!2sNairobi!5e0!3m2!1sen!2ske!4v1620123456789!5m2!1sen!2ske"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}