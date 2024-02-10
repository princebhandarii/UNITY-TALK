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
const YOUTUBE_PLAYLISTID = "UCYPvAwZP8pZhSMW8qs7cVCw";
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
    <div className="bg-[#23272A] place-self-center"
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
          className="input-style bg-white text-black"
          type="text"
          style={{ width: "985px" }}
          value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
      </div>

      <div className="flex pl-[292px] text-black pt-8">
        {/* Your navigation links here */}
        <DiscoverBar />

        <div className="pl-10 pt-10 ">
          <div className="flex pl-[500px]">
            <svg
              fill="#000000"
              height="35px"
              width="35px"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 24 24"
              enableBackground="new 0 0 24 24"
              xmlSpace="preserve"
            >
              <g id="news">
                <polygon points="22,22 4,22 4,24 24,24 24,21 22,21 	" />
                <path d="M18.414,0H4v9h2V2h10v6h6v3h2V5.586L18.414,0z M18,6V2.414L21.586,6H18z" />
                <polygon points="5.999,20 5.999,12 4,12 4,15.926 2,12 0.002,12 0.002,20 2,20 2,15.914 4,20 	" />
                <polygon points="12,12 12,20 14,20 15,18 16,20 18,20 18,12 16,12 16,16 15,14 14,16 14,12 	" />
                <polygon points="11,14 11,12 9,12 8,12 7,12 7,20 8,20 9,20 11,20 11,18 9,18 9,17 10,17 10,15 9,15 9,14 	" />
                <path
                  d="M21,12c-1,0-2,1-2,2.5s1,2.5,2,2.5h0.553c0.642,0,0.577,1,0,1H19v2h2.673c0,0,2.327,0,2.327-2.5S22.573,15,21.573,15
      c-0.766,0-0.755-1,0-1H24v-2h-2H21z"
                />
              </g>
            </svg>
            <h1 className="text-4xl font-bold mb-4 text-black">News</h1>
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
                  By {channelTitle} At {publishedAt}
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
                  By {channelTitle} At {publishedAt}
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
