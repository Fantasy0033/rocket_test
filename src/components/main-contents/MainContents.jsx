import Planet from "../../assets/Planet.svg";
import Line from "../../assets/Line.svg";
import "./MainContents.scss";

export default function MainContents() {
  return (
    <section className="main-contents-wrapper">
      <div className="text-wrapper">
        <div className="title">dive deep in to the future</div>
      </div>
      <div className="main__footer">
        <img src={Planet} alt="" className="planet" />
        <img src={Line} alt="" className="line" />
      </div>
    </section>
  );
}
