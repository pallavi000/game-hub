import React from "react";
import HeroImg from "../src/assets/images/hero.png";
import Trend1Img from "../src/assets/images/trend1.png";
import Trend2Img from "../src/assets/images/trend2.png";
import Trend3Img from "../src/assets/images/trend3.png";
import Trend4Img from "../src/assets/images/trend4.png";
import Fireicon from "../src/assets/images/fire.png";
import Hero2Img from "../src/assets/images/hero2.png";
import bgImg from "../src/assets/images/bg.png";
import icon1Img from "../src/assets/images/icon1.png";
import icon2Img from "../src/assets/images/icon2.png";
import icon3Img from "../src/assets/images/icon3.png";
import icon4Img from "../src/assets/images/icon4.png";
import icon5Img from "../src/assets/images/icon5.png";
import icon6Img from "../src/assets/images/icon6.png";
import dotImg from "../src/assets/images/dotImg.png";
import arrowImg from "../src/assets/images/arrow.png";
import project1Img from "../src/assets/images/project1.png";
import project2Img from "../src/assets/images/project2.png";
import project3Img from "../src/assets/images/project3.png";
import project4Img from "../src/assets/images/project4.png";
import project5Img from "../src/assets/images/project5.png";
import project6Img from "../src/assets/images/project6.png";

const trends = [Trend1Img, Trend2Img, Trend3Img, Trend4Img];
const projects = [
  project1Img,
  project2Img,
  project3Img,
  project4Img,
  project5Img,
  project6Img,
];
const icons = [
  {
    name: "Mobile Game Development",
    icon: icon1Img,
    arrow: arrowImg,
  },
  {
    name: "PC Game Development",
    icon: icon2Img,
    arrow: arrowImg,
  },
  {
    name: "PS4 Game Development",
    icon: icon3Img,
    arrow: arrowImg,
  },
  {
    name: "AR/VR Solutions",
    icon: icon4Img,
    arrow: arrowImg,
  },
  {
    name: "AR/ VR design",
    icon: icon5Img,
    arrow: arrowImg,
  },
  {
    name: "3D Modelings",
    icon: icon6Img,
    arrow: arrowImg,
  },
];

function App() {
  return (
    <div>
      <div className="grid grid-cols-2 p-16 gap-16 justify-center items-center">
        <div className="col-span-1 flex flex-col gap-6 ">
          <div className="text-orange-500 font-medium">3D game Dev</div>
          <div className="text-[50px] font-bold leading-[65px]">
            Work that we produce for our clients
          </div>
          <div className="font-medium">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </div>
          <button className="text-sm btn-detail py-3 px-5 mt-4 rounded-full w-fit">
            Get more detail
          </button>
        </div>
        <div className="col-span-1">
          <img src={HeroImg} className="h-[500px] w-[730px]" />
        </div>
      </div>

      <div className="trending p-16">
        <div className="flex justify-between items-center py-4">
          <div className="font-bold text-3xl">Currently Trending Games</div>
          <div className=" text-lg p-3 px-7 font-medium uppercase bg-[#1C140F] rounded-md">
            See All
          </div>
        </div>
        <div className="py-4 font-medium grid grid-cols-4 gap-8 justify-center  text-xl mt-4">
          {trends.map((trend, index) => {
            return (
              <div key={index} className="flex flex-col gap-4 items-center">
                <img src={trend} />
                <div className="flex items-center justify-center gap-3">
                  <img src={Fireicon} /> <span>40 Followers</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex justify-center p-16">
        <div className="text-center w-[60%] font-semibold text-3xl leading-[50px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
      </div>

      <div className="p-16 flex flex-col gap-16">
        <div className="font-medium text-3xl">Lorem Ipsum</div>
        <div className="w-[40%] leading-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </div>
        <div className="flex justify-center relative border border-white ">
          <img
            src={dotImg}
            className=" absolute top-[-85px] h-[150px] right-[170px]"
          />
          <img src={Hero2Img} className="w-full z-20" />
        </div>
      </div>
      <div className="icon-background py-20 px-16 flex justify-center">
        <div className=" w-[75%]">
          <div className="flex flex-col gap-16 justify-center items-center">
            <div className="font-bold text-3xl leading-[56px] text-center mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div className="leading-[30px] text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </div>
            <div className="flex items-center gap-14 flex-wrap justify-center py-16">
              {icons.map((icon, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-6 items-center justify-center"
                  >
                    <div className="p-6 rounded-full bg-white">
                      <img src={icon.icon} />
                    </div>
                    <div className="font-medium">{icon.name}</div>
                    <div>
                      <img src={icon.arrow} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="p-16 py-32">
        <div className="flex justify-center items-center flex-col gap-8">
          <div className="text-3xl font-bold">Our Recent Projects</div>
          <div className=" leading-[27px] w-[45%] text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </div>
          <div className="flex items-center gap-8 flex-wrap justify-center py-8">
            {projects.map((project, index) => {
              return (
                <div key={index}>
                  <img src={project} className=" object-cover" />
                </div>
              );
            })}
          </div>
          <div className="bg-[#1C140F] py-3 px-8 uppercase rounded-md">
            See all
          </div>
        </div>
      </div>
      <div className="p-16 ">
        <div className="font-semibold text-3xl mb-8">Lorem Ipsum</div>
        <div className="w-[45%] ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </div>

        <div className="bg-[#1C140F] mt-16 py-8 px-16 rounded-md flex justify-between items-center gap-16">
          <div>
            <div className="text-3xl font-medium mb-6">Stay in the loop</div>
            <div>
              Subscribe to receive the latest news and updates about TDA. We
              promise not to spam you!{" "}
            </div>
          </div>
          <div className="bg-white rounded-lg p-2 flex items-center justify-between">
            <input
              className="bg-white p-2 text-sm text-gray-300 px-4"
              placeholder="Enter email address"
            />
            <button className="text-sm bg-orange-500 py-2 px-6 rounded-lg">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
