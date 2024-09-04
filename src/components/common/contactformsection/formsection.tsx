import React from "react";
import styles from "./formsection.module.css";
import Image from "next/image";
import Button from "../button/button";

const ContactFormSection = ({ props }: any) => {
  return (
    <>
      <div
        className={`flex justify-center items-center flex-wrap ${styles.formcontainer}`}
      >
        <div className={styles.formleft}>
          <div className={styles.formtext}>
            <h3>{!!props.title ? props.title : ""}</h3>
            <p className={styles.desc}>
              {!!props.subTitle ? props.subTitle : ""}
            </p>
            <div className={styles.bannerline}></div>
            <b className={styles.bottomdesc}>
              {!!props.desc ? props.desc : ""}
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
