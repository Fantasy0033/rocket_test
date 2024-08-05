import "./Header.scss";
import Button from "../button/Button";

export default function Header() {
  return (
    <header>
      <div className="buttons">
        <Button name="LOGO" classname="button_border" />
        <button className="button_main">
          <Button name="HOME" classname="button" />
          <Button name="ABOUT" classname="button" />
          <Button name="QA" classname="button" />
          <Button name="CONTACT FORM" classname="button" />
        </button>
        <Button name="CONTACT FORM" classname="button_border" />
      </div>
    </header>
  );
}
