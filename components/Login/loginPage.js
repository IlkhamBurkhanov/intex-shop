import React from "react";
import Image from "next/image";
import Visible from "../../public/Assets/Images/LoginUser/Visible.png";
import IsVisible from "../../public/Assets/Images/LoginUser/IsVisible.png";
import { useState } from "react";
import Link from "next/link";

import axios from "axios";
import { toast } from "react-hot-toast";
const env = process.env.NEXT_PUBLIC_TOKEN;

function LoginPage() {
  const [icon, setIcon] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [icon1, setIcon1] = useState(false);
  const [password1, setPassword1] = useState("");
  const [register, setRegister] = useState(false);
  const [linked, setLinked] = useState("/login");
  const postRequest = async (e) => {
    e.preventDefault();

    // setLoading(true);
    axios
      .post(`${env}auth/user/login`, {
        phone: null,
        email: email,
        password: password,
      })
      .then((res) => {
        if (res?.data?.token) {
          console.log(res);
          setLinked("/userinfo");
        } else if (res?.status === 201) {
          console.log("Successfull sent!");
        }
      })
      .catch((err) => {
        if (err?.response?.status === 401) {
          console.log("Эл.адрес или пароль неверны");
        } else if (err?.response?.status === 400) {
          console.log("Ошибка электронной почты");
        } else if (err?.message === "Network Error") {
          console.log(err?.message);
        }
      })
      .finally(() => {
        // setLoading(false);
        setEmail("");
        setPassword("");
      });
  };
  console.log(linked);
  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
        <h1 className=" text-[26px] leading-9 font-semibold mt-[180px] ">
          {`${register ? "Регистрация" : "Войти"}`}
        </h1>
        <div className="w-[450px] px-5 pb-5 mt-7 border rounded-lg">
          <div className="flex justify-between">
            <button
              onClick={() => setRegister(false)}
              className={`${
                register ? "border-b-1" : "border-b-[3px] border-blue"
              } py-4 w-[205px] text-center `}
            >
              Войти
            </button>

            <button
              onClick={() => setRegister(true)}
              className={`${
                register ? "border-b-[3px]  border-blue" : "border-b-1"
              } py-4 w-[205px] text-center `}
            >
              Регистрация
            </button>
          </div>
          {register ? (
            <div>
              <label>
                <h2 className="mt-5 text-[#24283A] font-500">
                  Электронная почта или номер телефона
                </h2>
                <input
                  className="py-3  px-4 mt-3 border rounded-lg w-full outline-none"
                  placeholder="Введите ваше имя"
                  type="email"
                />
              </label>
              <label className="">
                <h2 className="mt-5">Пароль</h2>

                <div className="relative  mb-5">
                  <input
                    value={password}
                    type={icon ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    id="outlined_successs"
                    aria-describedby="outlined_success_help"
                    className="block py-3  px-4 mt-3 w-full  text-gray-900 bg-transparent rounded-lg border border-inputColor appearance-none dark:text-black dark:border-inputColor dark:focus:border-inputColor focus:outline-none focus:ring-0 focus:border-inputColor peer"
                    placeholder="* * * * * * *"
                    minLength={4}
                    maxLength={16}
                    required
                  />

                  <div
                    className="cursor-pointer absolute right-0 top-3 mr-2"
                    onClick={() => {
                      setIcon(!icon);
                    }}
                  >
                    {icon ? (
                      <Image className="w-6" src={IsVisible} alt="show_image" />
                    ) : (
                      <Image className="w-6" src={Visible} alt="show_image" />
                    )}
                  </div>
                </div>
              </label>
              <label className="">
                <h2 className="mt-5">Подтвердите пароль</h2>

                <div className="relative  mb-5">
                  <input
                    value={password1}
                    type={icon1 ? "text" : "password"}
                    onChange={(e) => setPassword1(e.target.value)}
                    id="outlined_successs"
                    aria-describedby="outlined_success_help"
                    className="block py-3  px-4 mt-3 w-full  text-gray-900 bg-transparent rounded-lg border border-inputColor appearance-none dark:text-black dark:border-inputColor dark:focus:border-inputColor focus:outline-none focus:ring-0 focus:border-inputColor peer"
                    placeholder="* * * * * * *"
                    minLength={4}
                    maxLength={16}
                    required
                  />

                  <div
                    className="cursor-pointer absolute right-0 top-3 mr-2"
                    onClick={() => {
                      setIcon1(!icon1);
                    }}
                  >
                    {icon ? (
                      <Image className="w-6" src={IsVisible} alt="show_image" />
                    ) : (
                      <Image className="w-6" src={Visible} alt="show_image" />
                    )}
                  </div>
                </div>
              </label>
              <p className=" text-[#000000a6] text-sm leading-5">
                Пароль должен содержать не менее 7 символов и содержать буквы и
                цифры.
              </p>
              <div className="flex gap-4 mt-5 items-center mb-1">
                <input type="checkbox" className="w-4 h-4" />
                <p className="text-sm text-[#000000a6]">
                  Я принимаю условия использования.
                </p>
              </div>
            </div>
          ) : (
            <div>
              {" "}
              <label>
                <h2 className="mt-5">Имя</h2>
                <input
                  className="py-3  px-4 mt-3 border rounded-lg w-full outline-none"
                  placeholder="Введите ваше имя"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="">
                <h2 className="mt-5">Пароль</h2>

                <div className="relative  mb-5">
                  <input
                    value={password}
                    type={icon ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    id="outlined_successs"
                    aria-describedby="outlined_success_help"
                    className="block py-3  px-4 mt-3 w-full  text-gray-900 bg-transparent rounded-lg border border-inputColor appearance-none dark:text-black dark:border-inputColor dark:focus:border-inputColor focus:outline-none focus:ring-0 focus:border-inputColor peer"
                    placeholder="* * * * * * *"
                    minLength={4}
                    maxLength={16}
                    required
                  />

                  <div
                    className="cursor-pointer absolute right-0 top-3 mr-2"
                    onClick={() => {
                      setIcon(!icon);
                    }}
                  >
                    {icon ? (
                      <Image className="w-6" src={IsVisible} alt="show_image" />
                    ) : (
                      <Image className="w-6" src={Visible} alt="show_image" />
                    )}
                  </div>
                </div>
              </label>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p className=" text-[#374151] text-sm">Запомнить меня</p>
                </div>
                <a href="#" className=" text-sm text-[#4F46E5]">
                  Забыли пароль?
                </a>
              </div>
            </div>
          )}

          <button
            onClick={postRequest}
            className=" text-lg py-2 mt-5 bg-[#2B3D90] rounded-lg text-white w-full"
          >
            Войти
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
