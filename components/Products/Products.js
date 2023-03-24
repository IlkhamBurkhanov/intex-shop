import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import Card from "../Card/Card";
import { setCategoryId } from "../../redux/siteDataReducer";
import { useEffect } from "react";
import axios from "axios";
import { Spinner } from "../Spinner/Spinner";
import Down from "../../public/Assets/Images/NaduvniyImg/down.svg";
import MultiRangeSlider from "../ComponetntModuls/MultiRange/MultiRange.js";
const env = process.env.NEXT_PUBLIC_TOKEN;

export default function Products({ data }) {
  const [loader, setLoader] = useState(false);
  const search = useSelector((state) => state.data.search);
  const lang = useSelector((state) => state.data.lang);
  const languages = useSelector((state) => state.data.localization);
  const categoryId = useSelector((state) => state.data.categoryId);
  const dispatch = useDispatch();
  const [heading, setHeading] = useState({});
  const [minValue, set_minValue] = useState(100);
  const [maxValue, set_maxValue] = useState(500);
  const [rotateEl, setRotateEl] = useState(false);
  const [menuCatOpen, setMenuCatOpen] = useState(false);
  const [sortBtn, setSortBtn] = useState(false);
  const [filter, setFilter] = useState([]);
  const [checked, setChecked] = useState(0);
  const [checked2, setChecked2] = useState(0);

  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  // --- Get Products
  useEffect(() => {
    setLoader(true);
    axios
      .get(`${env}categories`)
      .then((res) => setHeading(res?.data.find((el) => el.id == categoryId)))
      .catch((err) => console.error(err))
      .finally(() => setLoader(false));
  }, [categoryId]);

  // --- Search
  function searchProduct(inputValue, data) {
    let regex = new RegExp(inputValue, "gi");
    const filterInput = data.filter((product) =>
      product[`name_${lang}`].match(regex)
    );

    return filterInput;
  }
  console.log(heading);
  const handleClick = () => {
    setRotateEl(!rotateEl);
  };
  useEffect(() => {
    axios.get(`${env}products?page=0&limit=100`).then((res) => {
      console.log(res);
      setFilter(res?.data?.result);
      // setLoader(false);
    });
  }, []);
  console.log(filter);
  const handleClicked = () => {
    // Chckedboxs
    // const filterData = filter.filter((item) => {
    //   return checked && checked2 ? item.category_id === 1 && 2 : item;
    // });
    const filterData = filter.filter((item) => {
      return item.discount_price > minValue;
    });
    console.log(filterData);
    console.log(checked);
  };
  return (
    <section className="mt-7 md:mt-32">
      <div className="max-w-container mx-auto w-full px-5">
        <div className="">
          <p className="flex items-center text-base text-black-black_thin">
            <Link
              href={`/`}
              className="text-blue-accent"
              onClick={() => dispatch(setCategoryId(0))}
            >
              {languages[lang].naduvniy.route}
            </Link>
            <Image
              className="mx-1"
              src={"/Assets/Images/NaduvniyImg/down.svg"}
              width={24}
              height={24}
              alt="Arrow_down"
            />
            {lang === "ru"
              ? heading.category_ru
              : lang === "uz"
              ? heading.category_uz
              : heading.category_en}
          </p>
          <div className="flex  justify-between items-center">
            <h2 className="font-bold text-xl md:text-3xl text-black-black_dark mt-5 md:mt-6 mb-5">
              {lang === "ru"
                ? heading.category_ru
                : lang === "uz"
                ? heading.category_uz
                : heading.category_en}
            </h2>
            <div className="flex justify-between items-center">
              <strong className="text-base text-[#24283A] mr-2.5">
                Сортировка
              </strong>
              <div
                // onClick={() => setSortBtn(!sortBtn)}
                onClick={() => setMenuCatOpen(!menuCatOpen)}
                className="w-[170px] relative cursor-pointer  flex items-center justify-between  bg-[#F2F2F2] p-3 rounded-xl"
              >
                <span className="font-medium text-sm  text-homeSortWrap">
                  {/* {languages[lang].main.as} */}По А-Я
                </span>
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 11L12 14L15 11"
                    stroke="#04009A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <ul
                  className={` ${
                    menuCatOpen
                      ? "h-auto border-b-2  duration-200"
                      : "h-0  duration-200 overflow-hidden"
                  }  w-[170px]  absolute rounded-lg  mt-[120px] z-50  bg-white`}
                >
                  <li>
                    <span
                      className="font-normal  text-homeSortWrap text-sm mt-2  pl-3 inline-block text-black-black_thin cursor-pointer"
                      onClick={() => {
                        setMenuCatOpen(false);
                        // setClickMenu(false);
                        setSortBtn(!sortBtn);
                      }}
                    >
                      Цена по убыванию
                    </span>
                  </li>
                  <li>
                    <span
                      className="font-normal  text-homeSortWrap text-sm mt-2 pl-3 inline-block  text-black-black_thin cursor-pointer"
                      onClick={() => {
                        setMenuCatOpen(false);
                        // setClickMenu(false);
                        setSortBtn(!sortBtn);
                      }}
                    >
                      Цена по возрастанию
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="">
            {loader ? (
              <div className="w-16 h-20 md:w-[1185px] md:h-[200px] flex items-center justify-center">
                <Spinner />
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-5  text-[#464A4D]">
                <div className=" col-span-1 mt-8 ">
                  <div className="shadow-card_shadow">
                    {" "}
                    <div className="flex justify-between border-b-1 m-4 pb-4 ">
                      <h1 className=" font-bold text-lg">Фильтр</h1>
                      <p className="text-[#109EF4] font-bold text-sm">
                        Сбросить(11)
                      </p>
                    </div>
                    <div className="mx-4 text-[#464A4D] border-b-1 pb-4">
                      <h2 className="font-bold text-lg">Категории</h2>
                      <label className="flex gap-2 mt-4">
                        <input
                          className="w-4 h-4 mt-1"
                          type="checkbox"
                          onChange={(e) =>
                            e.target.checked ? setChecked(1) : setChecked(0)
                          }
                        />
                        <p className=" font-500">Надувные бассейны</p>
                      </label>
                      <label className="flex gap-2 mt-4">
                        <input
                          className="w-4 h-4 mt-1"
                          type="checkbox"
                          onChange={(e) =>
                            e.target.checked ? setChecked2(1) : setChecked2(0)
                          }
                        />
                        <p className=" font-500">Каркасные бассейны</p>
                      </label>
                      <label className="flex gap-2 mt-4">
                        <input className="w-4 h-4 mt-1" type="checkbox" />
                        <p className=" font-500">Все чистки бассейна</p>
                      </label>
                      <label className="flex gap-2 mt-4">
                        <input className="w-4 h-4 mt-1" type="checkbox" />
                        <p className=" font-500">Аксессуары для бассейна</p>
                      </label>
                    </div>
                    <div className="mx-4 mt-4 border-b-1 pb-4 ">
                      <h2 className=" font-bold text-lg">Цена</h2>
                      <label className="flex justify-between mt-3">
                        <p className="text-sm text-[#828282] mt-1">
                          Выберите валюту
                        </p>
                        <select className=" text-sm py-2 bg-[#F2F2F2] rounded-md">
                          <option>СУМ</option>
                          <option>ДОЛЛ</option>
                          <option>РУБ</option>
                        </select>
                      </label>
                      <label className="flex mt-5">
                        <MultiRangeSlider
                          minValue={minValue}
                          maxValue={maxValue}
                          min={50}
                          max={1000}
                          set_maxValue={set_maxValue}
                          set_minValue={set_minValue}
                        />
                      </label>
                      <label className="flex gap-2.5 mt-6">
                        <input
                          type="number"
                          value={minValue}
                          className="p-2.5 w-full rounded-md bg-[#F2F2F2]"
                          onChange={(e) => set_minValue(e.target.value)}
                        />
                        <input
                          type="number"
                          value={maxValue}
                          className="p-2.5 w-full rounded-md bg-[#F2F2F2]"
                          onChange={(e) => set_maxValue(e.target.value)}
                        />
                      </label>
                    </div>
                    <div className="mx-4 mt-4">
                      <h2 className="font-bold text-lg">По типам</h2>

                      <div className=" max-w-738 mx-auto py-7 cursor-pointer ">
                        <div
                          onClick={handleClick}
                          className={`flex justify-between mb-4 sm:mb-0`}
                        >
                          <div>
                            <input type="checkbox" className="w-4 h-4 mt-1" />
                            <span className="ml-2">Все типы</span>
                          </div>
                          <div>
                            <Image className="" src={Down} alt=">" />
                            <div className={`relative hidden sm:flex`}>
                              <span
                                className={`inline-block absolute w-5 h-0.5 `}
                              ></span>
                              <span
                                className={`inline-block absolute  ${
                                  rotateEl ? "" : "rotate-90"
                                }  w-5 h-0.5 duration-300 `}
                              ></span>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`duration-300 ${
                            rotateEl
                              ? "  pt-4 sm:overflow-auto "
                              : " sm:h-0 sm:overflow-hidden"
                          }`}
                        >
                          <ul className="px-5">
                            <li>
                              <input type="checkbox" className="w-4 h-4 mt-1" />
                              <span className="ml-2">Хит продаж</span>
                            </li>
                            <li className="mt-4">
                              <input type="checkbox" className="w-4 h-4 mt-1" />
                              <span className="ml-2">Новинки</span>
                            </li>
                            <li className="mt-4">
                              <input type="checkbox" className="w-4 h-4 mt-1" />
                              <span className="ml-2">Скидка</span>
                            </li>
                            <li className="mt-4">
                              <input type="checkbox" className="w-4 h-4 mt-1" />
                              <span className="ml-2">Pекомендуем</span>
                            </li>
                            <li className="mt-4">
                              <input type="checkbox" className="w-4 h-4 mt-1" />
                              <span className="ml-2">Обичные</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <button
                        onClick={handleClicked}
                        className="w-full text-center py-3 mb-8 mt-20  bg-[#2B3D90] rounded-xl text-white text-lg"
                      >
                        Поиск
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 w-full grid grid-cols-3 grid-rows-2 gap-5 mt-3">
                  {search.length > 0
                    ? searchProduct(search, data).map((el) => {
                        return (
                          <Card
                            key={el?.id}
                            id={el?.id}
                            data={data}
                            image={el?.image}
                            attributes={el?.attributes}
                            sub_attributes={el?.sub_attributes}
                            status_ru={el?.status_ru}
                            status_en={el?.status_en}
                            status_uz={el?.status_uz}
                            name_ru={el?.name_ru}
                            name_en={el?.name_en}
                            name_uz={el?.name_uz}
                            price={el?.price}
                            sale={el?.discount_price}
                          />
                        );
                      })
                    : data.map((el) => {
                        return (
                          <Card
                            key={el?.id}
                            id={el?.id}
                            data={data}
                            image={el?.image}
                            attributes={el?.attributes}
                            sub_attributes={el?.sub_attributes}
                            status_ru={el?.status_ru}
                            status_en={el?.status_en}
                            status_uz={el?.status_uz}
                            name_ru={el?.name_ru}
                            name_en={el?.name_en}
                            name_uz={el?.name_uz}
                            price={el?.price}
                            sale={el?.discount_price}
                          />
                        );
                      })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
