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
import "../style.css";
import Link from "next/link";

export default function page() {
  return (
    <div className="bg-[#23272A] place-self-center">
      <Header />

      <div className=" selection:text-blue-300 text-2xl md:text-5xl  font-bold text-[#ebe4e4] animate__animated animate__fadeInUp text-center">
        IMAGINE A PLACE
      </div>
      <p className="md:w-4/5 md:pl-64 text-xl md:text-2xl text-[#ebe4e4]  selection:text-blue-300 font-mono pt-5 animate__animated animate__fadeInUp motion-safe:animate__duration-1s text-center">
        ...where you can belong to a school club, a gaming group, or a
        worldwideart community. Where just you and a handful of friends can
        spend time together. A place that makes it easy to talk every day and
        hang out more often.
      </p>

      <div className="flex pt-4 justify-center items-center gap-4">
        <div className="button" data-tooltip="Size: 50Kb">
          <div className="button-wrapper">
            <div className="text ">Download For Window</div>
            <a href="/UNITY-TALK.png" download="UNITY-TALK.png">
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
            </a>
          </div>
        </div>

        <Link href="https://unity-talk.vercel.app/">
          <div className="buttons md:block hidden ">
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

      <div className="text-[#ebedef] flex">
        <Image
          src={home7}
          className="animate__animated animate__fadeInUp animate__delay-1s motion-safe:animate__duration-1s"
        />
        <Image
          src={home5}
          className="hidden md:block ml-auto animate__animated animate__fadeInUp animate__delay-1s motion-safe:animate__duration-1s"
        />
      </div>

      {/*Section 2*/}

      <div className="flex flex-col items-center bg-white md:flex-row">
        {" "}
        {/* Use flex-column for mobile and flex-row for larger screens */}
        <Slide up>
          <div className="order-2 md:order-1 pl-8 md:pl-40 justify-end md:justify-start">
            {" "}
            {/* Adjusted padding for mobile */}
            <Image alt="" src={chatting} />
          </div>
          <div className="order-1 md:order-2 ml-4 md:ml-28 text-left pl-4 md:pl-32 pt-8 md:pt-0 selection:text-blue-300">
            {" "}
            {/* Adjusted padding for mobile */}
            <h1 className="text-3xl lg:w-96 md:text-5xl font-bold text-[#010101]">
              {" "}
              {/* Adjusted text size for mobile */}
              Create an invite only place where you belong
            </h1>
            <p className="text-lg lg:w-96 md:text-2xl text-[#0c0404] pt-5 md:pt-7">
              {" "}
              {/* Adjusted text size for mobile */}
              Unity Talk servers are organized into topic-based channels where
              you can collaborate, share, and just talk about your day without
              clogging up a group chat.
            </p>
          </div>
        </Slide>
      </div>

      {/*Section 3*/}
      <div className="flex flex-col items-center bg-[#23272A] md:flex-row">
        {" "}
        {/* Use flex-column for mobile and flex-row for larger screens */}
        <Slide up>
          <div className="pb-5 order-2 md:order-1 ml-4 md:ml-28 text-left pl-4 md:pl-32 md:pt-0 selection:text-blue-300">
            {" "}
            {/* Adjusted padding for mobile */}
            <h1 className="lg:w-96 text-3xl md:text-5xl font-bold text-white">
              {" "}
              {/* Adjusted text size for mobile */}
              Where hanging out is easy
            </h1>
            <p className="text-lg md:text-2xl text-white pt-4 md:pt-7 w-80">
              {" "}
              {/* Adjusted text size for mobile */}
              Grab a seat in a voice channel when you’re free. Friends in your
              server can see you’re around and instantly pop in to talk without
              having to call.
            </p>
          </div>
          <div className="order-1 md:order-2 pl-8 md:pl-40 justify-end">
            {" "}
            {/* Adjusted padding for mobile */}
            <Image src={vconnected} />
          </div>
        </Slide>
      </div>

      {/*Section 4*/}

      <div className="flex flex-col items-center bg-white md:flex-row">
        {" "}
        {/* Use flex-column for mobile and flex-row for larger screens */}
        <Slide up>
          <div className="order-2 md:order-1 pl-8 md:pl-40 justify-end md:justify-start">
            {" "}
            {/* Adjusted padding for mobile */}
            <Image alt="" src={secation4} />
          </div>
          <div className="order-1 md:order-2 ml-4 md:ml-28 text-left pl-4 md:pl-32 pt-8 md:pt-0 selection:text-blue-300">
            {" "}
            {/* Adjusted padding for mobile */}
            <h1 className="lg:w-96 text-3xl md:text-5xl font-bold text-[#010101]">
              {" "}
              {/* Adjusted text size for mobile */}
              From few to a fandom
            </h1>
            <p className="text-lg w-80 md:text-2xl text-[#0c0404] pt-5 md:pt-7">
              {" "}
              {/* Adjusted text size for mobile */}
              Get any community running with moderation tools and custom member
              access. Give members special powers, set up private channels, and
              more.
            </p>
          </div>
        </Slide>
      </div>

      {/*Section 5*/}
      <div className="bg-[#23272A] text-center pt-8">
        <Slide up>
          <div className="selection:text-blue-300 md:text-5xl text-3xl font-bold text-[white] ">
            RELIABLE TECH FOR STAYING CLOSE
          </div>
          <p className="text-xl text-[white]  text-center pl-10 md:pl-80 selection:text-blue-300 pt-8 w-5/6">
            Low-latency voice and video feels like you’re in the same room. Wave
            hello over video, watch friends stream their games, or gather up and
            have a drawing session with screen share.
          </p>

          <div className="flex justify-center items-center gap-4">
            {" "}
            {/* Updated this line */}
            <Image src={section5} className="align-middle " />
          </div>
          <br />
          <br />
          <p className="text-4xl text-white  hover:text-blue-400">
            Ready to start your journey?
          </p>
          <br />
          <br />
          <div className="flex justify-center items-center gap-4">
            <div className="button" data-tooltip="Size: 50Kb">
              <div className="button-wrapper">
                <div className="text">Download For Window</div>
                <a href="/UNITY-TALK.png" download="UNITY-TALK.png">
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
                </a>
              </div>
            </div>
          </div>
        </Slide>
      </div>

      <Footer />
    </div>
  );
}
