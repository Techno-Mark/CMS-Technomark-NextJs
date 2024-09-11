import React from "react";
import styles from "./techservice.module.css";
import Button from "../button/button";

interface TechServiceProps {
  props: any;
}

const TechService: React.FC<TechServiceProps> = ({ props }) => {
  const services = props?.services || [];
  const buttonText = props?.buttonText || "View All";
  return (
    <div className={`flex flex-wrap`}>
      {services.map((service: any, index: number) => (
        <div key={index} className="w-full md:w-1/2 pr-8 pb-8">
          <div className={`${styles.serviceborderbox}`}>
            <div className={`${styles.titleiconinline} flex items-center mb-5`}>
              <h4>{!!service.title ? service.title : ""}</h4>
              <div className={`${styles.arrowicon} ml-4`}>
                <svg
                  width="45"
                  height="46"
                  viewBox="0 0 45 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <rect
                      y="0.769531"
                      width="45"
                      height="45"
                      rx="22.5"
                      fill="white"
                    ></rect>
                    <path
                      d="M22.168 32.4349L31.3346 23.2682L22.168 14.1016"
                      stroke="#1D3557"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M13 23.2695H31.3333"
                      stroke="#1D3557"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                  <rect
                    x="0.5"
                    y="1.26953"
                    width="44"
                    height="44"
                    rx="22"
                    stroke="#BBC2CD"
                  ></rect>
                  <defs>
                    <clipPath id="clip0_548_16981">
                      <rect
                        y="0.769531"
                        width="45"
                        height="45"
                        rx="22.5"
                        fill="white"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <p>{!!service.description ? service.description : ""}</p>
          </div>
        </div>
      ))}
      <Button href="#" text={buttonText} variant="secondary" />
    </div>
  );
};

export default TechService;
