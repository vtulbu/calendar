import { useState } from "react";
import styles from "../../styles/bodyCalendar.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface PropsBody {
  onClickDay: (value: string, event: EventListener) => void;
}

const BodyCalendar = ({ onClickDay }: PropsBody) => {
  const [value, onChange] = useState(new Date());
  return (
    <Calendar
      value={value}
      onChange={onChange}
      hide-footer={true}
      onClickDay={onClickDay}
      showWeekNumbers
      className={styles.calendar}
    />
  );
};

export default BodyCalendar;

// (value: string, event: EventListener) => console.log(event)
