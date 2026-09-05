'use client';
import React from 'react';

import { useEffect, useState } from 'react';
import GlobalButton from './GlobalButton';
import Link from 'next/link';
import { useUTMTracking } from '@/hooks/useUTMTracking';
import Logo from '@/components/Logo';

export default function GlobalFooter() {
  const { getPayload } = useUTMTracking();
  const [data, setData] = useState({
    name: '',
    userEmail: '',
    phone: '',
    message: '',
  });
  const [cookies, setCookies] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [consent, setConsent] = useState(false);
  const [consentWarning, setConsentWarning] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!data.name || data.name.length < 3) {
      setNameError(true);
      return;
    }
    if (!data.userEmail || !data.userEmail.includes('@')) {
      setEmailError(true);
      return;
    }
    if (!data.phone) {
      setPhoneError(true);
      return;
    }
    if (!data.message) {
      setMessageError(true);
      return;
    }

    if (!consent) {
      setConsentWarning(true);
      return;
    }

    if (!nameError && !emailError && !phoneError && !messageError) {
      setLoading(true);
      try {
        const attribution = getPayload();
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: data.name,
            userEmail: data.userEmail,
            phone: data.phone,
            message: data.message,
            ...attribution,
          }),
        });

        if (response.ok) {
          console.log('Email sent successfully');
          setData({
            name: '',
            userEmail: '',
            phone: '',
            message: '',
          });
          setConsent(false);
          setLoading(false);
          // timeout to show success message
          setTimeout(() => {
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
            }, 5000);
          }, 700);
        } else {
          console.error('Error sending email');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    }
  };

  return (
    <footer className='  w-full bg-[#191919] px-3 py-[57px] text-neutral-200'>
      {success && (
        <div className=' fixed bottom-10 right-0 z-[9] bg-black px-12 py-3 text-white'>
          Message sent successfully
        </div>
      )}
      {cookies && (
        <div className=' fixed left-0 top-0 z-[9999] flex size-full items-center justify-center overflow-hidden bg-black/20 px-4 backdrop-blur'>
          <div className='   flex  h-[70vh] w-full  max-w-screen-xl flex-col justify-between rounded-md bg-[#eee] p-4 text-black md:p-12'>
            <div className=' relative mb-4 mt-2 w-[180px]'>
              <Logo className='h-9 w-auto' />
            </div>
            <div>
              <span className=' mb-4 w-full text-2xl font-bold text-black md:text-4xl'>
                {' '}
                Disclaimer{' '}
              </span>
              <p className=' w-full text-sm text-black/70 md:text-base '>
                The information provided on the RR Landmarks real estate website is
                for general informational purposes only. While we strive to keep
                the information up to date and accurate, we make no
                representations or warranties of any kind, express or implied,
                about the completeness, accuracy, reliability, suitability, or
                availability with respect to the website or the information,
                products, services, or related graphics contained on the website
                for any purpose. Any reliance you place on such information is
                therefore strictly at your own risk. In no event will RR Landmarks or
                its employees be liable for any loss or damage including without
                limitation, indirect or consequential loss or damage, or any
                loss or damage whatsoever arising from loss of data or profits.
              </p>

              <GlobalButton
                color='white'
                className=' mt-4  w-full rounded-full px-6  py-2 text-base font-medium  md:h-fit md:w-32'
                onClick={() => setCookies(false)}
              >
                I accept
              </GlobalButton>
            </div>
          </div>
        </div>
      )}
      <div className=' m-auto w-full max-w-screen-2xl '>
        <div className=' grid-cols-2 gap-20 md:grid'>
          <div>
            <span className=' text-4xl font-bold text-yellow-200 '>
              Looking for something specific?
            </span>
            {isHydrated ? (
              <form className='flex max-w-3xl flex-col pt-[57px]'>
                <div className=' w-full gap-2 md:flex'>
                  <div className=' w-full'>
                    <label
                      className={`
              ${nameError ? 'text-red-500' : ' opacity-0 '} text-[10px]`}
                      htmlFor='name'
                    >
                      {nameError ? 'Please enter a valid name' : 'Full Name*'}
                    </label>
                    <input
                      placeholder='Full Name*'
                      className=' cursorHide w-full cursor-text border-b border-neutral-400 bg-transparent p-1 autofill:text-white  focus:border-neutral-100 focus:outline-none'
                      type='text'
                      value={data.name}
                      onChange={(e) => {
                        (setData({ ...data, name: e.target.value }),
                          setNameError(false));
                      }}
                    />
                  </div>

                  <div className=' w-full'>
                    <label
                      className={`
              ${emailError ? 'text-red-500' : ' opacity-0 '} text-[10px]`}
                      htmlFor='userEmail'
                    >
                      {emailError ? 'Please enter a valid email' : 'Email*'}
                    </label>
                    <input
                      placeholder='Email*'
                      className=' cursorHide w-full cursor-text border-b border-neutral-400 bg-transparent p-1 focus:border-neutral-100 focus:outline-none'
                      type='email'
                      value={data.userEmail}
                      onChange={(e) => {
                        (setData({ ...data, userEmail: e.target.value }),
                          setEmailError(false));
                      }}
                    />
                  </div>
                </div>
                <div className=' items-center gap-7 md:flex'>
                  <div className=' w-full'>
                    <label
                      className={`
              ${phoneError ? 'text-red-500' : ' opacity-0 '} text-[10px]`}
                      htmlFor='phone'
                    >
                      {phoneError
                        ? 'Please enter a valid phone number'
                        : 'Phone*'}
                    </label>
                    <input
                      placeholder='Phone*'
                      className=' cursorHide w-full cursor-text border-b border-neutral-400 bg-transparent p-1 focus:border-neutral-100 focus:outline-none'
                      type='tel'
                      value={data.phone}
                      onChange={(e) => {
                        (setData({ ...data, phone: e.target.value }),
                          setPhoneError(false));
                      }}
                    />
                  </div>
                  <GlobalButton
                    color='white'
                    className=' mt-4 hidden w-full rounded-full px-6  py-2 text-base font-medium md:block md:h-fit md:w-32'
                    onClick={handleSubmit}
                  >
                    {loading ? 'Loading...' : 'Submit' /* Added loading state */}
                  </GlobalButton>
                </div>
                <div className=' w-full'>
                  <label
                    className={`
              ${messageError ? 'text-red-500' : ' opacity-0 '} text-[10px]`}
                    htmlFor='message'
                  >
                    {messageError ? 'Please enter a message' : 'Message*'}
                  </label>
                  <textarea
                    placeholder='Message*'
                    className=' cursorHide  h-40 w-full cursor-text resize-none border-b border-neutral-400 bg-transparent p-1 focus:border-neutral-100 focus:outline-none'
                    value={data.message}
                    onChange={(e) => {
                      (setData({ ...data, message: e.target.value }),
                        setMessageError(false));
                    }}
                  />
                </div>
                <GlobalButton
                  color='white'
                  className=' mt-4 w-full rounded-full px-6  py-2 text-base font-medium  md:hidden md:h-fit md:w-28'
                  onClick={handleSubmit}
                >
                  {loading ? 'Loading...' : 'Submit'}
                </GlobalButton>
                <label className='mt-3 flex items-start gap-2 text-[11px] text-neutral-400'>
              <input
                type='checkbox'
                checked={consent}
                onChange={(e) => {
                  setConsent(e.target.checked);
                  setConsentWarning(false);
                }}
                className='mt-0.5 size-3 shrink-0 rounded border-neutral-500 text-yellow-200 focus:ring-yellow-200'
              />
              <span>
                I agree to RR Landmarks&apos;{' '}
                <Link href='/privacy' className='underline hover:text-neutral-200'>
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link href='/terms' className='underline hover:text-neutral-200'>
                  Terms &amp; Conditions
                </Link>
                .
              </span>
            </label>
            {consentWarning && (
              <span className='text-[11px] text-red-400'>
                Please agree to the Privacy Policy and Terms &amp; Conditions.
              </span>
            )}
              </form>
            ) : (
              <div className='max-w-3xl pt-[57px]' aria-hidden='true'>
                <div className='h-[360px] w-full rounded-md border border-neutral-700/40 bg-neutral-800/20' />
              </div>
            )}
          </div>
          <div className='  mt-20 flex w-full  flex-col gap-7'>
            <div className=' grid grid-cols-2'>
              <span className='text-yellow-200'>CONTACT</span>
              <div className=' flex flex-col gap-4'>
                <span>+91 7448007500</span>
                <span>info@sreddygroup.com</span>
              </div>
            </div>
            <div className=' grid grid-cols-2'>
              <span className='text-yellow-200'>OFFICE</span>
              <span>
                5th floor, Business Point, Sai Chowk Rd, Laxman Nagar, Baner,
                Pune, Maharashtra, 411045
              </span>
            </div>
            <div className=' grid grid-cols-2'>
              <span className='text-yellow-200'>SOCIALS</span>
              <span className=' flex flex-col gap-2'>
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
              </span>
            </div>
          </div>
        </div>
      </div>
      <section className=' text-md m-auto flex w-full max-w-screen-2xl flex-col items-center justify-between pt-4'>
        <span className=' mb-4 mt-10 w-full text-2xl font-bold text-yellow-200 md:text-4xl'>
          {' '}
          Disclaimer{' '}
        </span>
        <p className=' w-full text-sm text-white/70 md:text-base '>
          The information provided on the RR Landmarks real estate website is for
          general informational purposes only. While we strive to keep the
          information up to date and accurate, we make no representations or
          warranties of any kind, express or implied, about the completeness,
          accuracy, reliability, suitability, or availability with respect to
          the website or the information, products, services, or related
          graphics contained on the website for any purpose. Any reliance you
          place on such information is therefore strictly at your own risk. In
          no event will RR Landmarks or its employees be liable for any loss or
          damage including without limitation, indirect or consequential loss or
          damage, or any loss or damage whatsoever arising from loss of data or
          profits.
        </p>
      </section>
      <section className=' m-auto mt-10 flex w-full max-w-screen-2xl flex-col items-center justify-between pt-4 text-sm md:flex-row md:text-4xl'>
        <div className='flex items-center gap-4'>
          <span>RR Landmarks. All rights reserved, 2025</span>
          <Link href='/privacy' className='text-yellow-200 hover:underline'>
            Privacy Policy
          </Link>
          <Link href='/terms' className='text-yellow-200 hover:underline'>
            Terms
          </Link>
        </div>
        <div className=' text-xs'>
          Designed and developed by{' '}
          <Link
            className=' text-yellow-200'
            target='blank_'
            href='https://www.angle.services'
          >
            Angle
          </Link>
        </div>
      </section>
    </footer>
  );
}
