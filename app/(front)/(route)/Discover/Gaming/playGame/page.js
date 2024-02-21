import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import "../../../style.css";
import "./playgamecss.css";
import Link from "next/link";
import Image from "next/image";
import dice from "../../../images/dice.jpg";

function page() {
  return (
    <div>
      <div className="bg-[#23272A] ">
        <Header />
      </div>

      <div>
        <div className="flex bg-white items-center ">
          <div className="">
            <Link href="/Discover/Gaming">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-16 h-16 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </Link>
          </div>
          <div className="lg:text-6xl pl-9 text-4xl text-black lg:pl-[30rem]">
            Play Games
          </div>
        </div>

        <div className="lg:pl-36 lg:pt-6 bg-white text-black hidden md:block">
          <div className="lg:w-11/12 card card-side shadow-xl gap-4 hover:shadow-2xl hover:bg-[#E7E9EB] transition-transform duration-300 transform hover:scale-105">
            <figure>
              <Image
                src="https://th.bing.com/th/id/R.3a71fda8967df99e5fef2c54215a7ac6?rik=SAo1Uh%2bViHAyig&riu=http%3a%2f%2fwww.freeimageslive.co.uk%2ffiles%2fimages004%2flucky_dice.jpg&ehk=QxJPx3FvbOyXheC1HYTLB6%2bzHKSys5tfC9dPSDSgm%2bo%3d&risl=&pid=ImgRaw&r=0"
                //  src={dice}
                alt="dice"
                className="lg:w-96 lg:h-44"
                width="200"
                height="70"
              />
            </figure>
            <div className="card-body text-center">
              <div className="lg:flex">
                <h2 className=" lg:pl-80 lg:text-4xl text-2xl pl-9">
                  Dice Game
                </h2>
              </div>
              <p className="lg:text-xl">
                A dice game is a tabletop or digital game that involves rolling
                one or more six-sided dice to determine outcomes. Players
                typically take turns rolling dice and make perform actions based
                on the results.
              </p>
              <div className="card-actions justify-end">
                <Link
                  target="_black"
                  href="https://dice-game-yc45.onrender.com/"
                >
                  {" "}
                  <button className="buttonn">Play</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* this is mobile 1st game */}
        <div className="bg-white pt-5">
          <div className="card w-96 shadow-xl lg:hidden ">
            <h2 className="text-2xl text-black text-center">Dice Game</h2>
            <figure className="px-10 pt-10">
              <Image src={dice} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center text-black">
              <p>
                A dice game is a tabletop or digital game that involves rolling
                one or more six-sided dice to determine outcomes. Players
                typically take turns rolling dice and make perform actions based
                on the results.
              </p>
              <div className="card-actions">
                <Link
                  target="_black"
                  href="https://dice-game-yc45.onrender.com/"
                >
                  <button className="buttonn">Play</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* second game */}
        <div className="pl-36 pt-6 bg-white text-black hidden md:block">
          <div className="card card-side w-11/12 shadow-xl gap-4 hover:shadow-2xl hover:bg-[#E7E9EB] transition-transform duration-300 transform hover:scale-105">
            <figure>
              <Image
                src="https://img.freepik.com/free-vector/animal-memory-card-game_1308-114713.jpg?w=740&t=st=1706182236~exp=1706182836~hmac=a6c95f01361ea8cba77f11cfc9273273e05fd03a11a157c4782a90f0c314598e"
                alt="dice"
                className="w-96 h-44"
                width="300"
                height="70"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-center text-4xl ">Memory Game</h2>
              <p className="text-xl">
                Challenge your memory with this exhilarating game of recall,
                where players match pairs of cards to sharpen their cognitive
                skills and beat the clock. Unleash your mind's potential as you
                strive to remember and uncover hidden patterns in this
                captivating memory challenge.
              </p>
              <div className="card-actions justify-end">
                <Link
                  target="_black"
                  href="https://memory-game-49yz.onrender.com/"
                >
                  {" "}
                  <button className="buttonn">Play</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* this is mobile 2st game */}
        <div className="bg-white pt-5">
          <div className="card w-96 shadow-xl lg:hidden ">
            <h2 className="text-2xl text-black text-center">Memory Game</h2>
            <figure className="px-10 pt-10">
              <Image
                src="https://img.freepik.com/free-vector/animal-memory-card-game_1308-114713.jpg?w=740&t=st=1706182236~exp=1706182836~hmac=a6c95f01361ea8cba77f11cfc9273273e05fd03a11a157c4782a90f0c314598e"
                alt="Shoes"
                className="rounded-xl"
                width="300"
                height="70"
              />
            </figure>
            <div className="card-body items-center text-center text-black">
              <p>
                Challenge your memory with this exhilarating game of recall,
                where players match pairs of cards to sharpen their cognitive
                skills and beat the clock. Unleash your mind's potential as you
                strive to remember and uncover hidden patterns in this
                captivating memory challenge.
              </p>
              <div className="card-actions">
                <Link
                  target="_black"
                  href="https://memory-game-49yz.onrender.com/"
                >
                  <button className="buttonn">Play</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* third game */}
        <div className="pl-36 pt-6 bg-white text-black pb-5 hidden md:block">
          <div className="card card-side w-11/12 shadow-xl gap-4 hover:shadow-2xl hover:bg-[#E7E9EB] transition-transform duration-300 transform hover:scale-105">
            <figure>
              <Image
                src="https://play-lh.googleusercontent.com/Te-zxilwV993RPYKKv8dABN2d5NXzfUBLM6hdBTJGyeJFJsLaxp2k_IDVwQ6mie1Xg"
                //  src={dice}
                alt="dice"
                className="w-96 h-44"
                width="200"
                height="70"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-center text-4xl ">Tic Tac Toe</h2>
              <p className="text-xl">
                Enjoy a thrilling online Tic Tac Toe experience where you can
                challenge an intelligent computer opponent. Test your strategic
                skills in this classic game and compete to achieve two lines of
                three symbols before your virtual adversary does!
              </p>
              <div className="card-actions justify-end">
                <Link
                  target="_black"
                  href="https://tic-tac-toe-kv47.onrender.com/"
                >
                  {" "}
                  <button className="buttonn">Play</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* this is mobile 3rd game */}
        <div className="bg-white pt-5">
          <div className="card w-96 shadow-xl lg:hidden ">
            <h2 className="text-2xl text-black text-center">Tic Tac Toe</h2>
            <figure className="px-10 pt-10">
              <Image
                src="https://play-lh.googleusercontent.com/Te-zxilwV993RPYKKv8dABN2d5NXzfUBLM6hdBTJGyeJFJsLaxp2k_IDVwQ6mie1Xg"
                alt="Shoes"
                className="rounded-xl"
                width="300"
                height="70"
              />
            </figure>
            <div className="card-body items-center text-center text-black">
              <p>
                Enjoy a thrilling online Tic Tac Toe experience where you can
                challenge an intelligent computer opponent. Test your strategic
                skills in this classic game and compete to achieve two lines of
                three symbols before your virtual adversary does!
              </p>
              <div className="card-actions">
                <Link
                  target="_black"
                  href="https://tic-tac-toe-kv47.onrender.com/"
                >
                  <button className="buttonn">Play</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* four game */}
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default page;
