import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

import "./team-carousel.scss";
import TeamCard from "../team_card";
import left from "../../assets/mingcute-left.svg";
import right from "../../assets/mingcute-right.svg";

export const TeamCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ ...options, loop: true }, [
    Autoplay(),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="team-embla">
      <div className="team-embla_wrapper">
        <div className="team-embla__descr">
          <div className="team-embla__title">TEAM</div>
          <div className="team-embla__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            auctor sed urna a faucibus. Pellentesque mi nisl, mollis convallis
            metus id, congue semper neque. Sed suscipit eget ipsum ut gravida.
            Fusce
          </div>
        </div>

        <section className="team-embla__buttons">
          <button
            className="team-embla__button team-embla__button--prev"
            onClick={scrollPrev}
          >
            <img src={left} alt="" />
            &#9664;
          </button>

          <button
            className="team-embla__button team-embla__button--next"
            onClick={scrollNext}
          >
            <img src={right} alt="" />
            &#9654;
          </button>
        </section>
      </div>

      <div className="team-embla__viewport" ref={emblaRef}>
        <div className="team-embla__container">
          {slides.map((slide, index) => (
            <div
              className={`team-embla__slide ${
                index === selectedIndex ? "selected" : ""
              }`}
              key={index}
            >
              <TeamCard name="Dave Johnson" title="St. Mechanic" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
