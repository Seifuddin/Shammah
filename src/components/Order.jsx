// File: components/EventsCalendar.jsx
export default function Order() {
  return (
    <div className="mt-10 py-10">
      <h2 className="text-2xl font-semibold text-blue-600 text-center mb-5">Order of Service</h2>
      <div className="md:flex justify-center">
      <div className="relative ">
        <ul className="list-disc pl-6 text-blue-900">
            <li className="p-2 shadow-2xl border bg-blue-50 m-1 rounded-md">06 : 00 AM - 07 : 00 AM - Morning Devotion & Early Prayers</li>
            <li className="p-2 shadow-2xl border bg-blue-50 m-1 rounded-md">08 : 00 AM - 09 : 00 AM - Sunday School Service</li>
            <li className="p-2 shadow-2xl border bg-blue-50 m-1 rounded-md">09 : 00 AM - 10 : 40 AM - Praise & Service Session</li>
            <li className="p-2 shadow-2xl border bg-blue-50 m-1 rounded-md">10 : 40 AM - 10 : 50 AM - Sunday School Presentations</li>
            <li className="p-2 shadow-2xl border bg-blue-50 m-1 rounded-md">10 : 50 AM - 11 : 00 AM - Youth Presentations</li>
            <li className="p-2 shadow-2xl border bg-blue-50 m-1 rounded-md">11 : 00 AM - 11 : 10 AM - Church Choir Presentation</li>
        </ul>
      </div>

      <div className="relative">
        <ul className="list-disc pl-6 text-blue-900">
            <li className="p-2 shadow-2xl border bg-blue-50 m-1 rounded-md">11 : 10 AM - 11 : 20 AM - Welcoming Visitors</li>
            <li className="p-2 shadow-2xl border bg-blue-50 m-1 rounded-md">11 : 20 AM - 11 : 50 AM - Burning Testimonies</li>
            <li className="p-2 shadow-2xl border bg-blue-50 m-1 rounded-md">11 : 50 AM - 12 : 10 PM - Tithes & Offerings Session</li>
            <li className="p-2 shadow-2xl border bg-blue-50 m-1 rounded-md">12 : 10 PM - 12 : 20 PM - Welcoming of Preacher</li>
            <li className="p-2 shadow-2xl border bg-blue-50 m-1 rounded-md">12 : 20 PM - 01 : 00 PM - Preacher of the Day</li>
            <li className="p-2 shadow-2xl border bg-blue-50 m-1 rounded-md">02 : 00 PM - 04 : 00 PM - Special Prayers & Deliverance</li>
        </ul>
      </div>
      </div>
    </div>
  );
}