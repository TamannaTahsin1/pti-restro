import img from "../assets/img/Image2.png";

const Footer = () => {
  return (
    <div>
      <div className="bg-orange-400 flex justify-between gap-2 p-10 items-center mt-20">
        <div className="flex-1">
          <div className="form-control">
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered w-96"
            />
          </div>
          <p className="text-5xl text-gray-100 ml-10 font-semibold">
            Deliver Food To Your <br /> Door Step|
          </p>
          <p className="text-gray-100 ml-10 mt-6">
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

export default Footer;
