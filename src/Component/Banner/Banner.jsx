import img from "../../assets/img/Image1.png";
const Banner = () => {
  return (
    <div>
      <div className="bg-orange-400 flex gap-2 p-10 items-center my-20 rounded-2xl">
        <div className="flex-1">
          <p className="text-5xl text-gray-100 ml-10 font-semibold">
            Deliver Food To Your <br /> Door Step|
          </p>
          <p className="text-slate-300 ml-10 mt-6 ">
            Authentic Food, Quick Service, Fast Delivery
          </p>
        </div>
        <div className="flex-1">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
