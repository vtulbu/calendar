import type { NextPage } from "next";
import { FC } from "react";

import Container from "../components/Container";
import HeadCalendar from "../components/HeadCalendar";
import BodyCalendar from "../components/BodyCalendar";
import FooterCalendar from "../components/FooterCalendar";
import { Weather } from "../components/FooterCalendar/Weather";

interface PageProps {
  data: Weather;
}

const Home: FC<PageProps & NextPage> = ({ data }) => {
  return (
    <>
      <Container>
        <HeadCalendar />
        <BodyCalendar />
        <FooterCalendar data={data} />
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
