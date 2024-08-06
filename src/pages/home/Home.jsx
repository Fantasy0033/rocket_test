import { Carousel } from "../../components/carousel";
import { TeamCarousel } from "../../components/team-carousel";
import About from "./components/about/about";
import Headline from "./components/headline/headline";
import InfoLine from "./components/infoline/infoline";
import "./Home.scss";

export default function Home() {
  const slides = [
    {
      title: "Rocket 1",
      height: "8.1 M / 26.7 FT",
      diameter: "4 M / 13 FT",
      spacecraft: "9 M3 / 328 FT3",
      trunk: "37 M3 / 1307 FT3",
      launchMass: "6,000 KG / 13,228 LB",
      returnMass: "3,000 KG / 6,614 LB",
    },
    {
      title: "Rocket 1",
      height: "8.1 M / 26.7 FT",
      diameter: "4 M / 13 FT",
      spacecraft: "9 M3 / 328 FT3",
      trunk: "37 M3 / 1307 FT3",
      launchMass: "6,000 KG / 13,228 LB",
      returnMass: "3,000 KG / 6,614 LB",
    },
    {
      title: "Rocket 1",
      height: "8.1 M / 26.7 FT",
      diameter: "4 M / 13 FT",
      spacecraft: "9 M3 / 328 FT3",
      trunk: "37 M3 / 1307 FT3",
      launchMass: "6,000 KG / 13,228 LB",
      returnMass: "3,000 KG / 6,614 LB",
    },
    {
      title: "Rocket 1",
      height: "8.1 M / 26.7 FT",
      diameter: "4 M / 13 FT",
      spacecraft: "9 M3 / 328 FT3",
      trunk: "37 M3 / 1307 FT3",
      launchMass: "6,000 KG / 13,228 LB",
      returnMass: "3,000 KG / 6,614 LB",
    },
    {
      title: "Rocket 1",
      height: "8.1 M / 26.7 FT",
      diameter: "4 M / 13 FT",
      spacecraft: "9 M3 / 328 FT3",
      trunk: "37 M3 / 1307 FT3",
      launchMass: "6,000 KG / 13,228 LB",
      returnMass: "3,000 KG / 6,614 LB",
    },
    {
      title: "Rocket 1",
      height: "8.1 M / 26.7 FT",
      diameter: "4 M / 13 FT",
      spacecraft: "9 M3 / 328 FT3",
      trunk: "37 M3 / 1307 FT3",
      launchMass: "6,000 KG / 13,228 LB",
      returnMass: "3,000 KG / 6,614 LB",
    },
    {
      title: "Rocket 1",
      height: "8.1 M / 26.7 FT",
      diameter: "4 M / 13 FT",
      spacecraft: "9 M3 / 328 FT3",
      trunk: "37 M3 / 1307 FT3",
      launchMass: "6,000 KG / 13,228 LB",
      returnMass: "3,000 KG / 6,614 LB",
    },
    {
      title: "Rocket 1",
      height: "8.1 M / 26.7 FT",
      diameter: "4 M / 13 FT",
      spacecraft: "9 M3 / 328 FT3",
      trunk: "37 M3 / 1307 FT3",
      launchMass: "6,000 KG / 13,228 LB",
      returnMass: "3,000 KG / 6,614 LB",
    },
    {
      title: "Rocket 1",
      height: "8.1 M / 26.7 FT",
      diameter: "4 M / 13 FT",
      spacecraft: "9 M3 / 328 FT3",
      trunk: "37 M3 / 1307 FT3",
      launchMass: "6,000 KG / 13,228 LB",
      returnMass: "3,000 KG / 6,614 LB",
    },
    {
      title: "Rocket 1",
      height: "8.1 M / 26.7 FT",
      diameter: "4 M / 13 FT",
      spacecraft: "9 M3 / 328 FT3",
      trunk: "37 M3 / 1307 FT3",
      launchMass: "6,000 KG / 13,228 LB",
      returnMass: "3,000 KG / 6,614 LB",
    },
    {
      title: "Rocket 1",
      height: "8.1 M / 26.7 FT",
      diameter: "4 M / 13 FT",
      spacecraft: "9 M3 / 328 FT3",
      trunk: "37 M3 / 1307 FT3",
      launchMass: "6,000 KG / 13,228 LB",
      returnMass: "3,000 KG / 6,614 LB",
    },
  ];

  return (
    <div className="main-home">
      <Headline />
      <Carousel slides={slides} />
      <InfoLine />
      <About />
      <TeamCarousel slides={slides} />
    </div>
  );
}
