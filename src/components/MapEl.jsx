import React, { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    const loadLeafletAssets = () => {
      const leafletCSS = document.createElement("link");
      leafletCSS.rel = "stylesheet";
      leafletCSS.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(leafletCSS);

      const leafletJS = document.createElement("script");
      leafletJS.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      leafletJS.onload = initializeMap;
      document.body.appendChild(leafletJS);
    };

    const initializeMap = () => {
      const map = L.map("map").setView([20, 0], 2);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        subdomains: ["a", "b", "c"],
        minZoom: 2,
        maxZoom: 19,
      }).addTo(map);

      // Fetch the GeoJSON data from the public folder
      fetch("/countries.geo.json")
        .then((response) => response.json())
        .then((geoJsonData) => {
          // Define style function
          const style = (feature) => {
            const countryName = feature?.properties?.name || "Unknown";
            let color;
          
            // Check for missing country name and handle it gracefully
            if (!countryName || countryName === "Unknown") {
              console.warn("Missing country name for feature:", feature);
              color = "#808080";  // Gray for missing names
            } else {
              // Highlight Ghana and Iceland in red
              if (countryName === "Ghana" || countryName === "Iceland") {
                color = "red";
              }
              // Specific colors for Brazil, China, and India
              else if (countryName === "Brazil") {
                color = "#32CD32"; // Green for Brazil
              } else if (countryName === "China") {
                color = "#FFD700"; // Yellow for China
              } else if (countryName === "India") {
                color = "#8B4513"; // Brown for India
              }
              // Random colors for others
              else {
                const colors = ["#32CD32", "#FFD700", "#8B4513"];
                color = colors[Math.floor(Math.random() * colors.length)];
              }
            }
          
            return {
              fillColor: color,
              weight: 2,
              color: "white",
              dashArray: "3",
              fillOpacity: 0.7,
            };
          };
          

          // Highlight the region on mouseover (hover)
          const highlightFeature = (e) => {
            const layer = e.target;
            layer.setStyle({
              weight: 2,
              color: "black",
              dashArray: "0",
              opacity: 1,
              fillOpacity: 0.9,
            });
          };

          // Reset the region style on mouseout (hover end)
          const resetHighlight = (e) => {
            geoJsonLayer.resetStyle(e.target); // Reset to default style
          };

          // Create GeoJSON layer with data from the file
          const geoJsonLayer = L.geoJSON(geoJsonData, {
            style,
            onEachFeature: (feature, layer) => {
              // console.log("Feature properties:", feature.properties); // Log the feature properties
              const countryName = feature?.properties?.name || "Unknown";
              // console.log("Country name:", countryName); // Log the country name
              let popupBackground;

              // Match popup background color with the region color
              if (countryName === "Ghana" || countryName === "Iceland") {
                popupBackground = "red";
              } else if (countryName === "Brazil") {
                popupBackground = "#32CD32"; // Green for Brazil
              } else if (countryName === "China") {
                popupBackground = "#FFD700"; // Yellow for China
              } else if (countryName === "India") {
                popupBackground = "#8B4513"; // Brown for India
              } else {
                const colors = ["#32CD32", "#FFD700", "#8B4513"];
                popupBackground =
                  colors[Math.floor(Math.random() * colors.length)];
              }

              layer.bindPopup(`
                <div class="popup-content" style='background-color: ${popupBackground}'>
                    <h3>${countryName}</h3>
                </div>
            `);

            layer.on({
              click: () => {
                if (map) {
                  layer.openPopup();
                  setTimeout(() => {
                    const popup = document.querySelector(".leaflet-popup");
                    if (popup) {
                      popup.style.visibility = "visible";  // Force visibility
                      popup.style.opacity = "1";  // Ensure opacity is set
                    }
                  }, 100);  // Delay to ensure proper rendering
                }
              },
              mouseover: highlightFeature,
              mouseout: resetHighlight,
            });
            },
          }).addTo(map);

          // Optionally, log the number of layers and the geoJSON layer itself
          console.log("Number of layers:", geoJsonLayer.getLayers().length);
          console.log("GeoJSON Layer added:", geoJsonLayer);
        })
        .catch((error) => {
          console.error("Error loading GeoJSON file:", error);
        });
    };

    loadLeafletAssets();
  }, []);

  return <div id="map" style={{ height: "100vh" }}></div>;
};

export default Map;
