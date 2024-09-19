import { FaTwitter, FaBehance, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/Logo.png";

export default function Footer() {
  return (
    <footer className="bgwhite text-gray-600 py-8 items-center">
      <div className="container mx-auto">
        <div className="grd grid-cols1 sm:grid-cols2 md:grid-cols4 gap-8 flex flex-col md:flex-row justify-between">
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
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img src={Logo} alt="Titan Leap logo" className="h-10" />
            </div>
            <div className="text-sm text-center md:text-left mb-4 md:mb-0">
              <span>+1 (415) 655-1002</span>
              <span className="mx-2 hidden md:inline">|</span>
              <span className="block md:inline">
                830 Stewart Drive, #212, Sunnyvale, CA, USA, 94085
              </span>
            </div>
            <div className="flex space-x-4">
              <FaLinkedin className="text-gray-400 hover:text-gray-600 cursor-pointer" />
              <FaTwitter className="text-gray-400 hover:text-gray-600 cursor-pointer" />
              <FaBehance className="text-gray-400 hover:text-gray-600 cursor-pointer" />
            </div>
          </div>
          <div className="mt-4 flex flex-col md:flex-row justify-between items-center text-sm">
            <span className="mb-2 md:mb-0">Privacy Policy</span>
            <span>© 2024, Titan leap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
