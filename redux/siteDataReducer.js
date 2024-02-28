import { createSlice } from "@reduxjs/toolkit";
import languages from "./localization.js";
const initialState = [
  {
    id: "1",
    status: "Хит продаж",
    name: "Каркасный прямоугольный бассейн ",
    price: "1 200 000 сум",
    sale_price: "1 250 000 сум",
    capacity: "1662",
    size: "220x240x60см",
  },
  {
    id: "2",
    status: "Популярное",
    name: "Каркасный прямоугольный бассейн ",
    price: "1 200 000 сум",
    sale_price: "1 250 000 сум",
    capacity: "1662",
    size: "220x240x60см",
  },
  {
    id: "3",
    status: "Pекомендуем",
    name: "Каркасный прямоугольный бассейн ",
    price: "1 200 000 сум",
    sale_price: "1 250 000 сум",
    capacity: "1662",
    size: "220x240x60см",
  },
  {
    id: "4",
    status: "-17% скидка",
    name: "Каркасный прямоугольный бассейн ",
    price: "1 200 000 сум",
    sale_price: "1 250 000 сум",
    capacity: "1662",
    size: "220x240x60см",
  },
  {
    id: "5",
    status: "Новинки",
    name: "Каркасный прямоугольный бассейн ",
    price: "1 200 000 сум",
    sale_price: "1 250 000 сум",
    capacity: "1662",
    size: "220x240x60см",
  },
  {
    id: "6",
    status: "Новинки",
    name: "Каркасный прямоугольный бассейн ",
    price: "1 200 000 сум",
    sale_price: "1 250 000 сум",
    capacity: "1662",
    size: "220x240x60см",
  },
  {
    id: "7",
    status: "Хит продаж",
    name: "Каркасный прямоугольный бассейн ",
    price: "1 200 000 сум",
    sale_price: "1 250 000 сум",
    capacity: "1662",
    size: "220x240x60см",
  },
  {
    id: "8",
    status: "Хит продаж",
    name: "Каркасный прямоугольный бассейн ",
    price: "1 200 000 сум",
    sale_price: "1 250 000 сум",
    capacity: "1662",
    size: "220x240x60см",
  },
  {
    id: "9",
    status: "Хит продаж",
    name: "Каркасный прямоугольный бассейн ",
    price: "1 200 000 сум",
    sale_price: "1 250 000 сум",
    capacity: "1662",
    size: "220x240x60см",
  },
];
const siteProducts = createSlice({
  name: "products",
  initialState: {
    localization: languages,
    lang: "uz",
    initialState,
    search: "",
    categoryId: 0,
    productId: 0,
    setToken: null,
  },
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
    location: (state, action) => {
      state.localization = action.payload;
    },
    products: (state, action) => {
      state.initialState = action.payload;
    },
    searchProduct: (state, action) => {
      state.search = action.payload;
    },
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setProductId: (state, action) => {
      state.productId = action.payload;
    },
    setTokenUser: (state, action) => {
      state.setToken = action.payload;
    },
  },
});

export const {
  changeLang,
  products,
  searchProduct,
  setCategoryId,
  setProductId,
  setTokenUser,
} = siteProducts.actions;

export default siteProducts.reducer;
