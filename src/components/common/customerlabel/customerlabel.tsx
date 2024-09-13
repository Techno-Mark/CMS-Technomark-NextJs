import React, { useEffect, useState } from "react"
import Image from "next/image"
import styles from "./customerlabel.module.css"

const CustomerLabel: React.FC = () => {
  const [isWhiteSidebar, setIsWhiteSidebar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsWhiteSidebar(window.scrollY >= window.innerHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={`${styles.customerfixedlabel}
    ${isWhiteSidebar ? styles.whitesidebar : ""}`}
    >
      <h5>100%</h5>
      <p>Customer Satisfaction</p>
      <Image
        src="/images/gradient-line.png"
        alt="Gradientline"
        width={5}
        height={48}
      />
    </div>
  )
}

export default CustomerLabel
