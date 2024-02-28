import TexnoLogo from "../../public/Assets/Images/Stores/texnomart-logo.png";
import IdeaLogo from "../../public/Assets/Images/Stores/idea-logo.png";
import MediaLogo from "../../public/Assets/Images/Stores/mediapark-logo.png";
import ElmakonLogo from "../../public/Assets/Images/Stores/elmakon-logo.png";
import Image from "next/image";
function Magazines() {
  return (
    <>
      <div className="mt-5 sm:mt-7 md:mt-[90px] sm:mx-14 mx-5 ">
        <div className="flex justify-around items-center lg:gap-10 sm:gap-5 gap-2">
          <h2 className=" hidden sm:block w-full text-center text-orange-500  font-medium border-b-2 border-orange-500 text-xs sm:text-lg py-1 ">
            Magazinlar:
          </h2>
          <div className=" w-full border shadow-md pt-1 pb-2 md:pt-2.5 bg-yellow-400  sm:bg-white sm:pb-3 sm:px-4 px-2 rounded-lg">
            <Image
              className="w-16 h-4 sm:w-[120px] mx-auto sm:h-5"
              src={TexnoLogo}
              width={500}
              height={500}
              alt="Texnomart*"
            />
          </div>
          <div className="border w-full shadow-md sm:py-2 py-1.5 px-4 rounded-lg">
            <Image
              className="h-3.5 w-[40px] sm:w-[80px] mx-auto sm:h-6"
              src={IdeaLogo}
              width={500}
              height={500}
              alt="Texnomart*"
            />
          </div>
          <div className="border w-full pt-1.5 pb-1 shadow-md px-4 rounded-lg">
            <Image
              className="sm:w-[120px] mx-auto sm:h-7"
              src={ElmakonLogo}
              width={500}
              height={500}
              alt="Texnomart*"
            />
          </div>
          <div className="border  w-full shadow-md py-2 px-4 rounded-lg">
            <Image
              className="h-3 sm:w-[120px] mx-auto sm:h-6"
              src={MediaLogo}
              width={500}
              height={500}
              alt="Texnomart*"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Magazines;
