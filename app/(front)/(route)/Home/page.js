"use client";

import { Slide } from "react-reveal";
import Image from "next/image";
import Header from "../components/Header";
import home5 from "../images/home5.png";
import home7 from "../images/home7.png";
import chatting from "../images/chatting.png";
import vconnected from "../images/vconnected.png";
import Footer from "../components/Footer";
import secation4 from "../images/section4.png";
import section5 from "../images/section5.png";
import "../style.css"
import Link from "next/link";

export default function page() {
  return (
    <div
      className="bg-[#23272A] place-self-center"
      style={{ height: "850px", textAlign: "center" }}
    >
      <Header />
      <div className=" pt-0">
        <div
          className=" selection:text-blue-300 text-5xl font-bold text-[#ebe4e4] pb-4 animate__animated animate__fadeInUp"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          IMAGINE A PLACE
        </div>
        <p className="text-2xl text-[#ebe4e4] pr-[20px] selection:text-blue-300 pb-6 animate__animated animate__fadeInUp motion-safe:animate__duration-1s">
          ...where you can belong to a school club, a gaming group, or a
          worldwideart community. <br />
          Where just you and a handful of friends can spend time together. A
          place that makes it easy
          <br />
          to talk every day and hang out more often.
        </p>

        <div className="flex justify-center items-center gap-4">
          {/* <button className=" text-2xl w-[300px] btn btn-circle  bg-[#FFFFFF] hover:text-blue-400 text-black-500 ">
            Download For Window
          </button> */}
          <div className="button" data-tooltip="Size: 500Kb">
            <div className="button-wrapper">
              <div className="text">Download For Window</div>
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="2em"
                  height="2em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          {/* <button className=" text-2xl w-[300px] btn btn-circle  bg-[#FFFFFF] hover:text-blue-400 text-black-500 ">
            Open in Your Browser
          </button> */}
          <Link href="https://unity-talk.vercel.app/">
            <div className="buttons">
              <div className="button-wrappers">
                <button className="texts">Open in Your Browser</button>
                <span className="icons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    id="browser"
                  >
                    <g data-name="79-Browser">
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M44 24A20 20 0 0 1 30.26 43a19.9 19.9 0 0 1-12.52 0 20 20 0 0 1 0-38A19.9 19.9 0 0 1 30.26 5 20 20 0 0 1 44 24zM30.26 43a20 20 0 0 0 0-38M17.74 5h0M17.74 43h0"
                      ></path>
                      <line
                        x1="24"
                        x2="24"
                        y1="5"
                        y2="43"
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></line>
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8.78 11a33.13 33.13 0 0 0 5.82 2.28A33.41 33.41 0 0 0 24 14.64a33.47 33.47 0 0 0 9.15-1.28 34.09 34.09 0 0 0 6-2.37M9.11 37.35a33.69 33.69 0 0 1 5.72-2.19 33.74 33.74 0 0 1 24 2.22"
                      ></path>
                      <line
                        x1="5"
                        x2="43"
                        y1="24"
                        y2="24"
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></line>
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M29.49 5l.16.28a36.83 36.83 0 0 1 0 37.26h0M18.25 5l-.16.28a36.79 36.79 0 0 0 .05 37.26h0"
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="text-[#ebedef] pl-[1200px] relative flex-shrink-0 pt-16">
        <Image
          alt=""
          src={home5}
          className=" animate__animated animate__fadeInUp animate__delay-1s motion-safe:animate__duration-1s"
        />
        <Image
        alt=""
          src={home7}
          className=" absolute left-0 bottom-0 animate__animated animate__fadeInUp animate__delay-1s motion-safe:animate__duration-1s"
        />
      </div>

      {/*Section 2*/}

      <div className="flex items-center bg-white">
        <Slide up>
          <div className="pl-40 justify-end" style={{ paddingTop: "100px" }}>
            <Image alt="" src={chatting} style={{ height: "650px", width: "650px" }} />
          </div>
          <div className=" ml-28 text-left pl-32 pt-8 selection:text-blue-300">
            <h1 className="text-5xl font-bold text-[#010101]">
              Create an invite-
              <br />
              only place where
              <br />
              you belong
            </h1>
            <p className="text-2xl text-[#0c0404] pt-7">
              Unity Talk servers are organized <br />
              into topic-based channels where <br />
              you can collaborate, share,
              <br />
              and just talk about your day
              <br />
              without clogging up a group chat.
            </p>
          </div>
        </Slide>
      </div>

      {/*Section 3*/}
      <div className="flex items-center bg-[#23272A]">
        <Slide up>
          <div className="ml-28 text-left pl-32 pt-8 selection:text-blue-300">
            <h1 className="text-5xl font-bold text-white">
              Where hanging
              <br />
              out is easy
            </h1>
            <p className="text-2xl text-white pt-7">
              Grab a seat in a voice channel when you’re free. <br />
              Friends in your server can see you’re around and <br />
              instantly pop in to talk without having to call.
            </p>
          </div>
          <div className="pl-40 justify-end" style={{ paddingTop: "100px" }}>
            <Image
            alt=""
              src={vconnected}
              style={{ height: "650px", width: "650px" }}
            />
          </div>
        </Slide>
      </div>

      {/*Section 4*/}
      <div className="flex items-center bg-white">
        <Slide up>
          <div className="pl-40 justify-end" style={{ paddingTop: "100px" }}>
            <Image
            alt=""
              src={secation4}
              style={{
                height: "550px",
                width: "550px",
              }}
            />
          </div>
          <div className="ml-28 text-left pl-32 pt-8 selection:text-blue-300">
            <h1 className="text-5xl font-bold text-[#010101]">
              From few to a <br /> fandom
            </h1>
            <p className="text-2xl text-[#0c0404] pt-7">
              Get any community running with moderation
              <br />
              tools and custom member access.
              <br />
              Give members special powers,
              <br />
              set up private channels, and more.
            </p>
          </div>
        </Slide>
      </div>
      <br />

      {/*Section 5*/}
      <div className=" pt-0  bg-[#23272A]">
        <Slide up>
          <div
            className="selection:text-blue-300 text-5xl font-bold text-[white] pb-4 "
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            RELIABLE TECH FOR STAYING CLOSE
          </div>
          <p className="text-2xl text-[white] pr-[20px] selection:text-blue-300 pb-6 ">
            Low-latency voice and video feels like you’re in the same room. Wave
            hello over video, watch friends stream their games,
            <br /> or gather up and have a drawing session with screen share.
          </p>

          <div className="flex justify-center items-center gap-4">
            {" "}
            {/* Updated this line */}
            <Image
            alt=""
              src={section5}
              className="h-[600px] align-middle "
              style={{ width: "800px" }}
            />
          </div>
          <br />
          <br />
          <p className="text-4xl text-white  hover:text-blue-400">
            Ready to start your journey?
          </p>
          <br />
          <br />
          <div className="flex justify-center items-center gap-4">
            <div className="button" data-tooltip="Size: 500Kb">
              <div className="button-wrapper">
                <div className="text">Download For Window</div>
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="2em"
                    height="2em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </Slide>
      </div>

      <Footer />
      
    </div>
  );
}
