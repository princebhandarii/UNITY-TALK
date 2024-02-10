"use client";

import { Slide } from "react-reveal";
import Header from "../components/Header";
import Image from "next/image";
import vc from "../images/vc1.png";
import vc2 from "../images/vc2.png";
import vc3 from "../images/vc3.png";
import vc4 from "../images/vc4.png";
import vc5 from "../images/vc5.png";
import windows from "../images/windows.png";
import { DownloadIcon } from "@heroicons/react/outline";
import Footer from "../components/Footer";
import "../style.css"

export default function Download() {
  function handleDownload() {
    alert("\nSorry, We regret. \nThis is Under Construction 😊");
  }
  return (
    <div>
      <div className="bg-[#23272A] h-[600px] items-center ">
        <Header />
        <div className="flex shrink-0 mr-4">
          <Image
            src={vc}
            className="w-30 h-[450px] object-contain py-5 animate-bounce infinite "
            alt=""
          />
          <div className=" pb-8 md:pb-0">
            <div className="p-7 py-9 h-screen md:h-[83vh] md:flex relative">
              <div className="flex flex-col gap-7 pb-28 pl-16 md:max-w-md lg:max-w-none lg:justify-center ">
                {/* <h1 className="text-5xl text-white font-bold mb-4 selection:text-blue-400">YOUR PLACE TO TALK</h1>
                <h2 className="text-white text-lg font-light tracking-wide lg:max-w-3xl w-full selection:text-blue-400">
                  Whether you’re part of a school club, gaming group, worldwide art
                  community, or just a handful of friends that want to spend time
                  together, Unity Talk makes it easy to talk every day and hang out more
                  often.
                </h2> */}
                <div className="cards">
                  <figure className="cards">
                    <figcaption className="card_title">
                      <h1 className="text-5xl text-white font-bold mb-4 selection:text-blue-400">
                        YOUR PLACE TO TALK
                      </h1>{" "}
                      Whether you’re part of a school club, gaming group,
                      worldwide art community, or just a handful of friends that
                      want to spend time together, Unity Talk makes it easy to talk
                      every day and hang out more often.
                    </figcaption>
                  </figure>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row md:items-start sm:items-center gap-6">
                  <button className="bg-white text-black w-60 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl hover:text-Unity Talk_blurple hover:bg-[#586671] hover:text-white focus:outline-none transition duration-200 ease-in-out select-none">
                    <DownloadIcon className="w-6 mr-2" />
                    <a
                      download
                      target="_blank"
                      href="https://drive.google.com/file/d/1NqIGHhJqkhJHZeqYK6kn21oG_bw_2Wkj/view?usp=drive_link"
                    >
                      Download for
                    </a>{" "}
                    &nbsp;
                    <Image src={windows} className="h-6 w-6" alt="" />
                  </button>
                  <span className=" text-white w-60 font-medium flex items-center justify-center rounded-full p-4 text-lg  focus:outline-none transition duration-200 ease-in-out select-none">
                    Windows 7 or Above
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex bg-[#FFFFFF] h-[2000px] overflow-auto">
        <div className="pt-[90px] pl-[80px] ">
          <Slide up>
            <div className="card w-[600px] h-[660px]  bg-[#F6F6F6] relative ml-[40px] mt-[50px] transition-transform transform-gpu hover:rotate-3">
              <div className="card-body">
                <h2 className="text-center text-3xl font-bold text-black">
                  iOS
                </h2>
                <button
                  className="bg-black text-white ml-[150px] mt-[20px] w-60 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl hover:text-Unity Talk_blurple hover:bg-[#586671] hover:text-white focus:outline-none transition duration-200 ease-in-out select-none"
                  onClick={handleDownload}
                >
                  Download
                </button>
              </div>
              <Image
                src={vc2}
                alt=""
                className="object-cover ml-[40px]"
                draggable="false"
              />
            </div>

            <div className="card w-[600px] h-[660px]  bg-[#F6F6F6] relative ml-[40px] mt-[60px] transition-transform transform-gpu hover:rotate-3">
              <div className="card-body">
                <h2 className="text-center text-3xl font-bold text-black">
                  Linux
                </h2>
                <button
                  className="bg-black text-white ml-[150px] mt-[20px] w-60 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl hover:text-Unity Talk_blurple hover:bg-[#586671] hover:text-white focus:outline-none transition duration-200 ease-in-out select-none"
                  onClick={handleDownload}
                >
                  Download
                </button>
              </div>
              <Image
                src={vc4}
                alt=""
                className="object-cover ml-[40px]"
                draggable="false"
              />
            </div>
          </Slide>
        </div>

        <div className="pt-[220px] pl-[30px]">
          <Slide up>
            <div className="card w-[600px] h-[660px]  bg-[#F6F6F6] relative ml-[30px] mt-[90px] transition-transform transform-gpu hover:rotate-3">
              <div className="card-body">
                <h2 className="text-center text-3xl font-bold text-black">
                  Android{" "}
                </h2>
                <button
                  className="bg-black text-white ml-[150px] mt-[20px] w-60 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl hover:text-Unity Talk_blurple hover:bg-[#586671] hover:text-white focus:outline-none transition duration-200 ease-in-out select-none"
                  onClick={handleDownload}
                >
                  Download
                </button>
              </div>
              <Image
                src={vc3}
                alt=""
                className="object-cover ml-[40px]"
                draggable="false"
              />
            </div>

            <div className="card w-[600px] h-[660px]  bg-[#F6F6F6] relative ml-[30px] mt-[60px] transition-transform transform-gpu hover:rotate-3">
              <div className="card-body">
                <h2 className="text-center text-3xl font-bold text-black">
                  Mac
                </h2>
                <button
                  className="bg-black text-white ml-[150px] mt-[20px] w-60 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl hover:text-Unity Talk_blurple hover:bg-[#586671] hover:text-white focus:outline-none transition duration-200 ease-in-out select-none"
                  onClick={handleDownload}
                >
                  Download
                </button>
              </div>
              <Image
                src={vc5}
                alt="Shoes"
                className="object-cover ml-[40px]"
                draggable="false"
              />
            </div>
          </Slide>
        </div>
      </div>

      <Footer />
    </div>
  );
}
