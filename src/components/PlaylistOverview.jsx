const PlaylistOverview = ({ name, images }) => {

   return (
      <div className='max-md:mt-5 max-sm:mt-3 max-sm:flex-col max-sm:items-center max-sm:justify-center flex items-end mt-7'>
         <img className='max-2xl:w-[235px] max-md:w-[190px] max-md:mr-4 max-sm:w-full max-sm:max-w-md max-sm:mr-0 max-w-[300px] mr-8' src={images} alt="Playlist" />
         <div className='text-white w-full max-sm:mt-5'>
            <p className='text-xl font-medium max-sm:hidden'>PUBLIC PLAYLIST</p>
            <h1 className='max-2xl:text-[100px] max-2xl:leading-[132px] text-[122px] max-md:text-[80px] max-md:leading-[112px] max-sm:text-3xl max-sm:font-semibold max-sm:leading-10 leading-[154px] tracking-tighter font-bold'>{name}</h1>
            <p className='max-sm:pt-1 text-white text-xl my-3 cursor-pointer truncate'>Khalid, Ollane, twenty on. . . </p>
            <div className='flex gap-2 text-lg'>
               <p className='text-[#a4a4a4] hidden md:block'>Made for
                  <span className='text-white font-medium'> davedirect3</span>
               </p>
               •
               <span className='text-[#a4a4a4]'>34 songs, 2hr 01 min</span>
            </div>
         </div>
      </div>
   );
}

export default PlaylistOverview;