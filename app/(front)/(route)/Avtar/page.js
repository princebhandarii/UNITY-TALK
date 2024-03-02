"use client";

import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import f1 from "../images/f1.jpeg";
import f2 from "../images/f2.jpeg";
import f3 from "../images/f3.jpeg";
import aimag from "../images/aimag.png";
import ai1 from "../images/ais.png";
import { config } from "react-spring";
import Carousel from "react-spring-3d-carousel";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Link from "next/link";

export default function page() {
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [offsetRadius1, setOffsetRadius1] = useState(0);
  const [carouselConfig, setCarouselConfig] = useState(config.slow);

  const slides = [
    {
      key: uuidv4(),
      content: (
        <div className="card card-compact lg:w-96 w-[350px] bg-base-100 shadow-xl">
          <figure>
            <Image width={300} height={300} src={f1} alt=" " />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-black">AI Generated Boy</h2>
            <p className="text-black">
              Here, you can generate ai based boy profile picture
            </p>
            <div className="card-actions justify-center ">
              <Link href="/Nitro#nitro">
                <button className="btn btn-primary">Generate</button>
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="card card-compact lg:w-96 w-[350px] bg-base-100 shadow-xl">
          <figure>
            <Image width={300} height={300} src={f2} alt=" " />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-black">AI Generated Girl</h2>
            <p className="text-black">
              Here, you can generate ai based boy profile picture
            </p>
            <div className="card-actions justify-center">
              <Link href="/Nitro#nitro">
                <button className="btn btn-primary">Generate</button>
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="card card-compact lg:w-96 w-[350px] bg-base-100 shadow-xl">
          <figure>
            <Image width={300} height={300} src={f3} alt=" " />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-black">AI Generated Dog</h2>
            <p className="text-black">
              Here, you can generate ai based boy profile picture
            </p>
            <div className="card-actions justify-center">
              <Link href="/Nitro#nitro">
                <button className="btn btn-primary">Generate</button>
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="card card-compact lg:w-96 w-[350px] bg-base-100 shadow-xl">
          <figure>
            <Image width={300} height={300} src={f1} alt=" " />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-black">AI Generated Boy</h2>
            <p className="text-black">
              Here, you can generate ai based girl profile picture
            </p>
            <div className="card-actions justify-center">
              <Link href="/Nitro#nitro">
                <button className="btn btn-primary">Generate</button>
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="card card-compact lg:w-96 w-[350px] bg-base-100 shadow-xl">
          <figure>
            <Image width={300} height={300} src={f2} alt=" " />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-black">AI Generated Girl</h2>
            <p className="text-black">
              Here, you can generate ai based animals picture
            </p>
            <div className="card-actions justify-center">
              <Link href="/Nitro#nitro">
                <button className="btn btn-primary">Generate</button>
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="card card-compact lg:w-96 w-[350px] bg-base-100 shadow-xl">
          <figure>
            <Image width={300} height={300} src={f3} alt=" " />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-black">AI Generated Dog</h2>
            <p className="text-black">
              Here, you can generate ai based Dog profile picture
            </p>
            <div className="card-actions justify-center">
              <Link href="/Nitro#nitro">
                <button className="btn btn-primary">Generate</button>
              </Link>
            </div>
          </div>
        </div>
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setGoToSlide(index) };
  });

  const onChangeInput = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    setOffsetRadius(value);
  };

  const advanceSlide = () => {
    const nextSlide = (goToSlide + 1) % slides.length;
    setGoToSlide(nextSlide);
  };

  // Start autoplay when component mounts
  useEffect(() => {
    const autoplayInterval = setInterval(advanceSlide, 2000); // Adjust autoplay interval as needed
    return () => clearInterval(autoplayInterval); // Clean up on component unmount
  }, [goToSlide]); // Re-run effect when goToSlide changes

  // Modify slides array to make it circular for infinite looping
  const circularSlides = [...slides, ...slides, ...slides];

  const [textIndex, setTextIndex] = useState(0); // State to track the index of the current word
  const [imageIndex, setImageIndex] = useState(0); // State to track the index of the current image
  const words = ["Boy", "Girl", "Dog"]; // Array of words
  const images = ["/f1.jpeg", "/f2.jpeg", "/f3.jpeg"]; // Array of corresponding image paths

  const [text] = useTypewriter({
    words,
    loop: {}, // Check if this needs any configuration
    typeSpeed: 120,
    deleteSpeed: 120,
  });

  // Function to handle changing the word and image
  const changeWord = () => {
    const newIndex = (textIndex + 1) % words.length; // Calculate the next index
    const newimageIndex = (imageIndex + 1) % images.length; // Calculate the next index
    setTextIndex(newIndex); // Update the text index state
    setImageIndex(newimageIndex); // Update the image index state
  };

  // Call the changeWord function when you want to switch to the next word
  useEffect(() => {
    const interval = setInterval(changeWord, 4000); // Change word and image every 2 seconds
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [textIndex]); // Trigger the effect whenever textIndex changes

  return (
    <div className="bg-[#23272A]">
      <Header />
      <div>
        <div className="lg:flex pb-10 pt-10">
          <div className="lg:ml-40 ml-8 md:block hidden">
            <Image
              src={aimag}
              alt=""
              className="lg:h-80 lg:w-96 h-60 w-72 pt-8 rounded-lg animate-zoom-in-out "
            />
          </div>
          <div className="lg:w-3/5 lg:ml-20 text-white lg:pt-8">
            <h2 className="font-bold text-4xl text-center  fade-in-text">
              What's AI Images Generator?
            </h2>
            <p className=" text-lg text-center pt-8 fade-in-text font-mono">
              Unity Talk's "AI images Generator" could refer to images generated
              or manipulated using artificial intelligence techniques. These
              images are often created using algorithms that can understand and
              generate visual content.For instance, AI can be used to enhance or
              modify photographs, create realistic artwork, or even generate
              entirely new images based on given parameters or inputs.
            </p>
          </div>
          <div className="ml-12 lg:hidden">
            <Image
              src={aimag}
              alt=""
              className="lg:h-80 lg:w-96 h-60 w-72 pt-8 rounded-lg animate-zoom-in-out "
            />
          </div>
        </div>
        <div className="grid place-items-center bg-white pt-12 text-black">
          <h1 className="text-4xl">
            AI Generated <span className="font-bold">{text}</span>
            <span>
              <Cursor />
            </span>
          </h1>
          <Image
            src={images[textIndex]}
            alt=""
            width={300}
            height={300}
            className="mb-24 pt-8"
          />
        </div>
        <div className="hidden lg:block bg-[#23272A] lg:w-full lg:h-[500px] w-full h-[600px] ">
          <Carousel
            slides={circularSlides}
            goToSlide={goToSlide}
            offsetRadius={offsetRadius}
            animationConfig={carouselConfig}
          />
          <div className="lg:mx-auto lg:mt-8 lg:w-1/2 lg:flex lg:justify-around"></div>
        </div>
        <div className=" md:hidden bg-[#23272A] lg:w-full lg:h-[900px] w-full h-[600px]">
          <Carousel
            slides={circularSlides}
            goToSlide={goToSlide}
            offsetRadius={offsetRadius1}
            animationConfig={carouselConfig}
          />
          <div className="lg:mx-auto lg:mt-8 lg:w-1/2 lg:flex lg:justify-around"></div>
        </div>
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </div>
  );
}
