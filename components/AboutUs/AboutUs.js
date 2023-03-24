import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function AboutUs() {
  useEffect(() => {
    AOS.init();
  }, []);

  const lang = useSelector((state) => state.data.lang);
  const languages = useSelector((state) => state.data.localization);

  return (
    <section id="pochemu" className="my-10 lg:my-40 mb-20">
      <div className="max-w-[1220px] mx-auto px-4">
        <h2 className="text-black text-lg sm:text-3xl font-bold mb-10">
          {languages[lang].choose_us.header}
        </h2>
        <div className="flex-col flex items-center flex-wrap lg:flex-row lg:justify-between">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mb-6 sm:mb-0"
          >
            <Image
              className="w-full object-cover sm:w-96 h-56 mb-4"
              src={"/Assets/Images/HeaderAndHeroImg/about-man.png"}
              width={380}
              height={220}
              alt="About_Man_Img"
            />
            <strong className="text-base sm:text-lg font-bold mb-2.5">
              {languages[lang].choose_us.head_title1}
            </strong>
            <p className="text-sm  sm:text-base text-black-black_thin">
              {languages[lang].choose_us.texts.text1}
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="ml-1 mb-6 sm:mb-0"
          >
            <Image
              className="w-full object-cover sm:w-96 h-56 mb-4"
              src={"/Assets/Images/HeaderAndHeroImg/about-car.png"}
              width={380}
              height={220}
              alt="About Man Img"
            />
            <strong className="text-base sm:text-lg font-bold mb-2.5">
              {languages[lang].choose_us.head_title2}
            </strong>
            <p className="text-sm sm:text-base text-black-black_thin">
              {languages[lang].choose_us.texts.text2}
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="ml-1 sm:mb-0"
          >
            <Image
              className="w-full object-cover sm:w-96 h-56 mb-4"
              src={"/Assets/Images/HeaderAndHeroImg/about-pool.png"}
              width={380}
              height={220}
              alt="About Man Img"
            />
            <strong className="text-base sm:text-lg font-bold mb-2.5">
              {languages[lang].choose_us.head_title3}
            </strong>
            <p className="text-sm sm:text-base text-black-black_thin">
              {languages[lang].choose_us.texts.text3}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
