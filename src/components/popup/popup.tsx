import React, { useEffect, useState } from "react"
import Image from "next/image"
import Button from "@/components/common/button/button"
import styles from "./popup.module.css"
import { useRouter } from "next/router"
import { formatEventDate } from "@/utils/commonFunction"

const Popup = ({ popupData }: any) => {
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (!popupData) return

    const frequency = popupData?.frequency
    const delay = popupData?.delay * 1000
    const keyVal = `${popupData.popupType}${popupData.title}`

    const shownCount = sessionStorage.getItem(`${keyVal}`) || "0"
    const parsedCount = parseInt(shownCount, 10)

    if (parsedCount < frequency) {
      const timer = setTimeout(() => {
        setIsVisible(true)

        sessionStorage.setItem(`${keyVal}`, (parsedCount + 1).toString())
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [popupData, router.asPath])

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!popupData || !isVisible) return null

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
                backgroundImage: `url('${popupData?.image}')`
              }}
            >
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
                  <p>
                    {formatEventDate(
                      popupData?.eventStartDate,
                      popupData?.eventEndDate
                    )}
                  </p>
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
    )
  } else if (popupData.popupType === "Normal") {
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
                backgroundImage: `url('${popupData?.image}')`
              }}
            >
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default Popup
