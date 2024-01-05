import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
const Recommended = () => {
  const [recommended, setRecommended] = useState();

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.Items);
        const recommended = data.Items;
        const popularItems = recommended.filter(
          (item) => item.IsRecommended === true
        );
        setRecommended(popularItems);
      });
  }, []);
  return (
    <div className="mb-40 p-5">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">Recommended</h1>
        <div className="flex justify-center items-center">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn  bg-white shadow-none border-none text-orange-500"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            AddMore
          </button>
          <dialog
            id="my_modal_4"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Add Item</h3>
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
          {/* slider arrow */}
          <div className="flex justify-center items-center text-md">
            <span className="text-gray-400">
              {" "}
              <FaAngleLeft />{" "}
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
          {recommended?.map((item) => (
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

export default Recommended;
