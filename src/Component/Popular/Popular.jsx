import { useEffect, useState } from "react";
import PopularDetails from "./PopularDetails";
import { FaAngleLeft, FaAngleRight  } from "react-icons/fa6";

const Popular = () => {
    const [popular, setPopular] = useState([])
     
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => {
            console.log(data.Items);
            setPopular(data.Items)
        })
    },[])
    return (
        <div>
            <div className="flex justify-between">
            <h1 className="text-xl font-semibold">Popular</h1>
            <div  className="flex justify-center items-center">
            <h1 className="btn bg-white shadow-none border-none text-orange-500">AddMore</h1>
            <div className="flex justify-center items-center text-md">
           <span className="text-gray-400"> <FaAngleLeft /> </span><FaAngleRight  className="text-gray-600"/>
            </div>
            </div>
            </div>
            <div>
                {
                    popular?.map(item =><PopularDetails key={item.Id} item={item}></PopularDetails>)
                }
            </div>
        </div>
    );
};

export default Popular;