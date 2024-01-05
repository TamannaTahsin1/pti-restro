import { FaAngleLeft, FaAngleRight  } from "react-icons/fa6";
const Recommended = () => {
    return (
        <div className="mb-20 p-5">
              <div className="flex justify-between">
            <h1 className="text-xl font-semibold">Recommended</h1>
            <div  className="flex justify-center items-center">
            <h1 className="btn bg-white shadow-none border-none text-orange-500">AddMore</h1>
            <div className="flex justify-center items-center text-md">
           <span className="text-gray-400"> <FaAngleLeft /> </span><FaAngleRight  className="text-gray-600"/>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Recommended;