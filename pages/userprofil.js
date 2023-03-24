import React from "react";
import Image from "next/image";
import UserImage from "../public/Assets/Images/LoginUser/UserImage.png";
import userIcon from "../public/Assets/Images/LoginUser/userIcon.svg";
import orderIcon from "../public/Assets/Images/LoginUser/orderIcon.svg";
import addressIcon from "../public/Assets/Images/LoginUser/addresIcon.svg";
import LogOutIcon from "../public/Assets/Images/LoginUser/logoutIcon.svg";
import { useState } from "react";
import AddinfoUser from "../components/userProfile/addinfoUser";
import OrderUser from "../components/userProfile/orderUser";
import AddresUser from "../components/userProfile/AddresUser";

function UserProfile() {
  const [userInfo, setUserInfo] = useState(true);
  const [addInfo, setAddInfo] = useState(false);
  const [orderInfo, setOrderInfo] = useState(false);
  const [logOut, setLogOut] = useState(false);
  const handleClick1 = () => {
    setUserInfo(true);
    setOrderInfo(false);
    setAddInfo(false);
    setLogOut(false);
  };
  const handleClick2 = () => {
    setUserInfo(false);
    setOrderInfo(true);
    setAddInfo(false);
    setLogOut(false);
  };
  const handleClick3 = () => {
    setUserInfo(false);
    setOrderInfo(false);
    setAddInfo(true);
    setLogOut(false);
  };
  console.log(userInfo, orderInfo, addInfo);
  return (
    <div>
      <div className="grid grid-cols-11 mt-[170px] gap-5 mx-20">
        <div className=" col-span-3   w-full">
          <div className="flex flex-col justify-center border rounded-lg py-7 items-center">
            <Image src={UserImage} width={90} height={90} alt="UserPhoto" />
            <p className="text-[#00000080] font-normal mt-1.5">
              Добро пожаловать
            </p>
            <h1 className=" text-[22px] font-500">Rustam Samandarov</h1>
          </div>
          <div className="flex flex-col mt-5 gap-5">
            <button
              onClick={handleClick1}
              className="w-full border rounded-lg "
            >
              <div
                className={`${
                  userInfo ? "border-l-[5px] rounded-md border-blue" : null
                } flex text-start py-5 pl-5 text-lg`}
              >
                <Image className="mr-4 w-7 h-7" src={userIcon} /> Персональная
                информация
              </div>
            </button>
            <button
              onClick={handleClick2}
              className="w-full border rounded-lg "
            >
              <div
                className={`${
                  orderInfo ? "border-l-[5px] rounded-md border-blue" : null
                } flex text-start py-5 pl-5 text-lg`}
              >
                <Image className="mr-4 w-7 h-7" src={orderIcon} /> Заказы
              </div>
            </button>
            <button
              onClick={handleClick3}
              className="w-full border rounded-lg "
            >
              <div
                className={`${
                  addInfo ? "border-l-[5px] rounded-md border-blue" : null
                } flex text-start py-5 pl-5 text-lg`}
              >
                <Image className="mr-4 w-7 h-7" src={addressIcon} /> Адрес
              </div>
            </button>
            <button className="w-full border rounded-lg ">
              <div className="flex  py-5 pl-5 text-lg">
                <Image className="mr-4 w-7 h-7" src={LogOutIcon} /> Выйти
              </div>
            </button>
          </div>
        </div>
        <div className="col-span-8 w-full">
          {userInfo ? <AddinfoUser /> : <AddresUser />}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
