import React, { useState } from "react";
import { AdminData } from "./Context";
import { productsData } from "../data/products";
import { categoriesData } from "../data/categories";
import { ordersData } from "../data/orders";
import { pagesData } from "../data/pages";
import { postsData } from "../data/posts";
import { usersData } from "../data/users";

function AdminDataProvider({ children }) {
  const [view, setView] = useState("home");
  const [sideBareOpen, setSideBareOpen] = useState(true);
  const [viewSubMenu, setViewSubMenu] = useState("");
  const [modal, setModal] = useState(false);
  const [load, setLoad] = useState(true);
  const [products, setProducts] = useState(productsData);
  const [categories, setCategories] = useState(categoriesData);
  const [orders, setOrders] = useState(ordersData);
  const [pages, setPages] = useState(pagesData);
  const [posts, setPosts] = useState(postsData);
  const [users, setUsers] = useState(usersData);
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
    orders,
    setOrders,
    pages,
    setPages,
    load,
    setLoad,
    posts,
    setPosts,
    users,
    setUsers,
  };
  return <AdminData.Provider value={value}>{children}</AdminData.Provider>;
}

export default AdminDataProvider;
