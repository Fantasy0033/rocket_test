import "./info.scss";

export default function Info(props) {
  const { name, number } = props;
  return (
    <div className="info">
      <div className="info_title">{number}</div>
      <div className="info_subtitle">{name}</div>
    </div>
  );
}
