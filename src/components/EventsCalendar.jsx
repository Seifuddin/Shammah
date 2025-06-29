// File: components/EventsCalendar.jsx
export default function EventsCalendar() {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-2">Church Events</h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Sunday Worship - Every Sunday at 10 AM</li>
        <li>Youth Fellowship - Fridays at 6 PM</li>
        <li>Community Outreach - First Saturday of the Month</li>
      </ul>
    </div>
  );
}