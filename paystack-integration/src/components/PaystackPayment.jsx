import React, { useState } from "react";

const PaystackPayment = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const payWithPaystack = () => {
    if (!email || !amount) return;

    setLoading(true);

    const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
    // console.log(publicKey);
    

    const handler = window.PaystackPop.setup({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY, // must be pk_test_xxx
      email: email.trim(),
      amount: Number(amount) * 100, // in Kobo
      currency: "NGN",
      ref: `ref-${Date.now()}`,
      callback: function (response) {
        setLoading(false);
        alert("Payment successful! Reference: " + response.reference);
        console.log(response);
      },
      onClose: function () {
        setLoading(false);
        alert("Payment window closed.");
      },
    });


    handler.openIframe();
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 shadow-xl rounded-2xl">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        Pay with Paystack
      </h2>

      <div className="space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="number"
          placeholder="Amount (NGN)"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value ? Number(e.target.value) : "")
          }
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          onClick={payWithPaystack}
          disabled={loading || !email || !amount}
          className={`w-full py-3 rounded-lg transition text-white ${
            loading || !email || !amount
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
};

export default PaystackPayment;
