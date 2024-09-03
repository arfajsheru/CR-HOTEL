import React from 'react';
import banner1 from "../assets/banner1.jpeg";
import banner2 from "../assets/banner2.jpeg";
import banner3 from "../assets/banner3.jpeg";
import { IoStarHalfOutline } from "react-icons/io5";

// Importing Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper styles import karein
import 'swiper/css/navigation'; // Navigation buttons ke styles
import 'swiper/css/pagination'; // Pagination dots ke styles
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Swiper modules import

const Banner = () => {
  const bannerList = [
    {
      _id: "1",
      title: "Savor the Flavors of Perfection",
      title2: "Order Your Favorite Food here",
      dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsum, doloribus fugiat recusandae amet incidunt similique eum velit nesciunt temporibus enim nam mollitia odio ab, corrupti rem perferendis molestias praesentium?",
      imgUrl: banner1,
      offer: "20% Off on Your First Order!",
      rating: 6.5,
      buttonText: "Order Now",
    },
    {
      _id: "2",
      title: "A Feast for Your Senses",
      title2: "Order Your Favorite Food here",
      dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsum, doloribus fugiat recusandae amet incidunt similique eum velit nesciunt temporibus enim nam mollitia odio ab, corrupti rem perferendis molestias praesentium?",
      imgUrl: banner2,
      offer: "20% Off on Your First Order!",
      rating: 4.5,
      buttonText: "Order Now",
    },
    {
      _id: "3",
      title: "Where Every Bite Tells a Story",
      title2: "Order Your Favorite Food here",
      dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsum, doloribus fugiat recusandae amet incidunt similique eum velit nesciunt temporibus enim nam mollitia odio ab, corrupti rem perferendis molestias praesentium?",
      imgUrl: banner3,
      offer: "20% Off on Your First Order!",
      rating: 3.5,
      buttonText: "Order Now",
    },
  ];

  return (
    <div className="relative w-full h-full md:h-[88vh] rounded-md  overflow-hidden">
      <Swiper
        // modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        // pagination={{ clickable: true }}
        // autoplay={{ delay: 3000 }} // Auto-slide delay time
        // loop={true} // Infinite loop slider
        // spaceBetween={30} // Space between slides
      >
        {bannerList.map((banner) => (
          <SwiperSlide key={banner._id}>
            <div className='relative w-full h-full '>
              <img
                src={banner.imgUrl}
                alt=""
                className='object-cover brightness-50  w-full h-full md:h-[88vh] rounded-md'
              />
              <div className='w-[75%] absolute top-[35%] left-4  text-white'>
                  <p className='text-xl font-bold'>{banner.title}</p>
                  <p className=''>{banner.title2}</p>
                  <p className='hidden '>{banner.dec}</p>
                  <div className='flex items-center gap-3'>
                    <p className='flex items-center gap-1 '>{banner.rating}<IoStarHalfOutline/> </p>
                    <p className=''>{banner.offer}</p>
                  </div>
                  <button className=''>{banner.buttonText}</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
