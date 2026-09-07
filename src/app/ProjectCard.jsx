'use client';
import React, { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import GlobalButton from './GlobalButton';

export default function ProjectCard(props) {
  const { contextSafe } = useGSAP();
  const CardDrop = useRef(null);
  const imageRef = useRef(null);
  const detailsRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const imageContainer = imageRef.current;

    const handleMouseEnter = () => {
      gsap.to(imageContainer, {
        scale: 1.1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(imageContainer, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    imageContainer.addEventListener('mouseenter', handleMouseEnter);
    imageContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      imageContainer.removeEventListener('mouseenter', handleMouseEnter);
      imageContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.to(detailsRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    } else {
      gsap.to(detailsRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  }, [isOpen]);

  const handelOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex w-full flex-col border border-black/20 text-sm text-zinc-700'>
      {props.link == 'na' ? (
        <div className=' relative aspect-[4/3] w-full cursor-pointer overflow-hidden'>
          {props.qrImage !== 'na' && (
            <div className='absolute left-1 top-1 z-10 flex aspect-square w-16 items-center justify-center rounded-full border-transparent bg-transparent md:w-14'>
              <Image
                src={props.qrImage}
                alt=''
                fill
                className='object-cover'
              />
              <div className=' absolute -bottom-5 align left-0 w-max rounded-md bg-trasparent text-[10px] font-normal text-white'>
                RERA QR CODE
              </div>
            </div>
          )}
          <Image
            ref={imageRef}
            src={props.image}
            alt={props.title}
            fill
            className='object-cover'
          />
        </div>
      ) : (
        <Link href={props.link}>
          <div className=' relative aspect-[4/3] w-full cursor-pointer overflow-hidden'>
            {props.qrImage !== 'na' && (
              <div className='absolute left-1 top-1 z-10 flex aspect-square w-16 md:w-14 items-center justify-center rounded-full bg-transparent border-transparent'>
                <Image
                  ref={imageRef}
                  src={props.qrImage}
                  alt=''
                  fill
                  className='object-cover'
                />
                <div className=' absolute -bottom-5 align left-0 w-max rounded-md bg-trasparent text-[10px] font-normal text-white'>
                  RERA QR CODE
                </div>
              </div>
            )}
            <div className=' absolute right-1 top-1 z-10 flex aspect-square w-12 items-center justify-center rounded-full bg-black/40 backdrop-blur-md'>
              <Icon
                icon='system-uicons:arrow-top-right'
                className='text-2xl text-white'
              />
            </div>
            <Image
              ref={imageRef}
              src={props.image}
              alt={props.title}
              fill
              className='object-cover'
            />
          </div>
        </Link>
      )}

      <div className='flex w-full cursor-pointer items-center justify-between border-b border-black/20 p-3'>
        <span>{props.title}</span>
        <div className='flex items-center gap-1'>
          <span>{props.location}</span>
          <GlobalButton
            onClick={handelOpen}
            color='dark'
            className='  ml-4 w-fit  rounded-full px-4 py-2  text-sm'
          >
            Details
          </GlobalButton>
        </div>
      </div>
      <div
        ref={detailsRef}
        className='flex w-full flex-col gap-2 overflow-hidden'
      >
        <div className=' flex w-full  items-center  justify-between px-3   pt-3'>
          <span>Availability</span>
          <span>{props.availability}</span>
        </div>
        <div className=' flex w-full  items-center justify-between   px-3'>
          <span>Locality</span>
          <span>{props.locality}</span>
        </div>
        <div className=' flex w-full  items-center justify-between   px-3'>
          <span>Type</span>
          <span>{props.type}</span>
        </div>
        <div className=' flex w-full  items-center justify-between   px-3'>
          <span>Size</span>
          <span>{props.size}</span>
        </div>
        <div className=' flex w-full  items-center justify-between   px-3'>
          <span>Rera</span>
          <span>{props.rera}</span>
        </div>
        <div className=' flex w-full items-center   justify-between px-2 pb-5   text-3xl'>
          {props.link == 'na' ? null : (
            <Link href={props.link}>
              <GlobalButton
                color='dark'
                className='  w-fit  rounded-full px-4 py-2.5  text-sm'
              >
                KNOW MORE
              </GlobalButton>
            </Link>
          )}
          {props.map == 'na' ? null : (
            <Link href={props.map} target='_blank'>
              <Icon icon='tabler:map-2' />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
