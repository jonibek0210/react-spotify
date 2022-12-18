import { useEffect, useState } from 'react';
import PlaylistRec from '../components/children/PlaylistRec';
import PlaylistList from '../components/PlaylistList';
import Login from '../components/Login'

const HomePage = () => {
   const [data, setData] = useState([])
   const [token, setToken] = useState("")

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

   useEffect(() => {
      setToken(window.localStorage.getItem('token'))

      if (token) {
         fetch('https://api.spotify.com/v1/me/playlists?limit=6&offset=0', {
            headers: {
               Authorization: `Bearer ${token}`
            }
         })
            .then(res => res.json())
            .then(data => setData(data.items))
      }
   }, [token]);
   console.log(data);

   if (!token) {
      return (
         <Login />
      )
   }

   const ItemComponent = () => {
      return data.map((item, idx) => <PlaylistRec key={idx} item={item} />)
   }

   return (
      <section className="">
         <div className="mt-[30px]">
            <h1 className="max-sm:text-2xl font-bold text-[39px] text-white mb-[30px]">Good afternoon</h1>
            <div className="2xl:grid-cols-3 max-sm:grid-cols-1 grid grid-cols-2 gap-4 ">
               <ItemComponent />
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