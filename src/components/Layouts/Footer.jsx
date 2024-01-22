import React from "react";
import FebImg from "../../assets/images/facebook 1.png";
import InstaImg from "../../assets/images/instagram 1.png";
import TweetImg from "../../assets/images/twitter 1.png";
import LinkImg from "../../assets/images/linkedin 1.png";

function Footer() {
  return (
    <div className="bg-[#070707] p-16 grid grid-cols-7 gap-16">
      <div className="col-span-2 flex flex-col gap-8">
        <div className="font-bold text-xl">Logo</div>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </div>
        <div>@Logo</div>
      </div>
      <div className="col-span-1 flex flex-col gap-4">
        <div className="font-medium text-lg mb-4">About us</div>
        <div>Zexu</div>
        <div>Careers</div>
        <div>Portfolio</div>
        <div>Contact us</div>
      </div>
      <div className="col-span-2 flex flex-col gap-4">
        <div className="font-medium text-lg mb-4">Contact us</div>
        <div className="mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </div>
        <div className="">+908 89097 890</div>
      </div>
      <div className="col-span-1 flex items-center gap-8">
        <div className="p-6 rounded-full bg-white">
          <img src={FebImg} />
        </div>
        <div className="p-6 rounded-full bg-white">
          <img src={InstaImg} />
        </div>
        <div className="p-6 rounded-full bg-white">
          <img src={TweetImg} />
        </div>
        <div className="p-6 rounded-full bg-white">
          <img src={LinkImg} className="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
