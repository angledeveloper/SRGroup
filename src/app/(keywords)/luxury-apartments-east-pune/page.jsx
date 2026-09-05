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
          src='/images/akshatam.avif'
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
              Luxury Apartments in East Pune
            </span>{' '}
            <span className='inline-block p-3 bg-gradient-to-b from-neutral-500  to-neutral-100 to-70% bg-clip-text text-transparent'>
              RR Landmarks Homes
            </span>
          </h1>
        </section>
      </section>
      <section className='mx-auto my-12 flex w-full max-w-screen-2xl flex-col gap-4 p-3 text-2xl font-medium md:text-4xl'>
        <p ref={introTextRef} className='text-black'>
          RR Landmarks’ developments such as SR Akshatam in Keshav Nagar lie in the
          heart of East Pune’s growth corridor, offering luxury 2 BHK and 3 BHK
          flats in East Pune. This region, encompassing Kharadi, Viman Nagar,
          and Mundhwa, has rapidly transformed into a high-value residential
          zone.
        </p>
        <Link href='/SrAkshatam'>
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
              Why East Pune Is a Luxury Destination:
            </h3>
            <p className=' mt-2'>
              Keshav Nagar’s rapid growth is driven by proximity to IT
              corridors, strong social infrastructure, and easy access to the
              Pune-Ahmednagar Highway. The area offers a perfect mix of calm
              residential zones and vibrant city life.
            </p>
            <p className=' mt-2 font-bold'>
              Why East Pune Is a Luxury Destination:
            </p>
            <ul className='list-disc pl-5 '>
              <li>
                Home to top IT parks like EON, World Trade Center, and Gera
                Commerzone
              </li>
              <li>
                Close to premier schools, hospitals, and entertainment hubs
              </li>
              <li>Excellent connectivity to Pune Airport and Koregaon Park</li>
            </ul>

            <p className=' mt-2 font-bold'>RR Landmarks Edge:</p>
            <ul className='list-disc pl-5 '>
              <li>Vastu-compliant, eco-conscious designs</li>
              <li>Use of premium materials and architectural finesse</li>
              <li>Transparent dealings with on-time delivery record</li>
            </ul>

            <p className=' mt-2'>
              Choose an address that balances sophistication with convenience:
              RR Landmarks’ luxury apartments in East Pune are where premium living
              truly begins.
            </p>
          </div>
          {/* Static card */}
          <div className='z-10 flex w-1/3 flex-col items-center gap-2 rounded-md bg-blue-200 px-6 py-8'>
            {/* Heading */}
            <div className='flex justify-between gap-4 overflow-hidden text-3xl text-yellow-200 md:text-4xl'>
              <span>Enquire Now</span>
            </div>

            {/* Subtext */}
            <span className='text-white'>Enquire for SR Akshatam</span>

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
                href='https://www.sreddygroup.com/SrAkshatam'
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
                Q1. Which are the luxury residential areas in East Pune?
              </h4>
              <p className='mt-2 text-sm md:text-base text-black leading-relaxed'>
                East Pune covers top luxury zones like Keshav Nagar, Kharadi,
                Koregaon Park, and Viman Nagar, each offering premium
                connectivity and urban lifestyle.
              </p>
            </div>

            {/* Q2 */}
            <div className='rounded-xl bg-white/80 border border-blue-100 p-5 md:p-6 shadow-sm'>
              <h4 className='text-base md:text-lg font-semibold text-blue-200'>
                Q2. Why choose RR Landmarks for luxury apartments in East Pune?
              </h4>
              <p className='mt-2 text-sm md:text-base text-black leading-relaxed'>
                RR Landmarks’ developments focus on high-quality construction,
                design aesthetics, and convenient locations to deliver a
                balanced lifestyle.
              </p>
            </div>

            {/* Q3 */}
            <div className='rounded-xl bg-white/80 border border-blue-100 p-5 md:p-6 shadow-sm'>
              <h4 className='text-base md:text-lg font-semibold text-blue-200'>
                Q3. What are the major advantages of living in East Pune?
              </h4>
              <p className='mt-2 text-sm md:text-base text-black leading-relaxed'>
                East Pune offers access to leading IT hubs, educational
                institutions, and Pune Airport, making it ideal for
                professionals and families alike.
              </p>
            </div>

            {/* Q4 */}
            <div className='rounded-xl bg-white/80 border border-blue-100 p-5 md:p-6 shadow-sm'>
              <h4 className='text-base md:text-lg font-semibold text-blue-200'>
                Q4. Are RR Landmarks’ East Pune projects suitable for NRIs?
              </h4>
              <p className='mt-2 text-sm md:text-base text-black leading-relaxed'>
                Yes, many NRIs prefer investing in RR Landmarks projects due to
                assured appreciation, rental demand, and strong resale
                potential.
              </p>
            </div>

            {/* Q5 */}
            <div className='rounded-xl bg-white/80 border border-blue-100 p-5 md:p-6 shadow-sm'>
              <h4 className='text-base md:text-lg font-semibold text-blue-200'>
                Q5. Are all RR Landmarks projects in East Pune RERA certified?
              </h4>
              <p className='mt-2 text-sm md:text-base text-black leading-relaxed'>
                Absolutely, all RR Landmarks projects comply with RERA standards,
                ensuring transparency and trust in every transaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

