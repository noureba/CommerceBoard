import React, { useContext } from "react";
import { AdminData } from "../context/Context";
import Home from "./Home";
import AllProducts from "./products/AllProducts";
import AddProduct from "./products/AddProduct";
import Categories from "./products/Categories";
import AllOrders from "./orders/AllOrders";
import AddOrder from "./orders/AddOrder";
import AllPages from "./pages/AllPages";
import AddPage from "./pages/AddPage";
import AllPosts from "./posts/AllPosts";
import AddPosts from "./posts/AddPosts";
import AllUsers from "./users/AllUsers";
import AddUser from "./users/AddUser";
import Profile from "./settings/Profile";
import Others from "./settings/Others";

function View() {
  const { view } = useContext(AdminData);
  const viewSwitch = () => {
    switch (view) {
      case "home":
        return <Home />;
      case "All products":
        return <AllProducts />;
      case "Add new product":
        return <AddProduct />;
      case "Categories":
        return <Categories />;
      case "All orders":
        return <AllOrders />;
      case "Add new order":
        return <AddOrder />;
      case "All pages":
        return <AllPages />;
      case "Add new page":
        return <AddPage />;
      case "All posts":
        return <AllPosts />;
      case "Add new post":
        return <AddPosts />;
      case "All users":
        return <AllUsers />;
      case "Add new user":
        return <AddUser />;
      case "Profile":
        return <Profile />;
      case "Others":
        return <Others />;
      default:
        return <Home />;
    }
  };

  return <div>{viewSwitch()}</div>;
}

export default View;
