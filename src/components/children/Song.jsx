import { AiOutlineHeart } from 'react-icons/ai';

const Song = ({ track, index }) => {
   const { name, artists, album } = track

   return (
      <tr className="max-sm:gap-3 flex gap-5 text-white font-bold items-center">
         <td className="flex-0 max-sm:hiiden">{index}</td>
         <td className="flex-0"><img className='max-sm:text-[14px] max-sm:w-11 max-sm:h-11 w-[52px] h-[52px]' src={album.images[0].url} alt="" /></td>
         <td className="flex-auto flex flex-col bg-teal-900">
            <span className='max-sm:text-[14px] truncate w-full'>{name}</span>
            <span className='text-[#B3B3B3] text-[14px] max-sm:text-[12px] truncate w-full'>{artists[0].name || artists[1].name || ""}</span>
         </td>
         <td className="flex-auto max-sm:hidden bg-red-500">{album.name}</td>
         <td className="flex-0"><AiOutlineHeart size='22px' /></td>
         <td className="flex-0 max-sm:hidden">2 : 12</td>
         <td className="flex-0 text-lg font-bold hidden max-sm:block rotate-90">. . .</td>
      </tr>
   );
}

export default Song;