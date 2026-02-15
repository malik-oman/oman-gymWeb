import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import toast from 'react-hot-toast'

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const Contact = () => {

const notify = () => toast.success('Your message send successfully.');


  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-6"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-6xl grid lg:grid-cols-2 gap-10"
      >
        {/* ADDRESS SECTION */}
        <motion.div
          variants={itemVariants}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-xl"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-8">
            Get in Touch
          </h2>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <MapPin className="w-6 h-6 text-blue-400 group-hover:scale-110 transition" />
              <p className="text-lg text-gray-300">
                Gym Street, Fitness City, LKO
              </p>
            </div>

            <div className="flex items-center gap-4 group">
              <Phone className="w-6 h-6 text-blue-400 group-hover:scale-110 transition" />
              <p className="text-lg text-gray-300">+92 311 7343706</p>
            </div>

            <div className="flex items-center gap-4 group">
              <Mail className="w-6 h-6 text-blue-400 group-hover:scale-110 transition" />
              <p className="text-lg text-gray-300">
                malikoman258@gmail.com
              </p>
            </div>
          </div>
        </motion.div>

        {/* CONTACT FORM */}
        <motion.form
          variants={itemVariants}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-xl space-y-6"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Contact Us
          </h2>

          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg bg-gray-900/70 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-gray-900/70 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Your Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full p-3 rounded-lg bg-gray-900/70 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
            />
          </div>

        <div>
            <button onClick={notify}
            type="submit"
            className="w-full py-3 rounded-lg text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all"
          >
            Send Message 🚀
          </button>
       
        </div>
        </motion.form>
      </motion.div>
    </section>
  )
}

export default Contact
