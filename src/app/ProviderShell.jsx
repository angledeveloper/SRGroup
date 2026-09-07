'use client';
import { store } from '@/lib/store';
import { Provider } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
export default function ProviderShell({ children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = store();
  }
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(useGSAP);
  }

  const backgroundRef = useRef();
  /** @type {import('gsap').core.Timeline | null} */
  const tl = useRef(null);
  const foundationRef = useRef();
  const communitiesRef = useRef();
  const dreamsRef = useRef();
  const futureRef = useRef();
  const weBuildRef = useRef();

  const [isLoading, setIsLoading] = useState(false);

  useGSAP(() => {
    tl.current = gsap.timeline();
    if (isLoading) {
      tl.current.to(weBuildRef.current, {
        duration: 0.5,
        ease: 'power2.inOut',
        opacity: 1,
      });
      tl.current.to(foundationRef.current, {
        duration: 0.5,
        ease: 'power2.inOut',
        opacity: 1,
      });
      tl.current.to(foundationRef.current, {
        delay: 0.5,
        duration: 0.5,
        ease: 'power2.inOut',
        opacity: 0,
      });
      tl.current.to(communitiesRef.current, {
        duration: 0.5,
        ease: 'power2.inOut',
        opacity: 1,
      });
      tl.current.to(communitiesRef.current, {
        delay: 0.5,
        duration: 0.5,
        ease: 'power2.inOut',
        opacity: 0,
      });
      tl.current.to(dreamsRef.current, {
        duration: 0.5,
        ease: 'power2.inOut',
        opacity: 1,
      });
      tl.current.to(dreamsRef.current, {
        delay: 0.5,
        duration: 0.5,
        ease: 'power2.inOut',
        opacity: 0,
      });
      tl.current.to(futureRef.current, {
        duration: 0.5,
        ease: 'power2.inOut',
        opacity: 1,
      });
      tl.current.to(futureRef.current, {
        delay: 0.5,
        duration: 0.5,
        ease: 'power2.inOut',
        opacity: 0,
      });
      tl.current.to(weBuildRef.current, {
        duration: 0.5,
        ease: 'power2.inOut',
        opacity: 0,
      });

      tl.current.to(backgroundRef.current, {
        delay: 0.25,
        duration: 0.5,
        ease: 'power2.inOut',
        opacity: 0,
        onComplete: () => {
          setIsLoading(false);
        },
      });
    }
  });

  return (
    <>
      {isLoading && (
        <div
          ref={backgroundRef}
          className='  fixed left-0 top-0 z-[99999] flex h-dvh w-full items-center justify-center bg-white'
        >
          <div className=' flex size-full flex-col items-center justify-center gap-8 px-3 text-5xl font-medium text-darkwood-300 md:flex-row md:items-center md:justify-between md:px-8'>
            <span
              ref={weBuildRef}
              className=' text-center opacity-0 md:w-full md:text-left'
            >
              We Build
            </span>
            <div className=' flex w-full items-center justify-center font-medium md:w-2/3 md:justify-start'>
              <span ref={foundationRef} className=' absolute opacity-0 '>
                Foundations.
              </span>
              <span ref={communitiesRef} className=' absolute opacity-0'>
                Communities.
              </span>
              <span ref={dreamsRef} className=' absolute opacity-0'>
                Dreams.
              </span>
              <span ref={futureRef} className=' absolute opacity-0'>
                The Future.
              </span>
            </div>
          </div>
        </div>
      )}
      <Provider store={storeRef.current}>{children}</Provider>
    </>
  );
}

