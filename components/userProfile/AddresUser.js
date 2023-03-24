import React from "react";
import AddIcon from "../../public/Assets/Images/LoginUser/addresIcon.svg";
import DelIcon from "../../public/Assets/Images/LoginUser/delete.svg";
import EditIcon from "../../public/Assets/Images/LoginUser/edit.svg";
import { YMaps, Map } from "react-yandex-maps";
import Image from "next/image";

function AddresUser() {
  return (
    <div>
      <div>
        <div className="border rounded-lg py-5 px-7 flex flex-col gap-2.5 justify-start items-start">
          <h1 className=" text-[22px] leading-8 text-[#000000a6]">
            Адресная книга
          </h1>
          <p className=" text-[#0000008c] leading-6">
            Вы еще не добавили ни одного адреса, добавьте адрес, чтобы ваши
            заказы поступали вовремя.
          </p>
          <button className="py-2 px-7 text-lg bg-[#2B3D90] text-white rounded-xl">
            Добавить адрес
          </button>
        </div>
        <div className="border rounded-lg py-5 px-7 mt-5 flex flex-col gap-2.5 justify-start items-start">
          <h1 className=" text-[22px] leading-8 text-[#000000a6]">
            Добавлены адреса (1)
          </h1>
          <div className=" flex my-6 p-2.5 border w-full">
            <div>
              <h2 className="flex items-center gap-2.5 text-lg font-500">
                <Image src={AddIcon} className="w-[30px] h-[30px]" alt="Icon" />
                Мирзо Улугбек, Чуст 1
              </h2>
              <p className="ml-10 text-[#000000ad] text-lg">
                Ташкент / Узбекистан{" "}
                <span className="ml-2.5">Дом 65 - Квартира 22 / 4 этап</span>
              </p>
            </div>
            <div className="flex ml-16">
              <Image src={EditIcon} className="w-[30px] h-[30px]" alt="Icon" />
              <Image
                src={DelIcon}
                className="w-[30px] h-[30px] ml-2"
                alt="Icon"
              />
            </div>
          </div>
        </div>
      </div>

      <YMaps>
        <div>
          My awesome application with maps!
          <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
        </div>
      </YMaps>
    </div>
  );
}

export default AddresUser;
