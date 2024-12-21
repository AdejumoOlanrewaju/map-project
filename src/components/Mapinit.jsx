import { useEffect } from "react";

const Mapinit = () => {
    useEffect(() => {

    }, [])

  return (
    <>
      <div
        id="map"
        ref={mapContainer}
        style={{ height: "calc(100vh - 70px)", width: "100%" }}
      ></div>
    </>
  );
};

export default Mapinit;
