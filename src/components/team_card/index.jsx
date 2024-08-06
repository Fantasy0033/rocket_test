import Team from "../../assets/team.svg";
import "./team-card.scss";

export default function TeamCard({ name, title }) {
  return (
    <section className="team-card">
      <div className="team-card_image">
        <img className="team-card_img" src={Team} alt="rocket" />
      </div>
      <div className="team-card_descr">
        <div className="team-card_descr-position">{title}</div>
        <div className="team-card_descr-name">{name}</div>
      </div>
    </section>
  );
}
