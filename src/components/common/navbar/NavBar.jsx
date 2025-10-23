import { useEffect, useState } from "react";
import logo from "../../../assets/new-logo.jpg";
import { Link } from "react-scroll";

const navItems = [
    { id: 1, name: "Home", url: "introduction" },
    { id: 2, name: "About", url: "profile" },
    { id: 3, name: "Services", url: "services" },
    { id: 4, name: "Process", url: "work-process" },
    { id: 5, name: "Portfolio", url: "portfolio" },
    { id: 6, name: "Contact", url: "contact" }, // Added Contact here
];

const handleMenuClick = () => {
    if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
    }
};

const NavBar = () => {
    const [position, setPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => setPosition(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`sticky top-0 ${
                position > 50
                    ? "bg-soft-white border-b border-gray-300"
                    : "bg-white border-white"
            } z-50 transition-all duration-500`}
        >
            <div className="navbar flex justify-between mx-auto content">
                {/* Logo */}
                <Link
                    href="#introduction"
                    to="introduction"
                    smooth={true}
                    duration={900}
                    className="flex items-center border-0 lg:max-xxl:ps-5"
                >
                    <img src={logo} className="h-8 sm:h-14 rounded-2xl" alt="logo" />
                    <p className="text-2xl sm:text-[32px] my-auto ms-[12px] font-semibold">
                        Wakil
                    </p>
                </Link>

                {/* Navigation */}
                <div className="lg:flex items-center">
                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex menu menu-horizontal text-[16px] font-medium md:shrink-0">
                        {navItems.map((item) => (
                            <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
                                <Link
                                    onClick={handleMenuClick}
                                    to={item.url.toLowerCase()}
                                    smooth={true}
                                    duration={900}
                                    spy={true}
                                    offset={-140}
                                    activeStyle={{
                                        backgroundColor: "#9929fb",
                                        color: "white",
                                    }}
                                    className="hover:text-picto-primary px-5 py-3 mx-1"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Dropdown */}
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
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
                            className="menu menu-lg dropdown-content rounded-box z-50 mt-3 w-48 p-2 shadow font-semibold bg-white text-black"
                        >
                            {navItems.map((item) => (
                                <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
                                    <Link
                                        onClick={handleMenuClick}
                                        to={item.url.toLowerCase()}
                                        smooth={true}
                                        duration={900}
                                        spy={true}
                                        offset={-140}
                                        activeStyle={{
                                            backgroundColor: "#9929fb",
                                            color: "white",
                                        }}
                                        className="hover:text-picto-primary px-5 py-3 mx-1"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
