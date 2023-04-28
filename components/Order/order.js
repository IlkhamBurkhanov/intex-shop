import React from "react";

import Image from "next/image";
import Money from "../../public/Assets/Images/HeaderAndHeroImg/Money.svg";
import UzCard from "../../public/Assets/Images/HeaderAndHeroImg/UZcard.svg";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Modal } from "../ComponetntModuls/Modal/Modal";
import Success from "../../public/Assets/Images/ModalImg/Checked.png";
import Close from "../../public/Assets/Images/ModalImg/close.svg";

function Order() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [valley, setValley] = useState("");
  const [level, setLevel] = useState(0);
  const [comment, setComment] = useState("");
  const [cardItems, setCardItems] = useState([]);
  const [allSum, setAllSum] = useState(0);
  const [discountAll, setDiscountAll] = useState(0);
  // https://intex-shop-production.up.railway.app/api/orders

  useEffect(() => {
    setCardItems(
      localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : []
    );
    const aliw = JSON.parse(localStorage.getItem("cartItems"));
    console.log({ aliw });
    let sum = 0;
    let disAll = 0;
    aliw.map((e) => {
      sum += e.price * e.qty;
      disAll += e.discount_price * e.qty;
    });
    setAllSum(sum);
    setDiscountAll(disAll);
    console.log({ aliw });
  }, []);

  const newData = cardItems.map((item, index) => {
    return {
      count: item.qty,
      product_id: item.id,
      order_number: "string",
      user_id: 1,
      product_sub_attr_id: [0],
      status_id: item.status_id,
      payment_type: paymentType,
      comment: comment,
      country: valley,
      region: city,
      address: address,
      floor: level,
      price: item.price,
      delivery_type: "free",
    };
  });

  const handleOrder = (e) => {
    console.log("HELOOOOOO");
    axios
      .post("https://intex-shop-production.up.railway.app/api/orders", {
        user: {
          first_name: fullName,
          last_name: null,
          phone: phone,
        },
        order: newData,
      })
      .then((res) => {
        setShowModal(true);
      })
      .catch((err) => console.log(err));
  };

  console.log(cardItems);
  console.log(newData);
  const payAll = discountAll + 20000;
  const dast = 20000;
  return (
    <div>
      <div className="bg-white flex items-center w-full pt-1.5 mx-20 pb-1.5 mb-[70px] mt-[130px] px-8">
        <Link href="/" className="flex items-center">
          <h2 className="font-normal text-[#109EF4] ml-2.5">Главная</h2>
        </Link>
        <span className="ml-2.5 text-[#109EF4] ">/</span>
        <Link href="_basket">
          <h2 className="font-normal text-[#109EF4] ml-2.5">Корзина</h2>
        </Link>
        <span className="ml-2.5 text-[#109EF4] ">/</span>
        <Link href="order">
          <h2 className="font-normal  ml-2.5">Оформить заказ</h2>
        </Link>
      </div>
      <div>
        <h2 className="text-center font-bold leading-10 text-2xl">
          Oформлению заказа
        </h2>
        <div className="grid grid-cols-3 mx-20 mt-12">
          <div className="col-span-2">
            <h1 className=" text-lg font-500">1. Личные данные</h1>
            <div className="flex justify-between gap-5">
              <div className="w-full">
                <h2 className="mt-5 text-[#24283A] font-[550]">Имя</h2>
                <input
                  required
                  className="w-full h-12 border px-3 rounded-lg mt-3 outline-none"
                  placeholder="Введите ваше имя"
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="w-full ">
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
                    required
                    type="number"
                    name="number"
                    id="number"
                    placeholder="(90) 123 45 67"
                    className=" outline-none w-full sm:ml-4 h-full"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <h2 className="font-500 text-lg mt-1">2. Выберите способ оплаты</h2>
            <div className="flex justify-between mt-5 gap-7">
              <div
                onClick={() => {
                  setPaymentType("cash");
                  setFirst(true);
                  setSecond(false);
                  setThird(false);
                }}
                className={` flex justify-center items-center w-full border rounded-md h-14  hover:bg-[#605dec14] ${
                  first ? "bg-[#605dec14]" : null
                }`}
              >
                <Image src={Money} alt="-" /> <p>Наличными</p>
              </div>
              <div
                onClick={() => {
                  setPaymentType("card");
                  setFirst(false);
                  setSecond(true);
                  setThird(false);
                }}
                className={` flex justify-center items-center w-full border rounded-md h-14  hover:bg-[#605dec14] ${
                  second ? "bg-[#605dec14]" : null
                }`}
              >
                <Image src={UzCard} alt="-" />
                <p>Uzcard/Humo</p>
              </div>
              <div
                onClick={() => {
                  setPaymentType("online");
                  setFirst(false);
                  setSecond(false);
                  setThird(true);
                }}
                className={` flex justify-center items-center w-full border rounded-md h-14  hover:bg-[#605dec14] ${
                  third ? "bg-[#605dec14]" : null
                }`}
              >
                <Image src={UzCard} alt="-" />
                <p>Payme/Click</p>
              </div>
            </div>
            <h3 className="font-500 text-lg mt-7">3. Ваши детали доставки</h3>
            <div className="flex justify-between mt-5 gap-5">
              <div className="w-full">
                <h2>Регион</h2>
                <select
                  onChange={(e) => setValley(e.target.value)}
                  className="w-full border h-12 mt-3 rounded-lg px-4 outline-none"
                >
                  <option className="text-[#B4B6B8]">Выбирите</option>
                  <option>Toshkent</option>
                </select>
              </div>
              <div className="w-full">
                <h2>Город</h2>
                <select
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full border h-12 mt-3 rounded-lg px-4 outline-none"
                >
                  <option className="text-[#B4B6B8]">Выбирите</option>
                  <option>Bektemir tumani</option>
                  <option>Chilonzor tumani</option>
                  <option>Mirobod tumani</option>
                  <option>Mirzo Ulug'bek tumani</option>
                  <option>Olmazor tumani</option>
                  <option>Sergeli tumani</option>
                  <option>Shayhontohur tumani</option>
                  <option>Uchtepa tumani</option>
                  <option>Yakkasaroy tumani</option>
                  <option>Yashnaobod tumani</option>
                  <option>Yunusobod tumani</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-8 gap-7 mt-7">
              <div className="col-span-6">
                <h2 className="font-500">Address</h2>
                <input
                  required
                  className="border w-full h-12 mt-3 rounded-lg placeholder:text-[#B4B6B8] px-4 outline-none"
                  placeholder="Введите ваше адрес"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="col-span-2">
                <h2 className="font-500">Этаж</h2>
                <input
                  required
                  className="border w-full h-12 mt-3 rounded-lg placeholder:text-[#B4B6B8] px-4 outline-none"
                  placeholder="Если есть"
                  onChange={(e) => setLevel(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-7">
              <h2 className="font-500">Комментарий</h2>
              <input
                required
                className="border w-full h-12 mt-3 rounded-lg placeholder:text-[#B4B6B8] px-4 outline-none"
                placeholder="Комментарий"
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <button
              onClick={(e) => handleOrder(e)}
              className="w-full h-12 text-white bg-[#2B3D90] text-center text-lg rounded-lg mt-10"
            >
              Оформить заказ
            </button>
          </div>
          <div className="border ml-6 p-7 rounded-md  h-[366px]">
            <div className=" flex justify-between">
              <h2 className=" text-lg">В корзине ({cardItems.length})</h2>
              <p className="text-lg"> {allSum.toLocaleString()} сум</p>
            </div>
            <div className="flex justify-between  mt-3">
              <h2 className="text-lg">Скидка:</h2>
              <p className="text-lg"> {discountAll.toLocaleString()} cyм</p>
            </div>
            <div className="flex justify-between mt-3">
              <h2 className="text-lg">Доставка:</h2>
              <p className="text-lg"> 20 000 cyм</p>
            </div>

            <div className="flex border-y-1 py-7 pl-4 mt-7 text-[22px]">
              <h2>Всего к оплате :</h2>
              <h1 className="pl-4">{discountAll + dast} сум</h1>
            </div>
            <Link href={"/_basket"}>
              <button className="px-[42px] w-full py-3 mb-8 mt-5 bg-[#2B3D90] rounded-xl text-white text-lg">
                {" "}
                Изменить заказ
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Modal
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <div className="max-w-[410px] items-center justify-center flex flex-col">
          <div className="flex w-full justify-between items-start">
            <div></div>
            <Image className="w-16 h-16" src={Success} alt="Success" />
            <div></div>
          </div>
          <h2 className="text-[#464A4D] text-2xl font-bold">Поздравляем</h2>
          <p className="px-14 text-sm text-[#464A4D] mt-2 mb-4 text-center">
            Поздравляем, ваш заказ принят. Мы свяжемся с вами в ближайшее время
          </p>
          <Link
            className="py-3 w-full text-center rounded-md mx-6 bg-[#2B3D90] text-white"
            href={"/"}
          >
            <button>OK</button>
          </Link>
        </div>
      </Modal>
    </div>
  );
}

export default Order;
