import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

import "./carousel.scss";
import RocketCard from "../rocket-card";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";

export const Carousel = (props) => {
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
  const scrollTo = (index) => emblaApi && emblaApi.scrollTo(index);

  return (
    <section className="embla">
      <div className="embla__title">Our rockets</div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div
              className={`embla__slide ${
                index === selectedIndex ? "selected" : ""
              }`}
              key={index}
            >
              <RocketCard info={slide} title={slide.title} />
            </div>
          ))}
        </div>
      </div>

      <section className="embla__footer">
        <button
          className="embla__button embla__button--prev"
          onClick={scrollPrev}
        >
          <img src={left} alt="" />
          &#9664;
        </button>

        <div className="embla__dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`embla__dot ${
                index === selectedIndex ? "is-selected" : ""
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>

        <button
          className="embla__button embla__button--next"
          onClick={scrollNext}
        >
          <img src={right} alt="" />
          &#9654;
        </button>
      </section>
    </section>
  );
};
