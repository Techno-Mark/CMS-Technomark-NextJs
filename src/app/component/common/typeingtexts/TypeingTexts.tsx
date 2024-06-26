import { Typewriter } from "nextjs-simple-typewriter";
import styles from "./typeingtexts.module.css";

const TypeingTexts = (props: any) => {
  return (
    <>
      <div className="w-100 text-center min-h-28">
        <span className={styles.textStyleing}>
          <Typewriter words={props.props} loop={0} />
        </span>
      </div>
    </>
  );
};

export default TypeingTexts;
