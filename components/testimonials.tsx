"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import "@/styles/embla.css";

import ArrowIcon from "@/assets/icons/arrow.svg";

import logo1 from "@/assets/images/testimonials/logo1.svg?url";
import logo2 from "@/assets/images/testimonials/logo2.svg?url";
import logo3 from "@/assets/images/testimonials/logo3.svg?url";
import logo4 from "@/assets/images/testimonials/logo4.svg?url";

import thumb1 from "@/assets/images/testimonials/thumb1.jpeg";
import thumb2 from "@/assets/images/testimonials/thumb2.jpeg";
import thumb3 from "@/assets/images/testimonials/thumb3.jpeg";
import thumb4 from "@/assets/images/testimonials/thumb4.jpeg";
import thumb5 from "@/assets/images/testimonials/thumb5.jpeg";
import { EmblaCarouselType } from "embla-carousel";

const testimonials = [
  {
    logo: logo1,
    thumb: thumb1,
    text: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    name: "Hellen Jummy",
    role: "Team Lead",
  },
  {
    logo: logo2,
    thumb: thumb2,
    text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
    name: "Hellena John",
    role: "Co-founder",
  },
  {
    logo: logo3,
    thumb: thumb3,
    text: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
    name: "David Oshodi",
    role: "Manager",
  },
  {
    logo: logo4,
    thumb: thumb4,
    text: "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
    name: "Charolette Hanlin",
    role: "CEO",
  },
  {
    logo: logo2,
    thumb: thumb5,
    text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
    name: "David Oshodi",
    role: "Co-founder",
  },
];

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export default function Testimonials() {
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="space-y-20 pb-14 pt-20">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 sm:px-12 lg:px-20">
        <h2 className="mx-auto text-center text-3xl font-bold sm:mx-0 sm:text-left lg:text-6xl lg:font-extrabold">
          Because they love us
        </h2>
        <div className="hidden items-center justify-center gap-x-6 text-byellow sm:flex">
          <button
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            className="active:bg-bdarkyellow active:border-bdarkyellow rounded-full border-2 border-byellow p-3 hover:bg-byellow hover:text-banana focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-byellow"
          >
            <ArrowIcon className="rotate-180" />
          </button>
          <button
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            className="active:bg-bdarkyellow active:border-bdarkyellow rounded-full border-2 border-byellow p-3 hover:bg-byellow hover:text-banana focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-byellow"
          >
            <ArrowIcon />
          </button>
        </div>
      </div>
      <div className="embla relative mx-auto max-w-screen-2xl">
        <div className="absolute bottom-12 left-0 right-0 -z-10 mx-auto h-[90%] w-full bg-[#FDE68A] sm:bottom-20 sm:w-[96%]" />
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container mb-6 mt-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="embla__slide overflow-visible">
                <div className="flex h-full flex-col gap-4 rounded-[20px] border border-[#E2E8F0] bg-white p-8 shadow-testimonial">
                  <Image src={testimonial.logo} alt="Logo" className="py-4" />
                  <p className="text-base xl:text-2xl">{testimonial.text}</p>
                  <div className="mt-auto flex items-center gap-x-4">
                    <Image
                      src={testimonial.thumb}
                      alt="Thumb"
                      width={64}
                      height={64}
                      className="size-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg">{testimonial.name}</h3>
                      <p className="text-[#475569]">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
