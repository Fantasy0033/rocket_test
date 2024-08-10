import RocketInfo from "../../components/rocket-info";
import { useState, useEffect } from "react";
import "./Rocket.scss";

import useRocketService from "../../services/RocketService";
import Header from "../../components/header/Header";
import { ImageCarousel } from "../../components/image-carousel";
import RocketImage from "../../components/rocket-image";

export default function Rocket() {
  const [slides, setSlides] = useState([]);
  const [rocket, setRocket] = useState([]);

  const { getAllRocket, getRocket } = useRocketService();

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = () => {
    getAllRocket().then((res) => {
      setSlides(res);
    });
    getRocket().then((res) => {
      setRocket(res);
    });
  };
  return (
    <div className="rocket">
      <Header />
      <div className="rocket-name">{slides.name}</div>
      <RocketInfo info={rocket} />
      <ImageCarousel slides={slides} />
      <RocketImage />
    </div>
  );
}
