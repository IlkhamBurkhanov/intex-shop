import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import CallBtn from "../ComponetntModuls/CallBtn/CallBtn";

function Hero() {
  const lang = useSelector((state) => state.data.lang);
  const languages = useSelector((state) => state.data.localization);

  return (
    <section className="mt-7 sm:mt-12 md:mt-32 mb-heroBottomMobile md:mb-heroBottom">
      <div className="w-full max-w-container mx-auto px-4">
        <div className="bg-gray-bg_main  rounded-3xl flex-col lg:flex-row flex lg:items-center justify-between">
          <div className="w-full max-w-container mx-auto">
            <div className="bg-gray-bg_main py-6 sm:pl-32 md:py-32 lg:py-21 pl-4 rounded-sectionRadius flex-col lg:flex-row flex lg:items-center justify-between">
              <div className="w-full lg:w-heroContent pr-4">
                <h1 className="font-bold text-2xl sm:text-4xl xl:text-5xl text-black-black_dark mb-4">
                  {languages[lang].hero.heading}
                </h1>
                <p className="font-normal text-sm lg:text-base text-black-black_thin mb-6 sm:mb-12">
                  {languages[lang].hero.text}
                </p>
                <div className="hidden sm:inline-block">
                  <CallBtn />
                </div>
              </div>
              <div className="flex justify-end">
                <Image
                  className="w-heroImg h-heroimgHeight hidden sm:inline-block"
                  id="hero-bg"
                  src={"/Assets/Images/HeaderAndHeroImg/hero-bg.png"}
                  width={571}
                  height={319}
                  alt="Hero Bg"
                />
                <Image
                  className="w-heroImgMobile h-heriImgMobile sm:hidden "
                  id="hero-bg"
                  src={"/Assets/Images/HeaderAndHeroImg/heroMobile.png"}
                  width={320}
                  height={160}
                  alt="Hero Bg"
                />
              </div>
              <div className="sm:hidden mt-7 pr-4">
                <CallBtn namejon={languages[lang].hero.button} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
