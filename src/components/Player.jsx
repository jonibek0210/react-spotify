import { FiHeart } from "react-icons/fi";
import { IoIosApps } from "react-icons/io";
import { BiBluetooth } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

import playlist from '../resources/playlist2.png'
// import { useState } from "react";

const Player = () => {
   // const [play, setPlay] = useState(false)
   // const [transform, setTransform] = useState(true)

   return (
      <footer className="max-lg:bottom-24 max-sm:rounded-lg flex justify-between items-center px-5 py-6 gap-10 fixed left-0 bottom-0 w-full h-[112px] bg-[#000000] text-white z-50">

         <div className="flex justify-between max-lg:flex-col w-[70%] max-lg:w-full">
            <div className="flex items-center max-lg:justify-between max-sm:w-full">
               <div className="flex gap-3">
                  <div className="">
                     <img className="w-14 h-14" src={playlist} alt="" />
                  </div>

                  <marquee className="">
                     <div className="max-lg:flex">
                        <p className="text-[18px] font-medium"> Miyagi & Эндшпиль</p>
                        <p className="text-[#B3B3B3] font-medium">When i Win</p>
                     </div>
                  </marquee>
               </div>
               <button className="ml-9"><FiHeart size="21.5px" /></button>
            </div>

            <div className="flex flex-col justify-between items-center max-w-xl max-lg:max-w-none w-full">
               <div className="max-lg:hidden flex justify-between items-center max-w-[200px] w-full">
                  <button><FiHeart size="17.5px" color="#ffffff" /></button>
                  <button><HiArrowRight size="21px" className="rotate-180" color="#ffffff" /></button>
                  <button><FaPlay size="25px" color="#ffffff" /></button>
                  <button><HiArrowRight size="21px" className="-rotate180" color="#ffffff" /></button>
                  <button><FiHeart size="17.5px" color="#ffffff" /></button>
               </div>
               <div className="">
                  <audio className="max-w-full w-[575px]" src="../music/baby-mama.m4a" controls></audio>
               </div>
            </div>
         </div>

         <div className="max-lg:hidden flex items-center gap-5">
            <button><IoIosApps size="19px" /></button>
            <button><BiBluetooth size="19px" /></button>
            <button><BiBluetooth size="19px" /></button>
            <button><BiBluetooth size="19px" /></button>
            <button><BiBluetooth size="19px" /></button>
         </div>
      </footer>
   );
}

export default Player;