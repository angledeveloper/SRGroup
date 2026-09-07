'use client';
import { useRouter } from 'next/navigation';
import GlobalButton from '../GlobalButton';
import { useState } from 'react';
import Link from 'next/link';
import Testimonials from './Testimonials';

export default function Contact() {
  const [data, setData] = useState({
    name: '',
    userEmail: '',
    phone: '',
    message: '',
  });
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [consent, setConsent] = useState(false);
  const [consentWarning, setConsentWarning] = useState(false);

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
    <div className=' mx-auto mt-28 flex size-full max-w-screen-2xl flex-col  items-center  justify-center gap-8 px-3 md:min-h-[calc(100dvh-80px)] md:flex-row'>
      <div className=' flex size-full  flex-col gap-4 overflow-visible'>
        <div className='  h-[424px]'>
          <h1 className=' mb-4 text-5xl font-bold text-darkwood-300'>Contact Us</h1>
          <form className='flex w-full flex-col'>
            <div className=' w-full cursor-text gap-2 md:flex'>
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
                  className=' cursorHide w-full cursor-text  border-b border-neutral-700 bg-transparent p-1   focus:border-neutral-900 focus:outline-none'
                  type='text'
                  value={data.name}
                  onChange={(e) => {
                    setData({ ...data, name: e.target.value }),
                      setNameError(false);
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
                  className=' cursorHide w-full cursor-text border-b border-neutral-700 bg-transparent p-1 focus:border-neutral-900 focus:outline-none'
                  type='email'
                  value={data.userEmail}
                  onChange={(e) => {
                    setData({ ...data, userEmail: e.target.value }),
                      setEmailError(false);
                  }}
                />
              </div>
            </div>
            <div className=' cursor-text  items-center gap-7 md:flex'>
              <div className=' w-full'>
                <label
                  className={`
              ${phoneError ? 'text-red-500' : ' opacity-0 '} text-[10px]`}
                  htmlFor='phone'
                >
                  {phoneError ? 'Please enter a valid phone number' : 'Phone*'}
                </label>
                <input
                  placeholder='Phone*'
                  className=' cursorHide w-full cursor-text border-b border-neutral-700 bg-transparent p-1 focus:border-neutral-900 focus:outline-none'
                  type='tel'
                  value={data.phone}
                  onChange={(e) => {
                    setData({ ...data, phone: e.target.value }),
                      setPhoneError(false);
                  }}
                />
              </div>
            </div>
            <div className='w-full  cursor-text'>
              <label
                className={`
              ${messageError ? 'text-red-500' : ' opacity-0 '} text-[10px]`}
                htmlFor='message'
              >
                {messageError ? 'Please enter a message' : 'Message*'}
              </label>
              <textarea
                placeholder='Message*'
                className=' cursorHide  h-40 w-full cursor-text resize-none border-b border-neutral-700 bg-transparent p-1 focus:border-neutral-900 focus:outline-none'
                value={data.message}
                onChange={(e) => {
                  setData({ ...data, message: e.target.value }),
                    setMessageError(false);
                }}
              />
            </div>
            <GlobalButton
              color='dark'
              className=' mt-4 w-full rounded-full px-6  py-2 text-base font-medium  md:h-fit md:w-28'
              onClick={handleSubmit}
            >
              {loading ? 'Loading...' : 'Submit'}
            </GlobalButton>
            <label className='mt-3 flex items-start gap-2 text-[11px] text-neutral-500'>
              <input
                type='checkbox'
                checked={consent}
                onChange={(e) => {
                  setConsent(e.target.checked);
                  setConsentWarning(false);
                }}
                className='mt-0.5 size-3 shrink-0 rounded border-neutral-300 text-darkwood-300 focus:ring-darkwood-300'
              />
              <span>
                I agree to RR Landmarks&apos;{' '}
                <Link href='/privacy' className='underline hover:text-neutral-700'>
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link href='/terms' className='underline hover:text-neutral-700'>
                  Terms &amp; Conditions
                </Link>
                .
              </span>
            </label>
            {consentWarning && (
              <span className='text-[11px] text-red-500'>
                Please agree to the Privacy Policy and Terms &amp; Conditions.
              </span>
            )}
          </form>
        </div>

        <div className=' cursorHide   h-[300px] w-full overflow-hidden rounded-md'>
          <iframe
            className='size-full  border-none '
            src='https://maps.google.com/maps?width=100%25&amp;height=100%&amp;hl=en&amp;q=18.573012280479954,%2073.77072384224962+(SR%20Group)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
          ></iframe>
        </div>
      </div>
      <div className='flex h-[400px] w-full overflow-hidden rounded-lg  bg-black   md:h-[724px]  '>
        <Testimonials />
      </div>
    </div>
  );
}
