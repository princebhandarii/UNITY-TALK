"use client";
import Image from "next/image";
import logo from "../images/logoss1.png";
import Link from "next/link";

export default function Header() {
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown " style={{ color: "white" }}>
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#23272A] rounded-box w-52 text-white"
          >
            <li>
              {" "}
              <Link
                href="/Download"
                className="no-underline link  hover:text-blue-500 hover:border-spacing-2 transition duration-300 "
              >
                Download
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="/Nitro"
                className="no-underline link  hover:text-blue-500 hover:border-spacing-2 transition duration-300 "
              >
                Nitro
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="/Discover"
                className="no-underline link  hover:text-blue-500 hover:border-spacing-2 transition duration-300 "
              >
                Discover
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="/Safety"
                className="no-underline link  hover:text-blue-500 hover:border-spacing-2 transition duration-300 "
              >
                Safety
              </Link>
            </li>
            <li>
              <Link
                href="/Support"
                className="no-underline link  hover:text-blue-500 hover:border-spacing-2 transition duration-300 "
              >
                Support
              </Link>
            </li>
                  <li>
              <Link
                href="/Avtar"
                className="no-underline link  hover:text-blue-500 hover:border-spacing-2 transition duration-300 "
              >
                Avtar
              </Link>
            </li>
          </ul>
        </div>

        <Link href="/Home">
          <Image
            src={logo}
            className="no-underline w-30 h-[120px] object-contain "
            alt=""
          />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 text-white text-lg">
          <li>
            {" "}
            <Link
              href="/Download"
              className="no-underline link  hover:text-blue-500 hover:border-spacing-2 transition duration-300 "
            >
              Download
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href="/Nitro"
              className="no-underline link  hover:text-blue-500 hover:border-spacing-2 transition duration-300 "
            >
              Nitro
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href="/Discover"
              className="no-underline link  hover:text-blue-500 hover:border-spacing-2 transition duration-300 "
            >
              Discover
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href="/Safety"
              className="no-underline link  hover:text-blue-500 hover:border-spacing-2 transition duration-300 "
            >
              Safety
            </Link>
          </li>
          <li>
            <Link
              href="/Support"
              className="no-underline link  hover:text-blue-500 hover:border-spacing-2 transition duration-300 "
            >
              Support
            </Link>
          </li>
                  <li>
              <Link
                href="/Avtar"
                className="no-underline link  hover:text-blue-500 hover:border-spacing-2 transition duration-300 "
              >
                Avtar
              </Link>
            </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div>
          <Link href="https://unity-talk.vercel.app/">
            <button
              className="button2 md:w-40 lg:w-48 xl:w-56"
              style={{ height: "50px", width: "140px" }}
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
