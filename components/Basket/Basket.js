import React from "react";
import Image from "next/image";
import fakeData from "../../public/Assets/Images/HeaderAndHeroImg/Fakedata.png";
import Trash from "../../public/Assets/Images/HeaderAndHeroImg/trash.svg";
import { useState, useEffect } from "react";
import Link from "next/link";
import SimilarProducts from "../Similat_ptoducts/similar";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Basket = () => {
  const [numberProduct, setNumberProduct] = useState(0);
  const search = useSelector((state) => state.data.search);
  const lang = useSelector((state) => state.data.lang);
  const languages = useSelector((state) => state.data.localization);
  const categoryId = useSelector((state) => state.data.categoryId);
  const [data, setData] = useState([]);
  const [token, setToken] = useState("");
  const [cartItems, setCardItems] = useState([]);
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  const [allSum, setAllSum] = useState(0);
  const [discountAll, setDiscountAll] = useState(0);

  useEffect(() => {
    setToken(JSON.parse(window.localStorage.getItem("token")));
  }, []);

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
  // useEffect(() => {
  //   const allPrice = cartItems.map((item) => {
  //     setAllSum(allSum + item.price);
  //   });
  // }, [cartItems]);
  useEffect(() => {
    axios
      .get(
        "https://intex-shop-production.up.railway.app/api/users/profile/orders",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setData(res?.data);

        // setTotalpage(res.data?.total_count.count);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  const fakeDatas = [
    {
      img: fakeData,
      name: "Каркасный прямоугольный бассейн ",
      size: "260х160х65см, 2282л",
      summa: "1290000 sum",
      count: 1,
    },
    {
      img: fakeData,
      name: "Каркасный прямоугольный бассейн ",
      size: "260х160х65см, 2282л",
      summa: "1290000 sum",
      count: 1,
    },
  ];
  let sum = 0;
  const aliw = cartItems?.map((item) => {
    sum = sum + item?.price * item?.qty;
  });

  // const aliw = cartItems.map((item) => {
  //   setAllSum(allSum + item.price * item.qty);
  // });
  console.log(data);
  const onAdded = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    const newCartItems = cartItems.map((x) =>
      x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
    );
    setCardItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    setAllSum(allSum + item.price);
    setDiscountAll(discountAll + item?.discount_price);
  };
  const onRemoved = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      console.log("LOSEE");
    } else {
      const newCartItems = cartItems.map((x) =>
        x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
      );
      setCardItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      setAllSum(allSum - item.price);
      setDiscountAll(discountAll - item?.discount_price);
    }
  };
  const onDelete = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);

    const newCartItems = cartItems.filter((x) => x.id !== item.id);
    setCardItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    setAllSum(allSum - item.price * item.qty);
    setDiscountAll(discountAll - item?.discount_price);
  };

  console.log(allSum);
  const num = 1200000;

  console.log(num.toLocaleString());
  return (
    <>
      {cartItems.length > 0 ? (
        <div>
          <div className="mx-20 mt-[148px]">
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
                ? "Корзина"
                : lang === "uz"
                ? "Savatcha"
                : "Basket"}
            </p>
            <h2 className=" font-bold text-2xl text-center mb-14">Корзина</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                {cartItems?.map((item, intex) => {
                  return (
                    <div key={intex} className=" flex border-b-1 mt-8">
                      <Image
                        className="w-[100px] h-[94px]"
                        src={`https://intex-shop-production.up.railway.app/${item?.image[0]}`}
                        alt="IMG"
                        width={100}
                        height={94}
                      />
                      <div className="flex flex-col ml-6">
                        <h2 className=" font-[550] text-lg">{item.name_ru}</h2>
                        <p className="mt-2 text-sm">90x120x300</p>
                        <p className="mt-2 text-sm">{item?.price} cyм</p>
                      </div>
                      <div className="flex flex-row w-[32px] mt-6 h-[32px] ml-24">
                        <button
                          onClick={() => onRemoved(item)}
                          className="px-3 ml-1.5 w-10 h-10  text-2xl border rounded-l-[5px]"
                        >
                          -
                        </button>
                        <h3 className="px-4 border w-12 pt-1 h-10 text-center text-xl  text-black">
                          {item.qty}
                        </h3>
                        <button
                          onClick={() => onAdded(item)}
                          className="px-3 text-2xl w-10 h-10 border rounded-r-[5px]"
                        >
                          +
                        </button>
                      </div>
                      <div
                        onClick={() => onDelete(item)}
                        className="flex justify-end text-right  ml-[260px]"
                      >
                        <Image
                          className="w-6 h-[26px] mt-6 "
                          src={Trash}
                          alt="del"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="px-8 border rounded-lg text-[#000000de]">
                <div className="pt-32 flex justify-between px-7">
                  <h2 className=" text-lg">В корзине ({cartItems.length})</h2>
                  <p className="text-lg">
                    {allSum ? allSum.toLocaleString() : "0"} сум
                  </p>
                </div>
                <div className="flex justify-between px-7">
                  <h2 className="text-lg">Скидка:</h2>
                  <p className="text-lg"> {discountAll.toLocaleString()} cyм</p>
                </div>
                <p className="text-center mt-7 text-lg text-[#000000de]  font-semibold">
                  Есть промо код ?
                </p>
                <div className="flex justify-between border p-[14px] mx-5 mt-3">
                  <p className=" text-lg text-[#000000de]">45544WSDS54</p>
                  <Link href="#">
                    <p className="text-blue-600">Применять</p>
                  </Link>
                </div>
                <h1 className=" border-y-1 py-7 px-1.5 mt-7 mx-5 text-[22px]">
                  Всего к оплате :{" "}
                  <span className="pl-6">
                    {discountAll.toLocaleString()} cyм
                  </span>
                </h1>
                <Link href={"/order"}>
                  <button className="px-[42px] py-3 mb-8 mt-5 mx-[30px] bg-[#2B3D90] rounded-xl text-white text-lg">
                    Перейти к оформлению заказа
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <SimilarProducts />
        </div>
      ) : (
        <div className=" text-center mx-auto mt-56 w-[628px]">
          <div className="flex flex-col">
            <Image
              className="mx-auto"
              src={"/Assets/Images/HeaderAndHeroImg/Design.png"}
              width={194}
              height={192}
              alt="About Basket Img"
            />
            <h1 className=" text-2xl font-bold mt-8 text-[#000000de]">
              В корзине пока ничего нет
            </h1>
            <p className=" font-normal mt-6 text-lg text-[#00000061]">
              Вы можете начать свой выбор с нашего каталога продукции или
              воспользоваться поиском, если вы ищете что-то конкретное
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Basket;
