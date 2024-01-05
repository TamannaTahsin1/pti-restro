import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Popular = () => {
  const [popular, setPopular] = useState();

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.Items);
        const popular = data.Items;
        const popularItems = popular.filter((item) => item.IsPopular === true);
        setPopular(popularItems);
      });
  }, []);
  return (
    <div className="mt-30 p-5">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">Popular</h1>
        <div className="flex justify-center items-center">
          <h1 className="btn bg-white shadow-none border-none text-orange-500">
            AddMore
          </h1>
          <div className="flex justify-center items-center text-md">
            <span className="text-gray-400">
              <FaAngleLeft />
            </span>
            <FaAngleRight className="text-gray-600" />
          </div>
        </div>
      </div>
      <div className="flex">
        <Swiper
          slidesPerView={5}
          spaceBetween={12}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {popular?.map((item) => (
            <SwiperSlide key={item.Id}>
              <div className="">
                <img
                  src={item.ImageUrl}
                  className="lg:w-80 h-80 rounded-xl"
                  alt=""
                />
                <p className="text-center mb-3 font-semibold text-gray-400">{item.Name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Popular;
