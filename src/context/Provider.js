import React, { useState } from "react";
import { AdminData } from "./Context";

function AdminDataProvider({ children }) {
  const [view, setView] = useState("home");
  const [sideBareOpen, setSideBareOpen] = useState(true);
  const [viewSubMenu, setViewSubMenu] = useState("");

  const value = {
    view,
    setView,
    sideBareOpen,
    setSideBareOpen,
    viewSubMenu,
    setViewSubMenu,
  };
  return <AdminData.Provider value={value}>{children}</AdminData.Provider>;
}

export default AdminDataProvider;
