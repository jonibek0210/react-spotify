import { useLocation } from "react-router-dom";
import PlaylistOverview from "../components/PlaylistOverview";
import SongsList from "../components/SongsList";

const PlaylistPage = ({ item }) => {
   const { state } = useLocation()

   return (
      <div>
         <PlaylistOverview name={state.name} />
         <SongsList href={state} />
      </div>
   );
}

export default PlaylistPage;