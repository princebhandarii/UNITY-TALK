"use client";

import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Link from "next/link";
import Image from "next/image";
import discover3 from "../../images/discover3.png";
import discover2 from "../../images/discover2.png";
import Footer from "../../components/Footer";
import DiscoverBar from "./../../components/DiscoverBar";
import "../../style.css"


const YOUTUBE_PLAYLIST_ITEMS_API ="https://youtube.googleapis.com/youtube/v3/search";
const YOUTUBE_PLAYLISTID = "UCBwmMxybNva6P_5VmxjzwqA";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const ITEMS_PER_PAGE = 5;

function DiscoverPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl = `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&channelId=${YOUTUBE_PLAYLISTID}&maxResults=50&key=${apiKey}`;
        
        // Include search query if available
        if (searchQuery) {
          apiUrl += `&q=${encodeURIComponent(searchQuery)}`;
        }
    
        const res = await fetch(apiUrl);
    
        if (!res.ok) {
          throw new Error(
            `Failed to fetch data from YouTube API: ${res.status} ${res.statusText}`
          );
        }
    
        const result = await res.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setError(error);
        setLoading(true);
      }
    };
    
    fetchData();
  }, [searchQuery]); // Empty dependency array to ensure the effect runs only once, similar to componentDidMount

  const totalPages = data ? Math.ceil(data.items.length / ITEMS_PER_PAGE) : 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  return (
    <div
      
    >
    <div 
    className="bg-[#23272A] place-self-center"
      style={{ height: "830px", textAlign: "center" }}>
   
      <Header />
      <div className="pt-0">
        <div
          className="selection:text-blue-300 text-5xl font-bold text-[#ebe4e4]  pb-4 animate__animated animate__fadeInUp"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          FIND YOUR COMMUNITY <br />
          ON UNITY TALK
        </div>
        <p className="text-2xl text-[#ebe4e4] pr-[20px] selection:text-blue-300 pb-6 animate__animated animate__fadeInUp motion-safe:animate__duration-1s">
          From gaming, to music, to learning, there's a place for you.
        </p>
      </div>

      <div className="text-[#ebedef] pl-[1200px] relative flex-shrink-0  ">
        <div
          className="  animate__animated animate__bounceInLeft animate__delay-1s motion-safe:animate__duration-1s "
          style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        >
          <Image src={discover2} className="h-[900] w-[900]" alt="discover2" />
        </div>
        <div
          className="  absolute left-0 bottom-0 animate__animated animate__bounceInRight animate__delay-1s motion-safe:animate__duration-1s "
          style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        >
          <Image src={discover3} className="h-[400] w-[400]" alt="discover3" />
        </div>
      </div>
      </div>
      {/* section 2 */}

      <div className="flex justify-center pt-8 ">
        <input
          placeholder="Explore communities"
          className="input-style bg-white text-black "
          type="text"
          style={{ width: "985px" }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
       
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
      </div>

      <div className="flex pl-[292px] pt-8 text-black">
        {/* Your navigation links here */}
        <DiscoverBar />

        <div className="pl-10 pt-10 ">
          <div className="flex pl-[500px]">
            <svg
              fill="#000000"
              width="35px"
              height="35px"
              viewBox="0 -4.83 31.876 31.876"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(-673.292 -327.728)">
                <path d="M689.741,329.778l9.241,2.448-9.242,2.7-9.82-2.7,9.821-2.449m.012-2.05a.478.478,0,0,0-.113.013L673.752,331.7a.465.465,0,0,0-.01.9l15.887,4.366a.467.467,0,0,0,.123.017.476.476,0,0,0,.13-.019l14.951-4.366a.465.465,0,0,0-.011-.9l-14.95-3.962a.479.479,0,0,0-.119-.015Z" />

                <path d="M696.013,349.95H682.63a3.932,3.932,0,0,1-4.124-3.7v-8.831a1,1,0,0,1,2,0v8.831a1.95,1.95,0,0,0,2.124,1.7h13.383a1.949,1.949,0,0,0,2.125-1.7v-8.831a1,1,0,0,1,2,0v8.831A3.932,3.932,0,0,1,696.013,349.95Z" />

                <path d="M674.292,341.16a1,1,0,0,1-1-1v-4.208a1,1,0,0,1,2,0v4.208A1,1,0,0,1,674.292,341.16Z" />
              </g>
            </svg>
            <h1 className="text-4xl font-bold mb-4 text-black">Education</h1>
          </div>

          <div className="pl-56 text-2xl">
            {error && <p>Error fetching data from YouTube API</p>}
              {loading && (
                <div>
                  <span className="loading loading-spinner loading-lg"></span>
                </div>
              )}
         </div>

    {searchResults.length > 0 ? (
  // Display search results
  <ul>
    {searchResults.map((item, index) => {
      const { id, snippet = {} } = item;
      const {
        title,
        publishedAt,
        channelTitle,
        thumbnails = {},
        resourceId,
      } = snippet;
      const { medium = {} } = thumbnails;

      return (
        <li
          key={id.videoId}
          className="card card-side w-[1000px] shadow-xl gap-4 hover:shadow-2xl hover:bg-[#E7E9EB] transition-transform duration-300 transform hover:scale-105"
        >
          <Link
            href={`https://www.youtube.com/watch?v=${id.videoId}`}
          >
            <div className="flex items-center ">
              <div className="mr-4 p-7">
                <Image
                  alt=""
                  src={medium.url}
                  //width={medium.width}
                  width="400"
                  //height={medium.height}
                  height="300"
                  priority=""
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold">{title}</h3>
                <br />
                <span className="font-bold">
  By {channelTitle.replace("'", "&apos;")} At {publishedAt.replace("'", "&apos;")}
</span>

              </div>
            </div>
          </Link>
        </li>
      );
    })}
  </ul>
) : (
  // Display all videos
  <ul>
    {data && data.items.slice(startIndex, endIndex).map((item, index) => {
      const { id, snippet = {} } = item;
      const {
        title,
        publishedAt,
        channelTitle,
        thumbnails = {},
        resourceId,
      } = snippet;
      const { medium = {} } = thumbnails;

      return (
        <li
          key={id.videoId}
          className="card card-side w-[1000px] shadow-xl gap-4 hover:shadow-2xl hover:bg-[#E7E9EB] transition-transform duration-300 transform hover:scale-105"
        >
          <Link
            href={`https://www.youtube.com/watch?v=${id.videoId}`}
          >
            <div className="flex items-center ">
              <div className="mr-4 p-7">
                <Image
                  alt=""
                  src={medium.url}
                  //width={medium.width}
                  width="400"
                  //height={medium.height}
                  height="300"
                  priority=""
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold">{title}</h3>
                <br />
                <span className="font-bold">
  By {channelTitle.replace("'", "&apos;")} At {publishedAt.replace("'", "&apos;")}
</span>

              </div>
            </div>
          </Link>
        </li>
      );
    })}
  </ul>
)}

          <div className="pt-10 flex mt-4 pl-48">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`mr-2 px-3 py-2 hover:bg-blue-500 border ${
                  currentPage === i + 1 ? "bg-gray-300" : ""
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-4">
        <Footer />
      </div>
    </div>
  );
}

export default DiscoverPage;
