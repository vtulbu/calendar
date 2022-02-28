import styles from "../../styles/head.module.css";

interface PropsHead {
  day: string;
  monthYear: string;
}

const HeadCalendar = ({ day, monthYear }: PropsHead) => {
  return (
    <div className={styles.headContainer}>
      <p className={styles.paragraphe}>{day}</p>
      <p className={styles.paragraphe}> {monthYear}</p>
    </div>
  );
};

export default HeadCalendar;
