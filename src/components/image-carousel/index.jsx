import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

import "./image-carousel.scss";
import Rocket from "../../assets/rocket_background.svg";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";

export const ImageCarousel = (props) => {
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
    <section className="image-carousel_embla">
      <div className="image-carousel_embla__viewport" ref={emblaRef}>
        <div className="image-carousel_embla__container">
          {slides.map((slide, index) => (
            <div
              className={`image-carousel_embla__slide ${
                index === selectedIndex ? "selected" : ""
              }`}
              key={index}
              /*               style={{ backgroundImage: `url(${Rocket})` }} */
            >
              <img
                src={Rocket}
                alt=""
                className="image-carousel_embla-background"
              />
              <div className="overlay-content">
                <div className="image-carousel_embla__descr">
                  <div className="image-carousel_embla__descr-title">
                    STARSHIP CAPABILITIES
                  </div>
                  <div className="image-carousel_embla__descr-subtitle">
                    As the most powerful launch system ever developed, Starship
                    will be able to carry up to 100 people on long-duration,
                    interplanetary flights. Starship will also help enable
                    satellite delivery, the development of a Moon base, and
                    point-to-point transport here on Earth.
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="image-carousel_embla__controls">
          <button
            className="image-carousel_embla__button image-carousel_embla__button--prev"
            onClick={scrollPrev}
          >
            <img src={left} alt="Previous" />
          </button>

          <div className="image-carousel_embla__dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`image-carousel_embla__dot ${
                  index === selectedIndex ? "is-selected" : ""
                }`}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>

          <button
            className="image-carousel_embla__button image-carousel_embla__button--next"
            onClick={scrollNext}
          >
            <img src={right} alt="Next" />
          </button>
        </div>
      </div>
    </section>
  );
};
