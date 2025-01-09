import { Repeater } from "@jamsr-ui/react";

const SupportedCrypto = () => {
  return (
    <div className="bg-[#0C111C]  text-white p-10 lg:py-28   ">
      <div className="container mx-auto">
        <div className="text-white  text-center mb-8  ">
          <span className="font-bold text-3xl lg:text-4xl ">
            Supported Cryptocurrencies
          </span>
        </div>

        <div className="grid grid-cols-3 gap-10 p-3 md:p-10 md:grid-cols-5 lg:flex lg:justify-between">
          <Repeater repeat={8}>
            <div className="h-16 w-16 bg-gray-500 rounded-full"></div>
          </Repeater>
        </div>
      </div>
    </div>
  );
};

export default SupportedCrypto;
