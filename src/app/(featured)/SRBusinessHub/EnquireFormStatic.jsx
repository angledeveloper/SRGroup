'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import GlobalButton from '@/app/GlobalButton';
import { Icon } from '@iconify/react';
import BrochureForm from './BrochureForm';
import { useUTMTracking } from '@/hooks/useUTMTracking';

export default function EnquireFormStatic(props) {
  const { getPayload } = useUTMTracking();
  const [FloorFormData, setFloorPlanFormData] = useState({
    name: '',
    userEmail: '',
    phone: '',
    message: '',
    subject: '',
  });

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [floorPlanSuccess, setFloorPlanSuccess] = useState(false);
  const [floorPlanLoading, setFloorPlanLoading] = useState(false);

  const [open, setOpen] = useState(false);

  const handleSubmitFloorPlan = async (e) => {
    e.preventDefault();

    if (!FloorFormData.name || FloorFormData.name.length < 3) {
      setNameError(true);
      return;
    }
    if (!FloorFormData.userEmail || !FloorFormData.userEmail.includes('@')) {
      setEmailError(true);
      return;
    }
    if (!FloorFormData.phone) {
      setPhoneError(true);
      return;
    }

    if (!nameError && !emailError && !phoneError) {
      setFloorPlanLoading(true);
      setFloorPlanSuccess(false);
      try {
        const attribution = getPayload();
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: FloorFormData.name,
            userEmail: FloorFormData.userEmail,
            phone: FloorFormData.phone,
            message: FloorFormData.message,
            subject: FloorFormData.subject,
            ...attribution,
          }),
        });

        if (response.ok) {
          console.log('Email sent successfully');
          setFloorPlanFormData({
            name: '',
            userEmail: '',
            phone: '',
            message: '',
            subject: '',
          });
          setFloorPlanSuccess(true);
          setFloorPlanLoading(false);
          console.log(floorPlanSuccess);
        } else {
          console.error('Error sending email');
          setFloorPlanLoading(false);
          setFloorPlanSuccess(false);
        }
      } catch (error) {
        console.error('Error:', error);
        setFloorPlanLoading(false);
        setFloorPlanSuccess(false);
      }
    }
  };

  return (
    <>
      <BrochureForm
        FloorPlanOpen={open}
        setFloorPlanOpen={setOpen}
        floorPlanLink='https://www.google.com'
        Title='SR Akshatam'
      />
      <div className=' z-10  flex w-full flex-col items-center gap-2 rounded-md bg-blue-200 px-6 py-8'>
        <div className=' flex justify-between gap-4  overflow-hidden text-3xl text-yellow-200 md:text-4xl'>
          <span>{floorPlanSuccess ? 'Thanks' : 'Enquire Now'}</span>
        </div>
        <span className=' text-white'>
          {floorPlanSuccess
            ? 'We will contact you shortly'
            : `Enquire for ${props.Title}`}
        </span>
        <span className=' mt-2 font-bold text-white'>+91 7448007500</span>

        <div className=' mt-4 flex w-full  flex-col items-center gap-2'>
          <Link
            className='w-full '
            href='https://api.whatsapp.com/send/?phone=%2B917448007500&text&type=phone_number&app_absent=0'
            target='_blank'
          >
            <GlobalButton
              color='yellow'
              className=' w-full rounded-full border border-yellow-100 p-2  text-base font-medium  '
            >
              <span className=' flex w-full items-center justify-center gap-2'>
                <Icon icon='akar-icons:whatsapp-fill' />
                Whatsapp
              </span>
            </GlobalButton>
          </Link>

          <GlobalButton
            onClick={() => {
              setOpen(true);
            }}
            color='white'
            className=' w-full whitespace-nowrap rounded-full  p-2 text-base font-medium  '
          >
            Download brochure
          </GlobalButton>
        </div>
      </div>
    </>
  );
}
