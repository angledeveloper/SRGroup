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
              3 BHK Flats in Balewadi Pune
            </span>{' '}
            <span className='inline-block p-3 bg-gradient-to-b from-neutral-500  to-neutral-100 to-70% bg-clip-text text-transparent'>
              SR Aishwaryam by RR Landmarks
            </span>
          </h1>
        </section>
      </section>
      <section className='mx-auto my-12 flex w-full max-w-screen-2xl flex-col gap-4 p-3 text-2xl font-medium md:text-4xl'>
        <p ref={introTextRef} className='text-black'>
          SR Aishwaryam by RR Landmarks stands tall as one of the best residential
          projects in Balewadi, one of Pune’s most dynamic and premium
          residential hubs. Designed for modern urban families, these 3 BHK
          flats in Balewadi Pune offer elegant interiors, spacious layouts, and
          world-class amenities.
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
              Why Balewadi Is in Demand:
            </h3>
            <p className=' mt-2'>
              Located close to Baner, Hinjawadi, and Aundh, Balewadi has become
              a preferred address for professionals and families alike. Its
              seamless connectivity via Mumbai-Bangalore Highway and its
              proximity to tech parks and top schools make it a top choice for
              real estate buyers.
            </p>
            <p className=' mt-2 font-bold'>Highlights of SR Aishwaryam:</p>
            <ul className='list-disc pl-5 '>
              <li>Premium 3 & 3.5 BHK apartments with luxury finishes</li>
              <li>Close to Balewadi High Street and Hinjawadi IT Park</li>
              <li>
                Fitness center, landscaped garden, and children’s play area
              </li>
              <li>RERA-approved and Vastu-compliant design</li>
            </ul>
            <p className=' mt-2 font-bold'>Why Choose RR Landmarks</p>
            <p className=' mt-2'>
              Known for on-time delivery and transparency, RR Landmarks ensures
              every home blends design excellence with lasting value. Experience
              luxury living at one of the best residential projects in Balewadi
              Pune.
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
                Q1. What makes SR Aishwaryam one of the best 3 BHK projects in
                Balewadi?
              </h4>
              <p className='mt-2 text-sm md:text-base text-black leading-relaxed'>
                SR Aishwaryam combines modern architecture, spacious interiors,
                and premium amenities like a rooftop gym, clubhouse, and
                landscaped garden, making it one of Balewadi’s most elegant
                addresses.
              </p>
            </div>

            {/* Q2 */}
            <div className='rounded-xl bg-white/80 border border-blue-100 p-5 md:p-6 shadow-sm'>
              <h4 className='text-base md:text-lg font-semibold text-blue-200'>
                Q2. How close is SR Aishwaryam to Baner and Hinjawadi IT Park?
              </h4>
              <p className='mt-2 text-sm md:text-base text-black leading-relaxed'>
                The project is just minutes away from Baner and has quick access
                to Hinjawadi via the Mumbai-Bangalore Highway, making it ideal
                for professionals working in the IT sector.
              </p>
            </div>

            {/* Q3 */}
            <div className='rounded-xl bg-white/80 border border-blue-100 p-5 md:p-6 shadow-sm'>
              <h4 className='text-base md:text-lg font-semibold text-blue-200'>
                Q3. What is the price range for 3 BHK flats in Balewadi?
              </h4>
              <p className='mt-2 text-sm md:text-base text-black leading-relaxed'>
                Prices vary based on floor and view; however, SR Aishwaryam
                offers premium 3 BHK options starting at highly competitive
                market rates with excellent ROI potential.
              </p>
            </div>

            {/* Q4 */}
            <div className='rounded-xl bg-white/80 border border-blue-100 p-5 md:p-6 shadow-sm'>
              <h4 className='text-base md:text-lg font-semibold text-blue-200'>
                Q4. Why is Balewadi considered a high-growth residential area?
              </h4>
              <p className='mt-2 text-sm md:text-base text-black leading-relaxed'>
                Balewadi’s proximity to Baner, Aundh, and Hinjawadi, along with
                its modern infrastructure and peaceful environment, makes it a
                top choice for families and investors alike.
              </p>
            </div>

            {/* Q5 */}
            <div className='rounded-xl bg-white/80 border border-blue-100 p-5 md:p-6 shadow-sm'>
              <h4 className='text-base md:text-lg font-semibold text-blue-200'>
                Q5. Is SR Aishwaryam RERA approved?
              </h4>
              <p className='mt-2 text-sm md:text-base text-black leading-relaxed'>
                Yes, SR Aishwaryam by RR Landmarks is fully RERA registered,
                ensuring transparency, timely delivery, and buyer security.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

