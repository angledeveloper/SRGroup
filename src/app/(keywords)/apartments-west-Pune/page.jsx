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
              2 & 3 BHK Flats in West Pune
            </span>{' '}
            <span className='inline-block p-3 bg-gradient-to-b from-neutral-500  to-neutral-100 to-70% bg-clip-text text-transparent'>
              RR Landmarks Developments
            </span>
          </h1>
        </section>
      </section>
      <section className='mx-auto my-12 flex w-full max-w-screen-2xl flex-col gap-4 p-3 text-2xl font-medium md:text-4xl'>
        <p ref={introTextRef} className='text-black'>
          If you’re exploring 2 BHK and 3 BHK flats in West Pune, Balewadi and
          Baner are among the most sought-after choices. With SR Aishwaryam in
          Balewadi, and SR Business Hub in Baner, RR Landmarks has established a
          strong presence in West Pune, an area known for its superior
          connectivity, growth, and lifestyle appeal.
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
              Why West Pune Is Ideal for Modern Living:
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
              <li>
                Excellent access to Mumbai-Pune Expressway and Hinjawadi IT Hub
              </li>
              <li>
                Well-developed social infrastructure with malls, schools, and
                hospitals
              </li>
              <li>
                Green surroundings with strong property appreciation rates
              </li>
            </ul>
            <p className=' mt-2 font-bold'>RR Landmarks Advantages:</p>
            <ul className='list-disc pl-5 '>
              <li>High-quality, RERA-registered constructions</li>
              <li>Elegant designs with practical layouts</li>
              <li>Long-term trust and transparency in every project</li>
            </ul>
            <p className=' mt-2'>
              Discover the joy of contemporary living in RR Landmarks’ apartments
              across West Pune, where luxury meets location advantage
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
                Q1. What are the top residential zones in West Pune?
              </h4>
              <p className='mt-2 text-sm md:text-base text-black leading-relaxed'>
                Baner, Balewadi, Wakad, and Sus are the most sought-after
                localities known for their infrastructure and connectivity.
              </p>
            </div>

            {/* Q2 */}
            <div className='rounded-xl bg-white/80 border border-blue-100 p-5 md:p-6 shadow-sm'>
              <h4 className='text-base md:text-lg font-semibold text-blue-200'>
                Q2. Does RR Landmarks have projects in West Pune?
              </h4>
              <p className='mt-2 text-sm md:text-base text-black leading-relaxed'>
                Yes, SR Aishwaryam in Balewadi represents RR Landmarks’
                craftsmanship and focus on modern urban living. The presence of
                SR Business Hub, a commercial project situated in Baner, adds
                further value & grip for RR Landmarks across West Pune.
              </p>
            </div>

            {/* Q3 */}
            <div className='rounded-xl bg-white/80 border border-blue-100 p-5 md:p-6 shadow-sm'>
              <h4 className='text-base md:text-lg font-semibold text-blue-200'>
                Q3. What makes West Pune ideal for professionals and families?
              </h4>
              <p className='mt-2 text-sm md:text-base text-black leading-relaxed'>
                Its excellent road connectivity, reputed schools, malls, and IT
                parks make it a preferred living hub.
              </p>
            </div>

            {/* Q4 */}
            <div className='rounded-xl bg-white/80 border border-blue-100 p-5 md:p-6 shadow-sm'>
              <h4 className='text-base md:text-lg font-semibold text-blue-200'>
                Q4. How does RR Landmarks ensure construction quality?
              </h4>
              <p className='mt-2 text-sm md:text-base text-black leading-relaxed'>
                RR Landmarks uses premium-grade materials, strict quality control,
                and advanced engineering methods in every project.
              </p>
            </div>

            {/* Q5 */}
            <div className='rounded-xl bg-white/80 border border-blue-100 p-5 md:p-6 shadow-sm'>
              <h4 className='text-base md:text-lg font-semibold text-blue-200'>
                Q5. Are West Pune projects suitable for rental income?
              </h4>
              <p className='mt-2 text-sm md:text-base text-black leading-relaxed'>
                Yes, due to high IT professional influx and infrastructure
                growth, rental yields are consistently strong in West Pune.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

