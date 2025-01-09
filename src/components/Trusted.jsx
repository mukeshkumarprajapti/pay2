import { Repeater } from "@jamsr-ui/react";

const Trusted = () => {
  return (
    <div className="bg-[#111721]  text-white p-10 lg:py-28   ">
      <div className="container mx-auto">
        <div className="text-white  text-center mb-8  ">
          <span className="font-bold text-3xl lg:text-4xl ">
            Trusted by Industry Leaders
          </span>
        </div>

        <div className="grid grid-cols-2 gap-10 p-3 md:p-10 lg:flex lg:justify-between">
          <Repeater repeat={4}>
            <div className="h-16 w-36 bg-gray-500 "></div>
          </Repeater>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
