import React, { useEffect, useState } from "react";
import styles from "./formsection.module.css";
import Image from "next/image";
import Button from "../button/button";

interface formsection {
  text: string;
}

interface formProps {
  props?: {
    data: formsection[];
  };
}

const FormSection: React.FC<formProps> = ({ props }: any) => {
  return (
    <>
      <div className={`flex flex-wrap ${styles.formcontainer}`}>
        <div className={styles.formleft}>
          <div className={styles.formtext}>
            <h3>
              {props.find((item: any) => item.title)
                ? props.find((item: any) => item.title).title
                : ""}
            </h3>
            <ul>
              {props?.find((item: any) => item.Data) &&
                props
                  ?.find((item: any) => item.Data)
                  .Data?.map((item: any, index: any) => {
                    return (
                      <li key={index}>
                        {item.items.find((item: any) => item.text)
                          ? item.items.find((item: any) => item.text).text
                          : ""}
                      </li>
                    );
                  })}
            </ul>
          </div>
        </div>
        <div className={styles.formright}>
          <div className={styles.formbubblebg}>
            <div className={styles.formbubblecircle}>
              <Image
                src="/images/gradient-bubble.svg"
                alt="bubble"
                height={500}
                width={500}
              />
            </div>
          </div>
          <div className={styles.formarea}>
            <h4>Request a Free Quote</h4>
            <div className={styles.formwrap}>
              <input
                className="required"
                type="text"
                id="fullName"
                placeholder="Full name"
              />
            </div>
            <div className={styles.formwrap}>
              <input
                className="required"
                type="mail"
                id="fullName"
                placeholder="E-mail"
              />
            </div>
            <div className={styles.formwrap}>
              <input
                className="required"
                type="number"
                id="fullName"
                placeholder="Mobile Number"
              />
            </div>
            <div className={styles.formwrap}>
              <input
                className="required"
                type="text"
                id="fullName"
                placeholder="Company name"
              />
            </div>
            <div className="formbtn">
              <Button href="#" text="send request" variant="primary" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormSection;
