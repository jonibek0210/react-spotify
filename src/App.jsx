import { Route, Routes, } from 'react-router-dom'

import Layout from './Layout/Layout';
import HomePage from "./Pages/HomePage";
import PlaylistPage from "./Pages/PlaylistPage";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/playlist' element={<PlaylistPage />} />
      </Route>
    </Routes>
  );
}

export default App;