import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, memo } from "react";
import "./image-carousel.scss";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";

export const ImageCarousel = memo(({ slides, options }) => {
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
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="overlay-content">
                <div className="image-carousel_embla__descr">
                  <div className="image-carousel_embla__descr-title">
                    STARSHIP CAPABILITIES
                  </div>
                  <div className="image-carousel_embla__descr-subtitle">
                    {slide.description}
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
});

export default ImageCarousel;
