'use client';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import GlobalButton from '@/app/GlobalButton';
import { Icon } from '@iconify/react';

export default function Page() {
  return (
    <div className='min-h-screen bg-white mt-[110px] pb-10'>
      <div className='mx-auto w-full max-w-lg px-4 pt-6'>
        <div className='relative w-full bg-gray-200 rounded-xl shadow-sm overflow-hidden aspect-[4/5]'>
          <Image
            src='/images/founders/rajendra.webp'
            alt='Mr. Rajendra Reddy'
            fill
            className='object-cover'
            priority
          />
        </div>
        <div className='mt-6 text-center'>
          <h1 className='text-5xl font-semibold text-blue-200'>
            Rajendra Reddy
          </h1>
          <p className='text-xl mt-2 text-gray-800'>Director, RR Landmarks</p>
        </div>
        <div className='flex items-center justify-center gap-4'>
          <div className='w-[50%] flex items-center justify-between mt-6'>
            {/* Phone */}
            <a
              href='tel:+919823131484'
              aria-label='Call us'
              className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-700 text-white hover:bg-neutral-800 transition'
            >
              <Icon icon='mdi:phone' className='h-5 w-5' />
            </a>

            {/* Email */}
            <a
              href='mailto:onkar@sreddygroup.com'
              aria-label='Email us'
              className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-700 text-white hover:bg-neutral-800 transition'
            >
              <Icon icon='mdi:email-outline' className='h-5 w-5' />
            </a>

            {/* Message / Chat */}
            <a
              target='_blank'
              href='https://api.whatsapp.com/send/?phone=%2B917448007500&text&type=phone_number&app_absent=0'
              aria-label='Chat with us'
              className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-700 text-white hover:bg-neutral-800 transition'
            >
              <Icon icon='akar-icons:whatsapp-fill' className='h-5 w-5' />
            </a>

            {/* Website / Globe */}
            <a
              href='https://www.sreddygroup.com/'
              target='_blank'
              rel='noreferrer'
              aria-label='Visit our website'
              className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-700 text-white hover:bg-neutral-800 transition'
            >
              <Icon icon='mdi:web' className='h-5 w-5' />
            </a>
            {/* Offica location*/}
            <a
              href='https://maps.app.goo.gl/xK8vCfneZQT2nqUH6'
              target='_blank'
              rel='noreferrer'
              aria-label='Visit our website'
              className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-700 text-white hover:bg-neutral-800 transition'
            >
              <Icon icon='akar-icons:location' className='h-5 w-5' />
            </a>
          </div>
        </div>
        <div className='bg-gray-100 rounded-xl p-6 mt-8 gap-5 flex flex-col'>
          <p className='text-2xl mt-2 font-bold text-gray-1000'>About Us</p>
          <video
            src='https://admin.sreddygroup.com/api/files/75iqw278ep21ek1/zgsdo9m7kbn0t36/hero_banner_360_2_iSEjss4uT2.mp4'
            className=' size-full object-cover contrast-[1.2] rounded-xl'
            autoPlay
            loop
            muted
            playsInline
            priority
            preload='auto'
            poster='/thumbnail.avif'
            alt='Video background'
          ></video>
          <p>
            RR Landmarks - Building Tomorrow, Together! Since the past two decades,
            Pune-based RR Landmarks has been at the forefront of the construction
            industry, specializing in both residential and commercial projects.
            At RR Landmarks, we&apos;ve built more than just structures; we&apos;ve built
            trust and excellence. Our core lies in innovation, integrity, and a
            relentless commitment to quality, driven by a team that values
            honesty, transparency, and collaboration. Rooted in our Indian
            heritage, we&apos;re not just constructing buildings but crafting
            legacies, fostering community growth and ensuring every project
            contributes to the collective dreams of New Bharat. At RR Landmarks, we
            build not just for the present, but for a sustainable and inclusive
            future.
          </p>
          {/* <Link
            href=''
            target='_blank'
          >
            <GlobalButton
              color='white'
              className='  w-full  rounded-full px-10 py-3 text-base md:px-12 md:py-4 md:text-lg '
            >
              <span className='flex w-full items-center justify-center gap-2'>
                <Icon icon='quill:download' />
                Download Company Profile
              </span>
            </GlobalButton>
          </Link> */}
        </div>
        <div className='bg-gray-100 rounded-xl p-6 mt-8 gap-5 flex flex-col'>
          <p className='text-2xl mt-2 font-bold text-gray-1000'>
            Our Ongoing Projects
          </p>
          {/* Business Hub */}
          <div className='my-5 gap-5 flex flex-col'>
            <p>SR Business Hub</p>
            <div className='relative w-full aspect-video'>
              <Image
                src='https://admin.sreddygroup.com/api/files/75iqw278ep21ek1/zgsdo9m7kbn0t36/businesshub_CFar2X58SL.avif'
                alt='Business hub'
                fill
                className='object-cover contrast-[1.2] rounded-xl'
                priority
              />
            </div>
            <Link
              href='https://admin.sreddygroup.com/api/files/75iqw278ep21ek1/zgsdo9m7kbn0t36/business_hub_brochure_n2XCohb3H2.pdf'
              target='_blank'
            >
              <GlobalButton
                color='yellow'
                className='  w-full  rounded-full px-10 py-3 text-base md:px-12 md:py-4 md:text-lg '
              >
                <span className='flex w-full items-center justify-center gap-2'>
                  <Icon icon='quill:download' />
                  Download Brochure
                </span>
              </GlobalButton>
            </Link>
          </div>
          {/* Akshatam */}
          <div className='my-5 gap-5 flex flex-col'>
            <p>SR Akshatam</p>
            <div className='relative w-full aspect-square'>
              <Image
                src='https://admin.sreddygroup.com/api/files/75iqw278ep21ek1/zgsdo9m7kbn0t36/akshatam_P1ReZ5h144.avif'
                alt='SR Akshatam'
                fill
                className='object-cover contrast-[1.2] rounded-xl'
                priority
              />
            </div>
            <Link
              href='https://admin.sreddygroup.com/api/files/75iqw278ep21ek1/zgsdo9m7kbn0t36/sr_akshatam_brochure_b6dJic629D.pdf'
              target='_blank'
            >
              <GlobalButton
                color='yellow'
                className='  w-full  rounded-full px-10 py-3 text-base md:px-12 md:py-4 md:text-lg '
              >
                <span className='flex w-full items-center justify-center gap-2'>
                  <Icon icon='quill:download' />
                  Download Brochure
                </span>
              </GlobalButton>
            </Link>
          </div>
          {/* Aishwariyam */}
          <div className='my-5 gap-5 flex flex-col'>
            <p>SR Aishwariyam</p>
            <div className='relative w-full aspect-video'>
              <Image
                src='https://admin.sreddygroup.com/api/files/75iqw278ep21ek1/zgsdo9m7kbn0t36/aishwaryam_5Didhuwqw9.webp'
                alt='SR Aishwariyam'
                fill
                className='object-cover contrast-[1.2] rounded-xl'
                priority
              />
            </div>
            <Link
              href='https://admin.sreddygroup.com/api/files/75iqw278ep21ek1/zgsdo9m7kbn0t36/sr_aishwaryam_brochure_hWCQfnYPcq.pdf'
              target='_blank'
            >
              <GlobalButton
                color='yellow'
                className='  w-full  rounded-full px-10 py-3 text-base md:px-12 md:py-4 md:text-lg '
              >
                <span className='flex w-full items-center justify-center gap-2'>
                  <Icon icon='quill:download' />
                  Download Brochure
                </span>
              </GlobalButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
