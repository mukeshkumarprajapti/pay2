import {
  Button,
  Header,
  type HeaderProps,
  Menu,
  MenuItem,
} from "@jamsr-ui/react";
import { ChevronDownIcon } from "@jamsr-ui/shared-icons";

const Navbar = (props: HeaderProps) => {
  return (
    <>
      <Header
        className="  flex justify-between "
        {...props}
      >
        <div className="container mx-auto flex justify-between items-center  ">
          <div className="flex justify-between items-center ">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-10 mx-2 rounded-full"
              src="https://static.vecteezy.com/system/resources/previews/047/656/219/non_2x/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg"
              alt="logo"
            />
            <div className="font-bold text-3xl ">
              <span className="bg-gradient-to-r from-blue-500 to-pink-400 bg-clip-text text-transparent">
                JamsrPay
              </span>
            </div>
          </div>
          <div className="hidden lg:flex justify-between ">
            <div className="flex justify-center">
              <Menu
                     classNames={{
                      popover:
                        "bg-[#0C111C]",
                    }}
                trigger={
                  <Button
                    className="text-md font-semibold text-white"
                    endContent={<ChevronDownIcon />}
                    variant="text"
                  >
                    Solutions
                  </Button>
                }
              >
                <MenuItem  >For Business </MenuItem>
                <MenuItem >For Enterprise</MenuItem>
                <MenuItem >For Developers</MenuItem>
              </Menu>
            </div>
            <div className="flex justify-center">
              <Menu
                classNames={{
          popover:
            "bg-[#0C111C]",
        }}
                trigger={
                  <Button
                    className="text-md font-semibold text-white"
                    endContent={<ChevronDownIcon />}
                    variant="text"
                  >
                    Products
                  </Button>
                }
              >
                <MenuItem >Payment Gateway</MenuItem>
                <MenuItem >Mass Payments</MenuItem>
                <MenuItem >Crypto Exchange</MenuItem>
              </Menu>
            </div>
            <Button variant="text" className="text-md font-semibold text-white">
              Pricing
            </Button>
            <Button variant="text" className="text-md font-semibold text-white">
              Developers
            </Button>
          </div>
          <div className="flex justify-center gap-3">
            <Button
              variant="light"
              className="hidden lg:inline-block text-md font-semibold"
            >
              Sign In
            </Button>
            <Button color="primary" className="text-md font-semibold">
              Start
            </Button>
          </div>
        </div>
      </Header>
    </>
  );
};

export default Navbar;
