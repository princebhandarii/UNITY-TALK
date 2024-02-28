"use client";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import c1 from "../images/discover2.png";
import Footer from "../components/Footer";
import Header from "../components/Header";
import help1 from "../images/support1.png";
import help2 from "../images/support2.png";
import { useSpring, animated } from "react-spring";
import chat from "../images/chat.png";
import game from "../images/game.png";
import call from "../images/call.png";
import ai from "../images/ai3.png";
import privcy from "../images/privcy.png";

import "../style.css";
export default function Page() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oca7c0v",
        "template_8oikmqd",
        form.current,
        "5Fzhb45Zp1gGGcW1M"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    // Apply fading effect when component mounts
    const text = document.querySelectorAll(".fade-in-text");
    text.forEach((el) => {
      el.classList.add("fade-in-animation");
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true, // Enable infinite looping
    speed: 1000, // Adjust the speed of automatic scrolling
    autoplay: true, // Enable automatic scrolling
    autoplaySpeed: 1000, // Set the interval between slides
    slidesToShow: 5, // Adjust the number of slides to show
    slidesToScroll: 1,
  };

  const springProps1 = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  });

  const springProps2 = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 200, // Delay the animation for the second image
  });

  return (
    <div>
      <div className="bg-[#23272A] pt-6">
        <Header />
        <div className="text-center">
          <h2 className="text-4xl lg:text-6xl font-bold  text-white fade-in-text font-mono">
            Help Center
          </h2>

          <p className="text-white font-mono text-xl  pt-3 fade-in-text  lg:pl-40 lg:pr-40">
            Unity Talk's Help Center revolutionizes support through an
            innovative email-centric approach, turning your inbox into a dynamic
            arena for collaborative problem-solving. When you send out a query,
            it's not just an email; it's an invitation for developers worldwide
            to join forces in unraveling coding complexities or refining design
            challenges.
          </p>
        </div>

        <div className="flex pt-5">
          <animated.div
            className="mr-auto hidden md:block"
            style={springProps1}
          >
            <Image src={help1} alt="" className="" />
          </animated.div>
          <animated.div className="" style={springProps2}>
            <Image src={help2} alt="" className="ml-auto" />
          </animated.div>
        </div>
      </div>
      <div className="relative lg:pt-9 pb-5">
        <div className=" text-center pt-5 pb-4 ">
          <h2 className="font-bold text-5xl text-black fade-in-text font-mono">
            Need help? We've got your back.
          </h2>
          <p className="text-2xl pt-10  text-black fade-in-text font-mono text-center lg:pr-40 lg:pl-40">
            From account settings to permissions, find help for everything Unity
            Talk If you're new to Unity Talk and looking for tips, Visit Our
            Email Box
          </p>
        </div>
        <div className=" flex items-center justify-center lg:pt-24 pt-10">
          <div className=" relative card lg:w-[700px] lg:h-[500px] bg-base-100 shadow-xl image-full   w-[300px] h-[50px] ">
            <figure>
              <Image src={c1} alt="" className="object-cover w-full h-full" />
            </figure>
            <div className="card-body">
              <h2 className="font-bold text-center text-white text-5xl fade-in-text">
                Email Us🚀
              </h2>
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  placeholder="Your Email"
                  name="user_email"
                  className="input input-bordered w-full text-lg mt-[10px] text-black fade-in-text"
                />
                <input
                  type="text"
                  placeholder="Your Name"
                  name="user_name"
                  className="input input-bordered w-full text-lg mt-[10px] text-black fade-in-text"
                />
                <input
                  type="text"
                  placeholder="Your Subject"
                  className="input input-bordered w-full text-lg mt-[10px] text-black fade-in-text"
                />
                <textarea
                  placeholder="Your Message"
                  name="message"
                  className="input input-bordered w-full h-[100px] text-lg mt-[10px] text-black fade-in-text"
                ></textarea>
                <input
                  type="submit"
                  className="card-actions mt-[10px] btn btn-[#27232A] w-full text-xl fade-in-text"
                  value="Send"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="carousel-container  text-black  pt-[500px] lg:pt-20 hidden md:block ">
          <Slider {...settings}>
            <div className="card lg:w-64  glass bg-red-300 ">
              <figure>
                <Image src={chat} alt="car!" />
              </figure>
              <div className="lg:card-body pt-10 lg:h-24 h-32  ">
                <h2 className="lg:card-title  lg:text-xl lg:pl-20">Chatting</h2>
              </div>
            </div>

            <div className="card lg:w-64  glass shadow-sm bg-red-800 ">
              <figure>
                <Image src={game} alt="car!" />
              </figure>
              <div className="lg:card-body pt-10 lg:h-24 h-24 w-24 ">
                <h2 className="card-title lg:text-xl lg:pl-20">Gaming</h2>
              </div>
            </div>

            <div className="card w-64 glass shadow-sm bg-yellow-600">
              <figure>
                <Image src={call} alt="car!" />
              </figure>
              <div className="lg:card-body pt-10 lg:h-24 h-24 w-24 text-center">
                <h2 className="card-title lg:text-xl lg:pl-20">
                  Video Calling
                </h2>
              </div>
            </div>

            <div className="card lg:w-60  glass shadow-sm bg-[#FFE6E6]">
              <figure>
                <Image src={ai} alt="car!" />
              </figure>
              <div className="lg:card-body pt-10 lg:h-24 h-24 w-24 text-center">
                <h2 className="card-title lg:text-xl lg:pl-20">
                  Artificial Intelligence
                </h2>
              </div>
            </div>

            <div className="card w-64 glass shadow-sm bg-slate-600">
              <figure>
                <Image src={privcy} alt="car!" />
              </figure>
              <div className="lg:card-body pt-10 lg:h-24 h-24 w-24 text-center">
                <h2 className="card-title lg:text-xl lg:pl-20 ">Privacy</h2>
              </div>
            </div>
          </Slider>
        </div>
        <div className="pt-[500px] lg:hidden ">
          <div className="h-96 carousel carousel-vertical rounded-box relative">
            <div className="carousel-item h-full group relative">
              <Image src={chat} />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Chat
              </div>
            </div>
            <div className="carousel-item h-full group relative">
              <Image src={ai} />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                AI
              </div>
            </div>
            <div className="carousel-item h-full group relative">
              <Image src={call} />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Call
              </div>
            </div>
            <div className="carousel-item h-full group relative">
              <Image src={game} />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Game
              </div>
            </div>
            <div className="carousel-item h-full group relative">
              <Image src={privcy} />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Privacy
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
