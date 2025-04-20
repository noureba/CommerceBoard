import React, { useContext, useState } from "react";
import { AdminData } from "../../context/Context";
import Modals from "../Modals";

const EditShippingMethodsModal = (Props) => {
  const { shippingMthods, setShippingMethods, modals, setModals } =
    useContext(AdminData);
  const [shipping, setShipping] = useState(Props.shipping);

  const updatePaymentMethods = () => {
    const updatedMethods = shippingMthods.map((item) => {
      if (item.id === shipping.id) {
        return { ...item, ...shipping };
      }
      return item;
    });
    setShippingMethods(updatedMethods);
    setModals({ ...modals, shipping: false });
  };

  return (
    <Modals>
      <div style={{ maxWidth: 800, margin: "auto" }}>
        <h2 className="text-3xl font-bold my-10 text-start">
          Edit {shipping.name} Config
        </h2>
        <div className="fex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="deliveryTime">
                Delivery Time <span className="text-red-500">*</span>
              </label>
              <input
                className="border border-fuchsia-500 p-2 bg-white rounded"
                type="text"
                value={shipping.deliveryTime}
                name="deliveryTime"
                onChange={(e) =>
                  setShipping({
                    ...shipping,
                    deliveryTime: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="deliveryTime">
                Cost <span className="text-red-500">*</span>
              </label>
              <input
                className="border border-fuchsia-500 p-2 bg-white rounded"
                type="text"
                value={shipping.cost}
                name="deliveryTime"
                onChange={(e) =>
                  setShipping({
                    ...shipping,
                    cost: e.target.value,
                  })
                }
                required
              />
            </div>
          </div>
        </div>
        <button
          className="bg-fuchsia-500 text-white rounded px-3 py-2 font-medium cursor-pointer self-start hover:bg-fuchsia-400"
          onClick={updatePaymentMethods}
          style={{ marginTop: "20px" }}
        >
          Save changes
        </button>
      </div>
    </Modals>
  );
};

export default EditShippingMethodsModal;
