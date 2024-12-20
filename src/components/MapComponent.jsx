import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import osmtogeojson from "osmtogeojson";

const MapComponent = () => {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await fetch(
          "https://overpass-api.de/api/interpreter?data=[out:json];relation(2406074);out geom;"
        );
        const osmData = await response.json();
        console.log(osmData)
        const geoJson = osmtogeojson(osmData);
            console.log("Converted GeoJSON:", geoJson);
        setGeoData(geoJson);
      } catch (error) {
        console.error("Error fetching Overpass API data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(geoData)
  if (!geoData) {
    return <p>Loading map...</p>;
  }

  return (
    <ComposableMap>
      <Geographies geography={geoData}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style={{
                default: { fill: "#D6D6DA" },
                hover: { fill: "#F53" },
                pressed: { fill: "#E42" },
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapComponent;
