import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Modal } from "../ComponetntModuls/Modal/Modal";
import Button from "../ComponetntModuls/button/Button";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { BtnLoader, Spinner } from "../Spinner/Spinner";
import Heart from "../../public/Assets/Images/ModalImg/heart.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const env = process.env.NEXT_PUBLIC_TOKEN;
const img = process.env.NEXT_PUBLIC_IMG;

const Populyar_nov = ({ mobile }) => {
  const [loader, setLoader] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [numberProduct, setNumberProduct] = useState(1);
  const [modalContent, setModalContent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tovar, setTovar] = useState([]);
  const [find, setFind] = useState({});

  const lang = useSelector((state) => state.data.lang);
  const languages = useSelector((state) => state.data.localization);

  // --- Get Product
  useEffect(() => {
    axios
      .get(`${env}products/getByStatus?status_id=3&page=0&limit=10`)
      .then((res) => {
        setTovar(res?.data?.result);
        setLoader(false);
      });
  }, []);

  let token = "5463520222:AAFQgcQ7hyUTAYV3ad0YaGTQ_lGIbRZyyxg";
  let chatId = "636476536";

  const initialValues = {
    name: "",
    number: "",
    address: "",
  };

  const onSubmit = (values, { resetForm }) => {
    let fullText = `\u{2705} Name: ${values.name}%0A\u{2705} Phone Number: \u{FF0B}998${values.number} %0A\u{2705} Address: ${values.address}`;
    setLoading(true);

    // --- Sent Message for Telegram
    axios
      .post(
        `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${fullText}`
      )
      .then(function () {
        console.log("Submitted");
      })
      .catch(function () {
        toast.error("Internal error");
      });

    // --- Create Order
    axios
      .post(`${env}orders/create`, {
        order: {
          name: values.name,
          phone: String(`+998${values.number}`),
          address: values.address,
          location: {
            x: 49.9,
            y: 62.2,
          },
          order_number: "0",
          status_id: 3,
        },
        bascet: [
          {
            count: numberProduct,
            product_id: find.id,
          },
        ],
      })
      .then((res) => {
        if (res?.status === 201) {
          setModalContent(true);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setNumberProduct(1);
        setLoading(false);
        setTimeout(() => {
          setShowModal(false);
          setModalContent(false);
        }, 2000);
      });

    values.name = "";
    resetForm({ values: "" });
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
    const fintProduct = tovar.find((e) => e.id === id);
    setFind(fintProduct);
  };
  console.log(tovar);
  return (
    <section
      id="populyar"
      className="max-w-[1210px] mx-auto bg-white pl-[16px] md:pl-0"
    >
      <h2 className="font-bold text-xl md:text-32 leading-36 pl-0 md:pl-3">
        {lang === "ru"
          ? "Популярные товары"
          : lang === "en"
          ? "Popular goods"
          : "Ommabop tovarlar"}
      </h2>
      <div className="mt-10">
        <Swiper
          slidesPerView={mobile ? 2 : 4}
          spaceBetween={mobile ? 170 : 30}
          slidesPerGroup={mobile ? 1 : 1}
          loop={false}
          loopFillGroupWithBlank={true}
          pagination={false}
          navigation={false}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          style={{
            paddingBottom: "30px",
            paddingLeft: "15px",
            paddingRight: "20px",
          }}
        >
          {loader ? (
            <div className="w-full h-[80px] md:h-[200px] flex items-center justify-center">
              <Spinner />
            </div>
          ) : (
            tovar.map((item) => {
              return (
                <SwiperSlide key={item?.id}>
                  <div className="card rounded-xl w-resCardWidth md:w-cardWidth shadow-card_shadow relative border border-lineColor mx-auto">
                    <span
                      className={`${
                        item?.status_ru === "Новинки" ? "bg-green-new" : ""
                      } ${item?.status_ru === "Скидка" ? "bg-red-sale" : ""} ${
                        item?.status_ru === "Pекомендуемые"
                          ? "bg-blue-recommend"
                          : ""
                      } ${item?.status_ru === "Обичный" ? "bg-white" : ""} ${
                        item?.status_ru === "Хит продаж" ? "bg-red-xit" : ""
                      } text-sm block z-20 px-4 text-center py-5.5 rounded-r-lg text-white absolute top-4 left-0`}
                    >
                      {item.status_ru === "Обичный"
                        ? ""
                        : lang === "ru"
                        ? item.status_ru
                        : lang === "en"
                        ? item.status_en
                        : item.status_uz}
                    </span>
                    <Image
                      onDragStart={(e) => e.preventDefault()}
                      className="mt-2 mb-1 md:mb-4"
                      src={`${img}${item.image[0]}`}
                      alt="baseen_product_image"
                      width={280}
                      height={220}
                    />
                    <div className="p-2 md:p-4 border-t-lineColor border-t-1">
                      <h3 className="text-sm md:text-lg font-bold leading-5 mb-2 ">
                        {lang === "ru"
                          ? item.name_ru
                          : lang === "en"
                          ? item.name_en
                          : item.name_uz}
                      </h3>
                      <span
                        className={`${
                          item.sub_attributes.length > 0 ? "" : "h-6"
                        } text-xs md:text-base m-0 mb-2 block leading-22 text-black-black_thin`}
                      >
                        {item.sub_attributes[0]?.attribute_ru}{" "}
                        {lang === "ru"
                          ? item.sub_attributes[4]?.attribute_ru
                          : lang === "en"
                          ? item.sub_attributes[4]?.attribute_en
                          : item.sub_attributes[4]?.attribute_uz}
                      </span>
                      <span
                        className={`text-xs md:text-sm block line-through text-gray-text_color ${
                          item.status_ru === "Новинки" ? "h-5" : null
                        } ${item.status_ru === "Pекомендуемые" ? "h-5" : null}`}
                      >
                        {item.status_ru === "Новинки" ||
                        item.status_ru === "Pекомендуемые"
                          ? null
                          : item.discount_price}{" "}
                        {item.status_ru === "Новинки" ||
                        item.status_ru === "Pекомендуемые"
                          ? ""
                          : lang === "ru"
                          ? " сум"
                          : lang === "en"
                          ? "soum"
                          : "sum"}
                      </span>
                      <span className="font-semibold text-sm md:text-lg text-blue-accent block mb-2.5">
                        {item.price}{" "}
                        {lang === "ru"
                          ? " сум"
                          : lang === "en"
                          ? "soum"
                          : "sum"}
                      </span>
                      <div className=" grid grid-cols-4 gap-3">
                        <Button
                          className={"text-sm md:text-base col-span-3"}
                          onClick={() => ProductOrder(item.id)}
                        >
                          {lang === "ru"
                            ? "Заказать"
                            : lang === "en"
                            ? "Order"
                            : "Buyurtma berish"}
                        </Button>
                        <Button
                          className={"text-sm md:text-base bg-[#109EF4] "}
                          onClick={() => console.log("Heart Cliked")}
                        >
                          <Image src={Heart} alt="Heart" className="mx-auto" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })
          )}
        </Swiper>
      </div>

      {/* ----- Modal ----- */}

      <Modal
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        {modalContent ? (
          <div>
            <div className="flex justify-between items-start">
              <p></p>
              <Image
                className="object-cover -mr-6"
                src={`/Assets/Images/ModalImg/success.svg`}
                width={64}
                height={64}
                alt="Success_image"
              />
              <button
                onClick={() => setShowModal(false)}
                className="rounded-md"
              >
                <Image
                  src={`/Assets/Images/ModalImg/close.svg`}
                  width={25}
                  height={25}
                  alt={"close_image"}
                />
              </button>
            </div>
            <div className="text-center max-w-362">
              <h1 className="font-bold text-2xl text-black-black_thin mt-2">
                {lang === "ru"
                  ? "Поздравляем!"
                  : lang === "en"
                  ? "Congratulations!"
                  : "Tabriklaymiz!"}
              </h1>
              <p className="text-sm text-black-black_thin my-2 mx-8">
                {lang === "ru"
                  ? "Поздравляем, ваш заказ принят. Мы свяжемся с вами в ближайшее время"
                  : lang === "en"
                  ? "Congratulations, your order has been accepted. We will contact you shortly"
                  : "Tabriklaymiz, buyurtmangiz qabul qilindi. Tez orada siz bilan bog'lanamiz"}
              </p>
            </div>
            <button
              className="w-full font-medium text-lg text-white bg-blue-base rounded-xl py-2 px-8 mt-2"
              onClick={() => {
                setShowModal(false);
              }}
            >
              Ok
            </button>
          </div>
        ) : (
          <div className="max-w-[710px] px-0">
            <div className="mb-3">
              <div className="flex justify-between items-start mb-4">
                <p></p>
                <h2 className="font-bold text-2xl text-black-black_thin text-center">
                  {lang === "ru"
                    ? "Ваш заказ"
                    : lang === "en"
                    ? "Your order"
                    : "Sizning buyurtmangiz"}
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="rounded-md"
                >
                  <Image
                    src={`/Assets/Images/ModalImg/close.svg`}
                    width={25}
                    height={25}
                    alt={"close_image"}
                  />
                </button>
              </div>
              <span className="block w-full h-0.5 bg-gray-line_color"></span>
            </div>
            <div className="flex items-start justify-between">
              <div className="border-1 rounded-lg w-[25%]">
                <Image
                  src={`${img}${find?.image?.at(0)}`}
                  width={100}
                  height={90}
                  alt="Product_image"
                />
              </div>
              <div className="w-[70%]">
                <div className="flex items-start justify-between">
                  <div className="w-[100%]">
                    <h3 className="block font-bold text-sm">
                      {lang === "ru"
                        ? find.name_ru
                        : lang === "en"
                        ? find.name_en
                        : find.name_uz}
                    </h3>
                    <p className="block font-medium mt-1 text-sm text-black-black_thin">
                      {find.attributes?.map((item) =>
                        lang === "ru"
                          ? item.attribute_ru
                          : lang === "en"
                          ? item.attribute_en
                          : item.attribute_uz
                      )}
                    </p>
                  </div>
                  {/* <button type="button">
                  <Image
                    className="w-6 h-6"
                    src={`/Assets/Images/ModalImg/closeWihite.svg`}
                    width={24}
                    height={24}
                    alt="close_image"
                  />
                </button> */}
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex">
                    <button
                      className="flex items-center justify-center text-2xl w-7 h-7 border-1 rounded-l-[6px] bg-gray-line_color"
                      type="button"
                      onClick={() =>
                        numberProduct == 1
                          ? setNumberProduct(numberProduct)
                          : setNumberProduct(numberProduct - 1)
                      }
                    >
                      -
                    </button>
                    <p className="bg-gray-span_bg text-center w-7 h-7 border-t-1 border-b-1">
                      {numberProduct}
                    </p>
                    <button
                      className="flex items-center justify-center text-xl w-7 h-7 border-1 rounded-r-[6px] bg-gray-line_color"
                      type="button"
                      onClick={() => setNumberProduct(numberProduct + 1)}
                    >
                      +
                    </button>
                  </div>
                  <p className="font-bold text-sm text-blue-accent">
                    {find.price}{" "}
                    {lang === "ru" ? " сум" : lang === "en" ? "soum" : "sum"}
                  </p>
                </div>
              </div>
            </div>
            <span className="block w-full h-0.5 bg-gray-line_color mt-3"></span>
            <div>
              <p className="text-base text-black-text_color mt-3">
                {lang === "ru"
                  ? "Общая сумма:"
                  : lang === "en"
                  ? "Total amount:"
                  : "Umumiy summa:"}
                <span className="font-bold text-base pl-3">
                  {numberProduct * find.price}{" "}
                  {lang === "ru" ? " сум" : lang === "en" ? "soum" : "sum"}
                </span>
              </p>
            </div>
            <span className="block w-full h-0.5 bg-gray-line_color mt-3"></span>
            <form
              onSubmit={(e) => {
                formik.handleSubmit(e);
                formik.values = initialValues;
              }}
              className="flex flex-col mt-5"
              autoComplete="off"
            >
              <label className="font-medium text-black-black_dark text-base relative flex flex-col">
                {languages[lang].buyAll.nameLabel}
                <input
                  type="text"
                  name="name"
                  id="name"
                  aria-label="Введите ваше имя"
                  placeholder={languages[lang].buyAll.placeholder}
                  className={
                    formik.touched.name && formik.errors.name
                      ? "h-48 text-base rounded-lg p-2 md:p-4 outline-none border border-red-600 mb-3 md:mb-4 mt-1"
                      : "h-48 text-base rounded-lg p-2 md:p-4 outline-none border border-gray-input_radius mb-4 md:mb-4 mt-1"
                  }
                  minLength="3"
                  maxLength="25"
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name ? (
                  <span className="text-red-600 text-xs absolute -bottom-1 sm:bottom-0 left-2">
                    {formik.errors.name}
                  </span>
                ) : null}
              </label>
              <label className="font-medium text-black-black_dark relative flex flex-col">
                {languages[lang].buyAll.phoneLabel}
                <div
                  className={
                    formik.touched.number && formik.errors.number
                      ? "flex items-center pl-4 h-48 text-base rounded-lg p-1 outline-none border border-red-600 mb-4 sm:mb-4 mt-1"
                      : "flex items-center pl-4 h-48 text-base rounded-lg p-1 outline-none border border-gray-input_radius mb-4 sm:mb-4 mt-1"
                  }
                >
                  <Image
                    src={"/Assets/Images/BuyAll/Flag.svg"}
                    className="w-6 h-4"
                    width={22}
                    height={15}
                    alt="site_logo"
                  />
                  <span className="text-base text-black ml-1">+998</span>
                  <input
                    type="number"
                    name="number"
                    id="number"
                    aria-label="phone_number"
                    placeholder="901234567"
                    className="outline-none w-full sm:ml-4 h-full p-2 text-base"
                    {...formik.getFieldProps("number")}
                  />
                  {formik.touched.number && formik.errors.number ? (
                    <span className="text-red-600 text-xs absolute bottom-0 left-2">
                      {formik.errors.number}
                    </span>
                  ) : null}
                </div>
              </label>

              <label className="font-medium text-black-black_dark text-base relative flex flex-col">
                {languages[lang].buyAll.address}
                <input
                  type="text"
                  name="address"
                  id="address"
                  aria-label="Введите ваш адрес"
                  placeholder={languages[lang].buyAll.placeholder1}
                  className={
                    formik.touched.address && formik.errors.address
                      ? "h-48 text-base rounded-lg p-2 sm:p-4 outline-none border border-red-600 mb-4 sm:mb-4 mt-1"
                      : "h-48 text-base rounded-lg p-2 sm:p-4 outline-none border border-gray-input_radius mb-5 sm:mb-4 mt-1"
                  }
                  minLength="3"
                  maxLength="35"
                  {...formik.getFieldProps("address")}
                />
                {formik.touched.address && formik.errors.address ? (
                  <span className="text-red-600 text-xs absolute bottom-0 left-2">
                    {formik.errors.address}
                  </span>
                ) : null}
              </label>
              <div className="mt-3">
                <button
                  className="w-full bg-blue-base rounded-xl text-white py-3"
                  type="submit"
                >
                  {loading ? (
                    <BtnLoader />
                  ) : lang === "ru" ? (
                    "Заказать"
                  ) : lang === "en" ? (
                    "Order"
                  ) : (
                    "Buyurtma berish"
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Populyar_nov;
