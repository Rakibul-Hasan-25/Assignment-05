import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo-text.png";
export default function Navbar(){
    const [menuOpen,setMenuOpen] = useState(false);
    return(
        //navbar outer cotainer
        <header className="sticky top-0 z-50">
            {/* main container */}
            <div className="flex items-center justify-evenly max-w-7xl  border-b border-gray-200">
                {/* Menu button for mobile */}
                <button type="button" onClick={()=>setMenuOpen(!menuOpen)} className="hover:bg-fuchsia-600 md:hidden">{menuOpen ? <X/> : <Menu/>}</button>
                {/* Brand logo */}
                <a href="#home"><img src={logo} alt="brand logo with text" /></a>
                {/* Navigation items */}
                <nav>
                    <ul className="hidden md:flex gap-5">
                        <li><a href="#home" className="text-fuchsia-600">Home</a></li>
                        <li><a href="#technologies">Technologies</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                {/* sign-in sign up button right side */}
                <div className="flex gap-5">
                    <a href="#signIn">Sign In</a>
                    <a href="#signUp" className="px-3 bg-fuchsia-600 text-amber-50 rounded-3xl">Sign Up</a>
                </div>
                {menuOpen && (
                    <nav className="md:hidden border fixed left-2 top-10 z-50">
                        <ul>
                        <li className="hover:bg-fuchsia-600 hover:text-white"><a onClick={()=>setMenuOpen(false)}  href="#home" className="text-fuchsia-600">Home</a></li>
                        <li className="hover:bg-fuchsia-600"><a onClick={()=>setMenuOpen(false)} href="#technologies">Technologies</a></li>
                        <li className="hover:bg-fuchsia-600"><a onClick={()=>setMenuOpen(false)}  href="#projects">Projects</a></li>
                        <li className="hover:bg-fuchsia-600"><a onClick={()=>setMenuOpen(false)}  href="#about">About</a></li>
                        <li className="hover:bg-fuchsia-600"><a onClick={()=>setMenuOpen(false)}  href="#contact">Contact</a></li>
                    </ul>
                    </nav>
                )}
            </div>
        </header>
    );
}