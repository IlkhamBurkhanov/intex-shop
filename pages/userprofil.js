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
import { useSelector } from "react-redux";
import { Modal } from "../components/ComponetntModuls/Modal/Modal";
import { useRouter } from "next/router";

function UserProfile() {
  const [userInfo, setUserInfo] = useState(true);
  const [addInfo, setAddInfo] = useState(false);
  const [orderInfo, setOrderInfo] = useState(false);
  const [logOut, setLogOut] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const userToken = useSelector((state) => state.data.setToken);
  // console.log(userToken);

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
  const Logout = () => {
    setUserInfo(false);
    setOrderInfo(false);
    setAddInfo(false);
    setShowModal(true);
  };
  const LogoutBtn = () => {
    setShowModal(false);
    window.localStorage.removeItem("token");
    // window.location.reload();
    router.push("/");
  };

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
            <button className="w-full border rounded-lg " onClick={Logout}>
              <div className="flex  py-5 pl-5 text-lg">
                <Image className="mr-4 w-7 h-7" src={LogOutIcon} /> Выйти
              </div>
            </button>
          </div>
        </div>
        <div className="col-span-8 w-full">
          {userInfo ? <AddinfoUser /> : null}
          {orderInfo ? <OrderUser /> : null}
          {addInfo ? <AddresUser /> : null}
        </div>
      </div>
      <Modal isVisible={showModal}>
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="relative w-full max-w-md h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-white">
              <button
                onClick={() => setShowModal(false)}
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                <svg
                  aria-hidden="true"
                  className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Вы уверены, что хотите покинуть сайт?
                </h3>
                <button
                  onClick={LogoutBtn}
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Да, я уверен
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Нет, отменить
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default UserProfile;
