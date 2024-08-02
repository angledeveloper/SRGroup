'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import GlobalButton from './GlobalButton';

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
  const tl = useRef();
  const tl2 = useRef();
  const NavBg = useRef();

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
    gsap.set(navRef.current, {
      backgroundColor: 'rgba(255,255,255,1)',
    });

    let animate = false;

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY > 80 && !animate) {
        gsap.to(navRef.current, {
          backgroundColor: backgroundColorValue,

          duration: 0.5,

          ease: 'power2.inOut',
        }),
          (animate = true);
      } else if (scrollY <= 80 && animate) {
        gsap.to(navRef.current, {
          backgroundColor: 'rgba(255,255,255,1)',

          duration: 0.5,
          ease: 'power2.inOut',
        }),
          (animate = false);
      }
    });
  }, [backgroundColorValue]);

  useGSAP(() => {
    gsap.set(navRef.current, {
      y: -150, // Adjust this value as needed
      opacity: 0,
    });
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
    gsap.to(navRef.current, {
      duration: 0.75,
      delay: 0.5,
      y: 0,
      opacity: 1,
      ease: 'power2.In',
    });
  }, []);

  useEffect(() => {
    const isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;

    if (isTouchDevice) {
      setHidden(true);
      return;
    }
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const hideCursor = () => setHidden(true);
    const showCursor = () => setHidden(false);

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', showCursor);
    document.addEventListener('mouseleave', hideCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', showCursor);
      document.removeEventListener('mouseleave', hideCursor);
    };
  }, []);
  useEffect(() => {
    gsap.to('.cursor', {
      x: position.x,
      y: position.y,
    });

    const enlargeCursor = () => {
      gsap.to('.cursor', { scale: 2, ease: 'power1.inOut' }); // Adjust scale value as needed
    };

    const blendChangeOnClick = () => {
      tl2.current = gsap.timeline();
      tl2.current
        .to('.cursor', {
          outline: '4px solid white',
          duration: 0.1,
        })
        .to('.cursor', { outline: '0px solid white', duration: 0.1 }, '>-0.1');
    };

    // Function to reset cursor size
    const resetCursorSize = () => {
      gsap.to('.cursor', { scale: 1, ease: 'power1.inOut' });
    };

    const hideCursor = () => {
      gsap.to('.cursor', { opacity: 0, duration: 0, ease: 'power1.inOut' }); // Adjust scale value as needed
    };

    // Function to reset cursor size
    const resetHideCursorSize = () => {
      gsap.to('.cursor', { opacity: 1, duration: 0, ease: 'power1.inOut' });
    };

    const reduceCursor = () => {
      gsap.to('.cursor', { scale: 0.5, ease: 'power1.inOut' }); // Adjust scale value as needed
    };

    // Add event listeners to all buttons
    const cursorBigElements = document.querySelectorAll('.cursorBig');
    cursorBigElements.forEach((element) => {
      element.addEventListener('mouseenter', enlargeCursor);
      element.addEventListener('mouseleave', resetCursorSize);
    });

    document.addEventListener('click', blendChangeOnClick);

    const cursorHideElements = document.querySelectorAll('.cursorHide');
    cursorHideElements.forEach((element) => {
      element.addEventListener('mouseenter', hideCursor);
      element.addEventListener('mouseleave', resetHideCursorSize);
    });

    const cursorReduceElements = document.querySelectorAll('.cursorReduce');
    cursorReduceElements.forEach((element) => {
      element.addEventListener('mouseenter', reduceCursor);
      element.addEventListener('mouseleave', resetCursorSize);
    });

    // Cleanup function to remove event listeners
    return () => {
      cursorBigElements.forEach((element) => {
        element.removeEventListener('mouseenter', enlargeCursor);
        element.removeEventListener('mouseleave', resetCursorSize);
      });
      cursorHideElements.forEach((element) => {
        element.removeEventListener('mouseenter', hideCursor);
        element.removeEventListener('mouseleave', resetHideCursorSize);
      });
      cursorReduceElements.forEach((element) => {
        element.removeEventListener('mouseenter', reduceCursor);
        element.removeEventListener('mouseleave', resetCursorSize);
      });

      document.removeEventListener('click', blendChangeOnClick);
    };
  }, [position]);

  return (
    <>
      <nav
        ref={navRef}
        className={`   fixed left-0 top-0 z-[999]  flex h-[110px]   w-full items-center justify-between bg-white px-4 py-2.5 `}
      >
        <Link
          href='/'
          className={`
      ${colorMode === 'light' || navOpen ? ' text-white  bg-blend-difference  ' : ' text-black'}
       aspect-square h-full`}
        >
          <GlobalNavLogo />
        </Link>
        <div />
        <div className=' flex h-full max-h-14  items-center gap-2'>
          <Link className=' h-full' href='/contact'>
            <GlobalButton
              color={colorMode === 'light' || navOpen ? 'white' : 'black'}
              className={` h-full whitespace-nowrap rounded-full   px-9 text-lg font-normal transition-all duration-300 ease-in-out  `}
            >
              Lets Talk
            </GlobalButton>
          </Link>
          <GlobalButton
            color={colorMode === 'light' || navOpen ? 'white' : 'black'}
            onClick={onClickMenu}
            className={`   flex aspect-square  h-full items-center  justify-center rounded-full transition-all duration-300 ease-in-out`}
          >
            <span className='  flex aspect-square  h-5 flex-col justify-center gap-[4.5px] '>
              <div
                ref={firstDash}
                className={`
                
                  ${
                    colorMode === 'light' || navOpen
                      ? 'bg-black   group-hover:bg-white  group-active:bg-white   '
                      : '  bg-white   group-hover:bg-black  group-active:bg-black '
                  } 
                
                h-px w-full  mix-blend-difference`}
              ></div>
              <div
                ref={secondDash}
                className={`
                
                ${
                  colorMode === 'light' || navOpen
                    ? 'bg-black   group-hover:bg-white  group-active:bg-white   '
                    : '  bg-white   group-hover:bg-black  group-active:bg-black '
                } 
              
              h-px w-full  mix-blend-difference`}
              ></div>
              <div
                ref={thirdDash}
                className={`
                
                  ${
                    colorMode === 'light' || navOpen
                      ? 'bg-black   group-hover:bg-white  group-active:bg-white   '
                      : '  bg-white   group-hover:bg-black  group-active:bg-black '
                  } 
                
                h-px w-full  mix-blend-difference`}
              ></div>
            </span>
          </GlobalButton>
        </div>
      </nav>

      <div
        style={{
          clipPath: 'circle(0% at 99% 2%)',
        }}
        ref={navMenu}
        className=' fixed left-0 top-0  z-[99] h-dvh w-full bg-white  '
      >
        <div
          ref={navMenuContainer}
          className=' mt-4 flex h-[calc(100%-110px)]  flex-col  items-start justify-center overflow-hidden text-5xl font-bold  text-white md:text-5xl    lg:text-6xl'
        >
          <hr id='line' className=' w-full bg-blue-200' />
          <Link
            onClick={onClickMenu}
            id='menuItem'
            className=' group w-full bg-white text-blue-200  hover:bg-blue-200 hover:text-white'
            href='/'
          >
            <div className=' flex w-full items-center  justify-center whitespace-nowrap py-2 group-hover:hidden md:py-6'>
              HOME
            </div>
            <div className=' relative  hidden w-full items-center  overflow-x-hidden py-4 group-hover:visible group-hover:flex md:py-6'>
              <div className='animate-marquee  whitespace-nowrap'>
                <span className='mx-4'>HOME</span>
                <span className='mx-4'>HOME</span>
                <span className='mx-4'>HOME</span>
                <span className='mx-4'>HOME</span>
                <span className='mx-4'>HOME</span>
                <span className='mx-4'>HOME</span>
                <span className='mx-4'>HOME</span>
              </div>

              <div className='absolute  m-auto animate-marquee2 whitespace-nowrap'>
                <span className='mx-4'>HOME</span>
                <span className='mx-4'>HOME</span>
                <span className='mx-4'>HOME</span>
                <span className='mx-4'>HOME</span>
                <span className='mx-4'>HOME</span>
                <span className='mx-4'>HOME</span>
                <span className='mx-4'>HOME</span>
              </div>
            </div>
          </Link>
          <hr id='line' className=' w-full bg-white' />
          <Link
            onClick={onClickMenu}
            id='menuItem'
            className=' group w-full bg-white text-blue-200  hover:bg-blue-200 hover:text-white'
            href='/contact'
          >
            <div className=' flex w-full items-center  justify-center whitespace-nowrap py-2 group-hover:hidden md:py-6'>
              CONTACT
            </div>
            <div className=' relative  hidden w-full  overflow-x-hidden py-4 group-hover:visible group-hover:flex md:py-6'>
              <div className='animate-marquee whitespace-nowrap'>
                <span className='mx-4 '>CONTACT</span>
                <span className='mx-4 '>CONTACT</span>
                <span className='mx-4 '>CONTACT</span>
                <span className='mx-4 '>CONTACT</span>
                <span className='mx-4 '>CONTACT</span>
                <span className='mx-4 '>CONTACT</span>
                <span className='mx-4 '>CONTACT</span>
              </div>

              <div className='absolute top-0 animate-marquee2 whitespace-nowrap'>
                <span className='mx-4 '>CONTACT</span>
                <span className='mx-4 '>CONTACT</span>
                <span className='mx-4 '>CONTACT</span>
                <span className='mx-4 '>CONTACT</span>
                <span className='mx-4 '>CONTACT</span>
                <span className='mx-4 '>CONTACT</span>
                <span className='mx-4 '>CONTACT</span>
              </div>
            </div>
          </Link>
          <hr id='line' className=' w-full bg-white' />
          <Link
            onClick={onClickMenu}
            id='menuItem'
            className=' group w-full bg-white text-blue-200  hover:bg-blue-200 hover:text-white'
            href='/about'
          >
            <div className=' flex w-full items-center  justify-center whitespace-nowrap py-2 group-hover:hidden md:py-6'>
              ABOUT
            </div>
            <div className=' relative  hidden w-full  overflow-x-hidden py-4 group-hover:visible group-hover:flex md:py-6'>
              <div className='animate-marquee whitespace-nowrap'>
                <span className='mx-4 '>ABOUT</span>
                <span className='mx-4 '>ABOUT</span>
                <span className='mx-4 '>ABOUT</span>
                <span className='mx-4 '>ABOUT</span>
                <span className='mx-4 '>ABOUT</span>
                <span className='mx-4 '>ABOUT</span>
                <span className='mx-4 '>ABOUT</span>
                <span className='mx-4 '>ABOUT</span>
              </div>

              <div className='absolute top-0 animate-marquee2 whitespace-nowrap'>
                <span className='mx-4 '>ABOUT</span>
                <span className='mx-4 '>ABOUT</span>
                <span className='mx-4 '>ABOUT</span>
                <span className='mx-4 '>ABOUT</span>
                <span className='mx-4 '>ABOUT</span>
                <span className='mx-4 '>ABOUT</span>
                <span className='mx-4 '>ABOUT</span>
                <span className='mx-4 '>ABOUT</span>
              </div>
            </div>
          </Link>
          <hr id='line' className=' w-full bg-white' />
          <Link
            onClick={onClickMenu}
            id='menuItem'
            className=' group w-full bg-white text-blue-200  hover:bg-blue-200 hover:text-white'
            href='/commercial'
          >
            <div className=' flex w-full items-center  justify-center whitespace-nowrap py-2 group-hover:hidden md:py-6'>
              COMMERCIAL
            </div>
            <div className=' relative  hidden w-full  overflow-x-hidden py-4 group-hover:visible group-hover:flex md:py-6'>
              <div className='animate-marquee whitespace-nowrap'>
                <span className='mx-4 '>COMMERCIAL</span>
                <span className='mx-4 '>COMMERCIAL</span>
                <span className='mx-4 '>COMMERCIAL</span>
                <span className='mx-4 '>COMMERCIAL</span>
                <span className='mx-4 '>COMMERCIAL</span>
                <span className='mx-4 '>COMMERCIAL</span>
                <span className='mx-4 '>COMMERCIAL</span>
              </div>

              <div className='absolute top-0 animate-marquee2 whitespace-nowrap'>
                <span className='mx-4 '>COMMERCIAL</span>
                <span className='mx-4 '>COMMERCIAL</span>
                <span className='mx-4 '>COMMERCIAL</span>
                <span className='mx-4 '>COMMERCIAL</span>
                <span className='mx-4 '>COMMERCIAL</span>
                <span className='mx-4 '>COMMERCIAL</span>
                <span className='mx-4 '>COMMERCIAL</span>
              </div>
            </div>
          </Link>
          <hr id='line' className=' w-full bg-white' />
          <Link
            onClick={onClickMenu}
            id='menuItem'
            className=' group w-full bg-white text-blue-200  hover:bg-blue-200 hover:text-white'
            href='/residential'
          >
            <div className=' flex w-full items-center  justify-center whitespace-nowrap py-2 group-hover:hidden md:py-6'>
              RESIDENTIAL
            </div>
            <div className=' relative  hidden w-full  overflow-x-hidden py-4 group-hover:visible group-hover:flex md:py-6'>
              <div className='animate-marquee whitespace-nowrap'>
                <span className='mx-4 '>RESIDENTIAL</span>
                <span className='mx-4 '>RESIDENTIAL</span>
                <span className='mx-4 '>RESIDENTIAL</span>
                <span className='mx-4 '>RESIDENTIAL</span>
                <span className='mx-4 '>RESIDENTIAL</span>
                <span className='mx-4 '>RESIDENTIAL</span>
                <span className='mx-4 '>RESIDENTIAL</span>
              </div>

              <div className='absolute top-0 animate-marquee2 whitespace-nowrap'>
                <span className='mx-4 '>RESIDENTIAL</span>
                <span className='mx-4 '>RESIDENTIAL</span>
                <span className='mx-4 '>RESIDENTIAL</span>
                <span className='mx-4 '>RESIDENTIAL</span>
                <span className='mx-4 '>RESIDENTIAL</span>
                <span className='mx-4 '>RESIDENTIAL</span>
                <span className='mx-4 '>RESIDENTIAL</span>
              </div>
            </div>
          </Link>
          <hr id='line' className=' w-full bg-white' />
          <div className=' absolute bottom-2 flex w-full flex-col items-center px-2 text-base font-normal text-white md:flex-row md:justify-between'>
            <span>SR Group all right reserved {new Date().getFullYear()}</span>
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
      </div>
      <div
        className='cursor'
        style={{
          pointerEvents: 'none',
          position: 'fixed',
          left: 0,
          top: 0,
          width: '3rem',
          aspectRatio: '1/1',
          borderRadius: '50%',
          backgroundColor: 'white',
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
          zIndex: 9999,
          display: hidden ? 'none' : 'block',
          outlineOffset: '2px',
        }}
      ></div>
    </>
  );
}

