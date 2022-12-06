import Aside from "./components/Aside";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Drawer from "./components/Drawer";
import PlaylistPage from "./pages/PlaylistPage";

const App = () => {
  return (
      <div className="flex relative pl-[290px]">
        <div className="h-[510px] w-full absolute z-[-1] left-0 top-0 bg-gradient-to-b from-[#3333A3] to-[#121212]"></div>
        <Aside />
        <div className=" flex-1 h-fit px-10">
          <Header />
          <main>
            {/* <HomePage /> */}
          <PlaylistPage/>
          </main>
        </div>
        <Drawer/>
      </div>
  );
}

export default App;

