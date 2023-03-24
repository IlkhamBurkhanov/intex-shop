import React from "react";
import Image from "next/image";

import Phone from "../../public/Assets/Images/LoginUser/phone.png";
import AirPod from "../../public/Assets/Images/LoginUser/airpod.png";
function OrderUser() {
  const datafake = [
    {
      img: Phone,
      name: "Iphone 14 Pro max - Black 128 GB LL/A",
      prize: " $1099",
      status: "доставлен",
      date: "1 февраля 2020 г.",
    },

    {
      img: AirPod,
      name: "Iphone 14 Pro max - Black 128 GB LL/A",
      prize: " $1099",
      status: "доставлен",
      date: "1 февраля 2020 г.",
    },
  ];
  const newdata = datafake.map((item, i) => item.orders);
  console.log(newdata);

  return (
    <div>
      <div className="border rounded-xl p-7">
        <h1 className="font-500 text-[22px] ">
          Заказы{" "}
          <span className=" ml-2.5 text-base text-[#0000008c]">2 заказа</span>
        </h1>
        <div className="mt-5 border-b-2 mb-20">
          <h2 className="mb-5">Номер заказа: 6534562</h2>
          {datafake
            ? datafake.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="flex  justify-between items-center mb-7 gap-4"
                  >
                    <div className="w-[155px]">
                      <Image src={item.img} alt="photo" className="mx-auto" />
                    </div>
                    <div className="flex flex-col gap-1.5 w-[430px] text-lg font-500">
                      <h2>{item.name}</h2>
                      <p>Полная стоимость:{item.prize}</p>
                      <h3>Статус: {item.status}</h3>
                    </div>
                    <h2 className="w-[200px]  text-sm text-[#00000080]">
                      <span className="">Заказан</span> {item.date}
                    </h2>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default OrderUser;
