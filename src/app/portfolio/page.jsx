'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';

import ProjectCard from '.././ProjectCard';
import ProjectCardNoRera from '.././ProjectCardNoRera';
import ProjectCardList from '.././ProjectCardList';

export default function Home() {
  const homeRef = useRef();

  const heroHeadingLine = useRef();
  const heroSection = useRef();

  const FourPointsSection = useRef();
  const topLine = useRef();
  const leftLine = useRef();
  const rightLine = useRef();
  const bottomLine = useRef();

  /** @type {import('gsap').core.Timeline | null} */
  const tl = useRef(null);

  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
    gsap.registerPlugin(TextPlugin);
  }

  useGSAP(() => {
    tl.current = gsap.timeline();

    gsap.to(heroHeadingLine.current, {
      y: -200,
      scrollTrigger: {
        trigger: heroSection.current,
        start: 'top',
        end: 'bottom 200px',
        scrub: true,
      },
    });
  });

  useGSAP(
    () => {
      const headings = gsap.utils.toArray('.fadeFromBelow');
      const fadeIn = gsap.utils.toArray('.fadeIn');
      fadeIn.forEach((fade) => {
        gsap.from(fade, {
          opacity: 40,
          y: 200,
          scrollTrigger: {
            trigger: fade,
            start: 'top 100%',
            end: 'top 100%',
            scrub: true,
            markers: false,
          },
        });
      });

      headings.forEach((heading) => {
        gsap.from(heading, {
          y: 80,
          scrollTrigger: {
            trigger: heading,
            start: 'top bottom',
            end: 'bottom center',
            scrub: true,
          },
        });
      });
    },
    { scope: homeRef.current }
  );

  useGSAP(() => {
    gsap.set(topLine.current, {
      height: '0%',
    });
    gsap.set(leftLine.current, {
      width: '0%',
    });
    gsap.set(rightLine.current, {
      width: '0%',
    });
    gsap.set(bottomLine.current, {
      height: '0%',
    });

    gsap.to(topLine.current, {
      height: '100%',
      scrollTrigger: {
        trigger: FourPointsSection.current,
        start: 'top bottom',
        end: 'bottom 90%',
        scrub: true,
      },
    });

    gsap.to(leftLine.current, {
      width: '100%',
      scrollTrigger: {
        trigger: FourPointsSection.current,
        start: 'top bottom',
        end: 'bottom 90%',
        scrub: true,
      },
    });

    gsap.to(rightLine.current, {
      width: '100%',
      scrollTrigger: {
        trigger: FourPointsSection.current,
        start: 'top bottom',
        end: 'bottom 90%',
        scrub: true,
      },
    });

    gsap.to(bottomLine.current, {
      height: '100%',
      scrollTrigger: {
        trigger: FourPointsSection.current,
        start: 'top bottom',
        end: 'bottom 90%',
        scrub: true,
      },
    });
  });

  // Add new ref at the top with other refs
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

  const UpComingProjects = [
    {
      title: 'RR Tower',
      image: '/images/SrHouse/SrHouse.webp',
      location: 'Baner, Pune',
      availability: 'In Construction',
      locality: 'Veerbhadra Nagar',
      type: 'Commercial',
      size: 'Shops, Showrooms, Office Spaces',
      link: 'na',
      map: 'https://maps.app.goo.gl/HjZdsU9gFLQpkSGz9',
    },
  ];

  const UnderConstruction = [
    {
      title: 'SR Akshatam',
      image: '/images/akshatam.avif',
      qrImage: '/images/AkshatamQR.avif',
      location: 'Keshav Nagar, Pune',
      availability: 'Available',
      locality: 'Mundhwa-Manjri Rd, Sasane Colony',
      type: 'Residential',
      size: '2BHKs | 3BHKs',
      rera: 'P52100052905',
      link: '/SrAkshatam',
      map: 'https://maps.app.goo.gl/qkY5wKS1zetq7rQXA',
    },
  ];

  const ReadyToMoveIn = [
    {
      title: 'SR Business Hub',
      image: '/images/businesshub.avif',
      qrImage: '/images/BusinesshubQR.avif',
      location: 'Baner, Pune',
      availability: 'Available',
      locality: 'Old Baner Balewadi Road',
      type: 'Commercial',
      size: 'Showrooms | Office Spaces',
      rera: 'P52100047555',
      link: '/SRBusinessHub',
      map: 'https://maps.app.goo.gl/znzJ8pFMLpyAspKR9',
    },
    {
      title: 'SR Aishwaryam',
      image: '/images/aishwaryam.webp',
      qrImage: '/images/AishwariyamQR.avif',
      location: 'Balewadi, Pune',
      availability: 'Available',
      locality: 'Balewadi',
      type: 'Residential',
      size: '3.5 BHK Homes',
      rera: 'P5210007145',
      link: '/SrAishwaryam',
      map: 'https://maps.app.goo.gl/S9bWYBk3obXSFrPeA',
    },
  ];

  const SoldOut = [
    {
      title: 'SR 45 Baner',
      image: '/images/SR45Baner.avif',
      location: 'Baner, Pune',
      availability: 'Sold Out',
      locality: 'Baner',
      type: 'Commercial',
      size: 'Shops, Showrooms, Office Spaces',
      link: 'na',
      map: 'na',
    },
    {
      title: 'SR Business Point',
      image: '/images/SRBusinessPoint.avif',
      location: 'Baner, Pune',
      availability: 'Sold Out',
      locality: 'Sai Chowk Rd',
      type: 'Commercial',
      size: 'Office Spaces',
      link: 'na',
      map: 'na',
    },
    {
      title: 'SR Swasthi',
      image: '/images/SRSwasthi.avif',
      location: 'Balewadi, Pune',
      availability: 'Sold Out',
      locality: 'Sapphire Park Rd',
      type: 'Residential',
      size: '2BHK, 3BHK',
      link: 'na',
      map: 'na',
    },
    {
      title: 'SR Om Paradise',
      image: '/images/SROmParadise.avif',
      location: 'Sus, Pune',
      availability: 'Sold Out',
      locality: 'Sus Ln',
      type: 'Residential and Commercial',
      size: '2BHK, 3BHK, Shops',
      link: 'na',
      map: 'na',
    },
    {
      title: 'SR Anand Residency',
      image: '/images/SRAnandResidency.avif',
      location: 'Dhanori, Pune',
      availability: 'Sold Out',
      locality: 'Dhanori-Lohegaon Rd',
      type: 'Residential',
      size: '1BHK, 2BHK',
      link: 'na',
      map: 'na',
    },
    {
      title: 'SR Arambh',
      image: '/images/SRArambh.avif',
      location: 'Sus, Pune',
      availability: 'Sold Out',
      locality: 'Sus Rd, Behind Audi Showroom',
      type: 'Residential',
      size: '1BHK, 2BHK',
      link: 'na',
      map: 'na',
    },
  ];

  const SoldOutNoImage = [
    {
      title: 'SR Monte Casa',
      location: 'Baner, Pune',
      availability: 'Sold Out',
      locality: 'Baner',
    },
    {
      title: 'SR Om Residency',
      location: 'Sus, Pune',
      availability: 'Sold Out',
      locality: 'Sus',
    },
    {
      title: 'SR Sai Palace',
      location: 'Baner, Pune',
      availability: 'Sold Out',
      locality: 'Baner',
    },
    {
      title: 'SR Padmavati Residency',
      location: 'Manjri, Pune',
      availability: 'Sold Out',
      locality: 'Manjri',
    },
    {
      title: 'SR Sheshadri Heights',
      location: 'Baner, Pune',
      availability: 'Sold Out',
      locality: 'Baner',
    },
    {
      title: 'SR Venkateshwara Heights',
      location: 'Baner, Pune',
      availability: 'Sold Out',
      locality: 'Baner',
    },
    {
      title: 'SR Om Apartment',
      location: 'Sus, Pune',
      availability: 'Sold Out',
      locality: 'Sus',
    },
  ];

  return (
    <main ref={homeRef}>
      <section
        ref={heroSection}
        className='relative mt-[110px] flex h-[calc(100vh-110px)] w-full items-end justify-center overflow-hidden  '
      >
        <span className=' absolute right-3 top-2 z-20 text-[8px] text-white mix-blend-difference'>
          Property in video: SR Business Hub, opposite Jupiter hospital, Baner,
          Pune. Rera number - P52100047555
        </span>
        <video
          src='/Video.mp4'
          className=' size-full object-cover contrast-[1.2] '
          autoPlay
          loop
          muted
          playsInline
          preload='auto'
          poster='/video-poster.avif'
          alt='Video background'
        ></video>
      </section>

      <section className='my-12 py-3 px-3 flex flex-col gap-4 font-medium mx-auto w-full text-2xl md:text-4xl max-w-screen-2xl'>
        <p ref={introTextRef} className='text-black'>
          SR Group specialises in residential and commercial projects and
          maintains our on-time delivery commitment. Our layouts, crafted in
          compliance with Good Vastu and Feng Shui principles, ensure harmony
          and prosperity for your family. Lastly, along with good transparency
          with our clients, we uphold high compliance with all real estate laws,
          maintaining our longstanding reputation for integrity and trust.
        </p>
      </section>

      <section>
        <div className=' w-full overflow-hidden  mx-auto max-w-screen-2xl p-3 text-6xl text-blue-200 mt-12 mb-4'>
          <h2 className='fadeIn'>Upcoming Projects</h2>
        </div>
        <div className=' w-full max-w-screen-2xl grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3 px-3 m-auto'>
          {UpComingProjects.map((card, index) => {
            return (
              <ProjectCardNoRera
                key={index}
                title={card.title}
                image={card.image}
                location={card.location}
                availability={card.availability}
                locality={card.locality}
                type={card.type}
                size={card.size}
                link={card.link}
                map={card.map}
              />
            );
          })}
        </div>
      </section>

      <section>
        <div className=' w-full overflow-hidden  mx-auto max-w-screen-2xl p-3 text-6xl text-blue-200 mt-12 mb-4'>
          <h2 className='fadeIn'>Under Construction</h2>
        </div>
        <div className=' w-full max-w-screen-2xl grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3 px-3 m-auto'>
          {UnderConstruction.map((card, index) => {
            return (
              <ProjectCard
                key={index}
                title={card.title}
                image={card.image}
                qrImage={card.qrImage}
                location={card.location}
                availability={card.availability}
                locality={card.locality}
                type={card.type}
                size={card.size}
                rera={card.rera}
                link={card.link}
                map={card.map}
              />
            );
          })}
        </div>
      </section>

      <section>
        <div className=' w-full overflow-hidden  mx-auto max-w-screen-2xl p-3 text-6xl text-blue-200 mt-12 mb-4'>
          <h2 className='fadeIn'>Ready To Move In</h2>
        </div>
        <div className=' w-full max-w-screen-2xl grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3 px-3 m-auto'>
          {ReadyToMoveIn.map((card, index) => {
            return (
              <ProjectCard
                key={index}
                title={card.title}
                image={card.image}
                qrImage={card.qrImage}
                location={card.location}
                availability={card.availability}
                locality={card.locality}
                type={card.type}
                size={card.size}
                rera={card.rera}
                link={card.link}
                map={card.map}
              />
            );
          })}
        </div>
      </section>

      <section className=' mb-20'>
        <div className=' w-full overflow-hidden  mx-auto max-w-screen-2xl p-3 text-6xl text-blue-200 mt-12 mb-4'>
          <h2 className='fadeIn'>Sold out</h2>
        </div>
        <div className=' w-full max-w-screen-2xl grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3 px-3 m-auto'>
          {SoldOut.map((card, index) => {
            return (
              <ProjectCardNoRera
                key={index}
                title={card.title}
                image={card.image}
                location={card.location}
                availability={card.availability}
                locality={card.locality}
                type={card.type}
                size={card.size}
                link={card.link}
                map={card.map}
              />
            );
          })}
        </div>
        <div className=' w-full max-w-screen-2xl grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3 px-3 m-auto mt-5'>
          {SoldOutNoImage.map((card, index) => {
            return (
              <ProjectCardList
                key={index}
                title={card.title}
                location={card.location}
                availability={card.availability}
                locality={card.locality}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
