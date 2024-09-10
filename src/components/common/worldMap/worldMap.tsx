import React from "react";
import Image from "next/image";
import styles from "./WorldMap.module.css";

interface WorldMapProps {
  props: any;
}

const WorldMap: React.FC<WorldMapProps> = ({ props }) => {
  const mapData = props?.data || [];
  return (
    <section className={`${styles.mapsection} ${styles.paddtb}`}>
      <div className={styles.mapContainer}>
        <div className="relative">
        <Image
          height={700}
          width={1633}
          src="/images/world-map.png"
          alt="World Map"
          className={styles.map}
        />
        {mapData.map((location: any, index: number) => (
          <div
            key={index}
            className={`${styles.pin} ${
              styles[`${location.city ? location.city.toLowerCase() : ""}pin`]
            }`}
          >
            <Image
              height={45}
              width={45}
              src="/images/Google_Maps_pin.png"
              alt={location.city}
            />
          </div>
        ))}
        </div>
      </div>
      <div className={`container ${styles.customContainer}`}>
        <div className="flex flex-wrap">
          <div className={`md:w-full pr-4 pl-4 ${styles.leftCommonText}`}>
            <div className={`text-left ${styles.titletext}`}>
              <h2
                dangerouslySetInnerHTML={{
                  __html: !!props.title ? props.title : "",
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt-10 justify-center">
          {mapData.map((location: any, index: number) => (
            <div
              key={index}
              className={`${styles.addressbox} mb-10 px-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4`}
            >
              <div className={`${styles.inlinecity}`}>
                <Image
                  src={!!location.icon ? location.icon : ""}
                  alt={`${!!location.country ? location.country : ""}-flag`}
                  height={35}
                  width={35}
                />
                <h3>
                  {!!location.city ? location.city : ""},
                  {!!location.country ? location.country : ""}
                </h3>
              </div>
              <p>{!!location.address ? location.address : ""}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
