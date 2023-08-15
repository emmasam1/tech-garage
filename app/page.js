"use client";

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { AiFillHtml5 } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

const page = () => {
  const items = [
    {
      id: 1,
      title: "Test tiltle",
      icon: "Test icon",
    },
    {
      id: 2,
      title: "Test tiltle",
      icon: "Test icon",
    },
    {
      id: 3,
      title: "Test tiltle",
      icon: "Test icon",
    },
    {
      id: 4,
      title: "Test tiltle",
      icon: "Test icon",
    },
  ];

  const categories = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
  ];

  const slider = [
    {
      id: 1,
      image: "/htmlcss.png",
    },
    {
      id: 2,
      image: "/react.png",
    },
    {
      id: 3,
      image: "/node.png",
    },
    {
      id: 4,
      image: "/nextjs.png",
    },
    {
      id: 5,
      image: "/cprogram.png",
    },
    {
      id: 6,
      image: "/python.png",
    },
  ];

  return (
    <div className="container mx-auto my-20 px-4 ch-auto">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 custom_height">
        <div className="flex justify-center flex-col">
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold">
            Unlock Your Future Potential with Strategic Investments in Knowledge
          </h1>
          <p className="tracking-tight sm:tracking-normal md:tracking-wide lg:tracking-normal xl:tracking-tight mt-6">
            Navigate your journey to success by making informed choices today.
          </p>
          <button className="w-max bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2">
            Unlock Now
          </button>
        </div>
        <div className="bg_img"> </div>
      </div>

      <div className="grid grid-rows-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5">
        {items.map((item) => {
          return (
            <motion.div
              whileHover={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200, damping: 5 }}
            >
              <Card className="py-4" key={item.id}>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Daily Mix</p>
                  <small className="text-default-500">12 Tracks</small>
                  <h4 className="font-bold text-large">Frontend Radio</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="/images/hero-card-complete.jpeg"
                    width={270}
                  />
                </CardBody>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <h1 className="text-2xl font-bold">Categories</h1>

      <div className="grid grid-rows-2 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5">
        {categories.map((category) => {
          return (
            <Card className="py-4 cursor-pointer" key={category.id}>
              <div className="grid justify-items-stretch">
                <div className="rounded-full justify-self-center bg-white w-20 h-20 flex justify-center items-center">
                  <AiFillHtml5 size={60} color="black" />
                </div>
              </div>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                <h4 className="font-bold text-large">HTML5</h4>
                <small className="text-default-500">2,800+ Courses</small>
              </CardHeader>
            </Card>
          );
        })}
      </div>

      {/* Slider */}
      <h1 className="text-2xl font-bold">Trending</h1>

      <div className="p-5">
        <Swiper
          slidesPerView={3}
          spaceBetween={25}
          freeMode={true}
          autoplay={{ delay: 3000 }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
        >
          {slider.map((e) => {
            return (
              <SwiperSlide key={e.id} className="custom_width">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <Link href="#">
                    <Image
                      className="rounded-t-lg w-full"
                      src={e.image}
                      alt=""
                    />
                  </Link>
                  <div className="p-5">
                    <Link href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                      </h5>
                    </Link>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default page;
