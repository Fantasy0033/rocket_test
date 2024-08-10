import "./Header.scss";
import { Link } from "react-router-dom";
import Button from "../button/Button";

export default function Header() {
  return (
    <header>
      <div className="buttons">
        <Link to="/">
          <Button name="LOGO" classname="button_border" />
        </Link>
        <div className="button_main">
          <Link to="/">
            <Button name="HOME" classname="button" />
          </Link>
          <Link to="/">
            <Button name="ABOUT" classname="button" />
          </Link>

          <Link to="/">
            <Button name="QA" classname="button" />
          </Link>

          <Link to="/">
            <Button name="CONTACT FORM" classname="button" />
          </Link>
        </div>
        <Link to="/">
          <Button name="CONTACT FORM" classname="button_border" />
        </Link>
      </div>
    </header>
  );
}
