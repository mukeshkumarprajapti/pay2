import React from "react";

const Plan = () => {
  return (
    <div className="bg-[#111721] text-white p-16 lg:py-28  border-y border-slate-500 ">
      <div className="container mx-auto">
        <div className="text-white  text-center mb-8  ">
          <span className="font-bold text-3xl lg:text-4xl ">
            Why Leading Businesses Choose JamsrPay
          </span>
        </div>
        <div className="md:flex justify-between ">
          <div className="p-4 m-3 border rounded-lg border-slate-500  bg-gray-900">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shield h-12 w-12 text-blue-500 mb-4"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold block mb-2">
                Enterprise-Grade Security
              </h1>
              <p>
                Bank-level encryption, multi-signature wallets, and cold storage
                protection for your funds.
              </p>
            </div>
          </div>
          <div className="p-4 m-3 border rounded-lg border-slate-500 bg-gray-900 ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-zap h-12 w-12 text-blue-500 mb-4"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold  mb-2">
                Enterprise-Grade Security
              </h1>
              <p>
                Bank-level encryption, multi-signature wallets, and cold storage
                protection for your funds.
              </p>
            </div>
          </div>
          <div className="p-4 m-3 border rounded-lg border-slate-500 bg-gray-900">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-globe h-12 w-12 text-blue-500 mb-4"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold block mb-2">
                Enterprise-Grade Security
              </h1>
              <p>
                Bank-level encryption, multi-signature wallets, and cold storage
                protection for your funds.
              </p>
            </div>
          </div>
          <div className="p-4 m-3 border rounded-lg border-slate-500 bg-gray-900">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-users h-12 w-12 text-blue-500 mb-4"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold block mb-2">
                Enterprise-Grade Security
              </h1>
              <p>
                Bank-level encryption, multi-signature wallets, and cold storage
                protection for your funds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
