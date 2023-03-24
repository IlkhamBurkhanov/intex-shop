import React from "react";
import { useSelector } from "react-redux";

function CallBtn() {

  
const lang = useSelector(state=>state.data.lang)

const languages = useSelector(state=>state.data.localization)

  return (
    <a
      className={`mobileFull text-white font-medium text-base lg:text-lg py-3 sm:py-3.5 w-44 bg-blue-base inline-block text-center rounded-xl`}
      href="tel:+998901288182"
    >
      {languages[lang].hero.button}
    </a>
  );
}

export default CallBtn;
