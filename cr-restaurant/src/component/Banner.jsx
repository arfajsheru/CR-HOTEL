import React from "react";
import banner1 from "../assets/banner1.jpeg";
import banner2 from "../assets/banner2.jpeg";
import banner3 from "../assets/banner3.jpeg";
import { IoStarHalfOutline } from "react-icons/io5";

// Importing Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper styles import karein
import "swiper/css/navigation"; // Navigation buttons ke styles
import "swiper/css/pagination"; // Pagination dots ke styles
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Swiper modules import

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

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <div className="relative w-full  h-full md:h-[88vh] overflow-hidden rounded-md onscroll animate-fadeInUp">
      <Swiper
       modules={[Navigation, Pagination, Autoplay]}
       navigation
       slidesPerView={1}
       pagination={pagination}
       autoplay={{ delay: 5000 }} // Increase delay to slow down autoplay
       loop={true} // Infinite loop slider
       spaceBetween={30} // Space between slides
       speed={1500} // Set speed to slow down transition
       className="mySwiper"
      >
        {bannerList.map((banner) => (
        
          <SwiperSlide key={banner._id}>
            <div className="relative w-full h-[60vh] md:h-full ">
              <img
                src={banner.imgUrl}
                alt=""
                className="object-cover brightness-50  w-full h-full md:h-[88vh] banner-img"
              />
              {/* Text content */}
              <div className="text-content flex flex-col  gap-3 w-[75%] md:w-[40%] absolute top-1/2 left-12 sm:left-24  lg:top-2/4 transform -translate-y-1/2  text-white">
                <div className="flex flex-col gap-2 sm:gap-4">
                  <p className="text-3xl sm:text-4xl font-bold style2-font">
                    {banner.title}
                  </p>
                  <p className="text-1xl font-thin sm:text-4xl">{banner.title2}</p>
                  <p className="hidden md:block text-1xl leading-5 style-font">{banner.dec}</p>
                </div>

                <div className="flex items-center gap-3">
                  <p className="flex items-center gap-1 ">
                    {banner.rating}
                    <IoStarHalfOutline />{" "}
                  </p>
                  <p className="">{banner.offer}</p>
                </div>
                <div>
                <button className="bg-custom text-white py-2 sm:py-3 px-4 sm:px-10 rounded-sm shadow-md hover:bg-white border-2 hover:border-custom hover:text-black outline-none transition duration-300">{banner.buttonText}</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
