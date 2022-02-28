import dateFormat, { masks } from "dateformat";
import { Dispatch, FC, MouseEventHandler, SetStateAction } from "react";
import { Weather } from "./Weather";
import styles from "../../styles/footerCalendar.module.css";

interface Props {
  data: Weather;
  statusToDoBox: boolean;
  setstatusToDoBox: Dispatch<SetStateAction<boolean>>;
}

const FooterCalendar: FC<Props> = ({
  data,
  statusToDoBox,
  setstatusToDoBox,
}) => {
  const now = new Date();
  masks.hammerTime = "HH:MM";

  const changeStatus = () => {
    setstatusToDoBox(!statusToDoBox);
  };

  return (
    <div className={styles.footerBox}>
      <p>{dateFormat(now, "hammerTime")}</p>
      <button className={styles.addButton} onClick={changeStatus}>
        {!statusToDoBox ? "+" : "-"}
      </button>
      <p>{data.current.temp_c}&deg;C</p>
    </div>
  );
};

export default FooterCalendar;
