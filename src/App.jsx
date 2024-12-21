import Navbar from "./components/Navbar.jsx";
import MapEl from "./components/MapEl.jsx";
import Sectors from "./components/Sectors.jsx";
import StandingCta from "./components/StandingCta.jsx";
import TableAnaly from "./components/TableAnaly.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Sectors />
      <MapEl />
      <section className="table wrapper">
        <StandingCta />
        <TableAnaly />
      </section>
    </>
  );
}

export default App;
