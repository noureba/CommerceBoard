import React, { useContext, useState } from "react";
import { AdminData } from "../../context/Context";
import { MdEdit } from "react-icons/md";
import SwitchButton from "./SwitchButton";
import EditShippingMethodsModal from "./EditShippingMethodsModal";

function ShippingMethods() {
  const { shippingMthods, setShippingMethods, modals, setModals } =
    useContext(AdminData);
  const [shipping, setShipping] = useState(null);

  //handel edite
  const handleConfig = (item) => {
    setShipping(item);
    setModals({ ...modals, id: "shipping", shipping: true });
  };

  const handleAcitePayment = (paymentId) => {
    const upadatedShipppingMethods = shippingMthods.map((item) => {
      if (item.id === paymentId) {
        return { ...item, enabled: !item.enabled };
      }
      return item;
    });
    setShippingMethods(upadatedShipppingMethods);
  };

  return (
    <>
      <div className=" overflow-x-scroll">
        {modals.shipping ? <EditShippingMethodsModal shipping={shipping} /> : null}
        <table className=" min-w-full text-left text-sm text-gray-700 border border-gray-200">
          <caption className="text-2xl font-bold my-10 text-start">
            Shipping Methods
          </caption>
          <thead className="bg-gray-100 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-4 py-3">Shipping Methods</th>
              <th className="px-4 py-3">Active</th>
              <th className="px-4 py-3">Config</th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-gray-200 bg-white">
            {shippingMthods.length > 0 ? (
              shippingMthods.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-3">{item.name}</td>
                  <td className="px-4 py-3">
                    {
                      <SwitchButton
                        status={item.enabled}
                        toggle={() => handleAcitePayment(item.id)}
                      />
                    }
                  </td>
                  <td className="px-4 py-3">
                    <p
                      className=" underline text-blue-500 flex justify-center items-start cursor-pointer gap-2"
                      onClick={() => handleConfig(item)}
                    >
                      Config <MdEdit />
                    </p>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-2xl text-center py-5" colSpan="3">
                  No Shipping methods available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ShippingMethods;
