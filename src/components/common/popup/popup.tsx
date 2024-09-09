import React, { useState } from "react";
import styles from "./popup.module.css"; // Import the CSS module
import Close from "@/assets/icon/close";
import Button from "../button/button";

// Define the shape of the props object
interface PropsItem {
  titleText?: string;
  descriptionText: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
  delaySec?: string;
}

interface PopupProps {
  data: PropsItem;
}

const Popup: React.FC<PopupProps> = ({ data }) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => setOpen(false);

  // Determine if the file is an image or video
  const isImage =
    data.backgroundImage &&
    (data.backgroundImage.endsWith(".jpg") ||
      data.backgroundImage.endsWith(".jpeg") ||
      data.backgroundImage.endsWith(".png") ||
      data.backgroundImage.endsWith(".gif"));
  const isVideo =
    data.backgroundImage &&
    (data.backgroundImage.endsWith(".mp4") ||
      data.backgroundImage.endsWith(".webm") ||
      data.backgroundImage.endsWith(".avi"));

  return (
    <>
      {open && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent}>
            {/* Background content based on file type */}
            {isImage && (
              <div
                className={styles.popupBackground}
                style={{ backgroundImage: `url(${data.backgroundImage})` }}
              />
            )}
            {isVideo && (
              <video
                className={styles.popupBackgroundVideo}
                autoPlay
                muted
                loop
              >
                <source
                  src={data.backgroundImage}
                  type={`video/${data.backgroundImage.split(".").pop()}`}
                />
                Your browser does not support the video tag.
              </video>
            )}

            {/* Close button */}
            <div className={styles.closeBtn} onClick={handleClose}>
              <Close />
            </div>

            {/* Title */}
            {data.titleText && (
              <h2 className={styles.popupTitle}>{data.titleText}</h2>
            )}

            {/* Description */}
            <div
              className={styles.popupDescription}
              dangerouslySetInnerHTML={{ __html: data.descriptionText }}
            />

            {/* Button */}
            {data.ctaText && data.ctaLink && (
              <a
                href={data.ctaLink}
                className={styles.popupBtn}
                onClick={handleClose}
              >
                {data.ctaText}
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
