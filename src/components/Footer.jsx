import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-10 pb-6">
      <div className="container mx-auto px-4 grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {/* Logo & Mission */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Shammah Gospel</h2>
          <p className="text-sm leading-relaxed">
            A Christ-centered church committed to spreading the gospel, building
            faith, and serving the community with love and purpose.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Sermons", href: "/sermons" },
              { label: "Events", href: "/events" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-blue-300 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Times */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Service Times</h3>
          <ul className="text-sm space-y-2">
            <li>Sunday Worship: 9:00 AM – 12:00 PM</li>
            <li>Midweek Service: Wed 6:00 PM – 8:00 PM</li>
            <li>Youth Fellowship: Sat 4:00 PM – 6:00 PM</li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm mb-3">Email: info@shammahgospel.org</p>
          <p className="text-sm mb-3">Phone: +254 712 345 678</p>

          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-300">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-blue-300">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-700 mt-10 pt-4 text-center text-sm text-blue-200">
        &copy; {new Date().getFullYear()} Shammah Gospel Church. All rights
        reserved.
      </div>
    </footer>
  );
}
