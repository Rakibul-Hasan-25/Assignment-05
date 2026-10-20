import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo-text.png";
export default function Navbar(){
    const [menuOpen,setMenuOpen] = useState(false);
    return(
        //navbar outer cotainer
        <header className="sticky top-0 z-50 bg-white">
            {/* main container */}
            <div className="flex items-center justify-between border-b border-gray-200 pt-2 pb-2 ml-[clamp(1rem,3vw,2rem)] mr-[clamp(2rem,4vw,5rem)]">
                {/* Menu button for mobile */}
                <button type="button" onClick={()=>setMenuOpen(!menuOpen)} className="hover:c-b-g md:hidden">{menuOpen ? <X/> : <Menu/>}</button>
                {/* Brand logo */}
                <a href="#home"><img src={logo} alt="brand logo with text" /></a>
                {/* Navigation items */}
                <nav>
                    <ul className="hidden md:flex gap-5">
                        <li><a href="#home" className="c-b-g bg-clip-text text-transparent hover:text-black">Home</a></li>
                        <li><a className="h-c-b-g" href="#technologies">Technologies</a></li>
                        <li><a className="h-c-b-g" href="#projects">Projects</a></li>
                        <li><a className="h-c-b-g" href="#about">About</a></li>
                        <li><a className="h-c-b-g" href="#contact">Contact</a></li>
                    </ul>
                </nav>
                {/* sign-in sign up button right side */}
                <div className="flex gap-5 items-center">
                    <a className="h-c-b-g" href="#signIn">Sign In</a>
                    <a href="#signUp" className="px-3 py-1 c-b-g text-amber-50 rounded-3xl border hover:border-violet-500">Sign Up</a>
                </div>
                {menuOpen && (
                    <nav className="md:hidden border border-gray-200 shadow-2xl fixed left-2 top-14 z-50 bg-white">
                        <ul className="p-3 flex flex-col gap-2">
                        <li className="p-1 border border-gray-200 hover:text-white hover:c-b-g"><a onClick={()=>setMenuOpen(false)}  href="#home" className="">Home</a></li>
                        <li className="p-1 border border-gray-200 hover:c-b-g hover:text-white"><a onClick={()=>setMenuOpen(false)} href="#technologies">Technologies</a></li>
                        <li className="p-1 border border-gray-200 hover:c-b-g hover:text-white"><a onClick={()=>setMenuOpen(false)}  href="#projects">Projects</a></li>
                        <li className="p-1 border border-gray-200 hover:c-b-g hover:text-white"><a onClick={()=>setMenuOpen(false)}  href="#about">About</a></li>
                        <li className="p-1 border border-gray-200 hover:c-b-g hover:text-white"><a onClick={()=>setMenuOpen(false)}  href="#contact">Contact</a></li>
                    </ul>
                    </nav>
                )}
            </div>
        </header>
    );
}