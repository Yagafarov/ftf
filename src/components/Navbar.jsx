import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const menuItems = [
    { name: "АБИТУРИЕНТУ", path: "/abituryentu" },
    { name: "ОБРАЗОВАНИЕ", path: "/obrazovanie" },
    { name: "НАУЧНАЯ ДЕЯТЕЛЬНОСТЬ", path: "/nauchnaya-deyatelnost" },
    { name: "ВНЕУЧЕБНАЯ РАБОТА", path: "/vneuchebnaya-rabota" },
    { name: "НОРМАТИВНО-ПРАВОВАЯ БАЗА", path: "/normativnaya-baza" },
];

const fakultetSubItems = [
    { name: "ИСТОРИЯ ФТФ", path: "/istoriya-ftf" },
    { name: "ДЕКАНАТ", path: "/dekanat" },
    { name: "КАФЕДРЫ", path: "/kafedry" },
    { name: "ПАРТНЕРЫ И РАБОТОДАТЕЛИ", path: "/partnery" },
    { name: "Отзывы ВЫПУСКНИКОВ", path: "/otzyvy" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [lang, setLang] = useState("RU");
    const [fakultetOpen, setFakultetOpen] = useState(false); // mobil dropdown uchun

    const toggleLang = () => {
        setLang((prev) => (prev === "RU" ? "EN" : "RU"));
    };

    return (
        <nav className="bg-white px-6 py-4 shadow-md font-sans relative z-50">
            <div className="container mx-auto flex items-center justify-between relative">
                {/* Logo */}
                <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center space-x-3">
                    <img src={logo} alt="Физико-технический факультет" className="h-10 w-auto" />
                    <span className="text-gray-900 text-xl max-sm:text-2sm font-semibold whitespace-nowrap leading-snug">
                        Физико-технический факультет
                    </span>
                </Link>

                {/* Desktop menyular */}
                <ul className="hidden md:flex items-center space-x-4 text-sm relative">
                    {/* Dropdown: О ФАКУЛЬТЕТЕ */}
                    <li className="relative group">
                        <span className="cursor-pointer text-gray-700 hover:bg-blue-100 px-3 py-2 rounded transition whitespace-nowrap">
                            О ФАКУЛЬТЕТЕ
                        </span>
                        <ul className="absolute left-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded shadow-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 z-20">
                            {fakultetSubItems.map(({ name, path }) => (
                                <li key={path} className="border-b last:border-b-0 border-gray-100">
                                    <Link
                                        to={path}
                                        className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                                    >
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>

                    {/* Asosiy menyular */}
                    {menuItems.map(({ name, path }) => (
                        <li key={path}>
                            <Link
                                to={path}
                                className="text-gray-700 hover:bg-blue-100 px-3 py-2 rounded transition whitespace-nowrap"
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Til va hamburger */}
                <div className="flex items-center space-x-4">
                    <button
                        onClick={toggleLang}
                        className="hidden md:flex items-center space-x-2 hover:bg-blue-100 px-3 py-1 font-semibold rounded text-gray-700"
                        aria-label="Toggle language"
                    >
                        {lang === "RU" ? (
                            <>
                                {/* <span role="img" aria-label="Russian Flag">🇷🇺</span> */}
                                <img src="https://img.freeflagicons.com/thumb/square_icon/russia/russia_640.png" width={28} alt="" />
                                <span>RU</span>
                            </>
                        ) : (
                            <>
                                {/* <span role="img" aria-label="British Flag">🇬🇧</span> */}
                                <img src="https://img.freeflagicons.com/thumb/square_icon/united_states_of_america/united_states_of_america_640.png" width={28} alt="" />
                                <span>EN</span>
                            </>
                        )}

                    </button>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-3xl focus:outline-none text-gray-700 cursor-pointer"
                        aria-label="Toggle menu"
                    >
                        &#9776;
                    </button>
                </div>
            </div>

            {/* Mobil menyu */}
            <div
                className={`md:hidden bg-white w-full shadow absolute left-0 right-0 transition-all duration-300 ease-in-out z-40 ${isOpen ? "top-16 opacity-100 visible" : "top-[-1000px] opacity-0 invisible"
                    }`}
            >
                <ul className="flex flex-col">
                    {/* OFAKULTET toggle */}
                    <li
                        className="border-b border-gray-200 font-medium px-4 py-3 flex justify-between items-center cursor-pointer"
                        onClick={() => setFakultetOpen((prev) => !prev)}
                    >
                        <span>О ФАКУЛЬТЕТЕ</span>
                        <span className="text-gray-400" >{fakultetOpen ? "▲" : "▼"}</span>
                    </li>

                    {/* Sub menyular (conditional) */}
                    {fakultetOpen &&
                        fakultetSubItems.map(({ name, path }) => (
                            <li key={path} className="border-b border-gray-200">
                                <Link
                                    to={path}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-6 py-2 text-gray-700 bg-blue-100 hover:bg-blue-200"
                                >
                                    {name}
                                </Link>
                            </li>
                        ))}

                    {/* Asosiy menyular */}
                    {menuItems.map(({ name, path }) => (
                        <li key={path} className="border-b border-gray-200">
                            <Link
                                to={path}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition"
                            >
                                {name}
                            </Link>
                        </li>
                    ))}

                    {/* Til tugmasi */}
                    <li className="border-b border-gray-200">
                        <button
                            onClick={() => {
                                toggleLang();
                                setIsOpen(false);
                            }}
                            className="flex items-center space-x-2 px-4 py-3 w-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
                        >
                            {lang === "RU" ? (
                                <>
                                    <span>🇷🇺</span>
                                    <span>RU</span>
                                </>
                            ) : (
                                <>
                                    <span>🇬🇧</span>
                                    <span>EN</span>
                                </>
                            )}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
