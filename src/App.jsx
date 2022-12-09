import Aside from "./components/Aside";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Drawer from "./components/Drawer";
import PlaylistPage from "./pages/PlaylistPage";
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import { useState } from "react";

const App = () => {
  const [isHide, setHide] = useState(true)

  return (
    <BrowserRouter>
      <div className="flex relative pl-[290px]">
        <div className="h-[510px] w-full absolute z-[-1] left-0 top-0 bg-gradient-to-b from-[#3333A3] to-[#121212]"></div>
        <Aside />
        <div className=" flex-1 h-fit px-10">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/playlist" element={<PlaylistPage />} />
            </Routes>
          </main>
        </div>
        {isHide === true ? <Drawer hide={() => setHide(!isHide)} /> : null}
      </div>
    </BrowserRouter>
  );
}

export default App;