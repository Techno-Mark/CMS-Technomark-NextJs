import styles from "./video.module.css";

const Video = (props: any) => {
  return (
    <div className={`${styles.videoContainer}`}>
      <video
        className={styles.video}
        src={props.props.videoUrl}
        autoPlay
        loop
        muted
      />
      <div className={`${styles.textOverlay}`}>
        <p className={`${styles.videoTextSubTitle}`}>{props.props.subTitle}</p>
        <h3 className={`${styles.videoTextTitle}`}>{props.props.Title}</h3>
      </div>
    </div>
    // <div className={`${styles.clipTextVideo}`}>
    //   <video
    //     className={styles.video}
    //     autoPlay
    //     loop
    //     muted
    //     playsInline
    //     preload="auto"
    //     width="100%"
    //   >
    //     <source
    //       src="https://www.jonathandempsey.dev/wp-content/uploads/2020/05/waves.mp4"
    //       type="video/mp4"
    //     />
    //   </video>
    //   <div
    //     className={`bg-clip-text text-transparent ${styles.clipTextVideoText}`}
    //   >
    //     <span>We are</span>
    //     <p>TechnoMark</p>
    //   </div>
    // </div>
  );
};

export default Video;
