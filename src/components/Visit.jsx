// app/visit-us/page.jsx (example)
import VisitUsMap from "@/components/VisitUsMap";

export default function VisitUs() {
  return (
    <main>
      <VisitUsMap
        name="JCM Church Ruiru"
        address="Eastern Bypass, Ruiru, Kiambu, Kenya"
        phone="+254 7XX XXX XXX"
        lat={-1.1549}
        lng={36.9582}
        // Optional but recommended if you have it:
        // placeId="ChIJxxxxxxxxxxxxxxxx" 
        hours={[
          "Sunday Service: 8:30 AM & 11:00 AM",
          "Prayer Service: Wed 6:00 PM",
          "Office: Mon–Fri 9:00 AM – 5:00 PM",
        ]}
      />
    </main>
  );
}
