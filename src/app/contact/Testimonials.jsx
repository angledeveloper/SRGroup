import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import TestimonialsBackground from './testimonials.png';

const TestimonialsData = [
  // {
  //   name: 'Vaishali Vartak',
  //   siteName: 'Monte Casa',
  //   message:
  //     'Good quality of construction. Convenient Parking space, Responsive Staff whenever called.',
  // },
  {
    name: 'Anil Lavand',
    siteName: 'Anand Residency',
    image: '/images/SRAnandResidency.avif',
    message:
      'We wanted a home close to Pune Airport without having to deal with the heavy traffic, RR Landmarks provided us with the perfect home solution we were looking out for. A big thank you!',
  },
  {
    name: 'Bharat Daud',
    siteName: 'Anand Residency',
    image: '/images/SRAnandResidency.avif',
    message:
      'The locality, quality and price all met our expectations. I was very impressed with the communication, followup and the help provided by RR Landmarks marketing team. Definitely recommend them.',
  },
  {
    name: 'Dr. Sachin Kharat',
    siteName: 'Om Paradise',
    image: '/images/SROmParadise.avif',
    message:
      'I wanted an affordable home close to Hinjewadi, and not very far off from the Pune-Bangalore highway. I found Om Paradise very suitable, considering that they were providing excellent amenities in a gated society. Value for money.',
  },
  {
    name: ' Mahesh Kale',
    siteName: 'Om Paradise',
    image: '/images/SROmParadise.avif',
    message:
      'Prompt and professional service from RR Landmarks, very helpful staff who explained and assisted me with all the documentation and statutory requirements. They made getting my home a smooth sailing task.',
  },
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // cycle through testimonials every 5 seconds and go back to the first one after the last one
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((currentTestimonial + 1) % TestimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentTestimonial]);

  return (
    <div className=' relative flex size-full items-center  justify-center overflow-hidden'>
      <div className=' absolute z-10 flex size-full  flex-col items-center justify-end bg-gradient-to-t from-black to-transparent p-9'>
        <div className=' flex h-48 w-full  flex-col gap-3 md:h-40'>
          <div>
            <div className=' text-xl font-bold text-white md:text-2xl'>
              {TestimonialsData[currentTestimonial].name}
            </div>
            <div className=' text-md font-normal text-neutral-200 md:text-base'>
              Site: {TestimonialsData[currentTestimonial].siteName}
            </div>
          </div>

          <div className=' text-sm  font-light text-neutral-300'>
            {TestimonialsData[currentTestimonial].message}
          </div>
        </div>
        <div className='cursorHide cursor-auto  p-2'>
          <div className='flex   cursor-auto gap-3'>
            {TestimonialsData.map((_, index) => (
              <div
                onClick={() => setCurrentTestimonial(index)}
                key={index}
                className={` size-2 cursor-pointer rounded-full ${
                  index === currentTestimonial ? 'bg-white' : 'bg-neutral-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <Image
        className=' object-cover object-center'
        src={TestimonialsData[currentTestimonial].image}
        fill
        alt='Testimonials'
      />
    </div>
  );
}
