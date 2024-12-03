import { NavLink } from "react-router-dom"
import lillardLogo from '../assets/lillardlogo.png'
import { useState } from "react"

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="relative bg-white">
            <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Loggo */}
                    <div className="flex-shrink-0">
                        <img 
                            className="w-32 md:w-40" 
                            src={lillardLogo} 
                            alt="Lillard Logo" 
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex flex-row gap-8 font-bold text-[1em]">
                        <li className="hover:text-[#d3c196] transition duration-200">
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li className="hover:text-[#d3c196] transition duration-200">
                            <NavLink to={"/"}>Properties</NavLink>
                        </li>
                        <li className="hover:text-[#d3c196] transition duration-200">
                            <NavLink to={"/"}>Agents</NavLink>
                        </li>
                        <li className="hover:text-[#d3c196] transition duration-200">
                            <NavLink to={"/"}>About</NavLink>
                        </li>
                        <li className="hover:text-[#d3c196] transition duration-200">
                            <NavLink to={"/"}>Contact</NavLink>
                        </li>
                    </ul>

                    {/* Hamburger Menu Button */}
                    <button 
                        className="md:hidden p-2"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
                    <ul className="flex flex-col py-4">
                        <li className="hover:bg-gray-100">
                            <NavLink 
                                to={"/"} 
                                className="block px-6 py-3 hover:text-[#d3c196] transition duration-200"
                                onClick={toggleMenu}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="hover:bg-gray-100">
                            <NavLink 
                                to={"/"} 
                                className="block px-6 py-3 hover:text-[#d3c196] transition duration-200"
                                onClick={toggleMenu}
                            >
                                Properties
                            </NavLink>
                        </li>
                        <li className="hover:bg-gray-100">
                            <NavLink 
                                to={"/"} 
                                className="block px-6 py-3 hover:text-[#d3c196] transition duration-200"
                                onClick={toggleMenu}
                            >
                                Agents
                            </NavLink>
                        </li>
                        <li className="hover:bg-gray-100">
                            <NavLink 
                                to={"/"} 
                                className="block px-6 py-3 hover:text-[#d3c196] transition duration-200"
                                onClick={toggleMenu}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="hover:bg-gray-100">
                            <NavLink 
                                to={"/"} 
                                className="block px-6 py-3 hover:text-[#d3c196] transition duration-200"
                                onClick={toggleMenu}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}