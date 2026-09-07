import React from 'react';
import CommercialCover from './_images/commercialCover.jpg';
import ResidentialCover from './_images/residentialCover.jpg';
import Image from 'next/image';
import Link from 'next/link';

export default function SelectGalLery() {
  return (
    <div className=' flex size-full overflow-hidden bg-black'>
      <Link
        href='/commercial'
        className=' cursorBig relative h-full w-1/2 cursor-pointer  overflow-hidden transition-all    duration-200 hover:w-5/6'
      >
        <Image
          className='  object-cover object-center '
          src={CommercialCover}
          alt='Commercial Cover'
          fill
        />
        <div className=' absolute z-10 flex size-full flex-col items-center justify-between p-12'>
          <p className=' text-lg font-medium text-gray-200'>
            Elevate your business environment: Explore RR Landmarks&apos;
            meticulously designed commercial spaces, where light, space, and
            positive Vastu unite.
          </p>
          <h4 className=' text-2xl font-bold text-saddle-tan md:text-4xl lg:text-5xl'>
            Commercial
          </h4>
        </div>
      </Link>
      <Link
        href='/residential'
        className=' cursorBig group relative h-full w-1/2 cursor-pointer   overflow-hidden transition-all  duration-200  hover:w-5/6'
      >
        <Image
          className='  object-cover object-center  '
          src={ResidentialCover}
          alt='Residential Cover'
          fill
        />
        <div className=' absolute z-10 flex size-full flex-col items-center justify-between p-12'>
          <p className=' text-lg font-medium text-gray-200'>
            Discover your perfect harmony: Explore RR Landmarks&apos; exquisite
            residences where Vastu, space, and luxury converge.
          </p>
          <h4 className=' text-2xl font-bold text-saddle-tan md:text-4xl lg:text-5xl'>
            Residential
          </h4>
        </div>
      </Link>
    </div>
  );
}
