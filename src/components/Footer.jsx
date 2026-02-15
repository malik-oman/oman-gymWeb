import React from 'react'
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
} from 'lucide-react'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-white font-poppins border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div className="space-y-4">
          <h1 className="text-3xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            FitLife Gym
          </h1>
          <p className="text-gray-400 leading-relaxed max-w-sm">
            Empowering lives through fitness. Train smarter, get stronger,
            and become your best self with us.
          </p>

          {/* Newsletter */}
          <div className="mt-5">
            <p className="text-sm text-gray-400 mb-2">
              Subscribe for fitness tips
            </p>
            <div className="flex items-center bg-white/5 border border-white/10 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-4 py-2 text-sm w-full focus:outline-none"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Quick Links
          </h2>
          <ul className="mt-5 space-y-3 text-gray-400">
            {['home', 'opinions', 'trainer', 'contact'].map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth
                  offset={-80}
                  duration={500}
                  className="cursor-pointer hover:text-white transition relative after:block after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all hover:after:w-full"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Follow Us
          </h2>
          <div className="flex mt-6 gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-blue-600 hover:scale-110 transition-all"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} FitLife Gym. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
