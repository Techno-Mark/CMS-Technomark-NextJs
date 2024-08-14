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

const ContactFormSection: React.FC<formProps> = ({ props }: any) => {
  return (
    <>
      <div className={`flex flex-wrap ${styles.formcontainer}`}>
        <div className={styles.formleft}>
          <div className={styles.formtext}>
            <h3>{props[0].title} </h3>
            <p className={styles.desc}>
              You are one step away from creating an agile business product and
              make it your next success story.
            </p>
            <div className={styles.bannerline}></div>
            <b className={styles.bottomdesc}>
              Let's discuss about your business model and project requirements
              in detail.
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
            <h4>Let's Discuss</h4>
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
