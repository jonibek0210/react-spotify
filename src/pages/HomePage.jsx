import { useEffect, useState } from 'react';
import PlaylistRec from '../components/children/PlaylistRec';
import PlaylistList from '../components/PlaylistList';
import Login from '../components/Login'

const HomePage = () => {
   const [token, setToken] = useState()

   useEffect(() => {
      const hash = window.location.hash
      let token = window.localStorage.getItem("token")
      console.log();

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
      <section className="">
         <div className="mt-[30px]">
            <h1 className="font-bold text-[39px] text-white mb-[30px]">Good afternoon</h1>
            <div className="grid 2xl:grid-cols-3 grid-cols-2 gap-4 ">
               <PlaylistRec />
               <PlaylistRec />
               <PlaylistRec />
               <PlaylistRec />
               <PlaylistRec />
               <PlaylistRec />
            </div>
         </div>
         <PlaylistList />
         <PlaylistList />
         <PlaylistList />
         <PlaylistList />
         <PlaylistList />
      </section>
   );
}

export default HomePage;