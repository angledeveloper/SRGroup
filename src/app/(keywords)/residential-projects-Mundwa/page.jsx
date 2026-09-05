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
              2 & 3 BHK Flats in Mundhwa Pune
            </span>{' '}
            <span className='inline-block p-3 bg-gradient-to-b from-neutral-500  to-neutral-100 to-70% bg-clip-text text-transparent'>
              RR Landmarks Projects Near Mundhwa
            </span>
          </h1>
        </section>
      </section>
      <section className='mx-auto my-12 flex w-full max-w-screen-2xl flex-col gap-4 p-3 text-2xl font-medium md:text-4xl'>
        <p ref={introTextRef} className='text-black'>
          SR Akshatam by RR Landmarks, located just minutes from Mundhwa-Manjri
          Road, offers modern 2 BHK and 3 BHK flats near Mundhwa Pune (in Keshav
          Nagar). The project’s proximity to Hadapsar, Koregaon Park, and
          Magarpatta gives residents unmatched connectivity and access to urban
          conveniences.
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
              Why Mundhwa Is a Prime Location:
            </h3>
            <p className=' mt-2'>
              Mundhwa’s rapid growth is driven by proximity to IT corridors,
              strong social infrastructure, and easy access to the
              Pune-Ahmednagar Highway. The area offers a perfect mix of calm
              residential zones and vibrant city life.
            </p>
            <p className=' mt-2 font-bold'>
              Why East Pune Is a Luxury Destination:
            </p>
            <ul className='list-disc pl-5 '>
              <li>
                Rapidly growing micro-market connecting Koregaon Park, Kharadi,
                and Hadapsar
              </li>
              <li>Excellent access to EON IT Park and Amanora Mall</li>
              <li>
                Peaceful surroundings with strong future appreciation potential
              </li>
            </ul>

            <p className=' mt-2 font-bold'>Key Project Highlights:</p>
            <ul className='list-disc pl-5 '>
              <li>Gated community with security, gym, and landscaped areas</li>
              <li>Smart layouts ensuring natural light and ventilation</li>
              <li>Designed with RR Landmarks’ commitment to quality and detail</li>
            </ul>

            <p className=' mt-2'>
              Enjoy the balance of urban convenience and suburban peace with RR Landmarks’ homes near Mundhwa Pune, built to last generations.
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
                Q1. Are there RR Landmarks projects near Mundhwa Pune?
              </h4>
              <p className='mt-2 text-sm md:text-base text-black leading-relaxed'>
                Yes, SR Akshatam is located near Mundhwa-Manjri Road with
                excellent access to Magarpatta and Kharadi.
              </p>
            </div>

            {/* Q2 */}
            <div className='rounded-xl bg-white/80 border border-blue-100 p-5 md:p-6 shadow-sm'>
              <h4 className='text-base md:text-lg font-semibold text-blue-200'>
                Q2. Why is Mundhwa considered a rapidly growing location?
              </h4>
              <p className='mt-2 text-sm md:text-base text-black leading-relaxed'>
                Its strategic connectivity to both East Pune’s business zones
                and lifestyle hubs makes Mundhwa a high-potential real estate
                area.
              </p>
            </div>

            {/* Q3 */}
            <div className='rounded-xl bg-white/80 border border-blue-100 p-5 md:p-6 shadow-sm'>
              <h4 className='text-base md:text-lg font-semibold text-blue-200'>
                Q3. What amenities are offered by RR Landmarks near Mundhwa?
              </h4>
              <p className='mt-2 text-sm md:text-base text-black leading-relaxed'>
                Residents enjoy modern comforts like a gym, swimming pool,
                meditation area, and lush green landscapes.
              </p>
            </div>

            {/* Q4 */}
            <div className='rounded-xl bg-white/80 border border-blue-100 p-5 md:p-6 shadow-sm'>
              <h4 className='text-base md:text-lg font-semibold text-blue-200'>
                Q4. How does Mundhwa compare to Hadapsar or Kharadi?
              </h4>
              <p className='mt-2 text-sm md:text-base text-black leading-relaxed'>
                Mundhwa offers similar connectivity and amenities but at a more
                affordable price point, making it a smart investment choice.
              </p>
            </div>

            {/* Q5 */}
            <div className='rounded-xl bg-white/80 border border-blue-100 p-5 md:p-6 shadow-sm'>
              <h4 className='text-base md:text-lg font-semibold text-blue-200'>
                Q5. Is there strong rental demand near Mundhwa?
              </h4>
              <p className='mt-2 text-sm md:text-base text-black leading-relaxed'>
                Yes, with its proximity to IT hubs, Mundhwa and nearby areas
                such as Keshav Nagar experience steady rental demand from
                working professionals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

