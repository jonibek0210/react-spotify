
const PlaylistRec = ({item}) => {
   return (
      <div className="flex rounded-md overflow-hidden bg-[#ffffff20] w-full cursor-pointer">
         <img src={item.images[0].url} className="w-[82px]" alt="" />
         <div className="px-[21px] py-{28px} flex items-center justify-center ">
            <p className="font-bold text-xl text-white truncate">{item.name}</p>
         </div>
      </div>
   );
}

export default PlaylistRec;