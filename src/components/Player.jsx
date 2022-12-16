import { FiHeart } from "react-icons/fi";
import { IoIosApps } from "react-icons/io";
import { BiBluetooth } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
// import { useState } from "react";

const Player = () => {
   // const [play, setPlay] = useState(false)
   // const [transform, setTransform] = useState(true)

   return (
      <footer className="flex justify-between items-center px-5 py-6 gap-10 fixed left-0 bottom-0 w-full h-[112px] bg-[#191c21] text-white z-50">
         <button className="pb-5 pt-2.5 px-5 bg-[#191c21] absolute right-20 bottom-[90px] rounded-xl"><HiArrowRight className="rotate-90" size="20px" color="#ffffff" /></button>
         <div className="flex items-center">
            <div className="">
               <p className="text-[18px] font-medium">Miyagi & Эндшпиль</p>
               <p className="text-[#B3B3B3] font-medium">When i Win</p>
            </div>
            <button className="ml-9"><FiHeart size="21.5px" /></button>
         </div>

         <div className="flex flex-col justify-between items-center max-w-xl w-full">
            <div className="flex justify-between items-center max-w-[200px] w-full">
               <button><FiHeart size="17.5px" color="#ffffff" /></button>
               <button><HiArrowRight size="21px" className="rotate-180" color="#ffffff" /></button>
               <button><FaPlay size="25px" color="#ffffff" /></button>
               <button><HiArrowRight size="21px" className="-rotate180" color="#ffffff" /></button>
               <button><FiHeart size="17.5px" color="#ffffff" /></button>
            </div>
            <div className="">
               <audio className="max-w-full w-[575px] " src="../music/baby-mama.m4a" controls></audio>
            </div>
         </div>

         <div className="flex items-center gap-5">
            <button><IoIosApps size="19px" /></button>
            <button><BiBluetooth size="19px" /></button>
         </div>
      </footer>
   );
}

export default Player;