import AboutUs from "../AboutUs/AboutUs";
import Hero from "../Hero/Hero";
import BuyAll from "../BuyAll/BuyAll";
import TashkentPools from "../TashkentPools/TashkentPools";
import Consultation from "../Consultation/Consultation";
import { useEffect, useState } from "react";
import Tovar_nov from "../Tovar_noviy/Tovar_noviy";
import Sale_nov from "../Sale_tovar/Sale_tovar";
import Populyar_nov from "../Populyar_tovar/Populyar_tovar";
import Basket from "../Basket/Basket";
import Order from "../Order/order";
import SimilarProducts from "../Similat_ptoducts/similar";
import Products from "../Products/Products";
import axios from "axios";

import Magazines from "../Magazines/Magazines";

function Main() {
  const [mobile, setMobile] = useState(false);
  const [product, setProduct] = useState([]);
  const [cartItems, setCardItems] = useState([]);
  const [newProduct, setNewProduct] = useState([]);
  const [discountProduct, setDiscountProduct] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setCardItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }];
      setCardItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== product.id);
      setCardItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    } else {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      );
      setCardItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };

  // useEffect(() => {
  //   setCardItems(
  //     localStorage.getItem("cartItems")
  //       ? JSON.parse(localStorage.getItem("cartItems"))
  //       : []
  //   );
  // }, []);
  const onAdds = (newProduct) => {
    const exist = cartItems.find((x) => x.id === newProduct.id);
    if (exist) {
      const newCartItems = cartItems.map((x) =>
        x.id === newProduct.id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setCardItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    } else {
      const newCartItems = [...cartItems, { ...newProduct, qty: 1 }];
      setCardItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };
  const onRemoves = (newProduct) => {
    const exist = cartItems.find((x) => x.id === newProduct.id);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== newProduct.id);
      setCardItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    } else {
      const newCartItems = cartItems.map((x) =>
        x.id === newProduct.id ? { ...exist, qty: exist.qty - 1 } : x
      );
      setCardItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };
  const onAdded = (discountProduct) => {
    const exist = cartItems.find((x) => x.id === discountProduct.id);
    if (exist) {
      const newCartItems = cartItems.map((x) =>
        x.id === discountProduct.id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setCardItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    } else {
      const newCartItems = [...cartItems, { ...discountProduct, qty: 1 }];
      setCardItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };
  const onRemoved = (discountProduct) => {
    const exist = cartItems.find((x) => x.id === discountProduct.id);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== discountProduct.id);
      setCardItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    } else {
      const newCartItems = cartItems.map((x) =>
        x.id === discountProduct.id ? { ...exist, qty: exist.qty - 1 } : x
      );
      setCardItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };

  // useEffect(() => {
  //   setCardItems(
  //     localStorage.getItem("cartItems")
  //       ? JSON.parse(localStorage.getItem("cartItems"))
  //       : []
  //   );
  // }, []);

  // useEffect(() => {
  //   let details = navigator.userAgent;
  //   let regexp = /android|iphone|kindle|ipad/i;
  //   let isMobileDevice = regexp.test(details);
  //   if (isMobileDevice) {
  //     setMobile(true);
  //   } else {
  //     setMobile(false);
  //   }
  // }, []);
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://intex-shop-production.up.railway.app/api/products?current_page=0&status_ids=3`
  //     )
  //     .then((res) => {
  //       // console.log(res);
  //       setProduct(res?.data?.result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   axios
  //     .get(
  //       `https://intex-shop-production.up.railway.app/api/products?current_page=0&status_ids=1`
  //     )
  //     .then((res) => {
  //       // console.log(res);
  //       setNewProduct(res?.data?.result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   axios
  //     .get(
  //       `https://intex-shop-production.up.railway.app/api/products?current_page=0&status_ids=2`
  //     )
  //     .then((res) => {
  //       // console.log(res);
  //       setDiscountProduct(res?.data?.result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <main>
      <Magazines />
      <Hero />
      {/* <Order /> */}
      {/* <Basket /> */}
      <Populyar_nov
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        mobile={mobile}
        product={product}
      />
      {/* <TashkentPools /> */}
      <Tovar_nov
        mobile={mobile}
        cartItems={cartItems}
        onAdd={onAdds}
        onRemove={onRemoves}
        product={newProduct}
      />
      {/* <BuyAll /> */}
      {/* <AboutUs /> */}
      <Sale_nov
        mobile={mobile}
        cartItems={cartItems}
        onAdd={onAdded}
        onRemove={onRemoved}
        product={discountProduct}
      />
      <Consultation />
    </main>
  );
}

export default Main;
