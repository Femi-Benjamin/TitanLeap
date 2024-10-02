import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from "../assets/Logo.png"
import yellowdot from "../assets/yellowdot.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Work', href: '#work' },
    { name: 'Clients', href: '#clients' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="md:bg-neutral-100  backdrop-blur sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h20 h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="w-40"
                src={Logo}
                alt="titanleaplogo" />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link to='/services'
                  key={item.name}
                  href={item.href}
                  className="text-purple-300 hover:text-primary px-3 py-2 rounded-md text-lg font-semibold relative group"
                >
                  {item.name}
                  <img
                    className="yellow-dot hidden group-hover:inline-block absolute left-full w-2 h-2"
                    src={yellowdot}
                    alt="dot"
                  />
                </Link>
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
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primary-dark focus:outline-none "
            >
              <span className="sr-only ">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="hover:text-primary block px-3 py-2 rounded-md text-lg font-bold"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                  <img
                    className="yellow-dot hidden group-hover:inline-block absolute left-full ml-1 w-2 h-2"
                    src={yellowdot}
                    alt="dot"
                  />
                </motion.a>
              ))}
            </div>
            <motion.div
              className="pt-4 pb-3 border-t border-gray-700"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <div className="flex items-center px-5">
                <button className="border-2 border-primary p-2 rounded-xl text-primary font-bold w-full" >
                  Let&apos;s talk
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
