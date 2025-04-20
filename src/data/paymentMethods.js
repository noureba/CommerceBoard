export const paymentMethodsData = [
  {
    id: "pm_visa",
    name: "Visa / MasterCard",
    type: "credit_card",
    enabled: true,
    logo: "/icons/visa-mastercard.png",
    config: {
      provider: "Stripe",
      apiKey: "***************", 
      transactionFeePercent: 2.5,
    },
  },
  {
    id: "pm_paypal",
    name: "PayPal",
    type: "paypal",
    enabled: true,
    logo: "/icons/paypal.png",
    config: {
      email: "admin@paypal.com",
      clientId: "***************",
    },
  },
  {
    id: "pm_cod",
    name: "Cash on Delivery",
    type: "cod",
    enabled: false,
    logo: "/icons/cod.png",
    config: {
      additionalFee: 10, 
    },
  },
];
