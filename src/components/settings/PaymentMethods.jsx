import React, { useContext, useState } from "react";
import { AdminData } from "../../context/Context";
import PaymentMethodConfig from "./PaymentMethodConfig";
import { MdEdit } from "react-icons/md";
import SwitchButton from "./SwitchButton";

function PaymentMethods() {
  const { paymentMethods, setPaymentMethods, modals, setModals } =
    useContext(AdminData);
  const [payment, setPayment] = useState(null);

  //handel edite
  const handleConfig = (item) => {
    setPayment(item);
    setModals({ ...modals, payment: true, id: "payment" });
  };

  const handleAcitePayment = (paymentId) => {
    const upadatedPaymentMethods = paymentMethods.map((item) => {
      if (item.id === paymentId) {
        return { ...item, enabled: !item.enabled };
      }
      return item;
    });
    setPaymentMethods(upadatedPaymentMethods);
  };

  return (
    <>
      <div className=" overflow-x-scroll">
        {modals.payment ? <PaymentMethodConfig payment={payment} /> : null}
        <table className=" min-w-full text-left text-sm text-gray-700 border border-gray-200">
          <caption className="text-2xl font-bold my-10 text-start">
            Payment Methods
          </caption>
          <thead className="bg-gray-100 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-4 py-3">Payment Methods</th>
              <th className="px-4 py-3">Active</th>
              <th className="px-4 py-3">Config</th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-gray-200 bg-white">
            {paymentMethods.length > 0 ? (
              paymentMethods.map((item) => (
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
                  No Payments methods available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PaymentMethods;
