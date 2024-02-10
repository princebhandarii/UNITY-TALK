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
const YOUTUBE_PLAYLISTID = "UCIdw5MR9iVtu7PHPXqJgV3A";
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
    <div  className="bg-[#23272A] place-self-center"
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

      <div className=" flex justify-center pt-8 ">
        <input
          placeholder="Explore communities"
          className="input-style  bg-white text-black "
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
              width="35px"
              height="35px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 7V21M18 11H18.01M18 14H18.01M18 17H18.01M17 3L12 7L7 3M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V11.8C21 10.1198 21 9.27976 20.673 8.63803C20.3854 8.07354 19.9265 7.6146 19.362 7.32698C18.7202 7 17.8802 7 16.2 7H7.8C6.11984 7 5.27976 7 4.63803 7.32698C4.07354 7.6146 3.6146 8.07354 3.32698 8.63803C3 9.27976 3 10.1198 3 11.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1 className="text-4xl font-bold mb-4 text-black">
              Entertainment
            </h1>
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
