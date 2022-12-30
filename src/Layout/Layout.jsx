import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Aside from '../components/Aside'
import Header from "../components/Header";
import Drawer from "../components/Drawer";
import Player from '../components/Player';

import TOKEN from "../contexts/token";
import Login from "../components/Login";

const Layout = () => {
   const [isHide, setHide] = useState(true)
   const [token, setToken] = useState()

   useEffect(() => {
      const hash = window.location.hash
      let token = window.localStorage.getItem("token")

      if (!token && hash) {
         token = hash
            .substring(1)
            .split("&")
            .find((elem) => elem.startsWith("access_token"))
            .split("=")[1]

         window.location.href = ""
         window.localStorage.setItem("token", token)
      }

      setToken(token)
   }, [])

   if (!token) {
      return (
         <Login />
      )
   }

   return (
      <div className="flex relative max-2xl:pl-[250px] max-lg:pl-0 pl-[290px]">
         <div className="h-[510px] w-full absolute z-[-1] left-0 top-0 bg-gradient-to-b from-[#3333A3] to-[#121212]"></div>
         <Aside />
         <div className="flex-1 h-fit px-10">
            <Header />
            <main className='pb-10'>
               <TOKEN.Provider value={token}>
                  <Outlet />
               </TOKEN.Provider>
            </main>
            <Player />
         </div>
         {isHide === true ? <Drawer hide={() => setHide(!isHide)} /> : null}
      </div>
   );
}

export default Layout;