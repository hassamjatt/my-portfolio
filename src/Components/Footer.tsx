// components/Footer.tsx
import Link from 'next/link';
import { FaLinkedin, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";



const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link href="/" className="hover:text-pink-400">Home</Link>
              </li>
              <li>
                <Link href="/About" className="hover:text-pink-400">About</Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-pink-400">Skills</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-pink-400">Contact</Link>
              </li>
              <li>
                <Link href="/Profile" className="hover:text-pink-400">Profile</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul>
              <li>
                <Link href="/web-development" className="hover:text-pink-400">Web Development</Link>
              </li>
              <li>
                <Link href="/app-development" className="hover:text-pink-400">App Development</Link>
              </li>
              <li>
                <Link href="/design" className="hover:text-pink-400">Design</Link>
              </li>
              <li>
                <Link href="/consulting" className="hover:text-pink-400">Consulting</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul>
              <li>
                <span className="text-sm">Email: jatthassam41@gmail.com.</span>
              </li>
              <li>
                <span className="text-sm">Phone: +92 3121380619</span>
              </li>
              <li>
                <span className="text-sm">Address: 123 Main St, Sanghar sindh, Pakistan</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
      <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
      <div className="flex space-x-4">
        <Link href="https://facebook.com" passHref
        className="hover:text-blue-500">
          <FaFacebookSquare />


          
        </Link>
        <Link href="https://twitter.com" passHref 
        className="hover:text-black">
          <FaSquareXTwitter/>

          
        </Link>
        <Link href="https://linkedin.com" passHref
        className="hover:text-blue-700">
          <FaLinkedin />

          
        </Link>
        <Link href="https://instagram.com" passHref
        className="hover:text-pink-500">
          <FaInstagram />

          
        </Link>
      </div>
    </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2024 Hassam Jatt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
