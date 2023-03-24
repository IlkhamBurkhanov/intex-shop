import React from "react";
import Image from "next/image";
import LineSvg from "../../public/Assets/Images/LoginUser/line.svg";
import { useState } from "react";

function AddinfoUser() {
  const [days, setDays] = useState(false);
  const [month, setMonth] = useState(false);
  const [year, setYear] = useState(false);
  const [dayNum, setDayNum] = useState(null);
  const [monthNum, setMonthNum] = useState("");
  const [yearNum, setYearNum] = useState("");
  const [edit, setEdit] = useState(true);
  const handleClick1 = () => {
    setDays(!days);
  };
  const handleClick2 = () => {
    setMonth(!month);
  };
  const handleClick3 = () => {
    setYear(!year);
  };
  const closeEdit = () => {
    setEdit(!edit);
  };
  return (
    <div>
      {edit ? (
        <div className="flex  border rounded-lg flex-col py-[30px] px-7">
          <div>
            <h1 className="text-[22px]">Персональная информация</h1>
            <p className=" text-[#00000080]">
              Вы можете обновить свою учетную запись в любое время и внести
              любые изменения в данные ниже.
            </p>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-8">
            <label className="w-full">
              <h2 className="text-[#24283A] font-500">Ваше имя</h2>
              <input
                placeholder="Введите ваше имя"
                type="text"
                className="p-4 w-full border mt-3 rounded-lg"
              />
            </label>
            <label className="w-full">
              <h2 className="text-[#24283A] font-500">Ваше фамилия</h2>
              <input
                placeholder="Введите ваше фамилия"
                type="text"
                className="p-4 w-full border mt-3 rounded-lg"
              />
            </label>
            <label className="w-full">
              <h2 className="text-[#24283A] font-500">Телефонный номер</h2>
              <input
                placeholder="Введите Телефонный номер"
                type="text"
                className="p-4 w-full border mt-3 rounded-lg"
              />
            </label>
            <label className="w-full">
              <h2 className="text-[#24283A] font-500">
                Адрес электронной почты
              </h2>
              <input
                placeholder="Адрес электронной почты"
                type="text"
                className="p-4 w-full border mt-3 rounded-lg"
              />
            </label>
          </div>
          <div className="mt-5">
            <h2 className="text-[#24283A] font-500">Дата рождение</h2>
            <div className="flex gap-5">
              <label
                onClick={handleClick1}
                className="border flex mt-3 justify-between items-center w-[100px] pr-4 rounded-md"
              >
                <input
                  value={dayNum === null ? "День" : dayNum}
                  type="number"
                  className="py-3 rounded-lg px-2.5 w-full outline-none"
                  onChange={(e) => setDayNum(e.target.value)}
                />
                <Image
                  priority={true}
                  onClick={handleClick2}
                  className={`${
                    days
                      ? "-rotate-180 duration-300"
                      : "-rotate-90 duration-300"
                  }  w-4 h-4`}
                  src={"/Assets/Images/HeaderAndHeroImg/drop-imgblack.svg"}
                  width={9}
                  height={5}
                  alt="Drop img"
                />
                {days ? (
                  <div className="w-[100px] mt-[180px] rounded-xl bg-white h-[120px] shadow-card_shadow absolute overflow-y-auto">
                    <ul className="gap-1.5 ml-4 mt-2">
                      <li onClick={() => setDayNum(1)}>01</li>
                      <li onClick={() => setDayNum(2)}>02</li>
                      <li onClick={() => setDayNum(3)}>03</li>
                      <li onClick={() => setDayNum(4)}>04</li>
                      <li onClick={() => setDayNum(5)}>05</li>
                      <li onClick={() => setDayNum(6)}>06</li>
                      <li onClick={() => setDayNum(7)}>07</li>
                      <li onClick={() => setDayNum(8)}>08</li>
                      <li onClick={() => setDayNum(9)}>09</li>
                      <li onClick={() => setDayNum(10)}>10</li>
                      <li onClick={() => setDayNum(11)}>11</li>
                      <li onClick={() => setDayNum(12)}>12</li>
                      <li onClick={() => setDayNum(13)}>13</li>
                      <li onClick={() => setDayNum(14)}>14</li>
                      <li onClick={() => setDayNum(15)}>15</li>
                      <li onClick={() => setDayNum(16)}>16</li>
                      <li onClick={() => setDayNum(17)}>17</li>
                      <li onClick={() => setDayNum(18)}>18</li>
                      <li onClick={() => setDayNum(19)}>19</li>
                      <li onClick={() => setDayNum(20)}>20</li>
                      <li onClick={() => setDayNum(21)}>21</li>
                      <li onClick={() => setDayNum(22)}>22</li>
                      <li onClick={() => setDayNum(23)}>23</li>
                      <li onClick={() => setDayNum(24)}>24</li>
                      <li onClick={() => setDayNum(25)}>25</li>
                      <li onClick={() => setDayNum(26)}>26</li>
                      <li onClick={() => setDayNum(27)}>27</li>
                      <li onClick={() => setDayNum(28)}>28</li>
                      <li onClick={() => setDayNum(29)}>29</li>
                      <li onClick={() => setDayNum(30)}>30</li>
                    </ul>
                  </div>
                ) : null}
              </label>
              <label
                onClick={handleClick2}
                className="border flex mt-3 justify-between items-center w-[210px] pr-4 rounded-md"
              >
                <input
                  value={monthNum}
                  type="text"
                  className="py-3 px-2.5 w-full outline-none"
                  onChange={(e) => setMonthNum(e.target.value)}
                />
                <Image
                  priority={true}
                  onClick={handleClick2}
                  className={`${
                    month
                      ? "-rotate-180 duration-300"
                      : "-rotate-90 duration-300"
                  }  w-4 h-4`}
                  src={"/Assets/Images/HeaderAndHeroImg/drop-imgblack.svg"}
                  width={9}
                  height={5}
                  alt="Drop img"
                />
                {month ? (
                  <div className="w-[210px] mt-[180px] rounded-xl bg-white h-[120px] shadow-card_shadow absolute overflow-y-auto">
                    <ul className="gap-1.5 ml-4 mt-2">
                      <li onClick={() => setMonthNum("January")}>January</li>
                      <li onClick={() => setMonthNum("February")}>February</li>
                      <li onClick={() => setMonthNum("March")}>March</li>
                      <li onClick={() => setMonthNum("April")}>April</li>
                      <li onClick={() => setMonthNum("May")}>May</li>
                      <li onClick={() => setMonthNum("June")}>June</li>
                      <li onClick={() => setMonthNum("July")}>July</li>
                    </ul>
                  </div>
                ) : null}
              </label>
              <label
                onClick={handleClick3}
                className="border flex mt-3 justify-between items-center w-[140px] pr-4 rounded-md"
              >
                <input
                  value={yearNum}
                  type="text"
                  className="py-3 px-2.5 w-full outline-none"
                  onChange={(e) => setYearNum(e.target.value)}
                />
                <Image
                  priority={true}
                  onClick={handleClick3}
                  className={`${
                    year
                      ? "-rotate-180 duration-300"
                      : "-rotate-90 duration-300"
                  }  w-4 h-4`}
                  src={"/Assets/Images/HeaderAndHeroImg/drop-imgblack.svg"}
                  width={9}
                  height={5}
                  alt="Drop img"
                />
                {year ? (
                  <div className="w-[140px] mt-[180px] rounded-xl bg-white h-[120px] shadow-card_shadow absolute overflow-y-auto">
                    <ul className="gap-1.5 ml-4 mt-2">
                      <li onClick={() => setYearNum("1990")}>1990</li>
                      <li onClick={() => setYearNum("1991")}>1991</li>
                      <li onClick={() => setYearNum("1992")}>1992</li>
                      <li onClick={() => setYearNum("1993")}>1993</li>
                      <li onClick={() => setYearNum("1994")}>1994</li>
                      <li onClick={() => setYearNum("1995")}>1995</li>
                      <li onClick={() => setYearNum("1996")}>1996</li>
                      <li onClick={() => setYearNum("1997")}>1997</li>
                      <li onClick={() => setYearNum("1998")}>1998</li>
                    </ul>
                  </div>
                ) : null}
              </label>
            </div>
          </div>
          <div className="mt-5">
            <h1 className=" text-lg">
              Ваш пол<span className="text-red-500">*</span>
            </h1>
            <div className="mt-5 flex gap-5">
              <label className="flex gap-2.5 items-center">
                <input className="w-[18px] h-[18px] " type="checkbox" />
                <p className="text-lg text-[#000000a6]">Мужчина</p>
              </label>
              <Image src={LineSvg} alt="|" />
              <label className="flex gap-2.5 items-center">
                <input className="w-[18px] h-[18px] " type="checkbox" />
                <p className="text-lg text-[#000000a6]">Женщина</p>
              </label>
            </div>
          </div>
          <button
            onClick={closeEdit}
            className=" bg-[#2B3D90] py-3 px-[52px] w-[200px] rounded-xl text-white mt-5 mx-auto"
          >
            Сохранить{" "}
          </button>
        </div>
      ) : (
        <div className="py-[30px]  border rounded-lg px-7">
          <div className="flex justify-between ">
            <h1 className="text-[22px] leading-8 font-500 text-[#000000de]">
              Персональная информация
            </h1>
            <button
              className="py-2 px-[32px] bg-[#2B3D90] rounded-xl text-white"
              onClick={closeEdit}
            >
              Изменить{" "}
            </button>
          </div>
          <div className="flex justify-between mt-5 border-b-2 rounded-xl px-3 py-4">
            <p className=" text-[#666666]">Ваше имя</p>
            <h2 className="text-[#000000de] font-500">Rustam</h2>
          </div>
          <div className="flex justify-between mt-5 border-b-2 rounded-xl px-3 py-4">
            <p className=" text-[#666666]">Ваше фамилия</p>
            <h2 className="text-[#000000de] font-500">Samandarov</h2>
          </div>
          <div className="flex justify-between mt-5 border-b-2 rounded-xl px-3 py-4">
            <p className=" text-[#666666]">Телефонный номер</p>
            <h2 className="text-[#000000de] font-500">+998 99 999 99 99</h2>
          </div>
          <div className="flex justify-between mt-5 border-b-2 rounded-xl px-3 py-4">
            <p className=" text-[#666666]">Адрес электронной почты</p>
            <h2 className="text-[#000000de] font-500">
              Tashkent, Chilanzar 19-7-10
            </h2>
          </div>
          <div className="flex justify-between mt-5 border-b-2 rounded-xl px-3 py-4">
            <p className=" text-[#666666]">Дата рождение</p>
            <h2 className="text-[#000000de] font-500">1999/01/01</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddinfoUser;
