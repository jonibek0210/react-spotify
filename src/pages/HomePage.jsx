import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PlaylistList from '../components/PlaylistList';
import axios from 'axios'

import TOKEN from "../contexts/token";

const HomePage = () => {
   const [data, setData] = useState([])
   const navigate = useNavigate()

   const token = useContext(TOKEN);

   useEffect(() => {
      if (token) {
         axios
            .get('https://api.spotify.com/v1/me/playlists?limit=6&offset=0', {
               headers: {
                  Authorization: `Bearer ${token}`
               }
            })
            .then(res => setData(res.data.items))
      }
   }, [token]);

   const goToPlaylist = (item) => {
      navigate(`playlist/${item.id}`, { state: item })
   }

   function renderItems(arr) {
      const items = arr.map((item, idx) => {
         return (
            <div onClick={() => goToPlaylist(item)} key={idx} className="flex rounded-md overflow-hidden bg-[#ffffff20] w-full cursor-pointer">
               <img src={item.images[0].url} className="w-[82px]" alt="" />
               <div className="px-[21px] py-{28px} flex items-center justify-center ">
                  <p className="font-bold text-xl text-white truncate">{item.name}</p>
               </div>
            </div>
         )
      })
      return (
         <div className="2xl:grid-cols-3 max-sm:grid-cols-1 grid grid-cols-2 gap-4 ">
            {items}
         </div>
      );
   }

   const items = renderItems(data)

   return (
      <section className="">
         <div className="mt-[30px]">
            <h1 className="max-sm:text-2xl font-bold text-[39px] text-white mb-[30px]">Good afternoon</h1>
            {items}
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