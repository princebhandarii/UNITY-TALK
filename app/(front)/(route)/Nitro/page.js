"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";
import pic1 from "../images/pic1.png";
import pic2 from "../images/pic2.png";
import pic3 from "../images/pic3.png";
import pic4 from "../images/pic4.png";
import n1 from "../images/n1.png";
import n2 from "../images/n2.svg";
import n3 from "../images/n3.svg";
import n4 from "../images/n4.svg";
import n5 from "../images/n5.svg";
import { Slide } from "react-reveal";
import "../style.css";
import React, { useState, useRef } from "react";

export default function page() {
  const [isContentVisible, setIsContentVisible] = useState(false);
  //const [cardLength, setCardLength] = useState(80);
  const [isCardVisible, setCardVisible] = useState(false);

  const [isCard1BackgroundVisible, setIsCard1BackgroundVisible] =
    useState(false);
  const [isCard2BackgroundVisible, setIsCard2BackgroundVisible] =
    useState(false);
  const [isCard3BackgroundVisible, setIsCard3BackgroundVisible] =
    useState(false);
  const [isCard4BackgroundVisible, setIsCard4BackgroundVisible] =
    useState(false);
  const contentRef = useRef(null);

  const contentRefs = {
    paragraph1: useRef(null),
    paragraph2: useRef(null),
    paragraph3: useRef(null),
    paragraph4: useRef(null),
  };
  const toggleContent = (refKey) => {
    const content = contentRefs[refKey].current;
    if (content) {
      content.style.display =
        content.style.display === "none" ? "block" : "none";
    }
  };

  const toggleBackgroundColor = (cardId) => {
    if (cardId === "card1") {
      setIsCard1BackgroundVisible(!isCard1BackgroundVisible);
    } else if (cardId === "card2") {
      setIsCard2BackgroundVisible(!isCard2BackgroundVisible);
    } else if (cardId === "card3") {
      setIsCard3BackgroundVisible(!isCard3BackgroundVisible);
    } else if (cardId === "card4") {
      setIsCard4BackgroundVisible(!isCard4BackgroundVisible);
    }
    // Add more conditions for additional divs as needed
    const card = document.getElementById(cardId);
    if (card) {
      card.style.backgroundColor =
        card.style.backgroundColor === "lightblue" ? "#F6F6F6" : "lightblue";
    }
  };

  const handleCardToggle = () => {
    setCardVisible(!isCardVisible);
  };

  const handleCheckboxChange = () => {
    setIsContentVisible(isContentVisible ? false : true);
  };

  //const handleCardLengthChange = (event) => {
  //    setCardLength(event.target.value);
  //};

  return (
    <div>
      <div className="bg-[#23272A] ">
        <Header />
        {/* <div className="lg:flex lg:h-96">
          <div className="lg:pt-32 ">
            <h1 className="text-5xl pl-2 lg:pl-16 text-white font-bold selection:text-blue-400 font-serif">
              UNLEASH MORE FUN WITH NITRO
            </h1>
            <h2 className="pt-7 pl-2 lg:pl-16 text-white text-2xl selection:text-blue-400 lg:w-3/4 font-mono">
              Subscribe to Nitro to upgrade your emoji, personalize your
              profile, create AI generated images, and so much more.
            </h2>
          </div>
          <div className="lg:pr-40">
            <Image
              src={n1}
              className="h-72 w-72 motion-image justify-end "
              alt=""
            />
          </div>
        </div> */}
        <div className="lg:flex">
          <div className="lg:w-2/4">
            <h1 className="text-5xl font-bold text-white pl-2 lg:pl-20 pt-20">
              UNLEASH MORE FUN WITH NITRO
            </h1>

            <p className="text-white pt-4 text-xl  pl-2 lg:pl-20 font-mono">
              Subscribe to Nitro to upgrade your emoji, personalize your
              profile, create AI generated images, and so much more.
            </p>
          </div>
          <div className="lg:pl-64">
            <Image
              src={n1}
              className="h-72 w-72 motion-image justify-end "
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="lg:flex lg:pl-48 pl-6 bg-white">
        <div className="lg:pt-10 pt-16  lg:w-2/3 ">
          <div class="card lg:w-2/3 w-11/12 bg-gradient-to-tr from-[#007CC2] via-[#1C75D1] to-[#4968E9] shadow-xl animate-pulse border border-blue-500">
            <div class="card-body">
              <h2 class="text-center text-4xl pt-4">NITRO BASIC</h2>

              <ul className="pl-6 pt-6 text-xl">
                <li className="flex">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z"
                      fill="#000000"
                    />
                  </svg>
                     <span className="pl-1">personalize your profile</span>
                </li>
                <li className="flex mt-4">
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.9348 13.1725C15.3654 13.3446 15.5817 13.8402 15.3237 14.2255C15.0294 14.665 14.6493 15.0442 14.2032 15.3386C13.522 15.7881 12.7196 16.0185 11.9037 15.9988C11.0878 15.9792 10.2975 15.7104 9.6387 15.2287C9.20726 14.9131 8.8458 14.5161 8.573 14.0629C8.33384 13.6656 8.57376 13.181 9.01216 13.0299C9.45056 12.8788 9.91919 13.1274 10.2157 13.4839C10.3367 13.6294 10.4756 13.7603 10.63 13.8732C11.0122 14.1527 11.4708 14.3087 11.9441 14.3201C12.4175 14.3315 12.883 14.1978 13.2782 13.937C13.4379 13.8316 13.583 13.7076 13.7108 13.5681C14.0241 13.2262 14.5042 13.0005 14.9348 13.1725Z"
                      fill="#000000"
                    />
                    <path
                      d="M10 9C10 8.44772 9.55228 8 9 8C8.44772 8 8 8.44772 8 9V10C8 10.5523 8.44772 11 9 11C9.55228 11 10 10.5523 10 10V9Z"
                      fill="#000000"
                    />
                    <path
                      d="M16 9C16 8.44772 15.5523 8 15 8C14.4477 8 14 8.44772 14 9V10C14 10.5523 14.4477 11 15 11C15.5523 11 16 10.5523 16 10V9Z"
                      fill="#000000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
                      fill="#000000"
                    />
                  </svg>
                  <span className="pl-1">Custom Emoji Anywhere</span>
                </li>
                <li className="flex mt-4">
                  <svg
                    fill="#000000"
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.001 1.993C6.486 1.994 2 6.48 2 11.994c.001 5.514 4.487 10 10 10 5.515 0 10.001-4.486 10.001-10s-4.486-10-10-10.001zM12 19.994c-4.41 0-7.999-3.589-8-8 0-4.411 3.589-8 8.001-8.001 4.411.001 8 3.59 8 8.001s-3.589 8-8.001 8z" />
                    <path d="m12.001 8.001-4.005 4.005h3.005V16h2v-3.994h3.004z" />
                  </svg>
                  <span className="pl-1">50 MB Upload</span>
                </li>
                <li className="flex mt-4">
                  <svg
                    fill="#000000"
                    className="w-6 h-6"
                    viewBox="0 0 1920 1920"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1493.602 1468.294H225.837C523.211 387.9 755.305 1443.9 983.898 1115.918c284.612-408.283 590.57-405.685 710.174 352.376h-200.47Zm-816-1129.412c124.8 0 225.882 101.196 225.882 225.883 0 124.687-101.082 225.882-225.882 225.882-124.687 0-225.882-101.195-225.882-225.882 0-124.687 101.195-225.883 225.882-225.883ZM-.045 1807.118h1920V113h-1920v1694.118Z"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <span className="pl-1">create AI generated imags</span>
                </li>
              </ul>
            </div>
            <div class="card-actions lg:place-content-center pl-10">
              <button className="butto lg:pr-20">
                <svg
                  class="empty"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                >
                  <path fill="none" d="M0 0H24V24H0z"></path>
                  <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"></path>
                </svg>
                <svg
                  class="filled"
                  height="32"
                  width="32"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0H24V24H0z" fill="none"></path>
                  <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path>
                </svg>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* second card */}
        <div className="lg:pt-10 pt-16  lg:w-2/3 ">
          <div class="card lg:w-2/3  w-11/12 bg-gradient-to-tl from-[#8547C6] via-[#B145C2] to-[#B152A4] shadow-xl animate-pulse border border-purple-500">
            <div class="card-body">
              <h2 class="text-center text-4xl pt-4">NITRO PLUS</h2>

              <ul className="pl-6 pt-6 text-xl">
                <li className="flex">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z"
                      fill="#000000"
                    />
                  </svg>
                  <span className="pl-1">personalize your profile</span>
                </li>
                <li className="flex mt-4">
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.9348 13.1725C15.3654 13.3446 15.5817 13.8402 15.3237 14.2255C15.0294 14.665 14.6493 15.0442 14.2032 15.3386C13.522 15.7881 12.7196 16.0185 11.9037 15.9988C11.0878 15.9792 10.2975 15.7104 9.6387 15.2287C9.20726 14.9131 8.8458 14.5161 8.573 14.0629C8.33384 13.6656 8.57376 13.181 9.01216 13.0299C9.45056 12.8788 9.91919 13.1274 10.2157 13.4839C10.3367 13.6294 10.4756 13.7603 10.63 13.8732C11.0122 14.1527 11.4708 14.3087 11.9441 14.3201C12.4175 14.3315 12.883 14.1978 13.2782 13.937C13.4379 13.8316 13.583 13.7076 13.7108 13.5681C14.0241 13.2262 14.5042 13.0005 14.9348 13.1725Z"
                      fill="#000000"
                    />
                    <path
                      d="M10 9C10 8.44772 9.55228 8 9 8C8.44772 8 8 8.44772 8 9V10C8 10.5523 8.44772 11 9 11C9.55228 11 10 10.5523 10 10V9Z"
                      fill="#000000"
                    />
                    <path
                      d="M16 9C16 8.44772 15.5523 8 15 8C14.4477 8 14 8.44772 14 9V10C14 10.5523 14.4477 11 15 11C15.5523 11 16 10.5523 16 10V9Z"
                      fill="#000000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
                      fill="#000000"
                    />
                  </svg>
                  <span className="pl-1">Custom Emoji Anywhere</span>
                </li>
                <li className="flex mt-4">
                  <svg
                    fill="#000000"
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.001 1.993C6.486 1.994 2 6.48 2 11.994c.001 5.514 4.487 10 10 10 5.515 0 10.001-4.486 10.001-10s-4.486-10-10-10.001zM12 19.994c-4.41 0-7.999-3.589-8-8 0-4.411 3.589-8 8.001-8.001 4.411.001 8 3.59 8 8.001s-3.589 8-8.001 8z" />
                    <path d="m12.001 8.001-4.005 4.005h3.005V16h2v-3.994h3.004z" />
                  </svg>
                  <span className="pl-1">50 MB Upload</span>
                </li>
                <li className="flex mt-4">
                  <svg
                    fill="#000000"
                    className="w-6 h-6"
                    viewBox="0 0 1920 1920"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1493.602 1468.294H225.837C523.211 387.9 755.305 1443.9 983.898 1115.918c284.612-408.283 590.57-405.685 710.174 352.376h-200.47Zm-816-1129.412c124.8 0 225.882 101.196 225.882 225.883 0 124.687-101.082 225.882-225.882 225.882-124.687 0-225.882-101.195-225.882-225.882 0-124.687 101.195-225.883 225.882-225.883ZM-.045 1807.118h1920V113h-1920v1694.118Z"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <span className="pl-1">create AI generated imags</span>
                </li>
              </ul>
            </div>
            <div class="card-actions lg:place-content-center pl-10">
              <button className="butto lg:pr-20">
                <svg
                  class="empty"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                >
                  <path fill="none" d="M0 0H24V24H0z"></path>
                  <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"></path>
                </svg>
                <svg
                  class="filled"
                  height="32"
                  width="32"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0H24V24H0z" fill="none"></path>
                  <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path>
                </svg>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-5xl text-center lg:pt-20 pt-10 font-bold text-black">
        {" "}
        Popular Nitro Perks
      </h1>

      <div className="lg:flex lg:pl-[200px] font-bold ">
        <div className=" ml-2 mr-2 card lg:w-[550px] lg:h-[400px]  bg-[#F6F6F6] relative  mt-[50px] transition-transform transform-gpu hover:rotate-3">
          <Slide up>
            <div className="card-body">
              <h2 className="text-center text-2xl text-black">
                From clips to pics, share away with bigger file uploads
              </h2>
            </div>
            <Image
              src={pic1}
              alt=""
              className="object-cover lg:ml-[55px] lg:w-[450px] lg:mb-[30px]"
              draggable="false"
            />
          </Slide>
        </div>
        <div className="ml-2 mr-2 flex card lg:w-[550px] lg:h-[400px]   bg-[#F6F6F6] relative lg:ml-[40px] lg:mt-[50px] mt-[90px] transition-transform transform-gpu hover:rotate-3">
          <Slide up>
            <div className="card-body">
              <h2 className="text-center text-2xl text-black">
                Stream apps and games in sweet, sweet HD
              </h2>
            </div>
            <Image
              src={pic2}
              alt=""
              className="md:ml-[70px] object-cover lg:ml-[130px] lg:w-[300px] lg:mb-[30px] lg:h-[200px]"
              draggable="false"
            />
          </Slide>
        </div>
      </div>

      {isCardVisible && (
        <div
          id="toggleCards"
          style={{ display: isCardVisible ? "block" : "none" }}
        >
          <div className="lg:flex lg:pl-[200px] font-bold  mt-[90px]">
            <div className="ml-2 mr-2 card lg:w-[550px] lg:h-[400px]  bg-[#F6F6F6] relative  lg:mt-[50px] transition-transform transform-gpu hover:rotate-3">
              <Slide up>
                <div className="card-body">
                  <h2 className="text-center text-2xl text-black">
                    Hype and meme with emoji anywhere
                  </h2>
                </div>
                <Image
                  src={pic3}
                  alt=""
                  className="object-cover lg:ml-[50px] lg:w-[450px] lg:mb-[30px]"
                  draggable="false"
                />
              </Slide>
            </div>

            <div className="ml-2 mr-2 bg-white flex  mt-[90px] card lg:w-[550px] lg:h-[400px]  lg:bg-[#F6F6F6] relative lg:ml-[40px] lg:mt-[50px] transition-transform transform-gpu hover:rotate-3">
              <Slide up>
                <div className="card-body">
                  <h2 className="text-center text-2xl text-black">
                    Text to images generated
                  </h2>
                </div>
                <Image
                  src={pic4}
                  alt=""
                  className="object-cover lg:ml-[130px] lg:w-[300px] lg:mb-[30px] lg:h-[200px]"
                  draggable="false"
                />
              </Slide>
            </div>
          </div>
        </div>
      )}

      <div className="lg:pt-[100px] lg:pl-[700px] pt-12 pl-28">
        <button className="buttonp  " onClick={handleCardToggle}>
          {isCardVisible ? "Hide All Perks" : "Show All Perks"}
        </button>
      </div>

      <div className="lg:ml-16 card lg:w-[1300px]  bg-[#F6F6F6] relative  mt-[50px] lg:mt-[50px] ">
        <Slide up>
          <div className="card-body">
            <h2 className="text-center font-bold lg:text-6xl text-2xl text-black">
              Pick the plan that works <br /> best for you
            </h2>
            <div className="flex pt-[50px] lg:pt-[50px]">
              <p className="font-bold text-2xl text-black lg:pt-[30px] lg:pl-[80px]">
                Features
              </p>

              <span className="lg:pr-[80px] pl-14">
                <p className="font-bold lg:text-4xl text-2xl text-black  lg:pt-[30px] lg:pl-[60px]">
                  NITRO
                </p>
                <p className="font-bold lg:text-2xl text-xl text-black lg:pt-[3px] lg:pl-[80px]">
                  Basic
                </p>
              </span>

              <span className="lg:pr-[50px] pl-3 ">
                <p className="font-bold lg:text-4xl text-2xl text-black lg:pt-[30px] lg:pl-[55px]">
                  NITRO
                </p>
                <p className="font-bold lg:text-2xl text-xl text-black lg:pt-[3px] lg:pl-[80px] ">
                  Plus
                </p>
              </span>
            </div>
            <br />
            <hr className="border-2" />
            {/*First row*/}
            <div className="flex ">
              <p className=" text-lg text-black lg:pt-[30px]  lg:pl-[80px] ">
                AI Generated images{" "}
              </p>

              <span className="lg:pr-[220px] lg:pt-[30px] pr-[40px]">
                <svg
                  fill="#000000"
                  height="30px"
                  width="30px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 288.941 288.941"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      id="Check"
                      d="M285.377,46.368c-4.74-4.704-12.439-4.704-17.179,0L96.309,217.114L20.734,142.61
                                                c-4.74-4.704-12.439-4.704-17.179,0s-4.74,12.319,0,17.011l84.2,82.997c4.692,4.644,12.499,4.644,17.191,0l180.43-179.239
                                                C290.129,58.687,290.129,51.06,285.377,46.368C280.637,41.664,290.129,51.06,285.377,46.368z"
                    />
                  </g>
                </svg>
              </span>

              <span className="lg:pr-[100px] pr-[10px] lg:pt-[30px]">
                <svg
                  fill="#000000"
                  height="30px"
                  width="30px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 288.941 288.941"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      id="Check"
                      d="M285.377,46.368c-4.74-4.704-12.439-4.704-17.179,0L96.309,217.114L20.734,142.61
                                                c-4.74-4.704-12.439-4.704-17.179,0s-4.74,12.319,0,17.011l84.2,82.997c4.692,4.644,12.499,4.644,17.191,0l180.43-179.239
                                                C290.129,58.687,290.129,51.06,285.377,46.368C280.637,41.664,290.129,51.06,285.377,46.368z"
                    />
                  </g>
                </svg>
              </span>
            </div>
            <br /> <hr className="border-2" />
            {/*Second row*/}
            <div className="flex ">
              <p className=" text-lg text-black lg:pt-[30px] lg:pl-[80px] w-6">
                emoji anywhere
              </p>
              <span className="lg:pr-[220px] lg:pt-[30px] pr-10">
                <svg
                  fill="#000000"
                  height="30px"
                  width="30px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 288.941 288.941"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      id="Check"
                      d="M285.377,46.368c-4.74-4.704-12.439-4.704-17.179,0L96.309,217.114L20.734,142.61
                               c-4.74-4.704-12.439-4.704-17.179,0s-4.74,12.319,0,17.011l84.2,82.997c4.692,4.644,12.499,4.644,17.191,0l180.43-179.239
                               C290.129,58.687,290.129,51.06,285.377,46.368C280.637,41.664,290.129,51.06,285.377,46.368z"
                    />
                  </g>
                </svg>
              </span>
              <span className="lg:pr-[100px] lg:pt-[30px] pr-3">
                <svg
                  fill="#000000"
                  height="30px"
                  width="30px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 288.941 288.941"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      id="Check"
                      d="M285.377,46.368c-4.74-4.704-12.439-4.704-17.179,0L96.309,217.114L20.734,142.61
                               c-4.74-4.704-12.439-4.704-17.179,0s-4.74,12.319,0,17.011l84.2,82.997c4.692,4.644,12.499,4.644,17.191,0l180.43-179.239
                               C290.129,58.687,290.129,51.06,285.377,46.368C280.637,41.664,290.129,51.06,285.377,46.368z"
                    />
                  </g>
                </svg>
              </span>
            </div>
            <br /> <hr className="border-2" />
            {/*Sixteenth row*/}
            {/*Button*/}
            <div className="flex">
              <button className="bg-black text-white btn mt-5 lg:ml-[810px] lg:mt-[30px] hover:bg-white hover:text-black">
                Subscribe Basic
              </button>
              <button className="bg-black text-white btn ml-7 mt-5 lg:ml-[100px] lg:mt-[30px] hover:bg-white hover:text-black">
                Subscribe Plus
              </button>
            </div>
          </div>
        </Slide>
      </div>

      <div className="flex lg:content-center">
        <h1 className="mt-36 lg:pl-44 font-bold lg:text-5xl text-2xl text-black pl-3 ">
          Frequently Asked Questions?
        </h1>
        <Image className="ml-auto" src={n4} alt="" />
      </div>

      <div className="ml-2 mr-2">
        {/*First Question */}
        <div
          className="card lg:w-[1300px] lg:ml-16 h-[${cardLength}px]  mt-[50px] relative "
          id="card1"
          style={{
            backgroundColor: isCard1BackgroundVisible ? "lightblue" : "#F6F6F6",
          }}
        >
          <div className="card-body">
            <h1 className="font-bold text-lg text-black">What's Nitro?</h1>

            <p
              ref={contentRefs.paragraph1}
              style={{ display: "none" }}
              id="content"
              className=" text-lg text-black"
            >
              Nitro is a subscription service that unlocks features and perks
              across Unity Talk, giving you more ways to have fun and express
              yourself.
            </p>

            <label className="text-[#23272A] btn-circle  swap swap-rotate ml-[1175px] absolute top-1 right-2 mt-4 mr-3">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                id="toggleCheckbox"
                onClick={() => {
                  toggleContent("paragraph1");
                  toggleBackgroundColor("card1");
                }}
              />

              {/* hamburger icon */}
              <svg
                className="swap-off fill-current"
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12H20M12 4V20"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* close icon */}
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>
        </div>

        <div
          className="card lg:w-[1300px] lg:ml-16 h-[${cardLength}px]  mt-[50px] relative "
          id="card2"
          style={{
            backgroundColor: isCard2BackgroundVisible ? "lightblue" : "#F6F6F6",
          }}
        >
          <div className="card-body ml-2 mr-2">
            <h1 className="font-bold text-lg text-black">
              What payment methods do you accept?
            </h1>

            <p
              ref={contentRefs.paragraph2}
              style={{ display: "none" }}
              id="content"
              className=" text-lg text-black"
            >
              We accept a variety of payment methods, which you can learn more
              info on here!
            </p>

            <label className="text-[#23272A] btn-circle  swap swap-rotate ml-[1175px] absolute top-1 right-2 mt-4 mr-3">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                id="toggleCheckbox2"
                onClick={() => {
                  toggleContent("paragraph2");
                  toggleBackgroundColor("card2");
                }}
              />

              {/* hamburger icon */}
              <svg
                className="swap-off fill-current"
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12H20M12 4V20"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* close icon */}
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>
        </div>

        <div className="flex">
          <div className="hidden md:block">
            <Image className="" src={n5} alt="" />
          </div>

          <div
            className="card lg:w-[1300px] w-96 lg:ml-2 h-[${cardLength}px]  mt-[50px] relative "
            id="card3"
            style={{
              backgroundColor: isCard3BackgroundVisible
                ? "lightblue"
                : "#F6F6F6",
            }}
          >
            <div className="card-body flex">
              <h1 className="font-bold text-lg text-black">
                Are Nitro gifts real?
              </h1>

              <p
                ref={contentRefs.paragraph3}
                style={{ display: "none" }}
                id="content3"
                className=" text-lg text-black"
              >
                Yes! You can purchase a Nitro gift through the Nitro page on
                desktop or the Nitro Gifting tab within mobile under User
                Settings. Additionally, you can send a quick gift in a channel
                by selecting the gift icon on desktop or mobile. If someone
                sends you a gift, you can see what it looks like here. You can
                also buy Unity Talk Nitro directly on Amazon.com (United States
                only).
              </p>

              <label className="text-[#23272A] btn-circle  swap swap-rotate ml-[1175px] absolute top-1 right-2 mt-4 mr-3">
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  id="toggleCheckbox2"
                  onClick={() => {
                    toggleContent("paragraph3");
                    toggleBackgroundColor("card3");
                  }}
                />

                {/* hamburger icon */}
                <svg
                  className="swap-off fill-current"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12H20M12 4V20"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* close icon */}
                <svg
                  className="swap-on fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </label>
            </div>
          </div>
        </div>

        <div
          className="lg:ml-16 card lg:w-[1300px] h-[${cardLength}px]  mt-[50px] relative "
          id="card4"
          style={{
            backgroundColor: isCard4BackgroundVisible ? "lightblue" : "#F6F6F6",
          }}
        >
          <div className="card-body " id="toggleCheckbox3">
            <h1 className="font-bold text-lg text-black">
              My Nitro subscription comes with Boosts. What are those?
            </h1>

            <p
              ref={contentRefs.paragraph4}
              style={{ display: "none" }}
              className=" text-lg text-black"
            >
              Server Boosts are a way to show support for your favorite
              communities. Each Boost that you give to a server helps
              collectively unlock perks for everyone in the server to enjoy.
              Learn more about Server Boosting here!{" "}
            </p>

            <label className="text-[#23272A] btn-circle  swap swap-rotate ml-[1175px] absolute top-1 right-2 mt-4 mr-3">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                id="toggleCheckbox4"
                onClick={() => {
                  toggleContent("paragraph4");
                  toggleBackgroundColor("card4");
                }}
              />

              {/* hamburger icon */}
              <svg
                className="swap-off fill-current"
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12H20M12 4V20"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* close icon */}
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10 items-center lg:mt-[100px] bg-gradient-to-tl from-[#B152A4] via-[#B145C2] to-[#8547C6] ">
        <div className=" lg:mt-[50px] ">
          <Image src={n2} alt="" />
        </div>

        <div className="text-center lg:ml-[200px] ">
          <h1 className="font-bold lg:text-5xl text-xl">
            Unleash the fun with Nitro
          </h1>
          <button className="mt-8 text-xl h-8 btn bg-white text-black hover:text-white rounded-full ">
            Subscribe
          </button>
        </div>

        <div className="mb-[50px] ml-auto ">
          <Image src={n3} alt="" />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
