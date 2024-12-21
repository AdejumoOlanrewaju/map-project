import Navbar from "./components/Navbar.jsx";
import MapEl from "./components/MapEl.jsx";
import Sectors from "./components/Sectors.jsx"
function App(){
  return (
    <>
      <Navbar />
      <Sectors />
      <MapEl />
      <div className="standing-wrapper container flex-between my-4">
        <button className="public-cta fs-20 fw-500">Public Standing T & D Standing</button>
        <button className="private-cta fs-20 fw-500">Private Standing T & D Standing</button>
      </div>
      
    </>
  );
}

export default App