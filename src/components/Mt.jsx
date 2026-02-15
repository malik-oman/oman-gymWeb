import React from 'react'

import MOT1 from '../assets/1.jpg'
import MOT2 from '../assets/2.jpg'
import MOT3 from '../assets/3.jpg'
import MOT4 from '../assets/4.jpg'
import MOT5 from '../assets/5.jpg'
import MOT6 from '../assets/6.jpg'

const trainers = [MOT1,MOT2,MOT3,MOT4,MOT5,MOT6]

const Mt = () => {
  return (
    <div className='bg-gradient-to-b from-black via-gray-900 to-black py-12 ' id='trainer'>
      {/* HEADING SECTION */}
      <div className='text-center mb-10 px-4'>
        <h2 className='text-3xl md:text-5xl font-semibold tracking-tight text-gray-800'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600'>
            Meet Our Trainers
          </span>
        </h2>
        <p className='text-sm md:text-lg text-gray-400 mt-4 max-w-2xl mx-auto'>
          Our Professional trainers are here to inspire and guide you on your fitness journey, ensuring you achieve your goals with confidence and care.
        </p>
      </div>

      {/* IMAGE GRID */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 lg:px-20'>
      {trainers.map((imgSrc, index)=> (
        <div key={index} className='group relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-gray-800 to-gray-900 transition-transform hover:scale-105 hover:shadow-2xl'>
          {/* LAZY LOADING */}
          <img src={imgSrc} alt={`Trainer ${index+1}`} className='w-full aspect-[3/2] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110' />

          {/* OVERLAY CONTENT */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black-60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-4'>
          <h3 className='text-lg md:text-xl font-bold text-white mb-1' >Trainer{index +1}</h3>
          <p className='text-xs md:text-sm text-gray-300'>Certified Fitness & Wellness Coach</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Mt