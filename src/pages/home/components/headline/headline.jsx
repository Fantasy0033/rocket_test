import Header from "../../../../components/header/Header";
import MainContents from "../../../../components/main-contents/MainContents";
import "./headline.scss";

export default function Headline() {
  return (
    <section className="headline">
      <Header />
      <MainContents />
    </section>
  );
}
