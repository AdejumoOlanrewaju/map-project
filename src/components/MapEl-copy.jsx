import React, { useEffect, useRef } from "react";
// import L from "leaflet";

const Mapcopy = () => {
  const mapContainer = useRef(null); // Reference to the map container
  const mapInstance = useRef(null);
  useEffect(() => {
    // Initialize the map
    // const map = L.map("map").setView([20, 0], 2);

    // Add tile layer
    // L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    //   maxZoom: 18,
    // }).addTo(map);

    // // Risk levels
    // const riskLevels = [
    //   { color: "rgb(111, 255, 0)", risk: "Green Risk" },
    //   { color: "rgba(255, 5, 5, 1)", risk: "Red Risk" },
    //   { color: "rgba(69, 37, 11, 0.96)", risk: "Brown Risk" },
    //   { color: "rgb(187, 111, 56)", risk: "Purple Risk" },
    // ];

    // const countries = [
    //   { name: "United States", lat: 37.0902, lng: -95.7129, code: "us" },
    //   { name: "Canada", lat: 56.1304, lng: -106.3468, code: "ca" },
    //   { name: "Mexico", lat: 23.6345, lng: -102.5528, code: "mx" },
    //   { name: "Brazil", lat: -14.235, lng: -51.9253, code: "br" },
    //   { name: "Argentina", lat: -38.4161, lng: -63.6167, code: "ar" },
    //   { name: "United Kingdom", lat: 55.3781, lng: -3.436, code: "gb" },
    //   { name: "Germany", lat: 51.1657, lng: 10.4515, code: "de" },
    //   { name: "France", lat: 46.6034, lng: 1.8883, code: "fr" },
    //   { name: "Italy", lat: 41.8719, lng: 12.5674, code: "it" },
    //   { name: "Spain", lat: 40.4637, lng: -3.7492, code: "es" },
    //   { name: "Russia", lat: 61.524, lng: 105.3188, code: "ru" },
    //   { name: "China", lat: 35.8617, lng: 104.1954, code: "cn" },
    //   { name: "India", lat: 20.5937, lng: 78.9629, code: "in" },
    //   { name: "Australia", lat: -25.2744, lng: 133.7751, code: "au" },
    //   { name: "Japan", lat: 36.2048, lng: 138.2529, code: "jp" },
    //   { name: "South Korea", lat: 35.9078, lng: 127.7669, code: "kr" },
    //   { name: "South Africa", lat: -30.5595, lng: 22.9375, code: "za" },
    //   { name: "Nigeria", lat: 9.082, lng: 8.6753, code: "ng" },
    //   { name: "Egypt", lat: 26.8206, lng: 30.8025, code: "eg" },
    //   { name: "Turkey", lat: 38.9637, lng: 35.2433, code: "tr" },
    //   { name: "Iran", lat: 32.4279, lng: 53.688, code: "ir" },
    //   { name: "Saudi Arabia", lat: 23.8859, lng: 45.0792, code: "sa" },
    //   { name: "Israel", lat: 31.0461, lng: 34.8516, code: "il" },
    //   { name: "Pakistan", lat: 30.3753, lng: 69.3451, code: "pk" },
    //   { name: "Bangladesh", lat: 23.685, lng: 90.3563, code: "bd" },
    //   { name: "Indonesia", lat: -0.7893, lng: 113.9213, code: "id" },
    //   { name: "Vietnam", lat: 14.0583, lng: 108.2772, code: "vn" },
    //   { name: "Thailand", lat: 15.87, lng: 100.9925, code: "th" },
    //   { name: "Malaysia", lat: 4.2105, lng: 101.9758, code: "my" },
    //   { name: "Philippines", lat: 12.8797, lng: 121.774, code: "ph" },
    //   { name: "New Zealand", lat: -40.9006, lng: 174.886, code: "nz" },
    //   { name: "Morocco", lat: 31.7917, lng: -7.0926, code: "ma" },
    //   { name: "Algeria", lat: 28.0339, lng: 1.6596, code: "dz" },
    //   { name: "Tunisia", lat: 33.8869, lng: 9.5375, code: "tn" },
    //   { name: "Sudan", lat: 12.8628, lng: 30.2176, code: "sd" },
    //   { name: "Ethiopia", lat: 9.145, lng: 40.4897, code: "et" },
    //   { name: "Colombia", lat: 4.5709, lng: -74.2973, code: "co" },
    //   { name: "Peru", lat: -9.1899, lng: -75.0152, code: "pe" },
    //   { name: "Chile", lat: -35.6751, lng: -71.543, code: "cl" },
    //   { name: "Ecuador", lat: -1.8312, lng: -78.1834, code: "ec" },
    //   { name: "Venezuela", lat: 6.4238, lng: -66.5897, code: "ve" },
    //   { name: "Greece", lat: 39.0742, lng: 21.8243, code: "gr" },
    //   { name: "Portugal", lat: 39.3999, lng: -8.2245, code: "pt" },
    //   { name: "Sweden", lat: 60.1282, lng: 18.6435, code: "se" },
    //   { name: "Norway", lat: 60.472, lng: 8.4689, code: "no" },
    //   { name: "Finland", lat: 61.9241, lng: 25.7482, code: "fi" },
    //   { name: "Denmark", lat: 56.2639, lng: 9.5018, code: "dk" },
    //   { name: "Netherlands", lat: 52.1326, lng: 5.2913, code: "nl" },
    //   { name: "Belgium", lat: 50.5039, lng: 4.4699, code: "be" },
    //   { name: "Switzerland", lat: 46.8182, lng: 8.2275, code: "ch" },
    //   { name: "Austria", lat: 47.5162, lng: 14.5501, code: "at" },
    //   { name: "Poland", lat: 51.9194, lng: 19.1451, code: "pl" },
    //   { name: "Czech Republic", lat: 49.8175, lng: 15.473, code: "cz" },
    //   { name: "Hungary", lat: 47.1625, lng: 19.5033, code: "hu" },
    //   { name: "Ukraine", lat: 48.3794, lng: 31.1656, code: "ua" },
    //   { name: "Romania", lat: 45.9432, lng: 24.9668, code: "ro" },
    //   { name: "Bulgaria", lat: 42.7339, lng: 25.4858, code: "bg" },
    //   { name: "Serbia", lat: 44.0165, lng: 21.0059, code: "rs" },
    //   { name: "Croatia", lat: 45.1, lng: 15.2, code: "hr" },
    //   { name: "Slovenia", lat: 46.1512, lng: 14.9955, code: "si" },
    //   { name: "Slovakia", lat: 48.669, lng: 19.699, code: "sk" },
    //   { name: "Albania", lat: 41.1533, lng: 20.1683, code: "al" },
    //   { name: "Montenegro", lat: 42.7087, lng: 19.3744, code: "me" },
    //   { name: "North Macedonia", lat: 41.6086, lng: 21.7453, code: "mk" },
    //   { name: "Kosovo", lat: 42.6026, lng: 20.9029, code: "xk" },
    //   {
    //     name: "Bosnia and Herzegovina",
    //     lat: 43.9159,
    //     lng: 17.6791,
    //     code: "ba",
    //   },
    //   { name: "Ireland", lat: 53.4129, lng: -8.2439, code: "ie" },
    //   { name: "Cuba", lat: 21.5218, lng: -77.7812, code: "cu" },
    //   { name: "Paraguay", lat: -23.4425, lng: -58.4438, code: "py" },
    //   { name: "Uruguay", lat: -32.5228, lng: -55.7658, code: "uy" },
    // ];

    // countries.forEach((country) => {
    //   const riskIndex = Math.floor(Math.random() * riskLevels.length);
    //   const marker = riskLevels[riskIndex];

    //   const popupContent = `
    //     <div class = "popup-div" style="background-color: ${marker.color}; color: white; padding: 0px; border-radius: 10px;">
    //       <div class="continent-desc-container">
    //         <span class="continent-span">Continent</span>
    //         <span class="dash-span"></span>
    //         <span class="continent-name">${country.name}</span>
    //       </div>

    //       <div class="continent-risk-container">
    //         <div class="head-div">
    //           <div class="continent-highlight-container flex gp-10">
    //             <img class = "continent-flag" src="https://flagcdn.com/w40/${country.code}.png" alt="Flag" style= margin-right: 10px; vertical-align: middle;">
    //             <span class="continent-name">${country.name}</span>
    //         </div>
    //         </div>

    //         <div class="risk-desc-wrapper">
    //           <div class="risk-content-div flex-between">
    //             <div class="risk-desc-container">
    //               <h5 class="">Risk: </h5>
    //               <p class="">Total number of risks : 99</p>
    //               <p class="">Total number of risks sectors: 100</p>
    //             </div>

    //             <div class="risk-graphics">
    //               <div class="triangle-div flex-center">
    //                 <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                 <path d="M16.9627 12.8329L10.4997 1.63891C9.67467 0.208906 8.32468 0.208906 7.49968 1.63891L1.03667 12.8329C0.211675 14.2629 0.886675 15.4309 2.53667 15.4309H15.4627C17.1127 15.4309 17.7877 14.2609 16.9627 12.8329Z" fill="#FC2A2A"/>
    //                 </svg>
    //               </div>

    //               <div class="risk-count-container">
    //                 <h5 class="risk-count-head fw-500">No Of Risk</h5>
    //                 <p class="risk-count-val fw-500">99</p>
    //               </div>
    //             </div>
    //           </div>

    //           <div class="threats-container">
    //             <h5 class="">Threats / Opportunities:</h5>
    //             <p class="">Threats : 10%</p>
    //             <p class="">Opportunities : 43%</p>
    //           </div>
    //         </div>

    //       </div>
    //     </div>
    //   `;

    //   L.marker([country.lat, country.lng])
    //   .addTo(map)
    //   .bindPopup(popupContent)
    //   .on("click", function () {
    //     this.openPopup();
    //   });
    // });

    // // Cleanup on unmount
    // return () => {
    //   map.remove();
    // };
    // Reference to the map instance

    if (!mapInstance.current) {
      // Initialize the map only once
      mapInstance.current = L.map(mapContainer.current).setView([20, 0], 2);

      // Use OpenStreetMap tile layer for background map
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        subdomains: ["a", "b", "c"],
        minZoom: 2,
        maxZoom: 19,
      }).addTo(mapInstance.current);

      // URL for GeoJSON data (world countries boundary)
      const geojsonDataUrl = "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json";

      // Custom style function for the regions (countries)
      const style = (feature) => {
        let color;
        const countryName = feature.properties.name;

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

        return {
          fillColor: color,
          weight: 2,
          opacity: 1,
          color: "white",
          dashArray: "0",
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
        geojsonLayer.resetStyle(e.target); // Reset to default style
      };

      // Function to display popup on click
      const onEachFeature = (feature, layer) => {
        const countryName = feature.properties.name;
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
          popupBackground = colors[Math.floor(Math.random() * colors.length)];
        }

        layer.bindPopup(`
            <div class = "popup-div" style="background-color: ${popupBackground}; color: white; padding: 0px; border-radius: 10px;">
              <div class="continent-desc-container">
                <span class="continent-span">Continent</span>
                <span class="dash-span"></span>
                <span class="continent-name">${feature.properties.name}</span>
              </div>

              <div class="continent-risk-container">
                <div class="head-div">
                  <div class="continent-highlight-container flex gp-10">
                    <img class = "continent-flag" src="" alt="Flag" style= margin-right: 10px; vertical-align: middle;">
                    <span class="continent-name">${feature.properties.name}</span>
                </div>
                </div>

                <div class="risk-desc-wrapper">
                  <div class="risk-content-div flex-between">
                    <div class="risk-desc-container">
                      <h5 class="">Risk: </h5>
                      <p class="">Total number of risks : 99</p>
                      <p class="">Total number of risks sectors: 100</p>
                    </div>

                    <div class="risk-graphics">
                      <div class="triangle-div flex-center">
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.9627 12.8329L10.4997 1.63891C9.67467 0.208906 8.32468 0.208906 7.49968 1.63891L1.03667 12.8329C0.211675 14.2629 0.886675 15.4309 2.53667 15.4309H15.4627C17.1127 15.4309 17.7877 14.2609 16.9627 12.8329Z" fill="#FC2A2A"/>
                        </svg>
                      </div>

                      <div class="risk-count-container">
                        <h5 class="risk-count-head fw-500">No Of Risk</h5>
                        <p class="risk-count-val fw-500">99</p>
                      </div>
                    </div>
                  </div>

                  <div class="threats-container">
                    <h5 class="">Threats / Opportunities:</h5>
                    <p class="">Threats : 10%</p>
                    <p class="">Opportunities : 43%</p>
                  </div>
                </div>

              </div>
            </div>

          `);

        layer.on({
          click: () => layer.openPopup(),
          mouseover: highlightFeature,
          mouseout: resetHighlight,
        });
      };

      let geojsonLayer;

      // Fetch the GeoJSON data from the provided URL
      fetch(geojsonDataUrl)
      .then(response => response.json())
      .then(data => {
          // Add GeoJSON data to the map with custom styling and popup functionality
          console.log(data)
          geojsonLayer = L.geoJSON(data, {
              style: style,
              onEachFeature: onEachFeature
          }).addTo(mapInstance.current);
      })
      .catch(error => {
          console.error("Error fetching GeoJSON data:", error);
      });
    }

    return () => {
      // Clean up the map instance when component unmounts
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  const icon = L.divIcon({
    className: "risk-marker",
    html: `<div style="background: ${marker.color}; width: 30px; height: 30px; border-radius: 5px; display: flex; align-items: center; justify-content: center;">
              <svg class="warning-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                  <path d="M1 21h22L12 2 1 21z" stroke="white" stroke-width="1" fill="none"/>
                  <circle cx="12" cy="17" r="1" fill="white"/>
              </svg>
            </div>`,
  });
  
 
  return (
    <>
      <div className="map-wrapper">
        <div className="left-box">
          <h5 className="dot">Total Risk</h5>
          <p className="dot1">999</p>
        </div>

        <div className="info-wrapper flex gp-15">
          <div className="time-container flex gp-10">
            <div className="last-month flex gp-7">
              <span className="last-month-val">Last Month</span>
              <span className="flex-center last-month-arrow">
                <svg
                  width="800px"
                  height="800px"
                  style={{ transform: "rotate(270deg)" }}
                  viewBox="0 0 1024 1024"
                  className="down-arrow"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                    fill="#000000"
                  />
                </svg>
              </span>
            </div>

            <div className="last-month flex gp-7">
              <span className="last-month-val">Last Month</span>
              <span className="flex-center last-month-arrow">
                <svg
                  width="800px"
                  height="800px"
                  style={{ transform: "rotate(270deg)" }}
                  viewBox="0 0 1024 1024"
                  className="down-arrow"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                    fill="#000000"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="info-box-container">
            <div className="info-box">
              <h5 className="total">Total User Risk</h5>
              <p className="pat">445</p>
            </div>
            <div className="info-box">
              <h5 className="total">Total User Comment</h5>
              <p className="pat">456</p>
            </div>
            <div className="info-box">
              <h5 className="total">Total User Like</h5>
              <p className="pat">555</p>
            </div>
            <div className="info-box">
              <h5 className="total">Total User Dislike</h5>
              <p className="pat">300</p>
            </div>
          </div>
        </div>
        <div
          id="map"
          ref = {mapContainer}
          style={{ height: "600px", width: "100%" }}
        ></div>
      </div>
    </>
  );
};

export default Mapcopy;
