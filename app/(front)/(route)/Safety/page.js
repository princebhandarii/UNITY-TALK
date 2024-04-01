"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import safety from "../images/safety.png";
import star1 from "../images/star-1.svg";
import star2 from "../images/Star-2.svg";
import star3 from "../images/star-3.svg";
import star4 from "../images/star-4.svg";
import Lib from "../images/Library.svg";

import myVideo from "../images/DiscordVideo.mp4";

import Privacy from "../images/Privacy.png";
import parent from "../images/parent.svg";
import transparncy from "../images/transparncy.jpeg";
import safetys from "../images/safetys.svg";
import policy from "../images/policy.svg";
import Video from "next-video";
import Link from "next/link";
import "../style.css";

import Image from "next/image";

export default function page() {
  const handleSaveButtonClick = () => {
    // Redirect to the specified link
    window.open("https://inotebook-6pk4.onrender.com/login", "_blank");
  };

  const handleCloseButtonClick = () => {
    document.getElementById("my_modal_1").close();
  };
  return (
    <div>
      <div className="bg-[#23272A] ">
        <Header />
        <div className="lg:flex">
          <div className="lg:w-2/4">
            <h1 className="text-5xl font-bold text-white pl-7 pt-20">
              UINTY TALK SAFETY CENTER
            </h1>
            <p className="text-white pt-4 text-xl  pl-7 font-mono">
              Unity talk is the place to hang out with your friends and build
              community around shared interests. We’re committed to creating a
              safe, inclusive and welcoming place. That’s why we’re working to
              make Unity talk private and safe, by design.Learn how to shape the
              best experience for yourself and find the resources you need,
              whether you’re a teen, parent, educator, or long-time Unity user.
            </p>
          </div>
          <div className="lg:pl-20">
            <Image alt="" src={safety} className="h-96 " />
          </div>
        </div>
      </div>

      {/* this is for large sizw */}
      <div className="pt-10 bg-[#23272A] lg:justify-center lg:flex lg:space-x-32 md:block hidden">
        <Link href="#Safety">
          <button className="buttonq " style={{ width: "156px" }}>
            <span> Safety Hub </span>
          </button>
        </Link>

        <Link href="#Privacy">
          <button className="buttonq " style={{ width: "156px" }}>
            <span> Privacy Hub</span>
          </button>
        </Link>

        <Link href="#Parent">
          <button className="buttonq" style={{ width: "156px" }}>
            <span> Parent Hub</span>
          </button>
        </Link>
      </div>

      <div className=" bg-[#23272A] lg:justify-center lg:flex lg:space-x-32 md:block hidden pt-10 pb-28">
        <Link href="#Transparncy">
          <button className="buttonq" style={{ width: "156px" }}>
            <span> Transparncy Hub</span>
          </button>
        </Link>

        <Link href="#Safety News">
          <button className="buttonq" style={{ width: "156px" }}>
            <span> Safety News Hub</span>
          </button>
        </Link>

        <Link href="#Policy">
          <button className="buttonq" style={{ width: "156px" }}>
            <span> Policy Hub</span>
          </button>
        </Link>
      </div>

      {/* this is for mobile */}
      <div className="pt-10  space-x-4 flex  lg:hidden pl-4">
        <Link href="#Safety">
          <button className="buttonq">
            <span> Safety Hub </span>
          </button>
        </Link>

        <Link href="#Privacy">
          <button className="buttonq ">
            <span> Privacy Hub</span>
          </button>
        </Link>
      </div>

      <div className="space-x-4 flex  lg:hidden pt-5 pl-4">
        <Link href="#Parent">
          <button className="buttonq">
            <span> Parent Hub</span>
          </button>
        </Link>

        <Link href="#Transparncy">
          <button className="buttonq">
            <span> Transparncy Hub</span>
          </button>
        </Link>
      </div>

      <div className="space-x-4 flex  lg:hidden pt-5 pl-4">
        <Link href="#Safety News">
          <button className="buttonq">
            <span> Safety News Hub</span>
          </button>
        </Link>

        <Link href="#Policy">
          <button className="buttonq">
            <span> Policy Hub</span>
          </button>
        </Link>
      </div>

      <p className="text-center text-5xl text-black pt-10 lg:pt-5 font-bold">
        Building Safer Spaces
      </p>

      <div className="hidden sm:flex pt-10  justify-center  ">
        <Image alt="" className="pb-8  h-32 w-32 animated-zoom" src={star2} />

        <Image alt="" className="h-32 w-32 animated-zoom" src={star4} />

        {/* <Video className="h-[500px] "  src="https://youtu.be/Et7TTfwvBFo?si=rdyKsPVy0Mpr7MBm" autoPlay loop />  */}
        <iframe
          width="960"
          height="515"
          src="https://www.youtube.com/embed/_2lQr3UQfPk?si=pUHSzeA0Ay6yzrn6"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <Image alt="" className="pb-16  h-32 w-32 animated-zoom" src={star3} />

        <Image alt="" className="pb-6  h-32 w-32 animated-zoom" src={star1} />
      </div>
      {/* this is for mobile */}
      <div className="lg:hidden justify-center flex pt-5">
        <iframe
          src="https://www.youtube.com/embed/_2lQr3UQfPk?si=pUHSzeA0Ay6yzrn6"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="pt-8 text-black">
        <div id="Safety" className=" lg:flex bg-[#F6F6F6] pt-5 ">
          <div className="lg:w-3/5 lg:pt-12">
            <span className="lg:text-5xl font-bold pl-28 text-2xl lg:pl-28">
              Safety Hub
            </span>
            <p className="lg:text-2xl pt-2 pl-5 lg:pl-28">
              Everything you could ever want to know about safety on Untiy talk.
              Whether you’re a user, a moderator, or a parent, Unity talk all of
              our tools and resources and how to use them.
            </p>
          </div>

          <div className="m-2">
            <Image alt="" className="h-54 w-54 rounded" src={Lib} />
          </div>
        </div>

        <div className=" lg:flex  bg-[#F6F6F6] pt-10 lg:pt-8" id="Privacy">
          {/* this is for mobile text */}
          <div className="text-center lg:hidden p-2">
            <span className=" lg:text-5xl font-bold  text-2xl  ">
              Privacy Hub
            </span>
            <p className="pt-2">
              Privacy is an essential part of feeling safe. No matter what, we
              know build privacy into our products, and we will always try to
              let you what's happening where and when. Learn more about what
              that means, including the data we collect and the tools to put you
              in control.
            </p>
          </div>
          <div className="lg:pl-28 pt-2 lg:pb-8 m-2">
            <Image alt="" className="h-72 w-max rounded" src={Privacy} />
          </div>
          {/* this is large  */}
          <div className="lg:w-2/4 pl-5 lg:pl-12 pt-12 md:block hidden">
            <span className=" lg:text-5xl font-bold  text-2xl  ">
              Privacy Hub
            </span>
            <p className="text-2xl text-left pt-2">
              Privacy is an essential part of feeling safe. No matter what, we
              know build privacy into our products, and we will always try to
              let you what's happening where and when. Learn more about what
              that means, including the data we collect and the tools to put you
              in control.
            </p>
          </div>
        </div>

        <div id="Parent" className=" lg:flex bg-[#F6F6F6] pt-5 ">
          <div className="lg:w-3/5 lg:pt-12 p-1 ">
            <span className="lg:text-5xl font-bold pl-28 text-2xl lg:pl-28">
              Parent Hub
            </span>
            <p className="lg:text-2xl pt-2 pl-5 lg:pl-28">
              Learn more about what we're doing to help your teen stay safer on,
              our platform, explore our Family Center tool, and download our
              Parent's Guide to Unity Talk.
            </p>
          </div>

          <div className="m-1">
            <Image alt="" className="h-96 w-96 rounded" src={parent} />
          </div>
        </div>

        <div className=" lg:flex  bg-[#F6F6F6]  lg:pt-8" id="Transparncy">
          {/* this is for mobile text */}
          <div className="text-center lg:hidden p-2">
            <span className=" lg:text-5xl font-bold  text-2xl  ">
              Transparncy Hub
            </span>
            <p className="pt-2">
              Explore data, trends, and analysis into the work done to help keep
              people on Unity Talk safe. Transparency reports cover information
              about enforcement of our platform policies, as well as our
              response to legal, emergency, and intellectual property removal
              requests.
            </p>
          </div>
          <div className="lg:pl-28 pt-2 lg:pb-8 m-2">
            <Image alt="" className="h-72 w-max rounded" src={transparncy} />
          </div>
          {/* this is large  */}
          <div className="lg:w-2/4 pl-5 lg:pl-12 pt-12 md:block hidden">
            <span className=" lg:text-5xl font-bold  text-2xl  ">
              Transparncy Hub
            </span>
            <p className="text-2xl text-left pt-2">
              Explore data, trends, and analysis into the work done to help keep
              people on Unity Talk safe. Transparency reports cover information
              about enforcement of our platform policies, as well as our
              response to legal, emergency, and intellectual property removal
              requests.
            </p>
          </div>
        </div>

        <div id="Safety News" className=" lg:flex bg-[#F6F6F6] pt-5 ">
          <div className="lg:w-3/5 lg:pt-16">
            <span className="lg:text-5xl font-bold pl-20 text-2xl lg:pl-28">
              Safety News Hub
            </span>
            <p className="lg:text-2xl pt-2 pl-5 lg:pl-28">
              The latest news and updates on Unity Talk Safety,Privacy, and
              Policy initiatives.
            </p>
          </div>

          <div className="m-1 pt-4">
            <Image alt="" className="h-54 w-54 rounded" src={safetys} />
          </div>
        </div>

        <div className=" lg:flex  bg-[#F6F6F6]  lg:pt-8" id="Policy">
          {/* this is for mobile text */}
          <div className="text-center pt-10 lg:hidden p-2">
            <span className=" lg:text-5xl font-bold  text-2xl  ">
              Policy Hub
            </span>
            <p className="pt-2">
              Learn about our Community Guidelines, developed to help keep
              people safe and make Unity Talk the best place to hang out with
              friends.
            </p>
          </div>
          <div className="lg:pl-28 lg:pb-8 m-1">
            <Image alt="" className="h-96 w-96 rounded" src={policy} />
          </div>
          {/* this is large  */}
          <div className="lg:w-2/4 pl-10 lg:pl-12 pt-28 md:block hidden">
            <span className=" lg:text-5xl font-bold  text-2xl  ">
              Policy Hub
            </span>
            <p className="text-2xl text-left pt-2">
              Learn about our Community Guidelines, developed to help keep
              people safe and make Unity Talk the best place to hang out with
              friends.
            </p>
          </div>
        </div>

        <div id="Safety" className=" lg:flex bg-[#F6F6F6]  ">
          <div className="lg:w-3/5 lg:pt-12 p-1">
            <span className="lg:text-5xl font-bold pl-20 text-2xl lg:pl-28">
              Keep Notes Private
            </span>
            <p className="lg:text-2xl pt-2 pl-5 lg:pl-28">
              Secure your personal notes with Unity Talk. Safeguard your
              thoughts using our password-protected feature, ensuring privacy
              and peace of mind for your valuable information.
            </p>
            <p className="lg:text-2xl pt-2 pl-5 lg:pl-28">
              <Link
                target="_blank"
                href="https://i-notebooks-bice.vercel.app/login"
                className="flex text-blue-400 hover:text-blue-800 text-3xl font-bold"
              >
                <span className="mr-2">Explore Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </p>
          </div>

          <div className="m-2">
            <Image alt="" className="h-54 w-54 rounded" src={Lib} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
