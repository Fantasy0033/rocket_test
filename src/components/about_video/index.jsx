import Video from "../../assets/video.svg";
import "./about_video.scss";

export default function AboutVideo(props) {
  const { title } = props;
  return (
    <div className="about-us">
      <div className="about-us_title">{title}</div>
      <div className="about-us_video">
        <img src={Video} alt="video" className="about-us_video-img" />
      </div>
    </div>
  );
}
