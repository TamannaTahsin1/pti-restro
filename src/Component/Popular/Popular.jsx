import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useForm } from "react-hook-form";

const Popular = () => {
  // ! form
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }
  // ! data fetching
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
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            AddMore
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg text-center">Add More Items</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register('Name', { required: true })}
                  name="Name"
                  placeholder="food name"
                  className="input input-bordered"
                
                />
                {errors.Name && <span className="text-red-500 mt-2">Name is required!</span>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  {...register('Image', { required: true })}
                  name="image"
                  placeholder="image url"
                  className="input input-bordered"
                
                />
                 {errors.Image && <span className="text-red-500 mt-2">Image is required!</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  {...register('Price', { required: true })}
                  name="Price"
                  placeholder="$0.00"
                  className="input input-bordered"
             
                />
                 {errors.Price && <span className="text-red-500 mt-2">Price is required!</span>}
              </div>
              <div className="form-control w-full my-2">
                                        <label className="label">
                                            <span className="label-text">Category</span>
                                        </label>
                                        <select defaultValue="default" {...register('Category', { required: true })}
                                            className="select select-bordered w-full">                                         
                                            <option disabled value="default">Select</option>
                                            <option value="IsPopular">IsPopular</option>
                                            <option value="IsRecommended">IsRecommended</option>
                                        </select>
                                    </div>
              <div className="form-control mt-6">
                <button className="btn bg-orange-400 text-white">Add Item</button>
              </div>
            </form>
            </div>
          </dialog>
          {/* slider arrow */}
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
