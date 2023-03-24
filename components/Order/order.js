import React from "react";

import Image from "next/image";
import Money from "../../public/Assets/Images/HeaderAndHeroImg/Money.svg";
import UzCard from "../../public/Assets/Images/HeaderAndHeroImg/UZcard.svg";
import Link from "next/link";

function Order() {
  return (
    <div>
      <div className="bg-white flex items-center w-full pt-1.5 mx-20 pb-1.5 mb-[70px] px-8">
        <Link href="#" className="flex items-center">
          <h2 className="font-normal text-[#109EF4] text-xs ml-2.5">Главная</h2>
        </Link>
        <span className="ml-2.5 text-[#109EF4] ">/</span>
        <Link href="_basket">
          <h2 className="font-normal text-[#109EF4] text-xs ml-2.5">Корзина</h2>
        </Link>
        <span className="ml-2.5 text-[#109EF4] ">/</span>
        <Link href="order">
          <h2 className="font-normal text-[#109EF4] text-xs ml-2.5">
            Оформить заказ
          </h2>
        </Link>
      </div>
      <div>
        <h2 className="text-center font-bold text-2xl">Oформлению заказа</h2>
        <div className="grid grid-cols-3 mx-20 mt-12">
          <div className="col-span-2">
            <h1 className=" text-lg font-500">1. Личные данные</h1>
            <div className="flex justify-between gap-5">
              <label className="w-full">
                <h2 className="mt-5 text-[#24283A] font-[550]">Имя</h2>
                <input
                  className="w-full h-12 border px-3 rounded-lg mt-3"
                  placeholder="Введите ваше имя"
                />
              </label>
              <label className="w-full ">
                <h2 className="mt-5 text-[#24283A] font-[550]">
                  Номер телефона
                </h2>
                <div className=" flex items-center pl-4  mt-3 w-full h-48 text-base rounded-lg p-1 outline-none border  border-gray-input_radius mb-4 sm:mb-6">
                  <Image
                    src={"/Assets/Images/BuyAll/Flag.svg"}
                    className="w-auto h-auto"
                    width={22}
                    height={15}
                    alt="site_logo"
                  />
                  <span className="text-base text-black ml-1">+998</span>
                  <input
                    type="number"
                    name="number"
                    id="number"
                    placeholder="(90) 123 45 67"
                    className=" outline-none w-full sm:ml-4 h-full  "
                  />
                </div>
                {/* <input
                  className="w-[408px] h-12 border px-3 rounded-lg mt-3"
                  placeholder="Введите ваше имя"
                /> */}
              </label>
            </div>
            <h2 className="font-500 text-lg mt-1">2. Выберите способ оплаты</h2>
            <div className="flex justify-between mt-5 gap-7">
              <button className="flex justify-center items-center w-full border rounded-md h-14  hover:bg-[#605dec14]">
                <Image src={Money} /> Наличными
              </button>
              <button className="flex justify-center items-center w-full border rounded-md h-14  hover:bg-[#605dec14]">
                <Image src={UzCard} /> Uzcard/Humo
              </button>
              <button className=" flex justify-center items-center w-full border rounded-md h-14  hover:bg-[#605dec14]">
                <Image src={UzCard} /> Payme/Click
              </button>
            </div>
            <h3 className="font-500 text-lg mt-7">3. Ваши детали доставки</h3>
            <div className="flex justify-between mt-5 gap-5">
              <label className="w-full">
                <h2>Регион</h2>
                <select className="w-full border h-12 mt-3 rounded-lg px-4">
                  <option className="text-[#B4B6B8]">Выбирите</option>
                  <option>Uzbekistan</option>
                </select>
              </label>
              <label className="w-full">
                <h2>Город</h2>
                <select className="w-full border h-12 mt-3 rounded-lg px-4">
                  <option className="text-[#B4B6B8]">Выбирите</option>
                  <option>Qoqon</option>
                </select>
              </label>
            </div>
            <div className="grid grid-cols-8 gap-7 mt-7">
              <label className="col-span-6">
                <h2 className="font-500">Address</h2>
                <input
                  className="border w-full h-12 mt-3 rounded-lg placeholder:text-[#B4B6B8] px-4"
                  placeholder="Введите ваше адрес"
                />
              </label>
              <label className="col-span-2">
                <h2 className="font-500">Этаж</h2>
                <input
                  className="border w-full h-12 mt-3 rounded-lg placeholder:text-[#B4B6B8] px-4"
                  placeholder="Если есть"
                />
              </label>
            </div>
            <div className="mt-7">
              <h2 className="font-500">Комментарий</h2>
              <input
                className="border w-full h-12 mt-3 rounded-lg placeholder:text-[#B4B6B8] px-4"
                placeholder="Комментарий"
              />
            </div>
            <button className="w-full h-12 text-white bg-[#2B3D90] text-center text-lg rounded-lg mt-10">
              Оформить заказ
            </button>
          </div>
          <div className="border ml-6 p-7 rounded-md  h-[366px]">
            <div className=" flex justify-between">
              <h2 className=" text-lg">В корзине (2)</h2>
              <p className="text-lg"> 1 290 000 сум</p>
            </div>
            <div className="flex justify-between  mt-3">
              <h2 className="text-lg">Скидка:</h2>
              <p className="text-lg"> 1 290 000 cyм</p>
            </div>
            <div className="flex justify-between mt-3">
              <h2 className="text-lg">Доставка:</h2>
              <p className="text-lg"> 20 000 cyм</p>
            </div>

            <h1 className=" border-y-1 py-7 pl-4 mt-7 text-[22px]">
              Всего к оплате : <span className="pl-4"> 1 290 000 sum</span>
            </h1>
            <button className="px-[42px] w-full py-3 mb-8 mt-5 bg-[#2B3D90] rounded-xl text-white text-lg">
              Изменить заказ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
