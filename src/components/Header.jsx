import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import ava from '../resources/ava.svg'


const Header = () => {
   const navigate = useNavigate()

   return (
      <header className="max-lg:py-4 max-sm:py-3 text-white py-5 flex items-center justify-between">
         <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="p-[4px] bg-[#00000090] rounded-full mr-5">
               <IoIosArrowBack size='32' />
            </button>
            <button onClick={() => navigate(1)} className=" p-[4px] bg-[#00000090] rounded-full">
               <IoIosArrowForward size='32' />
            </button>
         </div>
         <div className="max-sm:hidden max-w-[190px] flex items-center bg-[#00000080] rounded-3xl p-1 cursor-pointer">
            <img src={ava} alt="ava" />
            <span className="mx-3 font-semibold">davedirect</span>
            <MdArrowDropDown size='30px' />
         </div>
      </header>
   );
}

export default Header;