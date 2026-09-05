'use client';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import GlobalButton from '@/app/GlobalButton';
import { Icon } from '@iconify/react';

export default function Page() {
  const heroHeadingLine1 = useRef();

  useGSAP(() => {
    tl.current = gsap.timeline();
  });

  const introTextRef = useRef(null);
  const bottomTextRef = useRef(null);
  // Add this new GSAP animation
  useGSAP(() => {
    const words = introTextRef.current.textContent.split(' ');
    introTextRef.current.innerHTML = '';

    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.textContent = word + ' ';
      span.style.opacity = '0.1';
      introTextRef.current.appendChild(span);
    });

    gsap.to(introTextRef.current.children, {
      opacity: 0.8,
      duration: 0.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: introTextRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });
  });
  /** @type {import('gsap').core.Timeline | null} */
  const tl = useRef(null);

  return (
    <div>
      {' '}
      {/* ✅ wrap everything inside a parent div */}
      <section className='relative w-full h-[100vh] overflow-hidden'>
        {/* Background Image */}
        <Image
          src='/images/aishwaryam.webp'
          alt='Building'
          layout='fill'
          objectFit='cover'
          className=' z-0'
          priority
        />

        {/* Overlay Content */}

        <section className='relative mt-[110px] flex w-screen h-auto lg:w-full lg:h-[calc(100vh-110px)] items-end justify-center overflow-hidden'>
          <div className=' absolute z-10 size-full h-[40%] w-full bg-gradient-to-t  from-black to-transparent bg-blend-multiply'></div>
          <h1
            // ref={heroHeadingLine}
            className=' absolute z-20 m-0 mb-4  flex flex-col items-center overflow-hidden  text-center text-6xl font-black leading-[1em]  text-white md:mb-2'
          >
            <span ref={heroHeadingLine1} className=' text-neutral-200'>
              2 & 3 BHK Flats in Sus Pune
            </span>{' '}
            <span className='inline-block p-3 bg-gradient-to-b from-neutral-500  to-neutral-100 to-70% bg-clip-text text-transparent'>
              RR Landmarks Homes Near Balewadi
            </span>
          </h1>
        </section>
      </section>
      <section className='mx-auto my-12 flex w-full max-w-screen-2xl flex-col gap-4 p-3 text-2xl font-medium md:text-4xl'>
        <p ref={introTextRef} className='text-black'>
          Located very close to SR Aishwaryam in Balewadi & SR Business Hub in
          Baner, the area of Sus Pune has emerged as a popular choice for
          professionals seeking a quiet neighborhood near IT corridors. With
          easy access to Baner, Pashan, and Hinjawadi, Sus offers great options
          for 2 BHK and 3 BHK flats for rent and purchase.
        </p>
        <Link href='/SrAishwaryam'>
          <GlobalButton
            color='white'
            className='w-fit rounded-full px-10 py-3 text-base md:px-12 md:py-4 md:text-lg'
          >
            Visit Project Page
          </GlobalButton>
        </Link>
      </section>
      {/* <section className=' mt-12 flex justify-center w-full flex-row md:flex-row max-w-screen-2xl mx-auto'></section> */}
      <section className='  mt-10 bg-white p-3 py-10'>
        <div className='relative m-auto flex h-fit w-full max-w-screen-2xl gap-10'>
          <div className='  w-full '>
            <h3 className='  text-3xl font-semibold text-blue-200'>
              Why Sus Is a Growing Residential Hub:
            </h3>
            <p className=' mt-2'>
              Located close to Baner, Hinjawadi, and Aundh, Balewadi has become
              a preferred address for professionals and families alike. Its
              seamless connectivity via Mumbai-Bangalore Highway and its
              proximity to tech parks and top schools make it a top choice for
              real estate buyers.
            </p>
            <p className=' mt-2 font-bold'>Highlights of the area:</p>
            <ul className='list-disc pl-5 '>
              <li>Excellent connectivity to the Mumbai-Pune Expressway</li>
              <li>Affordable rental housing near prime IT zones</li>
              <li>Peaceful surroundings with steady appreciation potential</li>
            </ul>
            <p className=' mt-2 font-bold'>RR Landmarks Advantages:</p>
            <ul className='list-disc pl-5 '>
              <li>Legacy of timely delivery and quality craftsmanship</li>
              <li>Ideal homes for investors and families alike</li>
              <li>Strong rental demand from tech professionals</li>
            </ul>
            <p className=' mt-2'>
              Experience a blend of urban convenience and serene living in RR Landmarks’ developments near Sus, West Pune offering unlimited
              sources of happiness to its residents.
            </p>
          </div>
          {/* Static card */}
          <div className='z-10 flex w-1/3 flex-col items-center gap-2 rounded-md bg-blue-200 px-6 py-8'>
            {/* Heading */}
            <div className='flex justify-between gap-4 overflow-hidden text-3xl text-yellow-200 md:text-4xl'>
              <span>Enquire Now</span>
            </div>

            {/* Subtext */}
            <span className='text-white'>Enquire for SR Aishwaryam</span>

            {/* Phone number */}
            <span className='mt-2 font-bold text-white'>+91 7448007500</span>

            {/* Buttons */}
            <div className='mt-4 flex w-full flex-col items-center gap-2'>
              {/* WhatsApp button */}
              <Link
                className='w-full'
                href='https://api.whatsapp.com/send/?phone=%2B917448007500&text&type=phone_number&app_absent=0'
                target='_blank'
              >
                <GlobalButton
                  color='yellow'
                  className='w-full rounded-full border border-yellow-100 p-2 text-base font-medium'
                >
                  <span className='flex w-full items-center justify-center gap-2'>
                    <Icon icon='akar-icons:whatsapp-fill' />
                    Whatsapp
                  </span>
                </GlobalButton>
              </Link>

              {/* Download brochure – static link */}
              <Link
                href='https://www.sreddygroup.com/SrAishwaryam'
                target='_blank'
                className='w-full'
              >
                <GlobalButton
                  color='white'
                  className='w-full whitespace-nowrap rounded-full p-2 text-base font-medium'
                >
                  Vist Project Page
                </GlobalButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full bg-neutral-50'>
        <div className='mx-auto max-w-screen-2xl px-4 py-12 md:px-8 md:py-16'>
          <h3 className='text-center text-3xl md:text-5xl font-semibold text-blue-200'>
            Frequently Asked Questions
          </h3>

          <div className='mt-8 space-y-6'>
            {/* Q1 */}
            <div className='rounded-xl bg-white/80 border border-blue-100 p-5 md:p-6 shadow-sm'>
              <h4 className='text-base md:text-lg font-semibold text-blue-200'>
                Q1. Is Sus Pune a good area for property investment?
              </h4>
              <p className='mt-2 text-sm md:text-base text-black leading-relaxed'>
                Yes, Sus has seen rapid development with its proximity to Baner,
                Balewadi, and Hinjawadi IT Park.
              </p>
            </div>

            {/* Q2 */}
            <div className='rounded-xl bg-white/80 border border-blue-100 p-5 md:p-6 shadow-sm'>
              <h4 className='text-base md:text-lg font-semibold text-blue-200'>
                Q2. Does RR Landmarks have projects close to Sus?
              </h4>
              <p className='mt-2 text-sm md:text-base text-black leading-relaxed'>
                SR Aishwaryam in Balewadi is located close to Sus, offering
                residents peaceful surroundings and modern amenities.
                Additionally, SR Business Hub in Baner is just adjacent to Sus,
                often referred to as the ‘Baner-Sus’ area.
              </p>
            </div>

            {/* Q3 */}
            <div className='rounded-xl bg-white/80 border border-blue-100 p-5 md:p-6 shadow-sm'>
              <h4 className='text-base md:text-lg font-semibold text-blue-200'>
                Q3. What are the connectivity benefits of living in Sus?
              </h4>
              <p className='mt-2 text-sm md:text-base text-black leading-relaxed'>
                Sus connects easily to Pashan, Aundh, and Hinjawadi via the
                Pune-Mumbai Expressway, ensuring quick commute times.
              </p>
            </div>

            {/* Q4 */}
            <div className='rounded-xl bg-white/80 border border-blue-100 p-5 md:p-6 shadow-sm'>
              <h4 className='text-base md:text-lg font-semibold text-blue-200'>
                Q4. Are 2 & 3 BHK flats in Sus suitable for rental income?
              </h4>
              <p className='mt-2 text-sm md:text-base text-black leading-relaxed'>
                Yes, many professionals working in nearby IT parks prefer
                renting homes in and near Sus due to its peaceful and
                well-connected environment.
              </p>
            </div>

            {/* Q5 */}
            <div className='rounded-xl bg-white/80 border border-blue-100 p-5 md:p-6 shadow-sm'>
              <h4 className='text-base md:text-lg font-semibold text-blue-200'>
                Q5. Are RR Landmarks projects near Sus family-friendly?
              </h4>
              <p className='mt-2 text-sm md:text-base text-black leading-relaxed'>
                Absolutely, with spacious layouts, green surroundings, and top
                amenities, they’re ideal for families and working couples with
                the presence of both - Residential & Commercial spaces!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

