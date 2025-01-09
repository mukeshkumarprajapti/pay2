import { Button, Divider } from "@jamsr-ui/react";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#111721]  text-white p-8 lg:p-10   ">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-10  md:grid-cols-4">
          <div className="py-5 ">
            <p className=" font-bold px-4">Products</p>
            <Button variant="text" className="text-gray-400 text-lg block">
              Payment Gateway
            </Button>
            <Button variant="text" className="text-gray-400 text-lg block">
              Mass Payments
            </Button>
            <Button variant="text" className="text-gray-400 text-lg block">
              Exchange
            </Button>
          </div>
          <div className="py-5 ">
            <p className=" font-bold px-4">Company</p>
            <Button variant="text" className="text-gray-400 text-lg block">
              {" "}
              About
            </Button>
            <Button variant="text" className="text-gray-400 text-lg block">
              Careers
            </Button>
            <Button variant="text" className="text-gray-400 text-lg block">
              Blog
            </Button>
          </div>
          <div className="py-5 ">
            <p className=" font-bold px-4">Resources</p>
            <Button variant="text" className="text-gray-400 text-lg block">
              Documentation
            </Button>
            <Button variant="text" className="text-gray-400 text-lg block">
              Help Center
            </Button>
            <Button variant="text" className="text-gray-400 text-lg block">
              API Reference
            </Button>
          </div>
          <div className="py-5 ">
            <p className=" font-bold px-4">Legal</p>
            <Button variant="text" className="text-gray-400 text-lg block">
              Privacy Policy
            </Button>
            <Button variant="text" className="text-gray-400 text-lg block">
              Terms of Service
            </Button>
            <Button variant="text" className="text-gray-400 text-lg block">
              Compliance
            </Button>
          </div>
        </div>
        <hr />
        <div className="text-center md:flex justify-between items-center py-4">
          <div className="flex items-center justify-center ">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-10 mx-2 rounded-full"
              src="https://static.vecteezy.com/system/resources/previews/047/656/219/non_2x/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg"
              alt="logo"
            />
            <div className="font-bold text-3xl ">
              <span>JamsrPay</span>
            </div>
          </div>
          <div className="text-gray-400 text-lg block">
            © 2024 JamsrPay. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
