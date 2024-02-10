'use client'
import Image from 'next/image'
import logo from '../images/logoss1.png'

export default function Footer() {
    return (
        <div>
            <footer className="footer p-10  text-white bg-[#23272A]">
                <aside>
                    <Image
                    src={logo}
                    className="w-20 h-20 fill-current "
                    alt=""
                />
                    <p>Unity Talk.<br />Providing place for Text Chatting & Video Calling.</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    )
}
