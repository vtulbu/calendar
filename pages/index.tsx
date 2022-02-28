import type { NextPage } from "next";
import { FC, useState } from "react";
import Container from "../components/Container";
import HeadCalendar from "../components/HeadCalendar";
import BodyCalendar from "../components/BodyCalendar";
import FooterCalendar from "../components/FooterCalendar";
import ToDo from "../components/ToDo";
import { Weather } from "../components/FooterCalendar/Weather";
import dateFormat from "dateformat";
interface PageProps {
  data: Weather;
}

const Home: FC<PageProps & NextPage> = ({ data }) => {
  const ToDoList = [
    { id: 1, date: "17 February 2022", content: ["first", "second"] },
    { id: 2, date: "20 February 2022", content: ["third", "fourth"] },
    { id: 3, date: "25 February 2022", content: ["fifth", "sixth"] },
    { id: 3, date: "28 February 2022", content: ["123", "456"] },
  ];

  const today = new Date();
  const [day, setDay] = useState(dateFormat(today, "dddd d"));
  const [monthYear, setMonthYear] = useState(dateFormat(today, "mmmm yyyy"));
  const [date, setDate] = useState(dateFormat(today, "d mmmm yyyy"));
  const [statusToDoBox, setstatusToDoBox] = useState(false);
  const [toDoList, setToDoList] = useState(
    ToDoList.find((e) => e.date === dateFormat(today, "d mmmm yyyy"))
  );

  const onClickDay = (value: string, event: EventListener) => {
    setDay(dateFormat(value, "dddd d"));
    setMonthYear(dateFormat(value, "mmmm yyyy"));
    setDate(dateFormat(value, "d mmmm yyyy"));
    setToDoList(
      ToDoList.find((e) => e.date === dateFormat(value, "d mmmm yyyy"))
    );
    console.log(toDoList);
  };

  return (
    <>
      <Container>
        <HeadCalendar day={day} monthYear={monthYear} />
        <BodyCalendar onClickDay={onClickDay} />
        <FooterCalendar
          data={data}
          statusToDoBox={statusToDoBox}
          setstatusToDoBox={setstatusToDoBox}
        />
        {statusToDoBox ? <ToDo date={date} toDo={toDoList} /> : <></>}
      </Container>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=72497af28cdb4d279f9201924222302&q=Chisinau&aqi=no"
  );
  const data = await res.json();

  return { props: { data } };
}

export default Home;
