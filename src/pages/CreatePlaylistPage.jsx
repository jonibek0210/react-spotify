

const CreatePlaylistPage = () => {
   return (
      <>
         <div className='max-md:mt-5 max-sm:mt-3 max-sm:flex-col max-sm:items-center max-sm:justify-center flex items-end mt-7'>
            <input type="file" className="w-96 h-60 bg-black" />
            <div className='text-white w-full max-sm:mt-5'>
               <p className='text-xl font-medium max-sm:hidden'>PLAYLIST</p>
               <h1 className='max-2xl:text-[100px] max-2xl:leading-[132px] text-[122px] max-md:text-[80px] max-md:leading-[112px] max-sm:text-3xl max-sm:font-semibold max-sm:leading-10 leading-[154px] tracking-tighter font-bold'>my playlist</h1>
               <p className='text-[#a4a4a4] mt-5'>jony</p>
            </div>
         </div>
         <div className="mt-8">
            <div className="flex justify-between items-center border-b border-gray-700 pb-10">
               <p className="text-white text-[40px] font-bold">...</p>
            </div>
            <div className="mt-7">
               <div className="flex justify-between items-center">
                  <h2 className="text-white text-2xl">давай добавим чот-нибудь в твой плейлист</h2>
                  <p>close</p>
               </div>
               <div className="">
                  <input type="text" />
               </div>
            </div>
         </div>
      </>
   );
}

export default CreatePlaylistPage;