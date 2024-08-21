import React, { useEffect, useState } from "react";
import styles from "./formsection.module.css";
import Image from "next/image";
import Button from "../button/button";

interface formsection {
  text: string;
}

interface formProps {
  props?: any;
}

const ContactFormSection: React.FC<formProps> = ({ props }: any) => {
  return (
    <>
      <div
        className={`flex justify-center items-center flex-wrap ${styles.formcontainer}`}
      >
        <div className={styles.formleft}>
          <div className={styles.formtext}>
            <h3>
              {props.find((item: any) => item.title)
                ? props.find((item: any) => item.title).title
                : ""}
            </h3>
            <p className={styles.desc}>
              {props.find((item: any) => item.subTitle)
                ? props.find((item: any) => item.subTitle).subTitle
                : ""}
            </p>
            <div className={styles.bannerline}></div>
            <b className={styles.bottomdesc}>
              {props.find((item: any) => item.desc)
                ? props.find((item: any) => item.desc).desc
                : ""}
            </b>
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
            <h4>Let&apos;s Discuss</h4>
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
              <Button href="#" text="SUBMIT" variant="primary" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactFormSection;
