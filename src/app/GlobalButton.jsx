'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

export default function GlobalButton({ children, className, ...props }) {
  const { contextSafe } = useGSAP();

  const buttonRef = useRef();
  const buttonBg = useRef();
  /** @type {import('gsap').core.Timeline | null} */
  const tl = useRef(null);

  const rippleOnHover = contextSafe((e) => {
    tl.current = gsap.timeline();
    const rect = buttonBg.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    tl.current
      .set(buttonBg.current, {
        clipPath: `circle(0px at ${x}px ${y}px)`,
      })
      .to(buttonBg.current, {
        duration: 0.5,
        clipPath: `circle(150% at ${x}px ${y}px)`,
      });
  });

  const rippleOut = contextSafe((e) => {
    tl.current = gsap.timeline();
    const rect = buttonBg.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    tl.current
      .set(buttonBg.current, {
        clipPath: `circle(150px at ${x}px ${y}px)`,
      })
      .to(buttonBg.current, {
        duration: 0.5,
        clipPath: `circle(0% at ${x}px ${y}px)`,
      });
  });

  const isLight = props.color === 'light';

  return (
    <button
      onMouseEnter={rippleOnHover}
      onMouseLeave={rippleOut}
      ref={buttonRef}
      type={props.type || 'button'}
      onClick={props.onClick}
      className={`uppercase ${className} 
    ${
      isLight
        ? '  bg-travertine-300 text-espresso-noir     '
        : '  bg-espresso-noir text-travertine-300  '
    } cursorHide
    group relative
    transition-transform duration-200 active:scale-90 `}
      {...props}
    >
      <span className=' pointer-events-none  relative z-20'>{children}</span>

      <span
        ref={buttonBg}
        style={{
          clipPath: 'circle(0% at 50% 50%)',
        }}
        className={` 
        ${
          isLight
            ? '    bg-travertine-100 outline -outline-offset-1  outline-travertine-100 group-active:bg-travertine-200  group-active:outline-travertine-200'
            : '   bg-darkwood-200 outline -outline-offset-1 outline-darkwood-200 group-active:bg-darkwood-300 group-active:outline-darkwood-300'
        } 
        absolute left-0   top-0  z-10 size-full rounded-full transition-[background-color,outline]  duration-200`}
      ></span>
    </button>
  );
}

