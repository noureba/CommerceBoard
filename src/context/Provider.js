import React, { useState } from "react";
import { AdminData } from "./Context";
import { productsData } from "../data/products";
import { categoriesData } from "../data/categories";

function AdminDataProvider({ children }) {
  const [view, setView] = useState("home");
  const [sideBareOpen, setSideBareOpen] = useState(true);
  const [viewSubMenu, setViewSubMenu] = useState("");
  const [modal, setModal] = useState(false);
  //const [load, setLoad] = useState(true)
  const [products, setProducts] = useState(productsData);
  const [categories, setCategories] = useState(categoriesData);

  const value = {
    view,
    setView,
    sideBareOpen,
    setSideBareOpen,
    viewSubMenu,
    setViewSubMenu,
    modal,
    setModal,
    products,
    setProducts,
    categories,
    setCategories,
  };
  return <AdminData.Provider value={value}>{children}</AdminData.Provider>;
}

export default AdminDataProvider;
