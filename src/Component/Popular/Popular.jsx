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
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn  bg-white shadow-none border-none text-orange-500"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            AddMore
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
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
          slidesPerView={3}
          spaceBetween={12}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {popular?.map((item) => (
            <SwiperSlide key={item.Id}>
              <div className="">
                <img
                  src={item.ImageUrl}
                  className="w-40 h-56 lg:w-80 lg:h-80 rounded-xl"
                  alt=""
                />
                <p className="text-center mb-3 font-semibold text-gray-400">
                  {item.Name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Popular;
