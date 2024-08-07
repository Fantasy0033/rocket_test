import { Divider } from "../divider";
import Rocket from "../../assets/rocket.jpg";
import "./rocket-card.scss";

export default function RocketCard({ info, title }) {
  return (
    <section className="rocket-card">
      <div className="rocket-image">
        <img className="rocket-img" src={Rocket} alt="rocket" />
      </div>

      <h1 className="rocket-title">Rocket 1</h1>

      <p>
        Height: <span>{info.height}</span>
      </p>

      <Divider />
      <p>
        Diameter: <span>{info.height}</span>
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
  );
}
