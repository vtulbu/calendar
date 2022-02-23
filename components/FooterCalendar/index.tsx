import dateFormat, { masks } from "dateformat";
import { FC } from "react";
import { Weather } from "./Weather";

interface Props {
  data: Weather;
}

const FooterCalendar: FC<Props> = ({ data }) => {
  const now = new Date();
  masks.hammerTime = "HH:MM";
  return (
    <div>
      <p>{dateFormat(now, "hammerTime")}</p>
      <p>+</p>
      <p>{data.current.temp_c}</p>
    </div>
  );
};

export default FooterCalendar;
