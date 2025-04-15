import React from "react";
import "./styles/global.css";
import AdminDataProvider from "./context/Provider";
import SideBare from "./components/SideBare";
import View from "./components/View";

const App = () => {
  return (
    <AdminDataProvider>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between">
          <SideBare />
          <View />
        </div>
      </div>
    </AdminDataProvider>
  );
};

export default App;
