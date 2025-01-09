import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Plan from "@/components/Plan";
import SupportedCrypto from "@/components/SupportedCrypto";
import Trusted from "@/components/Trusted";
import GetStart from "@/components/GetStart";
import Footer from "@/components/Footer";
import { UIProvider } from "@jamsr-ui/react";

const page = () => {
  return (
    <UIProvider>
      
      <Navbar/>
      <Hero/>
      <Plan/>
      <SupportedCrypto/>
      <Trusted/>
      <GetStart/>
      <Footer/>
       
    </UIProvider>
  )
}

export default page
