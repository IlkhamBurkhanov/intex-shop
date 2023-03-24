import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
import "swiper/css";

const env = process.env.NEXT_PUBLIC_TOKEN;
const img = process.env.NEXT_PUBLIC_IMG;

const InfoTovar = () => {
  const [product, setProduct] = useState([]);
  const [numberProduct, setNumberProduct] = useState(8);

  //intex-shop-production.up.railway.app/api/products/getOne/4
  //   https://intex-shop-production.up.railway.app/api/products?page=0&limit=100
  useEffect(() => {
    axios.get(`${env}products/getOne/12`).then((res) => {
      console.log(res);
      setProduct(res?.data);
      // setLoader(false);
    });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  product[0]?.image.map((item, i) => console.log(item));

  return (
    <div className="">
      <div className="mt-[114px] mx-[130px]">
        <p className="flex items-center text-base text-black-black_thin">
          <Link
            href={`/`}
            className="text-blue-accent"
            onClick={() => dispatch(setCategoryId(0))}
          >
            Главная
          </Link>
          <Image
            className="mx-1"
            src={"/Assets/Images/NaduvniyImg/down.svg"}
            width={24}
            height={24}
            alt="Arrow_down"
          />
          <Link href={`/`} className="text-blue-accent">
            Надувные бассейны
          </Link>
          <Image
            className="mx-1"
            src={"/Assets/Images/NaduvniyImg/down.svg"}
            width={24}
            height={24}
            alt="Arrow_down"
          />
          {product[0]?.name_ru}
        </p>
        <div className="grid grid-cols-2 gap-5 mt-10">
          <div className=" col-span-1">
            <div className="border-2 rounded-xl ">
              <Image
                className="object-cover w-full h-[370px]"
                //   src="https://intex-shop-production.up.railway.app/4fd83180c12c832b46cfdb5b4c245810b.png"
                src={`${img}${product[0]?.image[0]}`}
                // https://intex-shop-production.up.railway.app/4fd83180c12c832b46cfdb5b4c245810b.png
                alt="Success_image"
                width={680}
                height={370}
              />
            </div>

            <Swiper
              spaceBetween={50}
              slidesPerView={
                product[0]?.image.length > 5 ? 5 : product[0]?.image.length
              }
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {product
                ? product[0]?.image.map((item, i) => {
                    return (
                      <SwiperSlide className="mt-2.5">
                        {" "}
                        <Image
                          key={i}
                          className="object-cover w-[80px] h-[66px] border rounded-md"
                          src={`${img}${item}`}
                          width={80}
                          height={66}
                        />
                      </SwiperSlide>
                    );
                  })
                : null}
            </Swiper>

            <div className="mt-10">
              <h2 className=" text-2xl text-[#000000] font-bold">
                Описание товара
              </h2>
              <p className="mt-6 text-[#464A4D] text-sm leading-7">
                Сборный бассейн Intex Rectangular Frame Pool легко и быстро
                устанавливается. Процесс сборки занимает 30 минут (до наполнения
                водой). Технология Super-Tough придает стенкам бассейна тройную
                прочность. Они сделаны из трех слоев: два слоя плотного винила и
                один — полиэстер для особой прочности. Стальной каркас
                выдерживает большие нагрузки, в нем одновременно могут купаться
                несколько человек
              </p>
              <p className="mt-6 text-[#464A4D] text-sm leading-7">
                У бассейна есть сливной клапан, который присоединяется к
                садовому шлангу. Воду из можно слить в любое удобное место.
                Также есть отверстия для подключения фильтрующего насоса.
              </p>
            </div>
            <div className="mt-5 text-sm leading-7">
              <h2 className="font-bold">Характеристики товара</h2>
              <p>
                {" "}
                Размеры: <span>220х150х60 см</span>{" "}
              </p>
              <p>
                Объем: <span>2 282 л</span>
              </p>
              <p>
                Время сборки: <span>20 мин</span>
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <h1 className="font-bold text-2xl">
              Бассейн надувной круглый наливной семейный Intex Easy Set 244х76
              см
            </h1>
            <p className=" text-[#D0CFCF] leading-6 mt-6 line-through">
              1 200 000 сум
            </p>
            <p className=" text-[#109EF4] text-lg font-bold">1 100 000 сум</p>
            <div className="flex mt-6 items-center">
              <h2 className=" text-xs text-[#666666]">Количество: </h2>
              <div className="flex flex-row w-[38px]  h-[32px] ml-3">
                <button
                  onClick={() =>
                    numberProduct == 1
                      ? setNumberProduct(numberProduct)
                      : setNumberProduct(numberProduct - 1)
                  }
                  className="px-3 ml-1.5 w-[38px] h-8  text-2xl border rounded-l-[5px] bg-[#F2F2F2]"
                >
                  -
                </button>
                <h3 className="px-3 border w-12 pt-1 h-8 text-center   text-black">
                  {numberProduct}
                </h3>
                <button
                  onClick={() => setNumberProduct(numberProduct + 1)}
                  className="px-3 text-2xl w-[38px] h-8 border rounded-r-[5px] bg-[#F2F2F2]"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex mt-4 items-center">
              <h2 className=" text-xs text-[#666666]">Размеры: </h2>
              <select className="border py-3 ml-3 pl-4 w-[330px] outline-none rounded-lg">
                <option>220х150х60см</option>
              </select>
            </div>
            <div className="flex gap-4 mt-6">
              <button className="bg-[#2B3D90] text-lg py-2.5 px-5  rounded-lg text-white">
                Продолжить покупки
              </button>
              <button className="bg-[#109EF4] text-lg py-2.5 px-7 flex rounded-lg text-white">
                <Image
                  priority={true}
                  className="w-6 h-6 text-white mr-2"
                  src={"/Assets/Images/HeaderAndHeroImg/backetWhite.svg"}
                  width={24}
                  height={24}
                  alt="Blog Img"
                />
                В корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoTovar;
