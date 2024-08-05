import "./Button.scss";

export default function Button({ name, classname }) {
  return <button className={classname}>{name}</button>;
}
