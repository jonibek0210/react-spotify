import { Route, Routes, } from 'react-router-dom'
import { lazy, Suspense } from 'react';

import Layout from './Layout/Layout';
const HomePage = lazy(() => import('./Pages/HomePage'))
const SearchPage = lazy(() => import('./Pages/SearchPage'))
const LibraryPage = lazy(() => import('./Pages/LibraryPage'))
const PlaylistPage = lazy(() => import('./Pages/PlaylistPage'))
const CreatePlaylistPage = lazy(() => import('./Pages/CreatePlaylistPage'))

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='liked-songs' element={<PlaylistPage />} />
          <Route path='playlist/:id' element={<PlaylistPage />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='collection-playlists' element={<LibraryPage />} />
          <Route path='create-playlist' element={<CreatePlaylistPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;