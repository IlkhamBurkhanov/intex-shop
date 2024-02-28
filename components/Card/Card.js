import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../ComponetntModuls/button/Button";
import { Modal } from "../ComponetntModuls/Modal/Modal";
import { BtnLoader } from "../Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Heart from "../../public/Assets/Images/ModalImg/heart.svg";
import ImagePro from "../../public/Assets/Images/news/plisos.png";

const env = process.env.NEXT_PUBLIC_TOKEN;
const img = process.env.NEXT_PUBLIC_IMG;

function Card({
  subattributes,
  status_ru,
  status_en,
  status_uz,
  name_ru,
  name_en,
  name_uz,
  image,
  price,
  sale,
  data,
  id,
  onAdd,
  onRemove,
  product,
  items,
}) {
  const [showModal, setShowModal] = useState(false);
  const [numberProduct, setNumberProduct] = useState(1);
  const [modalContent, setModalContent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [find, setFind] = useState({});
  const lang = useSelector((state) => state.data.lang);
  const languages = useSelector((state) => state.data.localization);
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init();
  }, []);

  let token = "5463520222:AAFQgcQ7hyUTAYV3ad0YaGTQ_lGIbRZyyxg";
  let chatId = "636476536";

  const initialValues = {
    name: "",
    number: "",
    address: "",
  };

  const onSubmit = (values, { resetForm }) => {
    // let fullText = `\u{2705} Name: ${values.name}%0A\u{2705} Phone Number: \u{FF0B}998${values.number} %0A\u{2705} Address: ${values.address}`;
    // // --- Sent Message for Telegram
    // axios.post(
    //   `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${fullText}`
    // );
    // setLoading(true);
    // // --- Create Order
    // axios
    //   .post(`${env}orders/create`, {
    //     order: {
    //       name: values.name,
    //       phone: String(`+998${values.number}`),
    //       address: values.address,
    //       location: {
    //         x: 49.9,
    //         y: 62.2,
    //       },
    //       order_number: "0",
    //       status_id: 3,
    //     },
    //     bascet: [
    //       {
    //         count: numberProduct,
    //         product_id: find.id,
    //       },
    //     ],
    //   })
    //   .then((res) => {
    //     if (res?.status === 201) {
    //       setModalContent(true);
    //     }
    //   })
    //   .catch((err) => console.log(err))
    //   .finally(() => {
    //     setNumberProduct(1);
    //     setLoading(false);
    //     setTimeout(() => {
    //       setShowModal(false);
    //       setModalContent(false);
    //     }, 2000);
    //   });
    // values.name = "";
    // resetForm({ values: "" });
  };

  const phoneRegExp = /^[0-9]{9}$/;
  const validationSchema = Yup.object({
    name: Yup.string()
      .required(
        lang === "ru"
          ? "Требуется имя пользователя, минимум 3 символа"
          : lang === "en"
          ? "Username is required, at least 3 characters"
          : "Foydalanuvchi nomi talab qilinadi, kamida 3 ta belgi"
      )
      .min(
        3,
        lang === "ru"
          ? "Минимум 3 символа"
          : lang === "en"
          ? "Minimal 3 characters"
          : "Minimal 3 ta belgi"
      )
      .max(
        20,
        lang === "ru"
          ? "Максимум 20 символов"
          : lang === "en"
          ? "Maximum 20 characters"
          : "Maksimal 20 ta belgi"
      ),
    number: Yup.string(
      lang === "ru"
        ? "Должен быть только номер"
        : lang === "en"
        ? "Must be only number"
        : "Faqat raqam bo'lishi kerak"
    )
      .matches(phoneRegExp, {
        message:
          lang === "ru"
            ? "Номер телефона недействителен"
            : lang === "en"
            ? "Phone number is not valid."
            : "Telefon raqami yaroqsiz.",
        excludeEmptyString: true,
      })
      .required(
        lang === "ru"
          ? "Необходимый номер телефона"
          : lang === "en"
          ? "Required phone number"
          : "Telefon raqami kiritish majburiy"
      ),
    address: Yup.string()
      .required(
        lang === "ru"
          ? "Укажите адрес"
          : lang === "en"
          ? "Address is required"
          : "Manzil kiritish majburiy"
      )
      .min(
        3,
        lang === "ru"
          ? "Минимум 3 символа"
          : lang === "en"
          ? "Minimal 3 characters"
          : "Minimal 3 ta belgi"
      ),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const ProductOrder = (id) => {
    setShowModal(true);
    const fintProduct = data.find((e) => e.id === id);
    setFind(fintProduct);
  };
  const handleClick = () => {
    dispatch(setProductId(id));
  };

  return (
    <>
      <div className="card border rounded-xl w-cardWidth min-w-[180px] shadow-card_shadow relative  mt-5">
        <div className=" md:max-h-[220px] mt-6 md:mt-0">
          <Image
            className="mt-2 mb-0 mx-auto md:mb-3 w-[160px] h-[160px]  object-cover"
            src={image}
            alt="baseen_product_image"
            layout="fill"
            width={280}
            height={220}
          />
        </div>
        <div className="p-2 md:p-4 md:max-w-[260px] border-t-lineColor border-t-1">
          <Link href="infoProduct" onClick={handleClick}>
            <h3 className="text-black-text_color text-sm md:text-lg font-bold leading-5 mb-2 ">
              {lang === "ru" ? name_ru : lang === "en" ? name_en : name_uz}
            </h3>
          </Link>
          {/* <p
            className={`${
              subattributes.length > 0 ? "" : "h-6"
            } text-xs md:text-base m-0 mb-2 block leading-22 text-black-black_thin`}
          >
            {subattributes[0]?.attribute_ru} {subattributes[4]?.attribute_ru}
          </p> */}
          <span
            className={`text-xs md:text-sm block line-through text-gray-text_color ${
              status_ru === "Новинки" ? "h-5" : null
            } ${status_ru === "Pекомендуемые" ? "h-5" : null}`}
          >
            {status_ru === "Новинки" || status_ru === "Pекомендуемые"
              ? null
              : sale +
                " " +
                (lang === "ru" ? " сум" : lang === "en" ? "soum" : "sum")}
          </span>
          <span className="font-semibold text-sm md:text-lg text-orange-400 block mb-2.5">
            {price} {lang === "ru" ? " сум" : lang === "en" ? "som" : "sum"}
          </span>
          <div className=" grid grid-cols-4 gap-3">
            <div className={"text-sm md:text-base col-span-4"}>
              <Button
                className={"text-sm md:text-base"}
                onClick={() => onAdd(product)}
              >
                {lang === "ru"
                  ? "Заказать"
                  : lang === "en"
                  ? "Order"
                  : "Batafsil Ma'lumot"}
              </Button>
            </div>
            {/* <Button
              className={"text-sm md:text-base bg-[#109EF4] "}
              onClick={() => console.log("Heart Cliked")}
            >
              <Image src={Heart} alt="Heart" className="mx-auto" />
            </Button> */}
          </div>
        </div>
      </div>

      {/* --- Modal --- */}
    </>
  );
}

export default Card;
