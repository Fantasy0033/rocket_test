import { Divider } from "../divider";
import { Link } from "react-router-dom";
import Rocket from "../../assets/rocket.jpg";
import "./rocket-card.scss";

export default function RocketCard({ info, index }) {
  return (
    <Link to={`/rocket/${index}`} className="rocket-link">
      <section className="rocket-card">
        <div className="rocket-image">
          <img className="rocket-img" src={info.image} alt="rocket" />
        </div>

        <h1 className="rocket-title">{info.name}</h1>

        <p>
          Height: <span>{info.height}</span>
        </p>

        <Divider />
        <p>
          Diameter: <span>{info.diameter}</span>
        </p>

        <Divider />
        <p>
          Spacecraft volume: <span>{info.spacecraft}</span>
        </p>
        <Divider />
        <p>
          Trunk volume: <span>{info.trunk}</span>
        </p>

        <Divider />
        <p>
          Launch payload mass: <span>{info.launchMass}</span>
        </p>

        <Divider />
        <p>
          Return payload mass: <span>{info.returnMass}</span>
        </p>

        <Divider />
      </section>
    </Link>
  );
}
