import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/common/button/button";
import styles from "./popup.module.css";
import { useRouter } from "next/router";
import { formatEventDate } from "@/utils/commonFunction";

let supportedPopupTypes = ["Event"];

const Popup = ({ popupData }: any) => {
  popupData = popupData[0];
  if (!popupData) return;

  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let frequency = popupData?.frequency;
    let delay = popupData?.delay;

    const shownCount = sessionStorage.getItem("popupShownCount") || "0";
    const parsedCount = parseInt(shownCount, 10);

    if (parsedCount < frequency) {
      const timer = setTimeout(() => {
        setIsVisible(true);

        sessionStorage.setItem("popupShownCount", (parsedCount + 1).toString());
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [router.asPath]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible || !popupData) return null;

  if (popupData.popupType === "Event") {
    return (
      <div className="popup">
        <div className={styles.popupmain}>
          <div className={styles.popupcontent}>
            <button className={styles.closeButton} onClick={handleClose}>
              <Image
                src="/images/close.png"
                alt="close"
                width={36}
                height={36}
              />
            </button>
            <div
              className={styles.popupcontainer}
              style={{
                backgroundImage: `url(https://crm-stageapi.pacificabs.com:3004/${popupData?.image})`,
              }}
            >
              <div className={styles.popupheader}>
                <Image
                  src={popupData?.headerLeftIcon}
                  alt="SEAMLESS EU"
                  width={200}
                  height={100}
                />
                <Image
                  src={popupData?.headerRightIcon}
                  alt="TM Logo"
                  width={200}
                  height={100}
                />
              </div>
              <div className={styles.popupdetails}>
                <h2>{popupData?.eventTitle}</h2>
                <h1>{popupData?.heading}</h1>
                <h3>{popupData?.supportingLine}</h3>
              </div>
              <div className={styles.popuplinks}>
                <div className={styles.popupsinglelink}>
                  <Image
                    src="/images/calendar.png"
                    alt="Calendar"
                    width={24}
                    height={24}
                  />
                  <p>{formatEventDate(popupData?.eventStartDate, popupData?.eventEndDate)}</p>
                </div>
                {popupData?.location && (
                  <div className={styles.popupsinglelink}>
                    <Image
                      src="/images/location.png"
                      alt="Location"
                      width={24}
                      height={24}
                    />
                    <p>{popupData?.location}</p>
                  </div>
                )}
              </div>
              <div className={styles.popupmeetlink}>
                <Button
                  text={popupData?.btnText}
                  variant="primary"
                  href={popupData?.btnLink}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Popup;
