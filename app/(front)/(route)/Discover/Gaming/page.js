"use client";

import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Link from "next/link";
import Image from "next/image";
import discover3 from "../../images/discover3.png";
import discover2 from "../../images/discover2.png";
import Footer from "../../components/Footer";
import DiscoverBar from './../../components/DiscoverBar';
import "../../style.css"


const YOUTUBE_PLAYLIST_ITEMS_API = "https://youtube.googleapis.com/youtube/v3/search";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const YOUTUBE_PLAYLISTID = "UCe31NPEeRGO0hcznx6Tdb-g";

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
          FIND YOUR 
          COMMUNITY  <br />
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
          className="input-style  bg-white text-black "
          type="text"
          style={{ width: "985px" }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
      </div>

      <div className="flex pl-[292px] text-black pt-8">
        {/* Your navigation links here */}
          <DiscoverBar/>
     
        <div className="pl-10 pt-10 ">
        <div className="flex pl-[500px]">
        <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00014 11H10.0001M8.00014 9V13M15.0001 12H15.0101M18.0001 10H18.0101M10.4491 5H13.5512C16.1761 5 17.4885 5 18.5187 5.49743C19.4257 5.9354 20.1793 6.63709 20.6808 7.51059C21.2503 8.5027 21.3438 9.81181 21.5309 12.43L21.7769 15.8745C21.8975 17.5634 20.5599 19 18.8667 19C18.0008 19 17.1796 18.6154 16.6253 17.9502L16.2501 17.5C15.907 17.0882 15.7354 16.8823 15.54 16.7159C15.1305 16.3672 14.6346 16.1349 14.1045 16.0436C13.8516 16 13.5836 16 13.0476 16H10.9527C10.4167 16 10.1487 16 9.89577 16.0436C9.36563 16.1349 8.86981 16.3672 8.46024 16.7159C8.26487 16.8823 8.09329 17.0882 7.75013 17.5L7.37497 17.9502C6.82064 18.6154 5.99949 19 5.13359 19C3.44037 19 2.10275 17.5634 2.22339 15.8745L2.46942 12.43C2.65644 9.81181 2.74994 8.5027 3.31951 7.51059C3.82098 6.63709 4.57458 5.9354 5.48159 5.49743C6.51176 5 7.8242 5 10.4491 5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
        <h1 className="text-4xl font-bold mb-4 text-black">Gaming</h1>
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
                  width="300"
                  //height={medium.height}
                  height="200"
                  priority=""
                 // width="100"
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
      <Footer/>
      </div>
    </div>
  );
}

export default DiscoverPage;
