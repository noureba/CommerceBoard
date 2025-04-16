import React, { useState } from "react";
import { AdminData } from "./Context";
import { products } from "../data/products";
import { categories } from "../data/categories";

function AdminDataProvider({ children }) {
  const [view, setView] = useState("home");
  const [sideBareOpen, setSideBareOpen] = useState(true);
  const [viewSubMenu, setViewSubMenu] = useState("");
  const [modal, setModal] = useState(false);

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
    categories,
  };
  return <AdminData.Provider value={value}>{children}</AdminData.Provider>;
}

export default AdminDataProvider;
