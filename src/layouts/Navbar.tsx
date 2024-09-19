import { useState } from 'react'
import Logo from "../assets/Logo.png"
import yellowdot from "../assets/yellowdot.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Work', href: '/work' },
    { name: 'Clients', href: '/clients' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-neutral-100">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="w-40" src={Logo} alt="titanleaplogo" />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-purple-300 hover:text-primary px-3 py-2 rounded-md text-lg font-semibold relative group"
                >
                  {item.name}
                  <img
                    className="yellow-dot hidden group-hover:inline-block absolute left-full ml-1 w-2 h-2"
                    src={yellowdot}
                    alt="dot"
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <button className="border-2 border-primary p-2 rounded-xl text-primary font-bold">
              Let&apos;s talk
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt2 pb-3 space-y-1 sm:px-3 text-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-purple-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
                <img
                  className="yellow-dot hidden group-hover:inline-block absolute left-full ml-1 w-2 h-2"
                  src={yellowdot}
                  alt="dot"
                />
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <button className="border-2 border-primary p-2 rounded-xl text-primary font-bold w-full">
                Let&apos;s talk
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar





// import Logo from "../assets/Logo.png";
// import yellowdot from "../assets/yellowdot.png";

// const Navbar = () => {
//     return (
//         <div>
//             <div className="bg-neutral-100">
//                 <div className="p-5 px-20 flex justify-between items-center">
//                     <img className="w-40" src={Logo} alt="titanleaplogo" />

//                     <div>
//                         <ul className="flex gap-10 text-lg font-semibold text-purple-300  leading-[171.429%]">
//                             <li className="cursor-pointer relative group  hover:text-primary">
//                                 Home
//                                 <img className="yellow-dot hidden group-hover:inline-block absolute left-full ml-1" src={yellowdot} alt="dot" />
//                             </li>
//                             <li className="cursor-pointer relative group hover:text-primary">
//                                 About Us
//                                 <img className="yellow-dot hidden group-hover:inline-block absolute left-full ml-1" src={yellowdot} alt="dot" />
//                             </li>
//                             <li className="cursor-pointer relative group hover:text-primary">
//                                 Our Work
//                                 <img className="yellow-dot hidden group-hover:inline-block absolute left-full ml-1" src={yellowdot} alt="dot" />
//                             </li>
//                             <li className="cursor-pointer relative group hover:text-primary">
//                                 Clients
//                                 <img className="yellow-dot hidden group-hover:inline-block absolute left-full ml-1" src={yellowdot} alt="dot" />
//                             </li>
//                             <li className="cursor-pointer relative group hover:text-primary">
//                                 Services
//                                 <img className="yellow-dot hidden group-hover:inline-block absolute left-full ml-1" src={yellowdot} alt="dot" />
//                             </li>
//                             <li className="cursor-pointer relative group hover:text-primary">
//                                 Contact
//                                 <img className="yellow-dot hidden group-hover:inline-block absolute left-full ml-1" src={yellowdot} alt="dot" />
//                             </li>
//                         </ul>
//                     </div>

//                     <div>
//                         <button className="border-2 border-primary p-2 rounded-xl text-primary font-bold">Let&apos;s talk</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default Navbar;