const GlobalNavLogo = () => {
  return (
    <svg viewBox='0 0 92 92' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M25.3147 19.1797C25.0705 20.3845 24.806 21.1458 24.5237 21.4611C24.2414 21.7763 23.8573 21.9339 23.3664 21.9339C22.8577 21.9339 21.9701 21.6133 20.7009 20.9722C19.4317 20.3311 18.3559 19.8903 17.4707 19.6525C16.3033 19.3373 15.1003 19.1797 13.8591 19.1797C10.4559 19.1797 7.63526 20.3043 5.39704 22.5563C3.15881 24.8083 2.0397 27.5331 2.0397 30.7335C2.0397 32.6114 2.44919 34.3291 3.26563 35.8892C4.08462 37.4493 5.2546 38.8625 6.77812 40.1261C8.30164 41.3896 10.8018 42.923 14.2813 44.7182C16.7637 46.0031 18.4932 47.045 19.4724 47.8437C20.4516 48.6425 21.1791 49.4866 21.6598 50.3762C22.1405 51.2658 22.3796 52.1821 22.3796 53.1331C22.3796 54.7332 21.7539 56.1357 20.5025 57.3405C19.2511 58.5453 17.575 59.149 15.4665 59.149C12.7399 59.149 10.1965 58.0297 7.83619 55.7858C5.47588 53.5445 3.88115 50.2907 3.05453 46.0245H2.01172V61.1953H3.05453C3.39281 60.3859 3.83536 59.7822 4.37966 59.3868C4.92396 58.9914 5.44282 58.7937 5.93116 58.7937C6.51361 58.7937 7.25629 58.9914 8.15921 59.3868C9.77684 60.0974 11.1198 60.5836 12.1931 60.84C13.2639 61.0965 14.4034 61.2247 15.6064 61.2247C19.4419 61.2247 22.6059 60.0146 25.0985 57.5943C27.5885 55.174 28.8348 52.2862 28.8348 48.9283C28.8348 46.2809 28.0642 43.9328 26.5203 41.8758C24.9612 39.8215 21.9421 37.639 17.4657 35.3282C14.2686 33.6693 12.2262 32.5126 11.3436 31.8608C10.1405 30.9525 9.26561 30.0335 8.72131 29.1039C8.32708 28.4147 8.12869 27.624 8.12869 26.7344C8.12869 25.3319 8.68825 24.0924 9.80736 23.0158C10.9265 21.9392 12.4449 21.4023 14.3627 21.4023C16.8451 21.4023 19.1545 22.4228 21.2884 24.469C23.4224 26.5127 24.7628 29.2134 25.3071 32.5714H26.4643L26.154 19.1797H25.3071H25.3147Z'
        fill='url(#paint0_linear_617_3)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M46.5806 20.0991H28.8096V21.1944C30.5595 21.1944 31.7523 21.3627 32.3933 21.6993C33.0317 22.0359 33.4793 22.4846 33.7337 23.0456C33.988 23.6093 34.1152 24.9771 34.1152 27.1489V53.2217C34.1152 55.3935 33.988 56.7586 33.7337 57.3089C33.4793 57.8619 33.0368 58.3133 32.4085 58.6579C31.7778 59.0052 30.5773 59.1762 28.8121 59.1762V60.2715H48.389V59.1762C46.6416 59.1762 45.4462 59.0106 44.8053 58.6713C44.1669 58.3347 43.7192 57.8859 43.4649 57.3223C43.2105 56.7586 43.0833 55.3908 43.0833 53.219V41.9591H45.5937L57.9218 60.2688H69.9675V59.1735C68.9501 59.1148 68.0574 58.7782 67.2867 58.1664C66.778 57.731 65.9234 56.6357 64.7204 54.8779L55.5259 41.2779C57.8582 40.6661 59.6717 39.7472 60.9714 38.5237C63.0036 36.5869 64.0184 34.1373 64.0184 31.1747C64.0184 28.7464 63.3418 26.628 61.9862 24.8194C60.6331 23.0109 58.8832 21.7714 56.7416 21.1009C54.5975 20.4303 51.2096 20.0938 46.5857 20.0938L46.5806 20.0991ZM43.0833 22.2602H46.1024C49.1316 22.2602 51.3266 22.9922 52.6899 24.4535C54.0532 25.9147 54.7348 28.1774 54.7348 31.2388C54.7348 33.3519 54.3635 35.0669 53.6208 36.3785C52.8781 37.6929 51.8582 38.6011 50.5611 39.106C49.2614 39.6083 47.3055 39.862 44.6933 39.862H43.0859V22.2629L43.0833 22.2602Z'
        fill='url(#paint1_linear_617_3)'
      />
      <path
        d='M7.82362 80.3421C8.24328 80.3421 8.62734 80.3207 8.9758 80.2806C9.32679 80.2379 9.65489 80.1764 9.96774 80.0936C10.278 80.0108 10.5705 79.912 10.8452 79.7918C11.1199 79.6742 11.3946 79.5407 11.6693 79.3884V75.7954H9.26575C9.1284 75.7954 9.01903 75.7526 8.9351 75.6698C8.85117 75.587 8.81047 75.4855 8.81047 75.3626V74.1124H13.5743V80.3661C13.1852 80.6626 12.7782 80.9191 12.356 81.1408C11.9338 81.3599 11.4836 81.5442 11.0029 81.6911C10.5222 81.8381 10.0084 81.9503 9.46159 82.0197C8.91221 82.0918 8.31704 82.1266 7.6761 82.1266C6.54935 82.1266 5.51672 81.9235 4.57819 81.5175C3.63966 81.1114 2.83085 80.5424 2.15429 79.8131C1.47519 79.0812 0.946159 78.205 0.567187 77.1792C0.188214 76.156 0 75.0314 0 73.8025C0 72.5737 0.185671 71.425 0.557013 70.4045C0.928355 69.3814 1.45993 68.5051 2.14921 67.7705C2.83848 67.0385 3.67273 66.4722 4.64941 66.0715C5.62609 65.6708 6.72231 65.4678 7.93553 65.4678C8.5485 65.4678 9.11823 65.5159 9.64472 65.6094C10.1712 65.7029 10.6596 65.8418 11.1123 66.0181C11.5625 66.1971 11.9796 66.4134 12.3637 66.6672C12.7452 66.921 13.1038 67.2068 13.4344 67.5247L12.8393 68.5265C12.7172 68.7322 12.557 68.8337 12.3637 68.8337C12.2467 68.8337 12.122 68.791 11.9847 68.7082C11.8041 68.6013 11.6032 68.4731 11.3793 68.3208C11.1555 68.1685 10.8834 68.0243 10.5629 67.8827C10.2424 67.7411 9.86346 67.6236 9.42598 67.5247C8.98851 67.4259 8.47219 67.3778 7.87194 67.3778C6.99954 67.3778 6.20853 67.5274 5.50146 67.8266C4.79438 68.1258 4.19159 68.5532 3.69562 69.1116C3.1971 69.6699 2.81559 70.3431 2.54853 71.1365C2.28146 71.9299 2.14666 72.8168 2.14666 73.8025C2.14666 74.7883 2.28655 75.7526 2.56379 76.5594C2.84102 77.3661 3.23271 78.0527 3.73885 78.611C4.24246 79.172 4.84271 79.5994 5.53452 79.896C6.22634 80.1925 6.99191 80.3394 7.8287 80.3394L7.82362 80.3421Z'
        fill='#00537F'
      />
      <path
        d='M20.1848 73.5436H22.3824C22.9953 73.5436 23.5346 73.4662 24 73.3112C24.4654 73.1563 24.8546 72.9372 25.17 72.6514C25.4854 72.3682 25.7219 72.029 25.8796 71.6336C26.0373 71.2382 26.1187 70.8028 26.1187 70.3273C26.1187 69.3576 25.8135 68.6256 25.203 68.1341C24.5952 67.6425 23.6872 67.3941 22.4816 67.3941H20.1874V73.5463L20.1848 73.5436ZM20.1848 75.1465V81.9452H18.0967V65.6523H22.4816C23.4633 65.6523 24.3103 65.7565 25.025 65.9649C25.7397 66.1733 26.3298 66.4751 26.7952 66.8678C27.2607 67.2632 27.6066 67.7387 27.8304 68.2943C28.0542 68.85 28.1662 69.4751 28.1662 70.1643C28.1662 70.7413 28.0797 71.2783 27.9067 71.7778C27.7338 72.2774 27.482 72.7262 27.1539 73.1242C26.8258 73.5223 26.4264 73.8615 25.9508 74.142C25.4777 74.4225 24.9436 74.6362 24.3434 74.7805C24.6028 74.9381 24.8342 75.1705 25.0352 75.4724L29.56 81.9425H27.6982C27.3166 81.9425 27.0343 81.7875 26.8537 81.475L22.8275 75.654C22.7054 75.4724 22.5706 75.3415 22.4282 75.2613C22.2832 75.1812 22.067 75.1411 21.7796 75.1411H20.1874L20.1848 75.1465Z'
        fill='#00537F'
      />
      <path
        d='M44.6605 73.8054C44.6605 72.8063 44.5308 71.9061 44.2714 71.11C44.0119 70.3139 43.6431 69.6434 43.1675 69.0931C42.6919 68.5428 42.1145 68.1207 41.4354 67.8242C40.7563 67.5277 39.9984 67.3807 39.1616 67.3807C38.3248 67.3807 37.577 67.5277 36.9005 67.8242C36.2214 68.1181 35.6415 68.5428 35.1633 69.0931C34.6826 69.6434 34.3138 70.3166 34.0544 71.11C33.7949 71.9061 33.6652 72.8063 33.6652 73.8054C33.6652 74.8045 33.7949 75.7021 34.0544 76.4955C34.3138 77.2889 34.6851 77.9595 35.1633 78.5071C35.644 79.0574 36.2214 79.4768 36.9005 79.768C37.5796 80.0592 38.3324 80.2061 39.1616 80.2061C39.9907 80.2061 40.7563 80.0592 41.4354 79.768C42.1145 79.4768 42.6919 79.0547 43.1675 78.5071C43.6431 77.9568 44.0119 77.2863 44.2714 76.4955C44.5308 75.7021 44.6605 74.8072 44.6605 73.8054ZM46.8148 73.8054C46.8148 75.0263 46.6317 76.1456 46.2629 77.1661C45.8941 78.1865 45.3752 79.0627 44.7037 79.8C44.0323 80.5347 43.226 81.1064 42.2849 81.5097C41.3439 81.9158 40.301 82.1188 39.1616 82.1188C38.0221 82.1188 36.9819 81.9158 36.0433 81.5097C35.1048 81.1037 34.3011 80.5347 33.6296 79.8C32.9581 79.0654 32.4393 78.1865 32.0705 77.1661C31.7017 76.1456 31.5186 75.0263 31.5186 73.8054C31.5186 72.5846 31.7017 71.4653 32.0705 70.4448C32.4393 69.4244 32.9581 68.5455 33.6296 67.8082C34.3011 67.0682 35.1048 66.4938 36.0433 66.0851C36.9819 65.6737 38.0196 65.4707 39.1616 65.4707C40.3036 65.4707 41.3439 65.6737 42.2849 66.0851C43.226 66.4938 44.0323 67.0682 44.7037 67.8082C45.3752 68.5481 45.8941 69.427 46.2629 70.4448C46.6317 71.4653 46.8148 72.5846 46.8148 73.8054Z'
        fill='#00537F'
      />
      <path
        d='M56.7948 80.1947C57.4358 80.1947 58.0106 80.0825 58.5167 79.8527C59.0229 79.6257 59.4502 79.3078 59.7986 78.899C60.1496 78.4903 60.4167 78.0015 60.5998 77.4325C60.7855 76.8635 60.8745 76.2383 60.8745 75.5571V65.6543H62.9652V75.5571C62.9652 76.4975 62.8228 77.3683 62.5379 78.1724C62.253 78.9765 61.8461 79.6711 61.3145 80.2588C60.7855 80.8465 60.1369 81.306 59.3713 81.6399C58.6057 81.9738 57.7486 82.1394 56.7948 82.1394C55.841 82.1394 54.9839 81.9712 54.2183 81.6399C53.4527 81.306 52.8042 80.8465 52.27 80.2588C51.7359 79.6711 51.3264 78.9765 51.0416 78.1724C50.7567 77.3683 50.6143 76.4975 50.6143 75.5571V65.6543H52.705V75.5465C52.705 76.2277 52.7965 76.8528 52.9822 77.4218C53.1653 77.9908 53.4324 78.4796 53.7834 78.8884C54.1318 79.2971 54.5617 79.6177 55.0704 79.8501C55.5791 80.0825 56.1539 80.1973 56.7974 80.1973L56.7948 80.1947Z'
        fill='#00537F'
      />
      <path
        d='M69.9593 74.1019H72.4493C73.047 74.1019 73.576 74.0191 74.0338 73.8535C74.4917 73.6879 74.8757 73.4528 75.186 73.1536C75.4963 72.8544 75.7303 72.4964 75.8906 72.0797C76.0483 71.663 76.1296 71.2035 76.1296 70.7039C76.1296 69.6648 75.8244 68.8553 75.214 68.2703C74.6036 67.6879 73.6829 67.3941 72.4493 67.3941H69.9593V74.1019ZM69.9593 75.8517V81.9452H67.8711V65.6523H72.4493C73.4285 65.6523 74.2831 65.7726 75.008 66.0103C75.7329 66.2481 76.3331 66.5873 76.8113 67.0281C77.2869 67.4689 77.643 67.9978 77.877 68.6203C78.111 69.2427 78.228 69.9373 78.228 70.7013C78.228 71.4653 78.1008 72.1518 77.849 72.7823C77.5972 73.4127 77.2284 73.955 76.7401 74.4092C76.2543 74.8633 75.6489 75.2186 74.9266 75.4724C74.2043 75.7262 73.3776 75.8517 72.4493 75.8517H69.9593Z'
        fill='#00537F'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M85.9073 12.5952H85.8921C85.8437 12.5952 85.7852 12.6032 85.714 12.6192C84.9281 12.7875 84.1396 12.9131 83.3359 12.9745C82.2906 13.0547 81.2503 13.2069 80.2049 13.2897C78.7704 13.4046 77.3537 13.629 75.9879 14.1099C74.6653 14.5747 73.4292 15.2292 72.2898 16.068C71.8091 16.4206 71.397 16.8534 71.0918 17.4705C71.4072 17.4384 71.4097 17.4411 71.5318 17.3556C72.6306 16.5996 73.7802 15.9478 74.996 15.4215C75.0799 15.3868 75.1689 15.3494 75.2605 15.3334C75.9142 15.2238 76.5627 15.0983 77.2266 15.0288C77.9489 14.954 78.6738 14.9273 79.3961 14.8899C80.1363 14.8525 80.8688 14.7483 81.6115 14.7136C82.8298 14.6575 84.0481 14.6041 85.2384 14.2808C85.447 14.2247 85.6174 14.1579 85.6911 13.9255C85.7903 13.6023 85.9099 13.2871 86.0065 12.9638C86.0879 12.702 86.0727 12.5952 85.9099 12.5898L85.9073 12.5952Z'
        fill='url(#paint2_linear_617_3)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M84.3072 15.6543H84.269C84.1469 15.6543 84.0274 15.6623 83.9104 15.6864C83.0736 15.8547 82.2241 15.8787 81.3797 15.9081C79.963 15.9588 78.5488 15.9508 77.1321 16.0657C75.4815 16.1993 73.9198 16.6587 72.4141 17.3533C72.1343 17.4815 71.8774 17.6659 71.6154 17.8395C71.4348 17.9597 71.2644 18.0959 71.1602 18.3951C71.6688 18.3497 72.0504 18.136 72.4395 17.949C73.5942 17.396 74.81 17.1316 76.0715 17.1075C77.6281 17.0755 79.1822 17.1877 80.7362 17.2171C81.5984 17.2331 82.4606 17.3052 83.3229 17.209C83.9715 17.1369 84.5005 16.6347 84.6734 15.9855C84.7319 15.7692 84.6505 15.6703 84.4598 15.6623C84.4089 15.6623 84.3555 15.657 84.3021 15.657L84.3072 15.6543Z'
        fill='url(#paint3_linear_617_3)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M76.483 10.8197C76.3635 10.8918 76.2388 10.9612 76.132 11.0521C74.9468 12.0538 73.7107 12.9888 72.6831 14.1856C72.1668 14.7867 71.6429 15.3744 71.2232 16.0556C71.1647 16.1491 71.1062 16.2453 71.0629 16.3494C71.0248 16.4456 71.0807 16.4964 71.1698 16.5151C71.3427 16.4964 71.4241 16.3441 71.5335 16.2372C72.2406 15.5453 72.9171 14.8187 73.7666 14.2951C74.3491 13.9345 74.9468 13.5952 75.5216 13.2186C75.8879 12.9781 76.1625 12.6656 76.3304 12.2515C76.4906 11.8481 76.5619 11.4127 76.745 11.0173C76.7806 10.9452 76.7831 10.8517 76.7272 10.7876C76.6967 10.7529 76.6687 10.7422 76.6433 10.7422C76.5873 10.7422 76.5364 10.7929 76.4856 10.8223L76.483 10.8197Z'
        fill='url(#paint4_linear_617_3)'
      />
      <path
        d='M70.1537 8.38817C70.2783 8.38817 70.3495 8.46296 70.3521 8.59921C70.3368 8.72743 70.2681 8.81559 70.1461 8.81826C70.0189 8.82093 69.9502 8.72743 69.9502 8.60188C69.9502 8.47632 70.0291 8.39084 70.1537 8.38817ZM91.8874 43.8616C91.7475 43.7627 91.6025 43.6665 91.455 43.5811C90.285 42.9186 89.0845 42.3255 87.8789 41.7432C86.2384 40.9524 85.1549 40.3594 83.082 39.1145C81.4364 38.1261 79.862 37.0068 78.3436 35.8046C78.1833 35.6791 78.0002 35.5856 77.8603 35.4307C77.8425 35.412 77.8018 35.3746 77.7484 35.3238C84.3308 32.7272 89.026 26.0728 89.026 18.2509C89.026 8.17178 81.2456 0 71.6492 0C62.0528 0 54.2725 8.17178 54.2725 18.2509C54.2725 18.8093 54.3055 19.3596 54.3513 19.9072C54.7379 19.974 55.1296 20.0488 55.5238 20.1343C55.4577 19.5145 55.4196 18.8867 55.4196 18.2509C55.4196 8.83696 62.6862 1.2048 71.6492 1.2048C80.6123 1.2048 87.8789 8.83696 87.8789 18.2509C87.8789 25.8056 83.1939 32.2036 76.7132 34.4396C76.4156 34.1885 76.1588 33.9694 76.0799 33.8946C75.7925 33.6248 75.4771 33.3897 75.2024 33.1039C74.8514 32.7406 74.4979 32.3746 74.124 32.038C73.1626 31.1671 72.3156 30.1921 71.5729 29.1075C70.8964 28.1164 70.3317 27.0558 69.6933 26.0434C69.6399 25.9606 69.6094 25.8697 69.6247 25.7682C69.6755 25.4183 70.1842 25.0122 70.5352 25.0443C71.5195 25.1378 72.5013 25.2233 73.4831 25.3275C75.4975 25.5412 77.489 25.3916 79.4601 24.9054C80.419 24.6676 81.299 24.2402 82.085 23.6204C82.792 23.0621 83.1481 22.2901 83.1939 21.3658C83.2092 21.0586 83.1558 20.9998 82.8582 20.9811C81.734 20.909 80.6149 20.754 79.4957 20.6338C77.4076 20.4094 75.3169 20.2037 73.2287 19.9873C73.0837 19.9713 72.9235 19.9954 72.7963 19.8992C72.8116 19.8431 72.809 19.8003 72.8268 19.787C72.8904 19.7416 72.9566 19.6988 73.0278 19.6694C73.5797 19.4397 74.1545 19.3302 74.7421 19.2901C76.2401 19.1859 77.7306 19.3088 79.2261 19.389C80.2588 19.445 81.2889 19.5172 82.319 19.5813C82.6267 19.6 82.9345 19.6133 83.2422 19.6374C83.5373 19.6614 83.7458 19.5759 83.8501 19.25C83.9417 18.9589 84.0816 18.6864 84.1858 18.3979C84.3054 18.0693 84.2418 17.9704 83.9188 18.0105C82.3902 18.2055 80.8692 18.0613 79.3457 17.9411C77.8705 17.8262 76.3978 17.6258 74.9125 17.7941C73.7883 17.9197 72.7226 18.1735 71.7917 18.8894C71.2321 19.3195 70.6344 19.7015 70.2122 20.3026C70.1028 20.4602 69.9553 20.6285 70.0214 20.8235C70.0926 21.0292 70.319 20.9544 70.4742 20.9677C71.7026 21.0853 72.9337 21.1841 74.1622 21.299C75.9578 21.4673 77.7535 21.6383 79.5517 21.8119C80.0884 21.8653 80.6276 21.9214 81.1668 21.9241C81.2711 21.9241 81.3982 21.9027 81.4593 22.0229C81.5279 22.1619 81.4338 22.2741 81.3601 22.3702C81.1846 22.6053 80.9608 22.7736 80.6937 22.8778C80.0426 23.1316 79.3762 23.3399 78.6895 23.4548C77.5907 23.6365 76.4843 23.7246 75.3728 23.746C73.8925 23.7727 72.4097 23.8048 70.9294 23.6632C70.7438 23.6445 70.6013 23.6071 70.5581 23.3827C70.3368 22.2126 69.4492 21.4993 68.9201 21.0719C68.6124 20.8235 68.1927 19.5733 68.1622 19.3809C68.0655 18.7585 67.9358 18.1387 67.9969 17.5003C68.0477 16.9687 68.0579 16.4317 68.1113 15.9001C68.1876 15.1548 68.3173 14.4202 68.6632 13.755C68.9125 13.2768 69.294 12.8921 70.0825 13.0177C70.7234 13.1192 71.3517 13.2768 71.9875 13.3944C72.1859 13.4318 72.3817 13.4772 72.5801 13.5039C72.7048 13.5226 72.837 13.5012 72.8879 13.3516C72.9388 13.2074 72.8675 13.1032 72.7505 13.031C72.7099 13.007 72.6717 12.9803 72.6285 12.9616C72.1732 12.7372 71.9366 12.3338 71.7993 11.8503C71.7128 11.5377 71.6823 11.2172 71.6721 10.8913C71.6543 10.194 71.6441 9.49679 71.5882 8.8049C71.5348 8.13973 71.227 7.61079 70.5912 7.42914C70.2707 7.33831 70.1486 7.162 70.0265 6.87616C69.79 6.32585 69.4415 5.87973 68.8133 5.80493C68.5081 5.76753 68.2715 5.82897 68.0045 6.03734C67.8163 6.18427 67.6688 6.28578 67.9434 6.37661C68.0274 6.40332 68.1774 6.51018 68.1673 6.59566C68.0884 7.15666 68.2512 7.72299 68.1062 8.28398C67.9994 8.69003 67.946 9.10944 67.8493 9.51816C67.506 10.9874 67.2516 12.4674 67.3228 13.9901C67.3381 14.3293 67.3661 14.6659 67.155 14.9705C67.0914 15.064 67.0965 15.2189 67.0939 15.3471C67.0558 16.5306 67.0024 17.714 67.066 18.8947C67.1117 19.7362 67.2287 20.5724 67.4144 21.3898C67.6331 22.3489 67.857 23.3106 68.1215 24.2589C68.3046 24.9107 68.0859 25.3542 67.6103 25.7335C67.2847 25.9926 66.9083 26.1342 66.5395 26.3025C65.5628 26.7486 64.5454 26.9757 63.4772 26.9436C62.9049 26.9276 62.3352 26.9223 61.7629 26.9303C61.3788 26.933 60.9922 26.9517 60.6209 27.0879C60.2979 27.2054 60.1224 27.6355 60.0918 27.9988C60.0664 28.3087 60.3258 27.9107 60.5878 27.8546C60.6616 27.8386 60.5497 28.1565 60.542 28.2526C60.5344 28.3408 60.5954 28.477 60.626 28.4984C61.3966 27.6061 61.9791 27.8038 62.1597 27.8653C62.3631 27.9347 62.6989 27.9588 62.765 28.4557C62.7879 28.6159 62.7726 28.9285 62.7269 29.1743C62.6887 29.38 63.3068 28.8697 63.3475 28.6961C63.378 28.5545 63.3805 28.4076 63.3983 28.2633C63.4594 27.7103 63.6221 27.5207 64.1334 27.4272C64.3775 27.3844 64.6217 27.3417 64.8684 27.3337C65.5246 27.3043 66.1529 27.152 66.7684 26.9249C67.3076 26.7246 67.8595 26.5696 68.4114 26.4147C68.8133 26.2998 68.9023 26.3479 69.0244 26.762C69.3296 27.7905 69.7722 28.7415 70.3521 29.6311C71.1711 30.892 72.0765 32.0754 73.1143 33.1466C73.478 33.5206 73.8468 33.8893 74.2105 34.2633C74.2512 34.3033 74.5615 34.6052 74.9303 34.9551C73.8722 35.1822 72.776 35.3024 71.6543 35.3024C68.9888 35.3024 66.4784 34.6132 64.258 33.4164C64.197 33.7984 64.113 34.2018 64.0062 34.6239C66.3182 35.818 68.9049 36.5046 71.6543 36.5046C73.1499 36.5046 74.592 36.2855 75.9782 35.9115C76.0341 35.9596 76.0901 36.0077 76.1308 36.0397C76.8582 36.6168 79.4449 38.7405 80.6174 39.5152C81.7645 40.2766 86.4317 43.1697 86.9785 43.4715C87.5254 43.7734 88.062 44.0886 88.6089 44.3878C88.8683 44.5321 89.0896 44.6469 89.0184 44.1661C88.881 43.2284 89.1913 43.5517 89.611 43.6505C90.1095 43.7654 90.6029 43.8909 91.0989 44.0112C91.3253 44.0646 91.5491 44.118 91.7755 44.1688C91.8518 44.1848 91.9408 44.1901 91.9815 44.1073C92.0324 44.0031 91.9738 43.915 91.8925 43.8589L91.8874 43.8616Z'
        fill='#00537F'
      />
      <path
        d='M0.786133 86.4546H1.37367C1.43725 86.4546 1.48812 86.4706 1.53136 86.5026C1.57206 86.5374 1.60003 86.5774 1.61529 86.6282L2.69371 90.4403C2.71406 90.5097 2.73186 90.5819 2.74712 90.662C2.76238 90.7421 2.77765 90.825 2.79291 90.9104C2.81071 90.8223 2.82597 90.7395 2.84377 90.6593C2.86158 90.5792 2.87938 90.5071 2.90227 90.4403L4.13075 86.6282C4.14602 86.5855 4.17399 86.5454 4.21723 86.508C4.26047 86.4706 4.31134 86.4519 4.37238 86.4519H4.57586C4.63944 86.4519 4.69031 86.4679 4.73101 86.5C4.7717 86.5347 4.79968 86.5748 4.81748 86.6255L6.03833 90.4376C6.08157 90.5712 6.11972 90.7234 6.15533 90.8917C6.17059 90.8089 6.18331 90.7261 6.19603 90.6513C6.20874 90.5738 6.224 90.5044 6.24435 90.4376L7.32531 86.6255C7.33803 86.5801 7.36601 86.5374 7.4067 86.5026C7.44994 86.4679 7.50081 86.4492 7.56185 86.4492H8.11124L6.48344 91.9309H5.85012L4.52753 87.7502C4.5021 87.67 4.47666 87.5792 4.45377 87.475C4.44105 87.5258 4.43088 87.5739 4.41816 87.622C4.40799 87.67 4.39527 87.7128 4.38255 87.7502L3.05234 91.9309H2.41902L0.79122 86.4492L0.786133 86.4546Z'
        fill='#A7A9AC'
      />
      <path
        d='M11.5067 88.5005C11.1939 88.5005 10.9471 88.594 10.7666 88.7864C10.586 88.976 10.4766 89.2405 10.4308 89.5771H12.4376C12.4376 89.4195 12.4173 89.2752 12.3766 89.1417C12.3359 89.0108 12.2748 88.8959 12.1934 88.8024C12.1146 88.7062 12.0154 88.6314 11.9009 88.5807C11.7865 88.5272 11.6542 88.5032 11.5067 88.5032V88.5005ZM11.4914 88.001C11.7127 88.001 11.9162 88.041 12.1044 88.1185C12.2926 88.196 12.4529 88.3082 12.5902 88.4551C12.725 88.602 12.8318 88.7837 12.9081 88.9974C12.9844 89.2138 13.0226 89.4596 13.0226 89.7347C13.0226 89.8416 13.0124 89.9137 12.9895 89.9484C12.9692 89.9832 12.9259 90.0019 12.8649 90.0019H10.4105C10.4156 90.245 10.4461 90.4587 10.5046 90.6403C10.5631 90.822 10.6419 90.9716 10.7462 91.0945C10.8479 91.2147 10.97 91.3055 11.1099 91.3669C11.2498 91.4284 11.4075 91.4578 11.583 91.4578C11.7458 91.4578 11.8857 91.4391 12.0027 91.399C12.1197 91.3589 12.2214 91.3162 12.3079 91.2708C12.3918 91.2254 12.4656 91.1826 12.5215 91.1425C12.5775 91.1025 12.6284 91.0838 12.6691 91.0838C12.7225 91.0838 12.7632 91.1051 12.7937 91.1505L12.9743 91.399C12.8954 91.5005 12.7988 91.5887 12.6869 91.6661C12.5749 91.7409 12.4554 91.8024 12.3282 91.8531C12.2011 91.9012 12.0688 91.9386 11.934 91.9627C11.7967 91.9867 11.6619 92 11.5296 92C11.2752 92 11.0387 91.9546 10.8251 91.8638C10.6114 91.773 10.4257 91.6394 10.268 91.4658C10.1104 91.2921 9.98827 91.0757 9.90179 90.8166C9.81531 90.5602 9.76953 90.2636 9.76953 89.9297C9.76953 89.6599 9.81023 89.4061 9.88907 89.171C9.96792 88.936 10.0824 88.7329 10.2299 88.562C10.3774 88.391 10.558 88.2548 10.7716 88.1559C10.9853 88.0571 11.2244 88.009 11.4914 88.009V88.001Z'
        fill='#A7A9AC'
      />
      <path
        d='M19.8388 88.5428C19.6277 88.5428 19.442 88.5936 19.2843 88.6951C19.1241 88.7966 18.9791 88.9408 18.8443 89.1278V91.0032C18.9613 91.1714 19.091 91.289 19.2334 91.3584C19.3759 91.4279 19.5336 91.46 19.7091 91.46C20.055 91.46 20.3195 91.3317 20.5026 91.0726C20.6857 90.8161 20.7799 90.4475 20.7799 89.972C20.7799 89.7182 20.7595 89.5018 20.7163 89.3228C20.673 89.1412 20.612 88.9916 20.5331 88.8767C20.4517 88.7618 20.3551 88.6764 20.2381 88.6229C20.1211 88.5695 19.9888 88.5428 19.8413 88.5428H19.8388ZM18.1906 91.9355V86.2988H18.8418V88.6176C18.9944 88.4306 19.1699 88.281 19.3682 88.1688C19.5666 88.0566 19.793 87.9978 20.0473 87.9978C20.261 87.9978 20.4543 88.0406 20.6272 88.1234C20.8002 88.2062 20.9477 88.3344 21.0673 88.5001C21.1893 88.6683 21.2809 88.874 21.347 89.1198C21.4132 89.3656 21.4462 89.6488 21.4462 89.972C21.4462 90.2578 21.4106 90.525 21.3369 90.7707C21.2631 91.0165 21.1588 91.2302 21.0215 91.4092C20.8841 91.5882 20.7163 91.7298 20.5179 91.8339C20.3195 91.9381 20.0982 91.9889 19.849 91.9889C19.5997 91.9889 19.4089 91.9408 19.2411 91.8446C19.0758 91.7485 18.9308 91.6122 18.8061 91.4386L18.7731 91.7912C18.7527 91.8874 18.6968 91.9355 18.6052 91.9355H18.1855H18.1906Z'
        fill='#A7A9AC'
      />
      <path
        d='M24.2599 88.0625V90.5335C24.2599 90.8274 24.3235 91.0545 24.4532 91.2147C24.5829 91.375 24.7762 91.4552 25.0357 91.4552C25.2239 91.4552 25.4045 91.4071 25.5723 91.3136C25.7402 91.2201 25.8953 91.0892 26.0352 90.9209V88.0625H26.6838V91.9387H26.2972C26.2056 91.9387 26.1471 91.8906 26.1217 91.7971L26.0708 91.3804C25.9106 91.5674 25.73 91.717 25.5316 91.8292C25.3332 91.944 25.1043 92.0001 24.8474 92.0001C24.6465 92.0001 24.4685 91.9654 24.3133 91.8933C24.1582 91.8238 24.0285 91.725 23.9242 91.5967C23.8199 91.4685 23.741 91.3136 23.6902 91.1346C23.6393 90.9529 23.6113 90.7526 23.6113 90.5335V88.0625H24.2599Z'
        fill='#A7A9AC'
      />
      <path
        d='M29.9287 91.936H29.2801V88.0598H29.9287V91.936ZM30.0737 86.8443C30.0737 86.9111 30.0609 86.9726 30.0355 87.0313C30.0101 87.0874 29.977 87.1409 29.9338 87.1836C29.8905 87.229 29.8422 87.2637 29.7863 87.2878C29.7303 87.3145 29.6718 87.3252 29.6082 87.3252C29.5446 87.3252 29.4861 87.3118 29.4302 87.2878C29.3742 87.2611 29.3259 87.2263 29.2852 87.1836C29.242 87.1382 29.2089 87.0874 29.186 87.0313C29.1606 86.9726 29.1504 86.9111 29.1504 86.8443C29.1504 86.7776 29.1631 86.7161 29.186 86.6547C29.2089 86.5959 29.2445 86.5425 29.2852 86.4971C29.3284 86.4516 29.3768 86.4169 29.4302 86.3929C29.4836 86.3662 29.5446 86.3555 29.6082 86.3555C29.6718 86.3555 29.7303 86.3688 29.7863 86.3929C29.8422 86.4196 29.8905 86.4543 29.9338 86.4971C29.977 86.5425 30.0101 86.5932 30.0355 86.6547C30.0609 86.7161 30.0737 86.7776 30.0737 86.8443Z'
        fill='#A7A9AC'
      />
      <path
        d='M33.2501 91.9357H32.6016V86.3018H33.2501V91.9357Z'
        fill='#A7A9AC'
      />
      <path
        d='M37.193 91.4386C37.4041 91.4386 37.5898 91.3878 37.7475 91.2863C37.9077 91.1848 38.0527 91.0405 38.1875 90.8535V88.9782C38.0679 88.8099 37.9382 88.6924 37.7958 88.6229C37.6534 88.5562 37.4957 88.5214 37.3253 88.5214C36.9794 88.5214 36.7174 88.6496 36.5317 88.9088C36.346 89.1652 36.2545 89.5339 36.2545 90.0121C36.2545 90.2632 36.2748 90.4796 36.3155 90.6612C36.3562 90.8402 36.4173 90.9898 36.4986 91.1047C36.58 91.2195 36.6767 91.305 36.7937 91.3584C36.9107 91.4119 37.0429 91.4386 37.1955 91.4386H37.193ZM38.4495 91.9355C38.3579 91.9355 38.2994 91.8874 38.274 91.7939L38.2155 91.3237C38.0578 91.5267 37.8772 91.687 37.6737 91.8072C37.4702 91.9274 37.2388 91.9889 36.9768 91.9889C36.7657 91.9889 36.5724 91.9461 36.402 91.8607C36.229 91.7752 36.0815 91.6496 35.962 91.484C35.8399 91.3184 35.7483 91.1127 35.6822 90.8642C35.6161 90.6158 35.583 90.3326 35.583 90.0121C35.583 89.7262 35.6186 89.4591 35.6924 89.2133C35.7661 88.9675 35.8704 88.7538 36.0078 88.5722C36.1451 88.3905 36.313 88.2489 36.5088 88.1448C36.7047 88.0406 36.9285 87.9898 37.1803 87.9898C37.4067 87.9898 37.6 88.0299 37.7602 88.11C37.9204 88.1902 38.0629 88.3024 38.19 88.4493V86.2988H38.8386V91.9328H38.452L38.4495 91.9355Z'
        fill='#A7A9AC'
      />
      <path
        d='M45.3625 91.9974C45.07 91.9974 44.8462 91.9119 44.6911 91.7409C44.5334 91.5699 44.4571 91.3242 44.4571 91.0009V88.6287H44.012C43.9738 88.6287 43.9407 88.6154 43.9128 88.5913C43.8873 88.5673 43.8721 88.5299 43.8721 88.4791V88.2067L44.4774 88.1265L44.6275 86.9297C44.6326 86.8923 44.6478 86.8603 44.6758 86.8362C44.7012 86.8122 44.7368 86.7988 44.7775 86.7988H45.1056V88.1345H46.1612V88.6287H45.1056V90.9555C45.1056 91.1185 45.1438 91.2414 45.2175 91.3188C45.2939 91.399 45.3905 91.4364 45.51 91.4364C45.5787 91.4364 45.6372 91.4257 45.6881 91.407C45.7364 91.3883 45.7822 91.3669 45.8178 91.3429C45.8534 91.3215 45.8865 91.3001 45.9119 91.2788C45.9373 91.2601 45.9602 91.2494 45.9806 91.2494C46.0136 91.2494 46.0442 91.2707 46.0721 91.3135L46.2604 91.6394C46.1484 91.7489 46.0136 91.8344 45.856 91.8985C45.6983 91.96 45.5355 91.992 45.3676 91.992L45.3625 91.9974Z'
        fill='#A7A9AC'
      />
      <path
        d='M48.4199 91.9355V86.2988H49.0685V88.5802C49.2262 88.4039 49.4017 88.2623 49.5924 88.1581C49.7832 88.0513 50.0045 88.0005 50.2563 88.0005C50.4572 88.0005 50.6353 88.0352 50.7904 88.1047C50.943 88.1741 51.0727 88.273 51.177 88.4039C51.2813 88.5321 51.3576 88.687 51.411 88.8687C51.4644 89.0504 51.4924 89.2507 51.4924 89.4698V91.9381H50.8438V89.4698C50.8438 89.1759 50.7802 88.9488 50.6531 88.7859C50.5259 88.6229 50.33 88.5428 50.0681 88.5428C49.8748 88.5428 49.6967 88.5909 49.5314 88.6871C49.3661 88.7832 49.2109 88.9168 49.071 89.0797V91.9328H48.4225L48.4199 91.9355Z'
        fill='#A7A9AC'
      />
      <path
        d='M55.4014 88.5005C55.0886 88.5005 54.8419 88.594 54.6613 88.7864C54.4807 88.976 54.3713 89.2405 54.3255 89.5771H56.3323C56.3323 89.4195 56.312 89.2752 56.2687 89.1417C56.228 89.0108 56.167 88.8959 56.0856 88.8024C56.0068 88.7062 55.9076 88.6314 55.7931 88.5807C55.6786 88.5272 55.5464 88.5032 55.3989 88.5032L55.4014 88.5005ZM55.3862 88.001C55.6074 88.001 55.8109 88.041 55.9991 88.1185C56.1873 88.196 56.3476 88.3082 56.4849 88.4551C56.6197 88.602 56.7265 88.7837 56.8028 88.9974C56.8792 89.2138 56.9173 89.4596 56.9173 89.7347C56.9173 89.8416 56.9071 89.9137 56.8842 89.9484C56.8639 89.9832 56.8207 90.0019 56.7622 90.0019H54.3077C54.3128 90.245 54.3433 90.4587 54.4018 90.6403C54.4603 90.822 54.5392 90.9716 54.6435 91.0945C54.7452 91.2147 54.8673 91.3055 55.0072 91.3669C55.1471 91.4284 55.3048 91.4578 55.4803 91.4578C55.643 91.4578 55.7829 91.4391 55.8999 91.399C56.0169 91.3589 56.1187 91.3162 56.2051 91.2708C56.2916 91.2254 56.3603 91.1826 56.4188 91.1425C56.4747 91.1025 56.5256 91.0838 56.5663 91.0838C56.6197 91.0838 56.6604 91.1051 56.6909 91.1505L56.8741 91.399C56.7927 91.5005 56.6986 91.5887 56.5867 91.6661C56.4747 91.7409 56.3552 91.8024 56.228 91.8531C56.1009 91.9012 55.9686 91.9386 55.8338 91.9627C55.6965 91.9867 55.5617 92 55.4294 92C55.175 92 54.9411 91.9546 54.7249 91.8638C54.5112 91.773 54.3255 91.6394 54.1678 91.4658C54.0102 91.2921 53.8881 91.0757 53.8016 90.8166C53.7151 90.5602 53.6719 90.2636 53.6719 89.9297C53.6719 89.6599 53.7126 89.4061 53.7914 89.171C53.8703 88.936 53.9847 88.7329 54.1322 88.562C54.2798 88.391 54.4603 88.2548 54.674 88.1559C54.8876 88.0571 55.1267 88.009 55.3963 88.009L55.3862 88.001Z'
        fill='#A7A9AC'
      />
      <path
        d='M62.2098 91.9359V88.642L61.8028 88.5913C61.752 88.5779 61.7087 88.5592 61.6782 88.5325C61.6451 88.5058 61.6299 88.4657 61.6299 88.415V88.1345H62.2123V87.7605C62.2123 87.5388 62.2429 87.3411 62.3014 87.1701C62.3598 86.9991 62.4463 86.8522 62.5557 86.7347C62.6651 86.6171 62.7999 86.5263 62.955 86.4648C63.1102 86.4034 63.2857 86.374 63.479 86.374C63.6443 86.374 63.7969 86.4007 63.9368 86.4515L63.9215 86.7908C63.919 86.8415 63.8986 86.8736 63.8605 86.8816C63.8223 86.8923 63.7664 86.8976 63.6952 86.8976H63.5832C63.4713 86.8976 63.3696 86.9136 63.278 86.943C63.1865 86.9724 63.1076 87.0232 63.0415 87.0926C62.9754 87.1621 62.927 87.2529 62.8914 87.3651C62.8558 87.4773 62.838 87.6162 62.838 87.7818V88.1371H63.9063V88.6314H62.8609V91.9359H62.2072H62.2098Z'
        fill='#A7A9AC'
      />
      <path
        d='M66.5365 88.0625V90.5335C66.5365 90.8274 66.6001 91.0545 66.7298 91.2147C66.8595 91.375 67.0528 91.4552 67.3122 91.4552C67.5004 91.4552 67.6785 91.4071 67.8463 91.3136C68.0142 91.2201 68.1694 91.0892 68.3092 90.9209V88.0625H68.9578V91.9387H68.5712C68.4797 91.9387 68.4186 91.8906 68.3957 91.7971L68.3449 91.3804C68.1846 91.5674 68.004 91.717 67.8057 91.8292C67.6073 91.944 67.3784 92.0001 67.1189 92.0001C66.918 92.0001 66.7399 91.9654 66.5848 91.8933C66.4296 91.8238 66.3025 91.725 66.1982 91.5967C66.0939 91.4685 66.0151 91.3136 65.9617 91.1346C65.9082 90.9529 65.8828 90.7526 65.8828 90.5335V88.0625H66.5314H66.5365Z'
        fill='#A7A9AC'
      />
      <path
        d='M72.6028 91.9974C72.3128 91.9974 72.089 91.9119 71.9313 91.7409C71.7736 91.5699 71.6973 91.3242 71.6973 91.0009V88.6287H71.2522C71.214 88.6287 71.181 88.6154 71.153 88.5913C71.1276 88.5673 71.1123 88.5299 71.1123 88.4791V88.2067L71.7176 88.1265L71.8677 86.9297C71.8728 86.8923 71.8881 86.8603 71.9135 86.8362C71.9389 86.8122 71.9745 86.7988 72.0152 86.7988H72.3433V88.1345H73.3989V88.6287H72.3433V90.9555C72.3433 91.1185 72.3815 91.2414 72.4552 91.3188C72.5315 91.399 72.6282 91.4364 72.7477 91.4364C72.8164 91.4364 72.8749 91.4257 72.9232 91.407C72.9741 91.3883 73.0173 91.3669 73.0529 91.3429C73.0886 91.3215 73.1216 91.3001 73.1471 91.2788C73.1725 91.2601 73.1954 91.2494 73.2157 91.2494C73.2488 91.2494 73.2793 91.2707 73.3073 91.3135L73.4955 91.6394C73.3836 91.7489 73.2488 91.8344 73.0911 91.8985C72.9334 91.96 72.7706 91.992 72.6028 91.992V91.9974Z'
        fill='#A7A9AC'
      />
      <path
        d='M76.2195 88.0625V90.5335C76.2195 90.8274 76.2831 91.0545 76.4128 91.2147C76.5425 91.375 76.7358 91.4552 76.9952 91.4552C77.1834 91.4552 77.3615 91.4071 77.5293 91.3136C77.6972 91.2201 77.8524 91.0892 77.9923 90.9209V88.0625H78.6408V91.9387H78.2542C78.1627 91.9387 78.1016 91.8906 78.0787 91.7971L78.0279 91.3804C77.8676 91.5674 77.687 91.717 77.4887 91.8292C77.2903 91.944 77.0614 92.0001 76.8045 92.0001C76.6035 92.0001 76.4255 91.9654 76.2704 91.8933C76.1152 91.8238 75.988 91.725 75.8837 91.5967C75.7795 91.4685 75.7006 91.3136 75.6472 91.1346C75.5963 90.9529 75.5684 90.7526 75.5684 90.5335V88.0625H76.2169H76.2195Z'
        fill='#A7A9AC'
      />
      <path
        d='M81.1656 91.9359V88.0597H81.537C81.6056 88.0597 81.6565 88.0731 81.6819 88.1024C81.7074 88.1318 81.7277 88.1799 81.7354 88.2467L81.7786 88.8504C81.9058 88.5806 82.0609 88.3696 82.2466 88.2173C82.4323 88.065 82.651 87.9902 82.9003 87.9902C83.002 87.9902 83.0936 88.0036 83.1775 88.0276C83.2614 88.0517 83.3377 88.0864 83.4064 88.1292L83.3225 88.6367C83.3047 88.7008 83.2691 88.7329 83.2106 88.7329C83.1775 88.7329 83.1241 88.7222 83.0554 88.6955C82.9842 88.6714 82.8875 88.6581 82.7604 88.6581C82.534 88.6581 82.3458 88.7275 82.1932 88.8638C82.0406 89 81.9159 89.2031 81.8117 89.4648V91.9332H81.1631L81.1656 91.9359Z'
        fill='#A7A9AC'
      />
      <path
        d='M87.0362 88.5005C86.7233 88.5005 86.4766 88.594 86.296 88.7864C86.1155 88.976 86.0061 89.2405 85.9603 89.5771H87.9671C87.9671 89.4195 87.9467 89.2752 87.9035 89.1417C87.8628 89.0108 87.8018 88.8959 87.7204 88.8024C87.639 88.7062 87.5423 88.6314 87.4279 88.5807C87.3134 88.5272 87.1812 88.5032 87.0336 88.5032L87.0362 88.5005ZM87.0209 88.001C87.2422 88.001 87.4457 88.041 87.6339 88.1185C87.8221 88.196 87.9823 88.3082 88.1197 88.4551C88.2545 88.602 88.3613 88.7837 88.4376 88.9974C88.5139 89.2138 88.5521 89.4596 88.5521 89.7347C88.5521 89.8416 88.5394 89.9137 88.519 89.9484C88.4987 89.9832 88.4554 90.0019 88.3969 90.0019H85.9425C85.9476 90.245 85.9781 90.4587 86.0366 90.6403C86.0951 90.822 86.174 90.9716 86.2782 91.0945C86.38 91.2147 86.5021 91.3055 86.6419 91.3669C86.7818 91.4284 86.9395 91.4578 87.115 91.4578C87.2778 91.4578 87.4177 91.4391 87.5347 91.399C87.6517 91.3589 87.7534 91.3162 87.8399 91.2708C87.9264 91.2254 87.9951 91.1826 88.0536 91.1425C88.1095 91.1025 88.1604 91.0838 88.2011 91.0838C88.2545 91.0838 88.2952 91.1051 88.3257 91.1505L88.5088 91.399C88.4274 91.5005 88.3333 91.5887 88.2214 91.6661C88.1095 91.7409 87.99 91.8024 87.8628 91.8531C87.7356 91.9012 87.6034 91.9386 87.4686 91.9627C87.3312 91.9867 87.1964 92 87.0642 92C86.8098 92 86.5758 91.9546 86.3596 91.8638C86.1434 91.773 85.9603 91.6394 85.8026 91.4658C85.6449 91.2921 85.5228 91.0757 85.4364 90.8166C85.3499 90.5602 85.3066 90.2636 85.3066 89.9297C85.3066 89.6599 85.3473 89.4061 85.4262 89.171C85.505 88.936 85.6195 88.7329 85.767 88.562C85.9145 88.391 86.0951 88.2548 86.3088 88.1559C86.5224 88.0571 86.7615 88.009 87.0311 88.009L87.0209 88.001Z'
        fill='#A7A9AC'
      />
      <path
        d='M90.623 91.516C90.623 91.4492 90.6332 91.3878 90.6561 91.329C90.679 91.2702 90.7121 91.2195 90.7502 91.1767C90.7909 91.134 90.8392 91.0993 90.8952 91.0726C90.9512 91.0458 91.0096 91.0352 91.0732 91.0352C91.1368 91.0352 91.1953 91.0485 91.2513 91.0726C91.3072 91.0993 91.3556 91.134 91.3963 91.1767C91.4369 91.2195 91.47 91.2702 91.4929 91.329C91.5158 91.3878 91.5285 91.4492 91.5285 91.516C91.5285 91.5828 91.5158 91.6469 91.4929 91.7057C91.47 91.7644 91.4369 91.8125 91.3963 91.8579C91.3556 91.9007 91.3072 91.9354 91.2513 91.9595C91.1953 91.9835 91.1343 91.9969 91.0732 91.9969C91.0122 91.9969 90.9512 91.9835 90.8952 91.9595C90.8392 91.9354 90.7909 91.9007 90.7502 91.8579C90.7095 91.8152 90.679 91.7644 90.6561 91.7057C90.6332 91.6496 90.623 91.5855 90.623 91.516Z'
        fill='#B2B3B3'
      />
      <defs>
        <linearGradient
          id='paint0_linear_617_3'
          x1='2.01172'
          y1='40.2009'
          x2='28.8399'
          y2='40.2009'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#F4C54B' />
          <stop offset='1' stopColor='#E49C2F' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_617_3'
          x1='28.8096'
          y1='40.1853'
          x2='69.9675'
          y2='40.1853'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#F4C54B' />
          <stop offset='1' stopColor='#E49C2F' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_617_3'
          x1='71.0918'
          y1='15.0342'
          x2='86.0523'
          y2='15.0342'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#F4C54B' />
          <stop offset='1' stopColor='#E49C2F' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_617_3'
          x1='71.1652'
          y1='17.0247'
          x2='84.6963'
          y2='17.0247'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#F4C54B' />
          <stop offset='1' stopColor='#E49C2F' />
        </linearGradient>
        <linearGradient
          id='paint4_linear_617_3'
          x1='71.0502'
          y1='13.6246'
          x2='76.7704'
          y2='13.6246'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#F4C54B' />
          <stop offset='1' stopColor='#E49C2F' />
        </linearGradient>
      </defs>
    </svg>
  );
};
