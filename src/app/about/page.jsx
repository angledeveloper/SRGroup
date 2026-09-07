'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import GlobalButton from '@/app/GlobalButton';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function About() {
  const heroHeadingLine1 = useRef();
  const heroHeadingLine2 = useRef();
  const heroHeadingLine = useRef();

  useGSAP(() => {
    tl.current = gsap.timeline();
  });

  const introTextRef = useRef(null);
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
          src='/images/Akshatam_hi_rez.avif'
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
              Delivering Consistent
            </span>{' '}
            <span className='inline-block p-3 bg-gradient-to-b from-neutral-500  to-neutral-100 to-70% bg-clip-text text-transparent'>
              Quality And Luxury.
            </span>
          </h1>
        </section>
      </section>
      <section className=' flex w-full  flex-col gap-4 p-3 text-2xl font-medium md:text-4xl bg-white py-12'>
        <div className='mx-auto max-w-screen-2xl'>
          <p ref={introTextRef} className='text-black'>
            RR Landmarks specialises in residential and commercial projects and
            maintains our on-time delivery commitment. Our layouts, crafted in
            compliance with Good Vastu and Feng Shui principles, ensure harmony
            and prosperity for your family. Lastly, along with good transparency
            with our clients, we uphold high compliance with all real estate
            laws, maintaining our longstanding reputation for integrity and
            trust.
          </p>
          <Link href='/portfolio'>
            <GlobalButton
              color='dark'
              className='w-fit rounded-full px-10 py-2 my-10 text-base md:px-12 md:py-2 md:text-lg'
            >
              Our Work
            </GlobalButton>
          </Link>
        </div>
      </section>
      <section className='w-screen overflow-hidden bg-transparent'>
        <div className='marquee-track flex w-max items-center gap-10 py-6'>
          {[0, 1].map((dup) => (
            <div
              key={dup}
              className='flex items-center gap-10 whitespace-nowrap'
              aria-hidden={dup === 2}
            >
              <p className='text-4xl font-light text-darkwood-300 md:text-6xl lg:text-7xl'>
                Clarity. Clear plans.{' '}
                <span className='text-saddle-tan'>Clear timelines.</span> Clear
                delivery.
              </p>
            </div>
          ))}
        </div>
        <style jsx>{`
          .marquee-track {
            animation: marquee 24s linear infinite;
          }
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>
      {/* Videos section
      <section className=' mt-12  flex w-full flex-col md:flex-row max-w-screen-2xl mx-auto'>
        <div className=' relative aspect-video h-full overflow-hidden'>
          <video
            src='https://admin.sreddygroup.com/api/files/75iqw278ep21ek1/b5kwg01rsv7gfm5/interior_p2RFOLtHal.mp4'
            className=' size-full object-cover contrast-[1.2] '
            autoPlay
            loop
            muted
            playsInline
            preload='auto'
            poster='/thumbnail.avif'
            alt='Video background'
          ></video>
        </div>
        <div className=' relative aspect-video h-full overflow-hidden'>
          <video
            src='https://admin.sreddygroup.com/api/files/75iqw278ep21ek1/b5kwg01rsv7gfm5/exterior_dKIMhGuwzA.mp4'
            className=' size-full object-cover contrast-[1.2] '
            autoPlay
            loop
            muted
            playsInline
            preload='auto'
            poster='/thumbnail_alt.avif'
            alt='Video background'
          ></video>
        </div>
      </section> */}
      {/* <section className=' mt-12 flex justify-center w-full flex-row md:flex-row max-w-screen-2xl mx-auto'></section> */}
      {/* Leadership section */}
      <section className='w-full h-full bg-white'>
        <div className='mx-auto max-w-screen-xl px-3 py-12 md:py-16'>
          {/* Rajendra */}
          <div className='mt-12 grid grid-cols-1 gap-28 bg-white isolate lg:grid-cols-12 lg:gap-20 xl:gap-28 lg:z-[15] items-stretch'>
            <div className='lg:col-span-7 xl:col-span-6'>
              <div className='relative w-full h-[874px] bg-white rounded-md shadow-sm overflow-hidden aspect-[3/4]'>
                <Image
                  src='/images/founders/rajendra.webp'
                  alt='Mr. Rajendra Reddy'
                  fill
                  className='object-cover'
                  priority
                />
              </div>
            </div>

            {/* Rajendra Copy */}
            <div className='lg:col-span-5 xl:col-span-4 h-full flex items-center'>
              <div>
                <h4 className='text-2xl md:text-3xl font-medium text-darkwood-300'>
                  Mr. Rajendra Reddy
                </h4>
                <p className='mt-1 text-sm md:text-base text-zinc-400 font-regular'>
                  Managing Director, RR Landmarks
                </p>

                <div className='mt-4 space-y-4 text-black leading-relaxed text-lg'>
                  <p>
                    Focuses on long-term vision, compliance, and overall
                    direction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Shailendra */}
          <div className='mt-12 grid grid-cols-1 lg:grid-cols-12 gap-28 lg:gap-20 xl:gap-28 items-start   lg:top-64 bg-white isolate lg:z-[16]'>
            {/* Shailendra Portrait - first on mobile, right on desktop */}
            <div className='order-1 lg:order-2 lg:col-span-7 lg:col-start-6 xl:col-span-6 xl:col-start-7 lg:z-0'>
              <div className='relative w-full h-[874px] bg-white rounded-md shadow-sm overflow-hidden aspect-[3/4]'>
                <Image
                  src='/images/founders/shailendra.webp'
                  alt='Mr. Shailendra Reddy'
                  fill
                  className='object-cover'
                  priority
                />
              </div>
            </div>

            {/* Shailendra Copy - second on mobile, left on desktop */}
            <div className='order-2 lg:order-1 lg:col-span-5 xl:col-span-4 h-full flex items-center'>
              <div>
                <h4 className='text-2xl md:text-3xl font-medium text-darkwood-300'>
                  Mr. Shailendra Reddy
                </h4>
                <p className='mt-1 text-sm md:text-base text-zinc-400 font-regular'>
                  Director, RR Landmarks
                </p>

                <div className='mt-4 space-y-4 text-black leading-relaxed text-lg'>
                  <p>
                    Handles execution planning, site coordination, and delivery
                    oversight.
                  </p>
                  <a
                    href='https://www.linkedin.com/in/shailendra-reddy/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 text-sm font-medium text-neutral-800 transition-colors hover:text-neutral-500'
                  >
                    Check LinkedIn
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Onkar */}
          <div className='mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-8 items-start  bg-white isolate lg:z-[17] '>
            {/* Onkar Portrait */}
            <div className='lg:col-span-7 xl:col-span-6'>
              <div className='relative w-full h-[874px] bg-white rounded-md shadow-sm overflow-hidden aspect-[3/4]'>
                <Image
                  src='/images/founders/onkar.webp'
                  alt='Mr. Onkar Reddy'
                  fill
                  className='object-cover'
                  priority
                />
                {/* <a
                  href='https://www.linkedin.com/in/onkarsrgroup/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='LinkedIn profile'
                  className='absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-md bg-white/90 px-3 py-2 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-200'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 448 512'
                    className='h-4 w-4'
                    fill='currentColor'
                  >
                    <path d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.9A53.79 53.79 0 0 1 107.58 54c0 29.6-24.09 54.1-53.79 54.1zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.26-79.2-48.3 0-55.7 37.7-55.7 76.6V448H158.6V148.9h88.9v40.8h1.3c12.4-23.5 42.5-48.3 87.4-48.3 93.5 0 110.7 61.5 110.7 141.5V448z' />
                  </svg>
                  <span className='text-sm'>LinkedIn</span>
                </a> */}
              </div>
            </div>

            {/* Onkar Copy */}
            <div className='lg:col-span-5 xl:col-span-4 h-full flex items-center'>
              <div>
                <h4 className='text-2xl md:text-3xl font-medium text-darkwood-300'>
                  Mr. Onkar Reddy
                </h4>
                <p className='mt-1 text-sm md:text-base text-zinc-400 font-regular'>
                  Project Manager, RR Landmarks
                </p>

                <div className='mt-4 space-y-4 text-black leading-relaxed text-lg'>
                  <p>
                    Works at the intersection of architecture and build quality
                    on ground.
                  </p>
                  <a
                    href='https://www.linkedin.com/in/onkarsrgroup/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 text-sm font-medium text-neutral-800 transition-colors hover:text-neutral-500'
                  >
                    Check LinkedIn
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What drives our work section */}
      <section className='w-full bg-neutral-50'>
        <div className='mx-auto max-w-screen-2xl px-4 py-12 md:px-8 md:py-16'>
          <h3 className='text-3xl font-medium text-darkwood-300 md:text-4xl'>
            What Drives Our Work
          </h3>
          <div className='mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12'>
            <div className='block gap-4'>
              <span className='mb-3 flex h-5 w-5 items-center justify-center rounded-sm bg-darkwood-300 text-[10px] font-bold text-travertine-300'>
                1
              </span>
              <div>
                <h4 className='text-base font-semibold text-neutral-800'>
                  Build What You Promise
                </h4>
                <p className='mt-1 text-sm text-neutral-500'>
                  We commit to timelines and specifications we can realistically
                  deliver.
                </p>
              </div>
            </div>
            <div className='block gap-4'>
              <span className='mb-3 flex h-5 w-5 items-center justify-center rounded-sm bg-darkwood-300 text-[10px] font-bold text-travertine-300'>
                2
              </span>
              <div>
                <h4 className='text-base font-semibold text-neutral-800'>
                  Compliance Is Non-Negotiable
                </h4>
                <p className='mt-1 text-sm text-neutral-500'>
                  Every project follows applicable real estate laws and
                  approvals. No shortcuts.
                </p>
              </div>
            </div>
            <div className='block gap-4'>
              <span className='mb-3 flex h-5 w-5 items-center justify-center rounded-sm bg-darkwood-300 text-[10px] font-bold text-travertine-300'>
                3
              </span>
              <div>
                <h4 className='text-base font-semibold text-neutral-800'>
                  Design Must Work on Site
                </h4>
                <p className='mt-1 text-sm text-neutral-500'>
                  Good drawings mean nothing if they cannot be built well. We
                  bridge design and execution.
                </p>
              </div>
            </div>
            <div className='block gap-4'>
              <span className='mb-3 flex h-5 w-5 items-center justify-center rounded-sm bg-darkwood-300 text-[10px] font-bold text-travertine-300'>
                4
              </span>
              <div>
                <h4 className='text-base font-semibold text-neutral-800'>
                  Quality Over Speed
                </h4>
                <p className='mt-1 text-sm text-neutral-500'>
                  Progress matters. But not at the cost of workmanship or
                  materials.
                </p>
              </div>
            </div>
            <div className='block gap-4'>
              <span className='mb-3 flex h-5 w-5 items-center justify-center rounded-sm bg-darkwood-300 text-[10px] font-bold text-travertine-300'>
                5
              </span>
              <div>
                <h4 className='text-base font-semibold text-neutral-800'>
                  Transparency With Clients
                </h4>
                <p className='mt-1 text-sm text-neutral-500'>
                  Clear communication at every stage. No hidden clauses. No
                  surprises.
                </p>
              </div>
            </div>
            <div className='block gap-4'>
              <span className='mb-3 flex h-5 w-5 items-center justify-center rounded-sm bg-darkwood-300 text-[10px] font-bold text-travertine-300'>
                6
              </span>
              <div>
                <h4 className='text-base font-semibold text-neutral-800'>
                  Long-Term Thinking
                </h4>
                <p className='mt-1 text-sm text-neutral-500'>
                  We build for durability, usability, and trust that lasts
                  beyond handover.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mission Vision section
      <section className='w-full'>
        <div className='mx-auto max-w-screen-2xl'>
          <div className='grid grid-cols-1 md:grid-cols-2'>

            <div className='bg-blue-200 text-slate-100'>
              <div className='px-6 md:px-10 lg:px-14 py-10 md:py-14 min-h-[220px] flex flex-col justify-center'>
                <h3 className='text-3xl md:text-4xl font-semibold'>
                  Our Mission
                </h3>
                <p className='mt-4 text-sm md:text-base leading-relaxed text-slate-200/90 max-w-prose'>
                  To deliver affordable & top-quality service employing latest
                  construction techniques with meticulous planning and
                  execution. Ensuring our clients and investors get unparalleled
                  value and Returns-on-Investment. We aim to attract and nurture
                  the best-in-class teams with the best practices in the
                  construction business.
                </p>
              </div>
            </div>


            <div className='bg-amber-500'>
              <div className='px-6 md:px-10 lg:px-14 py-10 md:py-14 min-h-[220px] flex flex-col justify-center'>
                <h3 className='text-3xl md:text-4xl font-semibold text-blue-200'>
                  Our Vision
                </h3>
                <p className='mt-4 text-sm md:text-base leading-relaxed text-blue-200 max-w-prose'>
                  RR Landmarks will endeavor to enhance lives by creating great
                  places to live, invest, and rejuvenate. We commit to
                  continuously improve upon the standards of excellence by
                  providing sustainable integrated solutions that align with our
                  core values of honesty, innovation, teamwork, customer
                  satisfaction, and affordability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
