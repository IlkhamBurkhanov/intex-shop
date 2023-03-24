import React from "react";
import Image from "next/image";
import fakeData from "../../public/Assets/Images/HeaderAndHeroImg/Fakedata.png";
import Trash from "../../public/Assets/Images/HeaderAndHeroImg/trash.svg";
import { useState } from "react";
import Link from "next/link";
import SimilarProducts from "../Similat_ptoducts/similar";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzbW9taW1qb25vdjIwQGdtYWlsLmNvbSIsInBob25lIjoiKzk5OTk0NjI0MDcxMiIsInJvbGUiOiJzdXBlcl9hZG1pbiIsImltYWdlIjpudWxsLCJ1c2VybmFtZSI6IlNhcnZhck1vJ21pbmpvbm92IiwiaWF0IjoxNjc4Njk4MzE1LCJleHAiOjE2Nzg3MDU1MTV9.2-9Ne6KpYdM7RKiZ-uAkBI69nousJYPI2ju-8ViN4WI";

const Basket = () => {
  const [numberProduct, setNumberProduct] = useState(8);
  const search = useSelector((state) => state.data.search);
  const lang = useSelector((state) => state.data.lang);
  const languages = useSelector((state) => state.data.localization);
  const categoryId = useSelector((state) => state.data.categoryId);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  ttps: React.useEffect(() => {
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
        setData(res?.data.result);

        // setTotalpage(res.data?.total_count.count);
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

  return (
    <>
      {data ? (
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
      ) : (
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
                {fakeDatas?.map((item, intex) => {
                  return (
                    <div className=" flex border-b-1 mt-8">
                      <Image className="w-[100px] h-[94px]" src={item.img} />
                      <div className="flex flex-col ml-6">
                        <h2 className=" font-[550] text-lg">{item.name}</h2>
                        <p className="mt-2 text-sm">{item.size}</p>
                        <p className="mt-2 text-sm">{item.summa}</p>
                      </div>
                      <div className="flex flex-row w-[32px] mt-6 h-[32px] ml-24">
                        <button
                          onClick={() =>
                            numberProduct == 1
                              ? setNumberProduct(numberProduct)
                              : setNumberProduct(numberProduct - 1)
                          }
                          className="px-3 ml-1.5 w-10 h-10  text-2xl border rounded-l-[5px]"
                        >
                          -
                        </button>
                        <h3 className="px-4 border w-12 pt-1 h-10 text-center text-xl  text-black">
                          {numberProduct}
                        </h3>
                        <button
                          onClick={() => setNumberProduct(numberProduct + 1)}
                          className="px-3 text-2xl w-10 h-10 border rounded-r-[5px]"
                        >
                          +
                        </button>
                      </div>
                      <div className="flex justify-end text-right  ml-[260px]">
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
                  <h2 className=" text-lg">В корзине 2</h2>
                  <p className="text-lg"> 1 290 000 сум</p>
                </div>
                <div className="flex justify-between px-7">
                  <h2 className="text-lg">Скидка:</h2>
                  <p className="text-lg"> 1 290 000 cyм</p>
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
                  Всего к оплате : <span className="pl-6"> 1 290 000 sum</span>
                </h1>
                <button className="px-[42px] py-3 mb-8 mt-5 mx-[30px] bg-[#2B3D90] rounded-xl text-white text-lg">
                  Перейти к оформлению заказа
                </button>
              </div>
            </div>
          </div>
          <SimilarProducts />
        </div>
      )}
    </>
  );
};

export default Basket;
