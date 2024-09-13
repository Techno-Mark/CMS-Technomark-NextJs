import React from "react"
import dynamic from "next/dynamic"
import styles from "./typeingtexts.module.css"

const Typewriter = dynamic(
  () => import("nextjs-simple-typewriter").then((mod) => mod.Typewriter),
  { ssr: false }
)

interface TypeingTextsProps {
  props: string[];
}

const TypeingTexts: React.FC<TypeingTextsProps> = ({ props }) => {
  return (
    <div className="w-100 text-center min-h-28">
      <span className={styles.textStyleing}>
        <Typewriter words={props} loop={0} />
      </span>
    </div>
  )
}

export default TypeingTexts
