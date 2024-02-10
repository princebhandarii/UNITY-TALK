'use client'

import Footer from "../components/Footer"
import Header from "../components/Header"
import Image from 'next/image'
import pic1 from '../images/pic1.png'
import pic2 from '../images/pic2.png'
import pic3 from '../images/pic3.png'
import pic4 from '../images/pic4.png'
import n1 from '../images/n1.png'
import n2 from '../images/n2.svg'
import n3 from '../images/n3.svg'
import n4 from '../images/n4.svg'
import n5 from '../images/n5.svg'
import { Slide } from 'react-reveal';
import "../style.css"
import React, { useState,useRef } from 'react';


export default function page() {

    const [isContentVisible, setIsContentVisible] = useState(false);
    //const [cardLength, setCardLength] = useState(80);
    const [isCardVisible, setCardVisible] = useState(false);

    const [isCard1BackgroundVisible, setIsCard1BackgroundVisible] = useState(false);
    const [isCard2BackgroundVisible, setIsCard2BackgroundVisible] = useState(false);
    const [isCard3BackgroundVisible, setIsCard3BackgroundVisible] = useState(false);
    const [isCard4BackgroundVisible, setIsCard4BackgroundVisible] = useState(false);
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
          content.style.display = content.style.display === 'none' ? 'block' : 'none';
        }
      };

      const toggleBackgroundColor = (cardId) => {
        if (cardId === 'card1') {
            setIsCard1BackgroundVisible(!isCard1BackgroundVisible);
          } 
        else if (cardId === 'card2') {
            setIsCard2BackgroundVisible(!isCard2BackgroundVisible);
        } 
        else if (cardId === 'card3') {
          setIsCard3BackgroundVisible(!isCard3BackgroundVisible);
        } else if (cardId === 'card4') {
          setIsCard4BackgroundVisible(!isCard4BackgroundVisible);
        }
        // Add more conditions for additional divs as needed
        const card = document.getElementById(cardId);
        if (card) {
          card.style.backgroundColor = card.style.backgroundColor === 'lightblue' ? '#F6F6F6' : 'lightblue';
        }
      };

     
    

    const handleCardToggle = () => {
        setCardVisible(!isCardVisible);
    };

    const handleCheckboxChange = () => {
        setIsContentVisible(isContentVisible?false:true);
      
    };
    
    //const handleCardLengthChange = (event) => {
    //    setCardLength(event.target.value);
    //};

    
    return (
        <div>
            <div className="bg-[#23272A] h-[700px] relative">
                <Header />
                <div className=" flex shrink-0 ">
                    <div className=" pb-8 md:pb-0 mr-4">
                        <div className="p-7 py-9 h-screen md:h-[83vh] md:flex relative">
                            <div className="flex flex-col gap-7 pb-28 pl-16 md:max-w-md lg:max-w-none lg:justify-center ">
                                <h1 className="text-5xl text-white font-bold mb-4 selection:text-blue-400 font-serif">UNLEAS MORE FUN WITH NITRO</h1>
                                <h2 className="text-white text-lg font-light tracking-wide lg:max-w-2xl w-full selection:text-blue-400">
                                    Subscribe to Nitro to upgrade your emoji, personalize your profile,  share bigger files, and so much more.
                                </h2>
                            </div>
                        </div>
                    </div>
                    <Image src={n1} className="h-[300px] w-[300px] motion-image justify-end " alt=""></Image>
                </div>
            </div>

            <div className="bg-white h-[3280px]">
                <div className=" flex">
                    <div className="absolute top-[600px] left-[180px] flex justify-center card w-[550px] h-[450px] bg-gradient-to-tr from-[#007CC2] via-[#1C75D1] to-[#4968E9] shadow-xl">
                        <div className="card-body  text-black">
                            <h2 className="text-4xl ">NITRO BASIC</h2>
                            <ul className="pt-6 text-xl">
                                <li className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
                                    </svg>&nbsp;
                                    <span>50 MB Upload</span>
                                </li>
                                <li className="flex mt-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z" clipRule="evenodd" />
                                    </svg>
                                    &nbsp;
                                    <span>Custom Emoji Anywhere</span>
                                </li>
                               
                            </ul>
                            <button className="card-action4 absolute bottom-4 items-center btn w-[490px] text-black bg-white text-xl hover:bg-[#23272A] hover:text-white">Subscribe</button>
                        </div>
                    </div>


                    <div className="absolute top-[600px] left-[800px] flex justify-center card w-[550px] h-[450px] bg-gradient-to-tl from-[#8547C6] via-[#B145C2] to-[#B152A4] shadow-xl">
                        <div className="card-body  text-black">
                            <h2 className="text-4xl ">NITRO PLUS</h2>
                            <ul className="pt-6 text-xl">
                                <li className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
                                    </svg>&nbsp;
                                    <span>50 MB Upload</span>
                                </li>
                                <li className="flex mt-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z" clipRule="evenodd" />
                                    </svg>
                                    &nbsp;
                                    <span>Custom Emoji Anywhere</span>
                                </li>
                                
                                <li className="flex mt-4">
                                    <svg fill="#000000" width="22px" height="22px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <title>user-profiles</title>
                                        <path d="M0 26.016q0 2.496 1.76 4.224t4.256 1.76h12q2.464 0 4.224-1.76t1.76-4.224q-0.448-2.688-2.112-4.928t-4.096-3.552q2.208-2.368 2.208-5.536v-4q0-3.296-2.336-5.632t-5.664-2.368-5.664 2.368-2.336 5.632v4q0 3.168 2.208 5.536-2.4 1.344-4.064 3.552t-2.144 4.928zM4 26.016q0.672-2.592 2.944-4.288t5.056-1.696 5.056 1.696 2.944 4.288q0 0.832-0.576 1.44t-1.408 0.576h-12q-0.832 0-1.44-0.576t-0.576-1.44zM8 12.032v-4q0-1.664 1.184-2.848t2.816-1.152 2.816 1.152 1.184 2.848v4q0 1.664-1.184 2.816t-2.816 1.184-2.816-1.184-1.184-2.816zM18.208 0.224q0.896-0.224 1.792-0.224 3.328 0 5.664 2.368t2.336 5.632v4.032q0 3.168-2.208 5.504 2.4 1.344 4.096 3.584t2.112 4.896q0 2.496-1.76 4.256t-4.224 1.76h-2.784q1.888-1.632 2.496-4h0.288q0.8 0 1.408-0.576t0.576-1.44q-0.384-1.472-1.312-2.688t-2.336-2.048q-1.44-2.528-3.712-4.256 0.352-0.608 0.608-1.216 1.216-0.416 1.984-1.44t0.768-2.368v-4q0-1.312-0.768-2.336t-1.984-1.44q-0.96-2.336-3.040-4z"></path>
                                    </svg>
                                    &nbsp;
                                    <span>Custom profiles and more!</span>
                                </li>
                            </ul>
                            <button className="absolute bottom-4 items-center card-actions btn w-[490px] text-black bg-white hover:bg-[#23272A] hover:text-white text-xl">Subscribe</button>
                        </div>
                    </div>
                    <div className="flex text-5xl pl-[500px] font-bold pt-[450px] ">
                        <h1 className="text-black">Popular Nitro Perks</h1>
                    </div>
                </div>


                <div className="flex pl-[200px] font-bold ">
                    <div className=" card w-[550px] h-[400px]  bg-[#F6F6F6] relative  mt-[50px] transition-transform transform-gpu hover:rotate-3">
                        <Slide up>
                            <div className="card-body">
                                <h2 className="text-center text-2xl text-black">From clips to pics, share away with bigger file uploads</h2>
                            </div>
                            <Image src={pic1} alt="" className='object-cover ml-[50px] w-[450px] mb-[30px]' draggable="false" />
                        </Slide>
                    </div>
                    <div className="flex card w-[550px] h-[400px]   bg-[#F6F6F6] relative ml-[40px] mt-[50px] transition-transform transform-gpu hover:rotate-3">
                        <Slide up>
                            <div className="card-body">
                                <h2 className="text-center text-2xl text-black">Stream apps and games in sweet, sweet HD</h2>
                            </div>
                            <Image src={pic2} alt="" className='object-cover ml-[130px] w-[300px] mb-[30px] h-[200px]' draggable="false" />
                        </Slide>
                    </div>
                </div>

               

                {isCardVisible && (
                    <div id="toggleCards" style={{ display: isCardVisible ? 'block' : 'none' }}>
                        
                    <div className="flex pl-[200px] font-bold ">
                    <div className=" card w-[550px] h-[400px]  bg-[#F6F6F6] relative  mt-[50px] transition-transform transform-gpu hover:rotate-3">
                        <Slide up>
                            <div className="card-body">
                                <h2 className="text-center text-2xl text-black">Hype and meme with custom emoji anywhere</h2>
                            </div>
                            <Image src={pic3} alt="" className='object-cover ml-[50px] w-[450px] mb-[30px]' draggable="false" />
                        </Slide>
                    </div>
                    <div className="flex card w-[550px] h-[400px]  bg-[#F6F6F6] relative ml-[40px] mt-[50px] transition-transform transform-gpu hover:rotate-3">
                        <Slide up>
                            <div className="card-body">
                                <h2 className="text-center text-2xl text-black">Unlock perks for your communities with 2 Server Boosts</h2>
                            </div>
                            <Image src={pic4} alt="" className='object-cover ml-[130px] w-[300px] mb-[30px] h-[200px]' draggable="false" />
                        </Slide>
                    </div>
                </div>
                     </div>

                     
                   )}
                <div className="pt-[100px] pl-[700px]">
                    <button className="btn bg-white text-black hover:text-white rounded-full " onClick={handleCardToggle}>
                        {isCardVisible ? 'Hide All Perks' : 'Show All Perks'}
                    </button>
                </div>


                <div className="ml-[180px] card w-[1300px] h-[700px]  bg-[#F6F6F6] relative  mt-[50px] ">
                    <Slide up>
                        <div className="card-body">
                            <h2 className="text-center font-bold text-6xl text-black">Pick the plan that works <br /> best for you</h2>
                            <div className="flex pt-[50px]">
                                <p className="font-bold text-2xl text-black pt-[30px] pl-[80px]">Features
                                </p>

                                <span className="pr-[80px]">
                                    <p className="font-bold text-4xl text-black pt-[30px] pl-[60px]">NITRO</p>
                                    <p className="font-bold text-2xl text-black pt-[3px] pl-[80px] ">Basic</p>
                                </span>

                                <span className="pr-[50px] ">
                                    <p className="font-bold text-4xl text-black pt-[30px] pl-[55px]">NITRO</p>
                                    <p className="font-bold text-2xl text-black pt-[3px] pl-[80px] ">Plus</p>
                                </span>
                            </div><br /><hr className="border-2" />

                            {/*First row*/}
                            <div className="flex ">
                                <p className=" text-lg text-black pt-[30px] pl-[80px]">Unlimited Super Reactions
                                </p>
                                <span className="pr-[220px] pt-[30px]">
                                    <svg fill="#000000" height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 288.941 288.941" xmlSpace="preserve">
                                        <g>
                                            <path id="Check" d="M285.377,46.368c-4.74-4.704-12.439-4.704-17.179,0L96.309,217.114L20.734,142.61
                               c-4.74-4.704-12.439-4.704-17.179,0s-4.74,12.319,0,17.011l84.2,82.997c4.692,4.644,12.499,4.644,17.191,0l180.43-179.239
                               C290.129,58.687,290.129,51.06,285.377,46.368C280.637,41.664,290.129,51.06,285.377,46.368z"/>
                                        </g>
                                    </svg>
                                </span>
                                <span className="pr-[100px] pt-[30px]">
                                    <svg fill="#000000" height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 288.941 288.941" xmlSpace="preserve">
                                        <g>
                                            <path id="Check" d="M285.377,46.368c-4.74-4.704-12.439-4.704-17.179,0L96.309,217.114L20.734,142.61
                               c-4.74-4.704-12.439-4.704-17.179,0s-4.74,12.319,0,17.011l84.2,82.997c4.692,4.644,12.499,4.644,17.191,0l180.43-179.239
                               C290.129,58.687,290.129,51.06,285.377,46.368C280.637,41.664,290.129,51.06,285.377,46.368z"/>
                                        </g>
                                    </svg>
                                </span>
                            </div><br /> <hr className="border-2" />

                            {/*Second row*/}
                            <div className="flex ">
                                <p className=" text-lg text-black pt-[30px] pl-[80px]">Custom emoji anywhere and make them animated</p>
                                <span className="pr-[220px] pt-[30px]">
                                    <svg fill="#000000" height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 288.941 288.941" xmlSpace="preserve">
                                        <g>
                                            <path id="Check" d="M285.377,46.368c-4.74-4.704-12.439-4.704-17.179,0L96.309,217.114L20.734,142.61
                               c-4.74-4.704-12.439-4.704-17.179,0s-4.74,12.319,0,17.011l84.2,82.997c4.692,4.644,12.499,4.644,17.191,0l180.43-179.239
                               C290.129,58.687,290.129,51.06,285.377,46.368C280.637,41.664,290.129,51.06,285.377,46.368z"/>
                                        </g>
                                    </svg>
                                </span>
                                <span className="pr-[100px] pt-[30px]">
                                    <svg fill="#000000" height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 288.941 288.941" xmlSpace="preserve">
                                        <g>
                                            <path id="Check" d="M285.377,46.368c-4.74-4.704-12.439-4.704-17.179,0L96.309,217.114L20.734,142.61
                               c-4.74-4.704-12.439-4.704-17.179,0s-4.74,12.319,0,17.011l84.2,82.997c4.692,4.644,12.499,4.644,17.191,0l180.43-179.239
                               C290.129,58.687,290.129,51.06,285.377,46.368C280.637,41.664,290.129,51.06,285.377,46.368z"/>
                                        </g>
                                    </svg>
                                </span>
                            </div><br /> <hr className="border-2" />
                            {/*Sixteenth row*/}
                      

                            {/*Button*/}
                            <div className="flex ">
                                <button className="bg-black text-white btn ml-[810px] mt-[30px] hover:bg-white hover:text-black">Subscribe Basic</button>
                                <button className="bg-black text-white btn ml-[100px] mt-[30px] hover:bg-white hover:text-black">Subscribe Plus</button>
                            </div>
                        </div>
                    </Slide>
                </div>

                <div>
                    <div className="flex justify-center">
                        <h1 className="pl-[500px] mt-[100px] font-bold text-5xl text-black ">Frequently Asked Questions?</h1>
                        <Image className="ml-auto" src={n4} alt=""/>
                    </div>
                    
                    {/*First Question */}
                    <div className="ml-[180px] card w-[1300px] h-[${cardLength}px]  mt-[50px] relative " id="card1" style={{ backgroundColor: isCard1BackgroundVisible ? 'lightblue' : '#F6F6F6'}}>
                        <div className="card-body ">
                            <h1 className="font-bold text-lg text-black">What's Nitro?</h1>
                            
                            <p ref={contentRefs.paragraph1} style={{ display: 'none' }} id="content" className=" text-lg text-black">Nitro is a subscription service that unlocks features and perks across Unity Talk, giving you more ways to have fun and express yourself.</p>
                           
                            <label className="text-[#23272A] btn-circle  swap swap-rotate ml-[1175px] absolute top-1 right-2 mt-4 mr-3">

                                {/* this hidden checkbox controls the state */}
                                <input type="checkbox" id="toggleCheckbox" onClick={() => {toggleContent('paragraph1'); toggleBackgroundColor('card1');}} />

                                {/* hamburger icon */}
                                <svg className="swap-off fill-current" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12H20M12 4V20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>

                                {/* close icon */}
                                <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                            </label>
                        </div>
                    </div>

                    {/*Second Question */}
                    <div className="ml-[180px] card w-[1300px] h-[${cardLength}px]  mt-[50px] relative" id="card2" style={{ backgroundColor: isCard2BackgroundVisible ? 'lightblue' : '#F6F6F6'}}>
                        <div className="card-body ">
                            <h1 className="font-bold text-lg text-black">What payment methods do you accept?</h1>
                            
                            <p ref={contentRefs.paragraph2} style={{ display: 'none' }} id="content" className=" text-lg text-black">We accept a variety of payment methods, which you can learn more info on here!</p>
                           
                            <label className="text-[#23272A] btn-circle  swap swap-rotate ml-[1175px] absolute top-1 right-2 mt-4 mr-3">

                                {/* this hidden checkbox controls the state */}
                                <input type="checkbox" id="toggleCheckbox2" onClick={() => {toggleContent('paragraph2'); toggleBackgroundColor('card2');}}/>

                                {/* hamburger icon */}
                                <svg className="swap-off fill-current" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12H20M12 4V20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>

                                {/* close icon */}
                                <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                            </label>
                        </div>
                    </div>

                    <div className="flex">
                    <Image className="ml-[30px]" src={n5} alt=""/>
                    
                    {/*Third Question */}
                    <div className="ml-[95px] card w-[1300px] h-[${cardLength}px]  mt-[50px] relative " id="card3" style={{ backgroundColor: isCard3BackgroundVisible ? 'lightblue' : '#F6F6F6'}} >
                        <div className="card-body flex">
                            <h1 className="font-bold text-lg text-black">Are Nitro gifts real?</h1>
                            
                            <p ref={contentRefs.paragraph3} style={{ display: 'none' }} id="content3" className=" text-lg text-black">Yes! You can purchase a Nitro gift through the Nitro page on desktop or the Nitro Gifting tab within mobile under User Settings. Additionally, you can send a quick gift in a channel by selecting the gift icon on desktop or mobile. If someone sends you a gift, you can see what it looks like here. You can also buy Unity Talk Nitro directly on Amazon.com (United States only).</p>
                            
                            <label className="text-[#23272A] btn-circle  swap swap-rotate ml-[1175px] absolute top-1 right-2 mt-4 mr-3">

                                {/* this hidden checkbox controls the state */}
                                <input type="checkbox" id="toggleCheckbox2" onClick={() => {toggleContent('paragraph3'); toggleBackgroundColor('card3');}}/>

                                {/* hamburger icon */}
                                <svg className="swap-off fill-current" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12H20M12 4V20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>

                                {/* close icon */}
                                <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                            </label>
                        </div>
                    </div>
                    </div>

                    {/*Fourth Question */}
                    <div className="ml-[180px] card w-[1300px] h-[${cardLength}px]  mt-[50px] relative " id="card4" style={{ backgroundColor: isCard4BackgroundVisible ? 'lightblue' : '#F6F6F6'}}>
                        <div className="card-body " id="toggleCheckbox3">
                            <h1 className="font-bold text-lg text-black">My Nitro subscription comes with Boosts. What are those?</h1>
                            
                            <p ref={contentRefs.paragraph4} style={{ display: 'none' }} className=" text-lg text-black">Server Boosts are a way to show support for your favorite communities. Each Boost that you give to a server helps collectively unlock perks for everyone in the server to enjoy. Learn more about Server Boosting here! </p>
                            
                            <label className="text-[#23272A] btn-circle  swap swap-rotate ml-[1175px] absolute top-1 right-2 mt-4 mr-3">

                                {/* this hidden checkbox controls the state */}
                                <input type="checkbox" id="toggleCheckbox4" onClick={() => {toggleContent('paragraph4'); toggleBackgroundColor('card4');}}/>

                                {/* hamburger icon */}
                                <svg className="swap-off fill-current" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12H20M12 4V20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>

                                {/* close icon */}
                                <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-[100px] bg-gradient-to-tl from-[#B152A4] via-[#B145C2] to-[#8547C6] ">
                    <div className=" mt-[50px] ">
                        <Image  src={n2} alt=""/>   
                    </div>

                    <div className="text-center ml-[200px] ">
                        <h1 className="font-bold text-5xl">Unleash the fun with Nitro</h1>
                        <button className="mt-8 text-xl h-8 btn bg-white text-black hover:text-white rounded-full ">Subscribe</button>
                    </div>
                    
                    <div className="mb-[50px] ml-auto ">
                        <Image src={n3} alt=""/>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}
