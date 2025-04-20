import React, { useContext, useState } from "react";
import { AdminData } from "../../context/Context";
import Modals from "../Modals";

const PaymentMethodConfig = (Props) => {
  const { paymentMethods, setPaymentMethods, setModals, modals } =
    useContext(AdminData);
  const [payment, setPayment] = useState(Props.payment);

  const updatePaymentMethods = () => {
    const updatedMethods = paymentMethods.map((item) => {
      if (item.id === payment.id) {
        return { ...item, ...payment };
      }
      return item;
    });
    setPaymentMethods(updatedMethods);
    setModals({ ...modals, payment: false });
  };

  return (
    <Modals>
      <div style={{ maxWidth: 800, margin: "auto" }}>
        <h2 className="text-3xl font-bold my-10 text-start">
          Edit {payment.name} Config
        </h2>
        <div className="fex flex-col gap-10">
          {payment.type === "credit_card" ? (
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="provider">
                  Provider <span className="text-red-500">*</span>
                </label>
                <input
                  className="border border-fuchsia-500 p-2 bg-white rounded"
                  type="text"
                  value={payment.config.provider}
                  name="provider"
                  onChange={(e) =>
                    setPayment({
                      ...payment,
                      config: { ...payment.config, provider: e.target.value },
                    })
                  }
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="apiKey">
                  apiKey <span className="text-red-500">*</span>
                </label>
                <input
                  className="border border-fuchsia-500 p-2 bg-white rounded"
                  type="text"
                  value={payment.config.apiKey}
                  name="apiKey"
                  onChange={(e) =>
                    setPayment({
                      ...payment,
                      config: { ...payment.config, apiKey: e.target.value },
                    })
                  }
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="transactionFeePercent">
                  transaction Fee Percent{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  className="border border-fuchsia-500 p-2 bg-white rounded"
                  type="text"
                  value={payment.config.transactionFeePercent}
                  name="transactionFeePercent"
                  onChange={(e) =>
                    setPayment({
                      ...payment,
                      config: {
                        ...payment.config,
                        transactionFeePercent: e.target.value,
                      },
                    })
                  }
                  required
                />
              </div>
            </div>
          ) : null}
          {payment.type === "paypal" ? (
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  className="border border-fuchsia-500 p-2 bg-white rounded"
                  type="text"
                  value={payment.config.email}
                  name="email"
                  onChange={(e) =>
                    setPayment({
                      ...payment,
                      config: { ...payment.config, email: e.target.value },
                    })
                  }
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="clientId">
                  clientId <span className="text-red-500">*</span>
                </label>
                <input
                  className="border border-fuchsia-500 p-2 bg-white rounded"
                  type="text"
                  value={payment.config.clientId}
                  name="clientId"
                  onChange={(e) =>
                    setPayment({
                      ...payment,
                      config: { ...payment.config, clientId: e.target.value },
                    })
                  }
                  required
                />
              </div>
            </div>
          ) : null}
          {payment.type === "cod" ? (
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="additionalFee">
                  Additional Fee <span className="text-red-500">*</span>
                </label>
                <input
                  className="border border-fuchsia-500 p-2 bg-white rounded"
                  type="text"
                  value={payment.config.additionalFee}
                  name="additionalFee"
                  onChange={(e) =>
                    setPayment({
                      ...payment,
                      config: {
                        ...payment.config,
                        additionalFee: e.target.value,
                      },
                    })
                  }
                  required
                />
              </div>
            </div>
          ) : null}
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

export default PaymentMethodConfig;
