import { FaTwitter, FaBehance, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/Logo.png";

export default function Footer() {
  return (
    <footer className="bgwhite text-gray-600 py-8 px-4">
      <div className="mx-auto">
        <div className="flex justify-between">
          <div>
            <h3 className="text-purple-700 font-semibold mb-4">Our services</h3>
            <ul className="space-y-2">
              <li>Online Media Management</li>
              <li>Content Creation</li>
              <li>Search Engine Optimization</li>
              <li>Product Design</li>
              <li>Motion Design</li>
              <li>Brand Identity</li>
            </ul>
          </div>
          <div>
            <h3 className="text-purple-700 font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>Digital Marketing</li>
              <li>E-commerce Solutions</li>
              <li>Analytics and Reporting</li>
              <li>Consulting Services</li>
            </ul>
          </div>
          <div>
            <h3 className="text-purple-700 font-semibold mb-4">Cases</h3>
            <ul className="space-y-2">
              <li>Future Pay</li>
              <li>Future labs</li>
              <li>E-commerce Giant</li>
              <li>Kioudaa</li>
              <li>Client XYZ</li>
              <li>See more cases</li>
            </ul>
          </div>
          <div>
            <h3 className="text-purple-700 font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>Who we are</li>
              <li>Clients</li>
              <li>Jobs</li>
              <li>Blog</li>
              <li>Contacts</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={Logo} alt="Titan Leap logo" className="h-10" />
            </div>
            <div className="text-sm mt-4 lg:mt-0">
              <span>+1 (415) 655-1002</span>
              <span className="mx-2">|</span>
              <span>830 Stewart Drive, #212, Sunnyvale, CA, USA, 94085</span>
            </div>
            <div className="flex space-x-4 mt-4 lg:mt-0">
              <FaLinkedin className="text-gray-400 hover:text-gray-600 cursor-pointer" />
              <FaTwitter className="text-gray-400 hover:text-gray-600 cursor-pointer" />
              <FaBehance className="text-gray-400 hover:text-gray-600 cursor-pointer" />
            </div>
          </div>
          <div className="mt-4 flex flex-wrap justify-between items-center text-sm">
            <span>Privacy Policy</span>
            <span>© 2024, Titan leap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
