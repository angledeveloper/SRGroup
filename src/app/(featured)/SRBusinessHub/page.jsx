'use client';
import React from 'react';
import Image from 'next/image';
import Hero0 from './hero0.avif';
import Hero1 from './hero1.avif';
import Hero2 from './hero2.avif';
import Hero3 from './hero3.avif';
import MHero0 from './hero0.avif';
import MHero1 from './hero1.avif';
import MHero2 from './hero2.avif';
import MHero3 from './hero3.avif';
import Slider from './Slider';
import GlobalButton from '@/app/GlobalButton';
import { useState } from 'react';
import BrochureForm from './BrochureForm';
import EnquireForm from './EnquireForm';
import EnquireFormStatic from './EnquireFormStatic';
import { Icon } from '@iconify/react';
import ShopHero from './shopHero.avif';
import ResHero from './resHero.avif';
import In1 from './interioimage/in1.avif';
import In2 from './interioimage/in2.avif';
import In3 from './interioimage/in3.avif';
import In4 from './interioimage/in4.avif';
import In5 from './interioimage/in5.avif';
import In6 from './interioimage/in6.avif';
import In7 from './interioimage/in7.avif';
import In8 from './interioimage/in8.avif';
import In9 from './interioimage/in9.avif';
import In10 from './interioimage/in10.avif';
import Am1 from './interioimage/am1.avif';
import Am2 from './interioimage/am2.avif';
import Am3 from './interioimage/am3.avif';
import Am4 from './interioimage/am4.avif';
import Am5 from './interioimage/am5.avif';
import Autoplay from 'embla-carousel-autoplay';
import SliderData from './SliderData';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function Page() {
  const HeroImages = [
    {
      id: 0,
      src: Hero0,
      alt: 'SR Business Hub 0',
    },

    {
      id: 1,
      src: Hero1,
      alt: 'SR Business Hub 1',
    },
    {
      id: 2,
      src: Hero2,
      alt: 'SR Business Hub 2',
    },
    {
      id: 3,
      src: Hero3,
      alt: 'SR Business Hub 3',
    },
  ];

  const MHeroImages = [
    {
      id: 0,
      src: MHero0,
      alt: 'SR Business Hub 0',
    },

    {
      id: 1,
      src: MHero1,
      alt: 'SR Business Hub 1',
    },
    {
      id: 2,
      src: MHero2,
      alt: 'SR Business Hub 2',
    },
    {
      id: 3,
      src: MHero3,
      alt: 'SR Business Hub 3',
    },
  ];

  const ShowroomSpace = [
    {
      id: 1,
      src: In2,
      alt: 'SR Business Hub Showroom Space 1',
    },
    {
      id: 2,
      src: In3,
      alt: 'SR Business Hub Showroom Space 2',
    },
    {
      id: 3,
      src: In4,
      alt: 'SR Business Hub Showroom Space 3',
    },
  ];

  const OfficeSpace = [
    {
      id: 1,
      src: In1,
      alt: 'SR Business Hub Office Space',
    },
    {
      id: 2,
      src: In5,
      alt: 'SR Business Hub Office Space',
    },
    {
      id: 3,
      src: In6,
      alt: 'SR Business Hub Office Space',
    },
    {
      id: 4,
      src: In7,
      alt: 'SR Business Hub Office Space',
    },
    {
      id: 5,
      src: In8,
      alt: 'SR Business Hub Office Space',
    },
    {
      id: 6,
      src: In9,
      alt: 'SR Business Hub Office Space',
    },
    {
      id: 7,
      src: In10,
      alt: 'SR Business Hub Office Space',
    },
  ];

  const ConnectivityData = [
    {
      name: 'Jupiter Hospital',
      distance: 'Opposite the property',
      icon: 'solar:hospital-outline',
    },
    {
      name: 'Balewadi High Street',
      distance: '5 min drive',
      icon: 'material-symbols:local-mall-outline',
    },
    {
      name: 'Pune-Mumbai Expressway',
      distance: '10 min drive',
      icon: 'mingcute:road-line',
    },
    {
      name: 'Cummins India',
      distance: '15 min drive',
      icon: 'ep:office-building',
    },
    {
      name: 'Baner Road Restaurants & Cafes',
      distance: 'Within walking distance',
      icon: 'carbon:cafe',
    },
  ];

  const AmenitiesData = [
    {
      name: 'Dedicated Parking',
      icon: 'mdi:car-outline',
    },
    {
      name: 'Fully equipped gym',
      icon: 'fluent-mdl2:weights',
    },
    {
      name: 'Amphitheater',
      icon: 'mdi-light:music',
    },
    {
      name: 'Dedicated temple',
      icon: 'ph:mosque-light',
    },
    {
      name: 'Shrub Gardens',
      icon: 'ph:plant',
    },
    {
      name: 'Gazebos',
      icon: 'devicon-plain:gazebo',
    },
    {
      name: 'Clubhouse',
      icon: 'ic:outline-other-houses',
    },
    {
      name: 'Party deck',
      icon: 'bx:party',
    },
    {
      name: 'Children’s play area',
      icon: 'mdi:slide',
    },
  ];

  const AmiData = [
    {
      id: 1,
      src: Am1,
      alt: 'Vastu is compliant to promote positive energy and harmony.',
    },
    {
      id: 2,
      src: Am2,
      alt: 'Full bodied vitrified luxurious flooring.',
    },
    {
      id: 3,
      src: Am3,
      alt: 'Dedicated Parking Spaces for tenants and visitors.',
    },
    {
      id: 4,
      src: Am4,
      alt: 'Eco-friendly building design for long-term savings.',
    },
    {
      id: 5,
      src: Am5,
      alt: '3 Mitsubishi Elevators Per Floor for efficient movement across the property',
    },
  ];

  const [FloorPlanOpen, setFloorPlanOpen] = useState(false);
  const [EnquireOpen, setEnquireOpen] = useState(false);

  return (
    <>
      <BrochureForm
        FloorPlanOpen={FloorPlanOpen}
        setFloorPlanOpen={setFloorPlanOpen}
        floorPlanLink='https://www.google.com'
        Title='SR Business Hub'
      />
      <EnquireForm
        enquireOpen={EnquireOpen}
        setEnquireOpen={setEnquireOpen}
        Title='SR Business Hub'
      />
      <main className=' m-auto  bg-white '>
        <section className='relative m-auto mt-[110px]  w-full max-w-screen-2xl items-center  md:flex '>
          <div className=' relative hidden  aspect-video w-full md:block  '>
            <Slider GalleryData={HeroImages} ArrowType='none' />
          </div>

          <div className=' relative block  aspect-video w-full md:hidden  '>
            <Slider GalleryData={MHeroImages} ArrowType='none' />
          </div>

          <div className=' z-10 flex flex-col gap-3 from-black  to-black/0 p-3 md:absolute md:bg-gradient-to-r md:py-10 md:pl-12 md:pr-10 '>
            <h1 className=' text-5xl text-yellow-200 md:text-7xl'>
              <span className=' md:text-white'>SR</span> Business Hub
            </h1>
            <h2 className=' text-xl font-bold md:text-3xl md:text-white'>
              Starting at 1.5 Cr | New Launch
              <br className=' max-md:hidden' /> Showrooms and Office Spaces
            </h2>
            <span className=' md:text-gray-200'>
              <b>Located at: </b>
              <br />
              Opp. Jupiter Hospital, Old Baner Balewadi Road,
              <br className=' max-md:hidden' /> Baner, Pune, Maharashtra -
              411045
            </span>
            <div className=' flex w-full gap-2'>
              {/* <GlobalButton
                color='white'
                className=' mt-4 w-fit whitespace-nowrap rounded-full px-6  py-2 text-base font-medium  md:h-fit '
                onClick={
                  () => setFloorPlanOpen(true)
                  // console.log('Download Brochure')
                }
              >
                Download Brochure
              </GlobalButton> */}
              <GlobalButton
                color='white'
                className=' mt-4 w-fit whitespace-nowrap rounded-full px-6  py-2 text-base font-medium  md:h-fit '
                onClick={() => setEnquireOpen(true)}
              >
                Enquire Now
              </GlobalButton>
            </div>
          </div>
        </section>
        <section className='  mt-10 bg-white p-3 py-10'>
          <div className='relative m-auto flex h-fit w-full max-w-screen-2xl gap-10'>
            <div className='  w-full '>
              <h3 className='  text-3xl font-semibold text-blue-200'>
                Elevate Your Business at SR Business Hub
              </h3>
              <p className=' mt-2'>
                Introducing SR Business Hub, an exclusive commercial destination
                by RR Landmarks. Strategically positioned in the bustling heart of
                Baner, SR Business Hub is designed to cater to modern businesses
                and medical professionals. With a prime location,
                Vastu-compliant architecture, and state-of-the-art facilities,
                this development promises an exceptional workspace experience.
                Located near Jupiter Hospital and surrounded by thriving
                businesses, it is the perfect address for growth and success.
              </p>
              <div className=' relative mt-10 aspect-video w-full overflow-hidden'>
                {/* <Slider GalleryData={ShowroomSpace} /> */}
                <div className=' mt-5 relative aspect-video h-full overflow-hidden'>
                  <video
                    src='/Business_hub_compressed_720p.mp4'
                    className='size-full object-cover contrast-[1.2]'
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload='auto'
                    poster='/images/businesshub.avif'
                  ></video>
                </div>
              </div>
            </div>
            <div className=' sticky top-[120px]  z-10 w-1/3 max-lg:hidden'>
              <EnquireFormStatic Title='SR Business Hub' />
            </div>
          </div>
        </section>
        <section className=' m-auto mt-6 w-full max-w-screen-2xl p-3'>
          <h3 className='  mt-10 text-3xl font-semibold text-blue-200 underline'>
            Connectivity
          </h3>
          <div className=' mt-6 grid grid-cols-2  gap-4 md:grid-cols-3 lg:grid-cols-5'>
            {ConnectivityData.map((item, index) => (
              <div
                key={index}
                className=' group flex w-full flex-col justify-between gap-4 rounded-lg  bg-[#F9F9F9]  p-4 transition-all duration-300 ease-in-out hover:bg-yellow-200 hover:text-blue-200'
              >
                <div>
                  <Icon
                    icon={item.icon}
                    className=' text-4xl text-yellow-200 group-hover:text-blue-200'
                  />
                  <h4 className=' text-lg font-semibold '>{item.name}</h4>
                </div>
                <span className=' text-black-400'>{item.distance}</span>
              </div>
            ))}
          </div>
        </section>

        <section className=' m-auto mt-20 flex w-full max-w-screen-2xl flex-col items-stretch gap-4 p-3 md:flex-row  md:gap-24'>
          <div className=' flex w-full flex-col justify-between'>
            <div className=' flex flex-col gap-12'>
              <h3 className='  mt-10 text-3xl font-semibold text-blue-200 underline'>
                Showrooms
              </h3>
              <div className=' grid  grid-cols-1 gap-3  md:grid-cols-2 '>
                <div className=' flex flex-col gap-4'>
                  <div className=' text-4xl text-yellow-200'>
                    <Icon icon='mdi:cart-outline' />
                  </div>

                  <p>
                    <b>Prime Retail Spaces</b> <br />
                    Well-designed showrooms with spacious mezzanine areas,
                    offering high visibility and footfall to boost your
                    business.
                  </p>
                </div>
                <div className=' flex flex-col gap-4'>
                  <div className=' text-4xl text-yellow-200'>
                    <Icon icon='gg:pin' />
                  </div>

                  <p>
                    <b>Strategic Location Advantage</b> <br />
                    Situated in Baner&apos;s bustling commercial district,
                    surrounded by premium businesses and residential catchments.
                  </p>
                </div>
                <div className=' flex flex-col gap-4'>
                  <div className=' text-4xl text-yellow-200'>
                    <Icon icon='iconoir:bright-star' />
                  </div>

                  <p>
                    <b>Modern Convenience Features</b> <br />
                    Dedicated parking, attached washrooms, and energy-efficient
                    designs ensure a seamless retail experience.
                  </p>
                </div>
              </div>
            </div>
            <div className=' mt-4 w-full'>
              <div className=' relative aspect-video w-full bg-black'>
                <Slider GalleryData={ShowroomSpace} />
              </div>
              <div className=' flex'>
                {/* <div
                  onClick={() => setFloorPlanOpen(true)}
                  className='flex h-12 w-full cursor-pointer items-center justify-center bg-blue-200 text-yellow-200'
                >
                  Download Brochure
                </div> */}
                <div
                  onClick={() => setEnquireOpen(true)}
                  className='flex h-12 w-full cursor-pointer items-center justify-center bg-yellow-200 text-blue-200'
                >
                  Enquire Now
                </div>
              </div>
            </div>
          </div>
          <div className=' flex w-full flex-col justify-between'>
            <div className=' flex flex-col gap-12'>
              <h3 className='  mt-10 text-3xl font-semibold text-blue-200 underline'>
                Office Spaces
              </h3>
              <div className=' grid  grid-cols-1 gap-3  md:grid-cols-2 '>
                <div className=' flex flex-col gap-4'>
                  <div className=' text-4xl text-yellow-200'>
                    <Icon icon='grommet-icons:diamond' />
                  </div>

                  <p>
                    <b>Tailored for Professionals</b> <br />
                    Spacious office spaces with modern layouts, ideal for
                    medical and business professionals looking for functionality
                    and comfort.
                  </p>
                </div>
                <div className=' flex flex-col gap-4'>
                  <div className=' text-4xl text-yellow-200'>
                    <Icon icon='material-symbols:elevator-outline-rounded' />
                  </div>

                  <p>
                    <b>Efficient Infrastructure</b> <br />
                    Each floor features 3 elevators, energy-saving systems, and
                    DG backup for uninterrupted operations.
                  </p>
                </div>

                <div className=' flex flex-col gap-4'>
                  <div className=' text-4xl text-yellow-200'>
                    <Icon icon='fluent:connected-32-regular' />
                  </div>

                  <p>
                    <b>Connected & Convenient</b> <br />
                    Located near key landmarks like Jupiter Hospital, offering
                    easy access and enhancing professional visibility.
                  </p>
                </div>
              </div>
            </div>
            <div className=' mt-4 w-full'>
              <div className=' relative aspect-video w-full bg-black'>
                <Slider GalleryData={OfficeSpace} />
              </div>
              <div className=' flex'>
                {/* <div
                  onClick={() => setFloorPlanOpen(true)}
                  className='flex h-12 w-full cursor-pointer items-center justify-center bg-blue-200 text-yellow-200'
                >
                  Download Brochure
                </div> */}
                <div
                  onClick={() => setEnquireOpen(true)}
                  className='flex h-12 w-full cursor-pointer items-center justify-center bg-yellow-200 text-blue-200'
                >
                  Enquire Now
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=' m-auto  mt-20 w-full max-w-screen-2xl  p-3'>
          <h3 className='  mt-10 text-3xl font-semibold text-blue-200 underline'>
            Amenities
          </h3>
          <p className=' mt-4'>
            SR Business Hub provides a wide range of amenities to enhance your
            business operations:
          </p>
          {/* <div className=' mt-10 flex flex-wrap gap-10'>
            {AmenitiesData.map((item, index) => (
              <div className=' flex items-center gap-1 ' key={index}>
                <Icon icon={item.icon} className=' text-xl text-blue-200' />
                <span>{item.name}</span>
              </div>
            ))}
          </div> */}
        </section>

        <section className=' relative m-auto my-10 aspect-video w-full max-w-screen-2xl md:aspect-[1443/442]'>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {AmiData.map((item, index) => (
                <CarouselItem
                  key={index}
                  className=' flex basis-1/2 flex-col items-center md:basis-1/4 '
                >
                  <div className=' relative aspect-square w-full'>
                    <Image
                      className=' aspect-square object-cover object-center'
                      src={item.src}
                      alt={item.alt}
                    />
                  </div>
                  <span className=' w-full text-center text-xl font-medium'>
                    {item.alt}
                  </span>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>

        <section className=' m-auto mt-10 aspect-video w-full max-w-screen-2xl'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7564.446852301377!2d73.78031525235633!3d18.563963226773968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2a63354711%3A0x8265acef382eb46a!2sSR%20Business%20Hub!5e0!3m2!1sen!2sin!4v1737617643677!5m2!1sen!2sin'
            allowfullscreen=''
            className=' size-full'
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </section>
      </main>
    </>
  );
}
