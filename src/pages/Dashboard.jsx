import React from "react";
import SideBare from "../components/SideBare";
import View from "../components/View";

function Dashboard() {
  return (
    <div className="max-w-[1700px] mx-auto bg-fuchsia-50">
      <div className="flex justify-between">
        <div>
          <SideBare />
        </div>
        <div className="grow overflow-hidden md:p-10 p-3">
          <View />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
