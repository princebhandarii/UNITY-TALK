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

import Privacy from "../images/Privacy.svg";
import parent from "../images/parent.svg";
import transparncy from "../images/transparncy.svg";
import safetys from "../images/safetys.svg";
import policy from "../images/policy.svg";
import Video from "next-video";
import Link from "next/link";
import "../style.css"

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
   
    <div
      className="bg-[#23272A] place-self-center "
      style={{ height: "1300px", textAlign: "center" }}
    >
      <Header />
      <div className="flex items-center bg-[#23272A]">
        <div className="ml-3 text-left pl-32  selection:text-blue-300 ">
          <h1 className="text-5xl font-bold text-white">
            UINTY TALK
            <br />
            SAFETY CENTER
          </h1>
          <p className="text-white pt-4">
            Unity talk is the place to hang out with your friends and build
            community <br />
            around shared interests. We’re committed to creating a safe,
            inclusive and <br />
            welcoming place.
          </p>
          <p className="text-white pt-4 ">
            That’s why we’re working to make Unity talk private and safe, by
            design. <br />
            Learn how to shape the best experience for yourself and find the
            resources you
            <br />
            need, whether you’re a teen, parent, educator,
            <r />
            or long-time Unity user.
          </p>
        </div>
        <div className=" pl-32 justify-items-end flex">
         <Image 
           alt="" 
            src={safety}
            style={{ height: "500px", width: "500px" }}
          />
        </div>
      </div>

      <div className="items-center space-x-8 pt-10  ">
      <Link href="#Safety"><button
        className="btn hover:bg-green-300 h-16 w-64 text-2xl button6" >
        Safety Hub
      </button></Link>

      <Link href="#Privacy"><button
      className="btn  hover:bg-green-300 h-16 w-64 text-2xl button6 " >
      Privacy Hub
    </button></Link>

    <Link href="#Parent"><button
        className="btn hover:bg-green-300 h-16 w-64 text-2xl button6" >
        Parent Hub
      </button></Link>
      </div>

      <div className="items-center space-x-8 pt-4 ">
      <Link href="#Transparncy"><button
        className="btn hover:bg-green-300 h-16 w-64 text-2xl shadow-md button6" >
        Transparncy Hub
      </button></Link>

      <Link href="#Safety News"><button
      className="btn hover:bg-green-300 h-16 w-64 text-2xl button6" >
      Safety News Hub
    </button></Link>

    <Link href="#Policy"><button
        className="btn hover:bg-green-300 h-16 w-64 text-2xl button6" >
        Policy Hub
      </button></Link>
      </div>

      <br />
      <br />
      <br />
      <br />

      <div className=" pb-6">
        <p className="text-center text-5xl pt-40">Building Safer Spaces</p>

        <div className="flex pt-16 justify-center  ">
         <Image alt=""  className="pb-8  h-32 w-32 animated-zoom" src={star2} />

         <Image alt=""  className="h-32 w-32 animated-zoom" src={star4} />

           {/* <Video className="h-[500px] "  src="https://youtu.be/Et7TTfwvBFo?si=rdyKsPVy0Mpr7MBm" autoPlay loop />  */}
           <iframe
        width="960"
        height="515"
        src="https://www.youtube.com/embed/LvtpbOarcWE"
       
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
          

         <Image alt=""  className="pb-16  h-32 w-32 animated-zoom" src={star3} />

         <Image alt=""  className="pb-6  h-32 w-32 animated-zoom" src={star1} />
        </div>
      </div>

      <div className="pt-8 text-black">
        <div id="Safety" className=" flex  justify-center bg-[#F6F6F6]   items-center pt-12 ">
          <div >
            <p className="text-left text-5xl font-bold ">Safety Hub</p>
            <p className="text-2xl text-left pt-2">
              Everything you could ever want to know about safety on Untiy talk.{" "}
              <br />
              Whether you’re a user, a moderator, or a parent, Unity talk all{" "}
              <br /> of our tools and resources and how to use them.
            </p>
          </div>

          <div className="pl-8 pb-8">
           <Image alt=""  className="h-54 w-54 rounded" src={Lib} />
          </div>
        </div>

        <div className=" flex  justify-center bg-[#F6F6F6] items-center " id="Privacy">
          <div className="pl-8 pb-8">
           <Image alt=""  className="h-54 w-54 rounded" src={Privacy} />
          </div>

          <div >
            <p className=" text-5xl text-left pl-10 font-bold ">Privacy Hub</p>
            <p className="text-2xl text-left pl-10 pt-2">
            Privacy is an essential part of feeling safe. No matter what, we  know<br/>
             build privacy into our products, and we will always try to let you what's<br/>
               happening where and when. Learn more about what that means, <br/>
               including the data we collect and the tools to put you in control.
            </p>
          </div>
        </div>

        <div className=" flex  justify-center bg-[#F6F6F6] items-center" id="Parent">
          <div >
            <p className="text-left text-5xl font-bold  ">Parent Hub</p>
            <p className="text-2xl text-left pt-2">
              Learn more about what we're doing to help your teen stay safer on, our <br/>
              platform, explore our Family Center tool, and download our Parent's <br/>
               Guide to Unity Talk
           
            </p>
          </div>

          <div className="pl-8 pb-8">
           <Image alt=""  className=" h-96 w-96 rounded" src={parent} />
          </div>
        </div>

        <div className=" flex  justify-center bg-[#F6F6F6] items-center" id="Transparncy">
          <div className="pl-8 pb-8">
           <Image alt=""  className="h-54 w-54 rounded" src={transparncy} />
          </div>

          <div >
            <p className=" text-5xl text-left pl-10 font-bold">Transparncy Hub</p>
            <p className="text-2xl text-left pl-10 pt-2">
            Explore data, trends, and analysis into the work done to help  keep  <br/>
           people on Unity Talk safe. Transparency reports cover information <br/>
            about enforcement of our platform policies, as well as our response  <br/>
            to legal, emergency, and intellectual property removal requests
            </p>
          </div>
        </div>

        <div className=" flex  justify-center bg-[#F6F6F6] items-center" id="Safety News">
          <div >
            <p className="text-left text-5xl font-bold ">Safety News Hub</p>
            <p className="text-2xl text-left pt-2">
             The latest news and updates on Unity Talk Safety,Privacy, and  Policy <br/>
             initiatives.
            </p>
          </div>

          <div className="pl-8 pb-8">
           <Image alt=""  className="h-54 w-54 rounded" src={safetys} />
          </div>
        </div>

        <div className=" flex  justify-center bg-[#F6F6F6] items-center" id="Policy">
          <div className="pl-8 pb-8">
           <Image alt=""  className="h-96 w-96 rounded" src={policy} />
          </div>
          <div >
            <p className="text-left text-5xl pl-10 font-bold">Policy Hub</p>
            <p className="text-2xl text-left pl-10 pt-2">
            Learn about our Community Guidelines, developed to help keep people safe <br/>
             and make Unity Talk the best place to hang out with friends
            </p>
          </div>
        </div>

        <div className=" flex  justify-center bg-[#F6F6F6] items-center">
          <div>
            <p className="text-left text-5xl font-bold ">Keep 
            Notes Private</p>
            <p className="text-2xl text-left pt-2">
            Secure your personal notes with Unity Talk. Safeguard your <br/>
            thoughts using our password-protected feature, ensuring privacy <br/>
            and peace of mind for your valuable information.
              <br/>
              <br/>
            
            </p>
            <span className="flex items-center">
              <Link target="_blank" href="https://inotebook-6pk4.onrender.com/login" className="flex text-blue-400 hover:text-blue-800 text-3xl font-bold">
                <span className="mr-2">Explore Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </span>

          </div>

        <div className="pl-8 pb-8">
         <Image alt=""  className="h-54 w-54 rounded" src={Lib} />
        </div>
        
      </div>
      </div>
      <Footer />
    </div>
  );
}
