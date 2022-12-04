import PlaylistRec from '../components/children/PlaylistRec';
import PlaylistList from '../components/PlaylistList';

const HomePage = () => {
   return (
      <section className="max-w-[1340px]">
         <div className="mt-[30px]">
            <h1 className="font-bold text-[39px] text-white mb-[30px]">Good afternoon</h1>
            <div className="grid grid-cols-3 gap-4">
               <PlaylistRec />
            </div>
         </div>

         <PlaylistList />
      </section>
   );
}

export default HomePage;