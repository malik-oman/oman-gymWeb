import React from 'react'
import { FaCertificate, FaDumbbell, FaFacebook, FaHeart, FaInstagram, FaMedal, FaPlay, FaRunning, FaThumbsUp, FaTwitter,  FaUsers } from 'react-icons/fa'
import bgImage from '../assets/bannertop.png'

const Banner = () => {
  return (
    <div>
      {/* BANNER SECTION */}
      <div id='home' className='relative h-screen bg-black overflow-hidden flex flex-col lg:flex-row items-center justify-center lg:justify-between'>
        {/* CONTENT SECCTION */}
        <div className='relative z-10 flex flex-col justify-center items-start px-6 sm:px-10 lg:px-20 text-white bg-gradient-to-r from-black via-transparent h-full w-full lg:w-1/2'>
         <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6  animate-slideInLeft text-center lg:text-left ' >
          Elevate your <span className='text-yellow-500'>Workout</span>
         </h1>
         <p className='text-sm sm:text-base md:text-lg lg:text-xl mb-8 animate-slideInLeft delay-200 text-center lg:text-left'>
          Transform your fitness journey with professional guidance and advanced technique. Push your limits every day and achieve your dream body with customized plans.
         </p>

         {/* ICONS SECTION */}

         <div className='flex flex-wrap sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fadeIn delay-400'>
          <div className='flex items-center gap-3 group'>
          <FaDumbbell className='text-yellow-500 text-2xl sm:text-3xl transition-transform transform group-hover:rotate-12 group-hover:scale-110' />
          <span className='text-sm sm:text-lg font-medium'>
           Strength Training
          </span>
          </div>

            <div className='flex items-center gap-3 group'>
          <FaHeart className='text-yellow-500 text-2xl sm:text-3xl transition-transform transform group-hover:rotate-12 group-hover:scale-110' />
          <span className='text-sm sm:text-lg font-medium'>
           Cardio Fitness
          </span>
          </div>

            <div className='flex items-center gap-3 group'>
          < FaRunning  className='text-yellow-500 text-2xl sm:text-3xl transition-transform transform group-hover:rotate-12 group-hover:scale-110' />
          <span className='text-sm sm:text-lg font-medium'>
           Endurance
          </span>
          </div>
         </div>

         {/* BUTTONS */}
          <div className='flex flex-wrap gap-4 justify-center lg:justify-start mb-6'>
            <button className='px-4 sm:px-6 py-2 sm:py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-500 transition-transform hover:scale-105 delay-600 cursor-pointer'>
             Get Started
            </button>
            <button className='px-4 sm:px-6 sm:py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-100 transition-transform transform hover:scale-105 delay-700 flex items-center gap-2'>
              <FaPlay className='text-black text-xl'/> Watch Demo
            </button>
            </div>    
             {/* SOCIAL MEDIA */}
             <div className='flex gap-6 mt-4 animate-fadeIn delay-800 justify-center lg:justify-start '>
              <a href="#" aria-label='FaceBook' className='text-blue-500 text-2xl sm:text-3xl' >
                <FaFacebook/>
              </a>
              <a href="#" aria-label='Instagram' className='text-red-500 text-2xl sm:text-3xl' >
                <FaInstagram/>
              </a>
              <a href="#" aria-label='Twitter' className='text-blue-600 text-2xl sm:text-3xl' >
                <FaTwitter/>
              </a>
             </div>
        </div>

        {/* BG IMAGE */}
         <div className='absolute top-0 right-0 h-full w-full lg:w-1/2 flex justify-center items-center'>
         <img src={bgImage} alt="" className='h-full w-full object-contain opacity-80 animate-zoomInSlow' />
         </div>
      </div>

      {/* NEW SECTION */}
       <div className='bg-black py-12 sm:py-16 text-white'>
        <div className='container mx-auto px-4 sm:px-8 text-center'>
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12'>
          <div className='flex flex-col items-center gap-4 animate-fadeIn delay-200'>
           <FaMedal className='text-yellow-500 text-3xl sm:text-4xl'/>
           <span className='text-sm sm:text-lg md:text-xl font-semibold'>
            5+ Years of Services
           </span>
          </div>

             <div className='flex flex-col items-center gap-4 animate-fadeIn delay-400'>
           <FaCertificate className='text-yellow-500 text-3xl sm:text-4xl'/>
           <span className='text-sm sm:text-lg md:text-xl font-semibold'>
            50+  Certified Trainers
           </span>
          </div>

            <div className='flex flex-col items-center gap-4 animate-fadeIn delay-600'>
           <FaUsers className='text-yellow-500 text-3xl sm:text-4xl'/>
           <span className='text-sm sm:text-lg md:text-xl font-semibold'>
            1000+  Happy Members
           </span>
          </div>

            <div className='flex flex-col items-center gap-4 animate-fadeIn delay-800'>
           <FaThumbsUp className='text-yellow-500 text-3xl sm:text-4xl'/>
           <span className='text-sm sm:text-lg md:text-xl font-semibold'>
            90% Customer Satisfaction
           </span>
          </div>

          </div>
        </div>
       </div>
    </div>
  )
}

export default Banner