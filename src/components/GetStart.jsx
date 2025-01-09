import { Button } from "@jamsr-ui/react";

const GetStart = () => {
  return (
    <div className="bg-[#0C111C] flex justify-between   text-white p-16 lg:p-20">
      <div className="container mx-auto">
        <div className="p-16 bg-blue-700 rounded-xl">
          <div className="text-center">
            <span className="font-bold text-3xl lg:text-4xl ">
              Ready to Revolutionize Your Payments?
            </span>
          </div>
          <div className="text-center mb-10">
            <p className="text-xl font-semibold py-4 ">
              Join thousands of businesses already using JamsrPay to process
              millions in crypto transactions daily.
            </p>
          </div>
          <div className="flex justify-center">
            <Button
              size="lg"
              
              className="text-blue-600 bg-white rounded-full text-xl lg:px-12"
            > 
              Get Start Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStart;
