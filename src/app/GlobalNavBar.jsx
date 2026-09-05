'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import GlobalButton from './GlobalButton';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Logo from '@/components/Logo';

export default function GlobalNavBar() {
  const pathname = usePathname();
  const [colorMode, setColorMode] = useState('');
  const [navOpen, setNavOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [backgroundColorValue, setBackgroundColorValue] = useState('');

  const { contextSafe } = useGSAP();

  const navRef = useRef();
  const customCursor = useRef();
  const navMenu = useRef();
  const firstDash = useRef();
  const secondDash = useRef();
  const thirdDash = useRef();
  const navMenuContainer = useRef();
  /** @type {import('gsap').core.Timeline | null} */
  const tl = useRef(null);
  const tl2 = useRef();
  const NavBg = useRef();
  const boxesContainer = useRef();
  const [boxesContainerHover, setBoxesContainerHover] = useState('');

  const onClickMenu = contextSafe(() => {
    tl.current = gsap.timeline();

    setNavOpen(!navOpen);
    if (navOpen) {
      document.body.style.overflow = 'auto';
      gsap.to([firstDash.current, secondDash.current, thirdDash.current], {
        duration: 0.3,
        y: 0,
        rotation: 0,
        opacity: 1,
        ease: 'power2.inOut',
      });
      tl.current
        .to(navMenu.current, {
          duration: 1,
          clipPath: 'circle(0% at 99% 2%)',
          ease: 'power2.inOut',
        })
        .to(
          '#line',
          {
            duration: 0.5,
            width: 0,
            ease: 'power2.inOut',
          },
          '>-0.2',
          {
            scope: navMenuContainer,
          }
        )
        .to(
          '#menuItem',
          {
            duration: 0.5,

            opacity: 0,
            ease: 'power2.inOut',
          },
          '>-0.2',
          {
            scope: navMenuContainer,
          }
        );
    } else {
      document.body.style.overflow = 'hidden';
      gsap.to(firstDash.current, {
        duration: 0.3,
        y: 5,
        rotation: 45,
        ease: 'power2.inOut',
      });
      gsap.to(secondDash.current, {
        duration: 0.3,
        opacity: 0,
        ease: 'power2.inOut',
      });
      gsap.to(thirdDash.current, {
        duration: 0.3,
        y: -6,
        rotation: -45,
        ease: 'power2.inOut',
      });
      tl.current
        .to(navMenu.current, {
          duration: 0.7,
          clipPath: 'circle(200% at 99% 2%)',
          ease: 'power2.inOut',
        })
        .to(
          '#line',
          {
            duration: 0.5,
            width: '100%',
            ease: 'power2.inOut',
            stagger: {
              each: 0.2,
            },
          },
          '>-0.6',
          {
            scope: navMenuContainer,
          }
        )
        .to(
          '#menuItem',
          {
            duration: 0.5,

            opacity: 1,
            ease: 'power2.inOut',
            stagger: {
              each: 0.2,
            },
          },
          '>-1.2',
          {
            scope: navMenuContainer,
          }
        );
    }
  });
  useEffect(() => {
    setColorMode('dark');
  }, [pathname]);

  useEffect(() => {
    setBackgroundColorValue(
      colorMode === 'light' || navOpen ? 'rgba(0,0,0,1)' : 'rgba(255,255,255,1)'
    );
  }, [colorMode, navOpen]);

  useGSAP(() => {
    gsap.set(navMenu.current, {
      clipPath: 'circle(0% at 99% 2%)',
    });
    gsap.set(
      '#line',
      {
        width: 0,
      },
      { scope: navMenuContainer }
    );
    gsap.set(
      '#menuItem',
      {
        opacity: 0,
      },
      { scope: navMenuContainer }
    );

    // Animate to final position
  }, []);

  // useEffect(() => {
  //   const isTouchDevice =
  //     'ontouchstart' in window ||
  //     navigator.maxTouchPoints > 0 ||
  //     navigator.msMaxTouchPoints > 0;

  //   if (isTouchDevice) {
  //     setHidden(true);
  //     return;
  //   }
  //   const moveCursor = (e) => {
  //     setPosition({ x: e.clientX, y: e.clientY });
  //   };

  //   const hideCursor = () => setHidden(true);
  //   const showCursor = () => setHidden(false);

  //   document.addEventListener('mousemove', moveCursor);
  //   document.addEventListener('mouseenter', showCursor);
  //   document.addEventListener('mouseleave', hideCursor);

  //   return () => {
  //     document.removeEventListener('mousemove', moveCursor);
  //     document.removeEventListener('mouseenter', showCursor);
  //     document.removeEventListener('mouseleave', hideCursor);
  //   };
  // }, []);
  // useEffect(() => {
  //   gsap.to('.cursor', {
  //     x: position.x,
  //     y: position.y,
  //   });

  //   const enlargeCursor = () => {
  //     gsap.to('.cursor', { scale: 2, ease: 'power1.inOut' }); // Adjust scale value as needed
  //   };

  //   const blendChangeOnClick = () => {
  //     tl2.current = gsap.timeline();
  //     tl2.current
  //       .to('.cursor', {
  //         outline: '4px solid white',
  //         duration: 0.1,
  //       })
  //       .to('.cursor', { outline: '0px solid white', duration: 0.1 }, '>-0.1');
  //   };

  //   // Function to reset cursor size
  //   const resetCursorSize = () => {
  //     gsap.to('.cursor', { scale: 1, ease: 'power1.inOut' });
  //   };

  //   const hideCursor = () => {
  //     gsap.to('.cursor', { opacity: 0, duration: 0, ease: 'power1.inOut' }); // Adjust scale value as needed
  //   };

  //   // Function to reset cursor size
  //   const resetHideCursorSize = () => {
  //     gsap.to('.cursor', { opacity: 1, duration: 0, ease: 'power1.inOut' });
  //   };

  //   const reduceCursor = () => {
  //     gsap.to('.cursor', { scale: 0.5, ease: 'power1.inOut' }); // Adjust scale value as needed
  //   };

  //   // Add event listeners to all buttons
  //   const cursorBigElements = document.querySelectorAll('.cursorBig');
  //   cursorBigElements.forEach((element) => {
  //     element.addEventListener('mouseenter', enlargeCursor);
  //     element.addEventListener('mouseleave', resetCursorSize);
  //   });

  //   document.addEventListener('click', blendChangeOnClick);

  //   const cursorHideElements = document.querySelectorAll('.cursorHide');
  //   cursorHideElements.forEach((element) => {
  //     element.addEventListener('mouseenter', hideCursor);
  //     element.addEventListener('mouseleave', resetHideCursorSize);
  //   });

  //   const cursorReduceElements = document.querySelectorAll('.cursorReduce');
  //   cursorReduceElements.forEach((element) => {
  //     element.addEventListener('mouseenter', reduceCursor);
  //     element.addEventListener('mouseleave', resetCursorSize);
  //   });

  //   // Cleanup function to remove event listeners
  //   return () => {
  //     cursorBigElements.forEach((element) => {
  //       element.removeEventListener('mouseenter', enlargeCursor);
  //       element.removeEventListener('mouseleave', resetCursorSize);
  //     });
  //     cursorHideElements.forEach((element) => {
  //       element.removeEventListener('mouseenter', hideCursor);
  //       element.removeEventListener('mouseleave', resetHideCursorSize);
  //     });
  //     cursorReduceElements.forEach((element) => {
  //       element.removeEventListener('mouseenter', reduceCursor);
  //       element.removeEventListener('mouseleave', resetCursorSize);
  //     });

  //     document.removeEventListener('click', blendChangeOnClick);
  //   };
  // }, [position]);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed left-0 top-0 z-[999] flex h-[110px] w-full items-center bg-white px-4 py-3 md:px-8`}
      >
        <Link href='/' className='flex items-center'>
          <Logo className='h-[38px] md:h-[46px] w-auto' priority />
        </Link>

        <div className='ml-auto hidden items-center gap-8 text-sm font-medium text-blue-200 md:flex'>
          <Link href='/about' className='transition-colors hover:text-blue-300'>
            About Us
          </Link>
          <Link
            href='/portfolio'
            className='transition-colors hover:text-blue-300'
          >
            Our Portfolio
          </Link>
          <Link
            href='https://blog.sreddygroup.com/'
            target='_blank'
            className='transition-colors hover:text-blue-300'
          >
            Blogs
          </Link>
        </div>

        <Link href='/contact' className='ml-6 hidden md:block'>
          <GlobalButton
            color='white'
            className='rounded-full px-6 py-2 text-xs font-semibold tracking-[0.15em]'
          >
            BOOK A CALL
          </GlobalButton>
        </Link>

        <GlobalButton
          color='black'
          onClick={onClickMenu}
          className='ml-auto flex h-11 w-11 items-center justify-center rounded-full md:hidden'
          aria-label='Open menu'
        >
          <span className='flex h-4 w-4 flex-col justify-center gap-[4.5px]'>
            <div ref={firstDash} className='h-px w-full bg-white'></div>
            <div ref={secondDash} className='h-px w-full bg-white'></div>
            <div ref={thirdDash} className='h-px w-full bg-white'></div>
          </span>
        </GlobalButton>
      </nav>

      <div
        style={{
          clipPath: 'circle(0% at 99% 2%)',
        }}
        ref={navMenu}
        className=' fixed left-0 top-[110px]  z-[99] h-dvh w-full bg-white  '
      >
        <div
          ref={navMenuContainer}
          className='  flex  h-[calc(100%-110px)]  items-start justify-center overflow-hidden text-4xl font-bold   md:text-4xl    lg:text-6xl'
        >
          <div className=' flex size-full flex-col items-center justify-center '>
            <hr id='line' className=' w-full bg-blue-200' />
            <Link
              onClick={onClickMenu}
              id='menuItem'
              className=' group relative flex w-full items-center justify-center bg-white text-blue-200  hover:bg-blue-200 hover:text-white'
              href='/'
            >
              <div className=' relative z-10 flex w-full items-center justify-start  whitespace-nowrap px-3   py-4 '>
                HOME
              </div>
            </Link>
            <hr id='line' className=' w-full bg-white' />

            <Link
              onClick={onClickMenu}
              id='menuItem'
              className=' group relative flex w-full items-center justify-center bg-white text-blue-200  hover:bg-blue-200 hover:text-white'
              href='/about'
            >
              <div className=' relative z-10 flex w-full items-center justify-start  whitespace-nowrap px-3   py-4  '>
                ABOUT US
              </div>
            </Link>
            <hr id='line' className=' w-full bg-white' />
            <Link
              onClick={onClickMenu}
              id='menuItem'
              className=' group relative flex w-full items-center justify-center bg-white text-blue-200  hover:bg-blue-200 hover:text-white'
              href='/portfolio'
            >
              <div className=' relative z-10 flex w-full items-center justify-start  whitespace-nowrap px-3   py-4  '>
                OUR PORTFOLIO
              </div>
            </Link>
            <hr id='line' className=' w-full bg-white' />

            <Link
              onClick={onClickMenu}
              id='menuItem'
              className=' group relative flex w-full items-center justify-center bg-white text-blue-200  hover:bg-blue-200 hover:text-white'
              href='https://blog.sreddygroup.com/'
              target='_blank'
            >
              <div className='relative z-10 flex w-full items-center justify-start  whitespace-nowrap px-3   py-4   '>
                BLOGS
              </div>
            </Link>
            <hr id='line' className=' w-full bg-white' />
            <Link
              onClick={onClickMenu}
              id='menuItem'
              className=' group relative flex w-full items-center justify-center bg-white text-blue-200  hover:bg-blue-200 hover:text-white'
              href='/contact'
            >
              <div className='relative z-10 flex w-full items-center justify-start  whitespace-nowrap px-3   py-4   '>
                CONTACT US
              </div>
            </Link>
            <hr id='line' className=' w-full bg-white' />
            <div className=' fixed bottom-0  left-0 z-10 flex w-full flex-col items-center bg-white p-2 text-base font-bold text-blue-200 md:flex-row  md:justify-between'>
              <span>
                RR Landmarks all right reserved {new Date().getFullYear()}
              </span>
              <div className=' flex flex-wrap gap-4'>
                <Link
                  href='https://www.instagram.com/sr_group_pune/'
                  className='cursorReduce '
                  target='_blank'
                >
                  Instagram
                </Link>
                <Link
                  href='https://www.facebook.com/people/SRGroupPune/61557562022935/'
                  className='cursorReduce '
                  target='_blank'
                >
                  Facebook
                </Link>
                <Link
                  href='https://www.linkedin.com/company/sr-group-pune/about/'
                  className='cursorReduce '
                  target='_blank'
                >
                  LinkedIn
                </Link>
                <Link
                  href='https://wa.me/+917448007500'
                  className='cursorReduce '
                  target='_blank'
                >
                  Whatsapp
                </Link>
              </div>
            </div>
          </div>
          <div className=' relative hidden  aspect-square h-full xl:block'>
            <Image
              alt='residential'
              className=' object-cover object-center '
              fill
              src='/MenuHero.avif'
            />
          </div>
        </div>
      </div>
    </>
  );
}


