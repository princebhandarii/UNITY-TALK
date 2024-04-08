"use client";
import Image from "next/image";
import a1 from "../images/avatar.svg";
import React, { useRef, useState } from "react";
import { FiDownload } from "react-icons/fi"; // Import the download icon
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style.css";


export default function Page() {
  const [image_url, setImage_url] = useState("/");
  const [loading, setLoading] = useState(false);
  const [imageGenerated, setImageGenerated] = useState(false); // Track whether the image is generated
  let inputRef = useRef(null);

  const imageGenerator = async () => {
    if (inputRef.current.value === "") {
      return 0;
    }

    // Set loading to true when image generation starts
    setLoading(true);
    const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${apiKey}`,
          "User-Agent": "Chrome",
        },
        body: JSON.stringify({
          prompt: `${inputRef.current.value}`,
          n: 1,
          size: "512x512",
        }),
      }
    );

    let data = await response.json();
    let data_array = data.data;
    setImage_url(data_array[0].url);

    // Set loading to false when image generation is complete
    setLoading(false);

    // Set imageGenerated to true
    setImageGenerated(true);
  };

  const handleDownload = () => {
    // Use anchor tag to trigger download
    const link = document.createElement("a");
    link.href = image_url;
    link.download = "generated_image.jpg"; // You can customize the filename here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    
    <div className="bg-[#23272A]">
      <Header />

      <div className="ai-image-generator flex flex-col items-center justify-center  ">
        <div className="header">
          <p className="text-3xl font-bold">
       <span className="text-white">   AI Image</span> <span className="text-blue-500">Generator</span>
          </p>
          <div
            className={`img-loading ${loading ? "loading-border" : ""} pt-4`}
          >
            <div className="image w-300 h-300 flex items-center justify-center ">
              <Image
                src={image_url === "/" ? a1 : image_url}
                alt=""
                width={300}
                height={300}
              />
            </div>
            {loading && (
              <div className="loading-bars pl-8 text-white">
                <div className="loading-text text-2xl text-white">Loading....</div>
              </div>
            )}
          </div>
          {/* Conditionally render the download icon */}
          {imageGenerated && (
            <div className="download-btn justify-center flex pt-5">
              <a
                href={image_url}
                download="generated_image.jpg"
                onClick={handleDownload}
              >
                <FiDownload size={30} className="text-white" />
              </a>
            </div>
          )}
        </div>
        <div className="search-box flex flex-col items-center pt-2 ">
          <input
            type="text"
            ref={inputRef}
            className="search-input p-2 border rounded w-72 text-white"
            placeholder="what u want to see?"
          />
          <div
            className="generate-btn bg-blue-500 text-white p-2 rounded cursor-pointer mt-4"
            onClick={() => {
              imageGenerator();
            }}
          >
            Generate
          </div>
        </div>
      </div>
      <div className="pt-4">
        <Footer />
      </div>
    </div>

  );
}
