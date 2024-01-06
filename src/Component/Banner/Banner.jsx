import img from "../../assets/img/Image1.png";
const Banner = () => {
  return (
    <div>
      <div className=" lg:bg-orange-400  lg:flex justify-center gap-2 p-6 lg:p-0 items-center lg:my-20 rounded-2xl">
        <div className="flex-1 ml-12">
          <p className="text-2xl lg:text-5xl text-black lg:text-white font-bold lg:font-semibold">
            Deliver Food To Your <br /> Door Step|
          </p>
          <p className="text-slate-300 mt-6 text-sm lg:text-xl">
            Authentic Food, Quick Service, Fast Delivery
          </p>
        </div>
        <div className="flex-1 h-44 lg:h-full bg-orange-300 lg:bg-transparent rounded-3xl mt-20 mb-10 px-5">
          <img src={img} className='relative -top-14 lg:-top-0' alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

// flex-col-reverse lg:flex-row