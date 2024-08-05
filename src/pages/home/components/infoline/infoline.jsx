import Info from "../../../../components/info";
import "./infoline.scss";

export default function InfoLine() {
  return (
    <section className="infoline">
      <Info number="43" name="TOTAL LAUNCHES" />
      <Info number="46" name="VISITS TO THE ISS" />
      <Info number="25" name="TOTAL REFLIGHTS" />
    </section>
  );
}
