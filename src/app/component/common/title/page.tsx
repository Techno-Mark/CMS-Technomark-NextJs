import React from 'react';
import styles from './title.module.css'

interface SectionData {
  title?: string;
  subtitle?: string;
  subDesc?: string;
}

interface TitleSectionProps {
  sectionData: SectionData;
  titleFirst?: boolean;
  titleClassName?: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ sectionData, titleFirst = true, titleClassName}) => {
  return (
    <div className={`title-section mb-6 ${titleClassName}`}>
      {titleFirst ? (
        <>
          {sectionData.title && <h2 className={`${styles.maintitle} ${styles.maindarktitle} ${styles.maintitlespan}`} dangerouslySetInnerHTML={{ __html: sectionData.title }} />}
          {sectionData.subtitle && <p className={`${styles.subtitle}`} dangerouslySetInnerHTML={{ __html: sectionData.subtitle }} />}
        </>
      ) : (
        <>
          {sectionData.subtitle && <p className={styles.subtitle} dangerouslySetInnerHTML={{ __html: sectionData.subtitle }} />}
          {sectionData.title && <h2 className={`${styles.maintitle} ${styles.maindarktitle} ${styles.maintitlespan}`}dangerouslySetInnerHTML={{ __html: sectionData.title }} />}
        </>
      )}
    </div>
  );
};

export default TitleSection;
