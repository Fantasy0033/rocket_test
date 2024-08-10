import { Divider } from "../../components/divider";
import Rocket from "../../assets/Rocket-info.svg";
import "./rocket-info.scss";

export default function RocketInfo(props) {
  const { info } = props;

  return (
    <div className="rocket-info">
      <div className="rocket-info_wrapper">
        <div className="rocket-info_image">
          <img src={info.image} alt="" className="rocket-info_img" />
        </div>
        <div className="rocket-info_descr">
          <h1 className="rocket-info_title">{info.name}</h1>

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
        </div>
      </div>
    </div>
  );
}
