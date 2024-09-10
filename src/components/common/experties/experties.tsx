import React from "react";
import TitleSection from "../title/title";
import style from "./experties.module.css";
import Image from "next/image";

const Experties = ({ data }: any) => {
  return (
    <div className={`${style.expertiescontainer}`}>
      <TitleSection
        sectionData={{
          title: !!data.title ? data.title : "",
          subtitle: "",
        }}
        titleClassName=""
      />
      <Image
        src={!!data.image ? data.image : ""}
        alt=""
        width={100}
        height={100}
      />
      {!!data.data &&
        data.data.map((i: any, index: number) => (
          <div
            className={`${style.circle} ${style[`circle${index+1}`]}`}
            key={index}
          >
            {i.text} {/* Assuming 'text' is the property you want to render */}
          </div>
        ))}
    </div>
  );
};

export default Experties;
