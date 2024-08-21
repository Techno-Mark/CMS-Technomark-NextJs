import React from "react";
import Image from "next/image";
import styles from "./WorldMap.module.css";

interface Location {
  city: string;
  address: string;
  country: string;
  flagSrc: string;
}

interface WorldMapProps {
  locations: Location[];
}

const WorldMap: React.FC<WorldMapProps> = ({ locations }) => {
  console.log("🚀 ~ locations:", locations);
  return (
    <section className={`${styles.mapsection} ${styles.paddtb}`}>
      <div className={styles.worldMapContainer}>
        <Image
          height={700}
          width={1633}
          src="/images/world-map.png"
          alt="World Map"
          className={styles.map}
        />
        <div className={styles.mapContainer}>
          {locations?.map((location, index) => (
            <div
              key={index}
              className={`${styles.pin} ${
                styles[`${location.city.toLowerCase()}pin`]
              }`}
            >
              <Image
                height={45}
                width={45}
                src="/images/Google_Maps_pin.png"
                alt="Location Pin"
              />
            </div>
          ))}
        </div>
        <div className={`${styles.container} ${styles.customContainer}`}>
          <div className="flex flex-wrap">
            <div className={`md:w-full pr-4 pl-4 ${styles.leftCommonText}`}>
              <div className={`text-left ${styles.titletext}`}>
                <h2>
                  We Are <span>Globally Available Now</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mt-10 justify-center">
            <div className="grid grid-cols-1 md:grid-cols-4">
              {locations.map((location, index) => (
                <div key={index} className={`${styles.addressbox} mb-10 mx-4`}>
                  <div className={`${styles.inlinecity}`}>
                    <Image
                      src={location.flagSrc}
                      alt={`${location.country}-flag`}
                      height={35}
                      width={35}
                    />
                    <h3>
                      {location.city}, {location.country}
                    </h3>
                  </div>
                  <p>{location.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
