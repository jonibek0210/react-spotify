import { AiOutlineHeart } from 'react-icons/ai';
import playlist from '../../resources/playlist2.png'

const Song = () => {
   return (
      <tr className="flex gap-5 text-white font-bold items-center">
         <td className="flex-0">1</td>
         <td className="flex-0"><img className='w-[52px] h-[52px]' src={playlist} alt="" /></td>
         <td className="flex-auto flex flex-col"><span>Play It Safe</span><span className='text-[#B3B3B3] text-[14px]'>Julia Wolf</span></td>
         <td className="flex-auto">Play It Safe</td>
         <td className="flex-auto"></td>
         <td className="flex-0"><AiOutlineHeart size='22px' /></td>
         <td className="flex-0">2 : 12</td>
      </tr>
   );
}

export default Song;