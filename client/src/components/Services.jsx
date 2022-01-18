import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Project Explanation
          <br />
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          This project is an demo of how the web can use the Ethereum Blockchain
          <br />
          Project based on youtube tutorial, which can be found here:
          <a style={{color: 'skyblue'}} href="https://youtu.be/Wn_Kb3MR_cU">Source</a>
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="First"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="The frontend is created in react, but all data is passed through the blockchain which acts like a backend"
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Second"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="A user would send a message to another account using their metamask account address The entire message is hashed and sent to the blockchain"
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Third"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Once the message is mined, it is confirmed and the response in the frontend is rendered"
        />
      </div>
    </div>
  </div>
);
export default Services