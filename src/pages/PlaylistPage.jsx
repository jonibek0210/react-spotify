import { useLocation } from "react-router-dom";
import PlaylistOverview from "../components/PlaylistOverview";
import SongsList from "../components/SongsList";

const PlaylistPage = ({ item, images }) => {
   const { state } = useLocation()

   return (
      <div>
         <PlaylistOverview name={state.name} images={state.images[0].url} />
         <SongsList href={state} />
      </div>
   );
}

export default PlaylistPage;