'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

const ministries = [
  { label: 'Youth Ministry', href: '/ministries/youth' },
  { label: 'Women Ministry', href: '/ministries/women' },
  { label: 'Men Fellowship', href: '/ministries/men' },
];

const resources = [
  { label: 'Bible Study', href: '/resources/bible-study' },
  { label: 'Devotionals', href: '/resources/devotionals' },
  { label: 'Podcasts', href: '/resources/podcasts' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/sermons', label: 'Sermons' },
    { href: '/blog', label: 'Blog' },
    { label: 'Ministries', dropdown: ministries },
    { label: 'Resources', dropdown: resources },
    { href: '/contact', label: 'Contact' },
  ];

  const linkClasses = (href) =>
    `font-medium ${
      pathname === href
        ? 'text-blue-700 underline underline-offset-4'
        : 'text-gray-700 hover:text-blue-700'
    }`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-6">
        <h1 className="text-xl md:text-2xl font-bold text-blue-700">Shammah</h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map((item, i) =>
            item.dropdown ? (
              <li
                key={i}
                className="relative group"
                onMouseEnter={() => setDropdownOpen(item.label)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <button className="flex items-center gap-1 text-gray-700 hover:text-blue-700 font-medium">
                  {item.label} <ChevronDown size={16} />
                </button>
                {dropdownOpen === item.label && (
                  <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 py-2 z-50">
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.href}>
                        <Link
                          href={subItem.href}
                          className={linkClasses(subItem.href) + ' block px-4 py-2 text-sm hover:bg-blue-100'}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={i}>
                <Link href={item.href} className={linkClasses(item.href)}>
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-700"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden  bg-white px-6 pb-4 shadow-md space-y-3">
          {navLinks.map((item, i) =>
            item.dropdown ? (
              <div key={i}>
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer text-gray-700 font-medium py-2">
                    {item.label}
                    <ChevronDown
                      className="transition-transform group-open:rotate-180"
                      size={16}
                    />
                  </summary>
                  <ul className="pl-4 pt-1 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.href}>
                        <Link
                          href={subItem.href}
                          className={linkClasses(subItem.href)}
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            ) : (
              <Link
                key={i}
                href={item.href}
                className={linkClasses(item.href)}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}
