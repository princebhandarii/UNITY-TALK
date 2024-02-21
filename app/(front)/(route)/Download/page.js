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
import "../style.css";

export default function Download() {
  return (
    <div>
      <div className="bg-[#23272A]  items-center ">
        <Header />
        <div className="lg:flex shrink-0 mr-4">
          <Image
            src={vc}
            className="object-contain py-5 animate-bounce infinite pt-20 "
            alt=""
          />
          <div className="pt-2">
            <span className="lg:pl-56 text-5xl text-white font-bold mb-4 selection:text-blue-400">
              YOUR PLACE TO TALK
            </span>

            <p className="lg:pl-32 pl-2 lg:w-4/5 pt-8 text-2xl text-white selection:text-blue-400 font-mono ">
              Whether you’re part of a school club, gaming group, worldwide art
              community, or just a handful of friends that want to spend time
              together, Unity Talk makes it easy to talk every day and hang out
              more often.
            </p>

            <div className="pt-14 flex lg:pl-44 lg:pb-5">
              <a href="/UNITY-TALK.png" download="UNITY-TALK.png">
                <button className="bg-white p-4 ml-9 text-black w-60 font-medium flex items-center justify-center rounded-full text-lg hover:shadow-2xl hover:text-discord_blurple hover:bg-[#586671] hover:text-white focus:outline-none transition duration-200 ease-in-out select-none">
                  <DownloadIcon className="w-6 mr-2" />
                  Download for
                  <Image src={windows} className="pl-4 h-6 w-10 " alt="" />
                </button>
              </a>
              <span className="hidden md:block  text-white w-60 font-medium items-center justify-center rounded-full p-4 text-lg  focus:outline-none transition duration-200 ease-in-out select-none">
                Windows 7 or Above
              </span>
            </div>
          </div>
          <div className="lg:block pt-2">
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#f3f4f5"
                fill-opacity="0.8"
                d="M0,96L48,117.3C96,139,192,181,288,186.7C384,192,480,160,576,133.3C672,107,768,85,864,101.3C960,117,1056,171,1152,176C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg> */}
          </div>
        </div>
      </div>

      <div className="lg:flex  bg-white">
        <div>
          <Slide up>
            <div className="pt-12 lg:pl-48 flex bg-[#FFFFFF]">
              <div className="card  bg-[#F6F6F6] text-center transform transition duration-500 ease-in-out hover:-rotate-3">
                <div className="card-body">
                  <h2 className="text-center text-3xl font-bold  text-black ">
                    {" "}
                    iOS
                  </h2>
                  <a href="/UNITY-TALK.png" download="UNITY-TALK.png">
                    <button className="bg-black text-white mt-20 p-4 ml-10 lg:ml-24 w-60 font-medium flex items-center justify-center rounded-full text-lg hover:shadow-2xl hover:text-discord_blurple hover:bg-[#586671] hover:text-white focus:outline-none transition duration-200 ease-in-out select-none">
                      Download
                    </button>
                  </a>
                </div>
                <figure>
                  <Image
                    src={vc2}
                    alt=""
                    className="object-cover"
                    draggable="false"
                  />
                </figure>
              </div>
            </div>

            <div className="lg:pt-36 pt-10 lg:pl-48 flex bg-[#FFFFFF] ">
              <div className="card  bg-[#F6F6F6] text-center transform transition duration-500 ease-in-out hover:-rotate-3">
                <div className="card-body">
                  <h2 className="text-center text-3xl font-bold  text-black ">
                    {" "}
                    Linux
                  </h2>
                  <a href="/UNITY-TALK.png" download="UNITY-TALK.png">
                    <button className="bg-black text-white mt-20 p-4 ml-10 lg:ml-24 w-60 font-medium flex items-center justify-center rounded-full text-lg hover:shadow-2xl hover:text-discord_blurple hover:bg-[#586671] hover:text-white focus:outline-none transition duration-200 ease-in-out select-none">
                      Download
                    </button>
                  </a>
                </div>
                <figure>
                  <Image
                    src={vc4}
                    alt=""
                    className="object-cover"
                    draggable="false"
                  />
                </figure>
              </div>
            </div>
          </Slide>
        </div>

        <div className="lg:pt-36 bg-[#FFFFFF]">
          <Slide up>
            <div className="pt-12 lg:pl-20 flex bg-[#FFFFFF] ">
              <div className="card  bg-[#F6F6F6] text-center transform transition duration-500 ease-in-out hover:rotate-3">
                <div className="card-body">
                  <h2 className="text-center text-3xl font-bold  text-black ">
                    {" "}
                    Android
                  </h2>
                  <a href="/UNITY-TALK.png" download="UNITY-TALK.png">
                    <button className="bg-black text-white mt-20 p-4 ml-10 lg:ml-24 w-60 font-medium flex items-center justify-center rounded-full text-lg hover:shadow-2xl hover:text-discord_blurple hover:bg-[#586671] hover:text-white focus:outline-none transition duration-200 ease-in-out select-none">
                      Download
                    </button>
                  </a>
                </div>
                <figure>
                  <Image
                    src={vc3}
                    alt=""
                    className="object-cover"
                    draggable="false"
                  />
                </figure>
              </div>
            </div>

            <div className="lg:pt-36 pt-10 lg:pl-20 flex bg-[#FFFFFF] pb-5">
              <div className="card  bg-[#F6F6F6] text-center transform transition duration-500 ease-in-out hover:rotate-3">
                <div className="card-body">
                  <h2 className="text-center text-3xl font-bold  text-black ">
                    Mac{" "}
                  </h2>
                  <a href="/UNITY-TALK.png" download="UNITY-TALK.png">
                    <button className="bg-black text-white mt-20 p-4 ml-10 lg:ml-24 w-60 font-medium flex items-center justify-center rounded-full text-lg hover:shadow-2xl hover:text-discord_blurple hover:bg-[#586671] hover:text-white focus:outline-none transition duration-200 ease-in-out select-none">
                      Download
                    </button>
                  </a>
                </div>
                <figure>
                  <Image
                    src={vc5}
                    alt=""
                    className="object-cover"
                    draggable="false"
                  />
                </figure>
              </div>
            </div>
          </Slide>
        </div>
      </div>

      <Footer />
    </div>
  );
}
