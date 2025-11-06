import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const PublicHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // aktifkan blur setelah scroll 10px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-5 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div
        className={`h-[50px] flex w-full justify-between items-center max-w-[1536px] mx-auto z-50 px-10 `}
      >
        {/* Logo */}
        <div className="flex flex-col justify-center items-center">
          <img src="/images/logo-mttg.png" className="h-[50px]" />
        </div>

        {/* Menu */}
        <div
          className={`bg-white  rounded-3xl h-full flex items-center gap-[22px] justify-center px-5 ${
            !scrolled ? "shadow-custom-4" : ""
          }`}
        >
          <ul className="flex items-center gap-[22px] text-sm cursor-pointer">
            <li className="text-red-600 font-medium hover:text-red-600">
              <NavLink to={`/`}>Beranda</NavLink>
            </li>
            <li className="text-neutral-600 hover:text-red-600">
              <NavLink to={`/masjid`}>Masjid</NavLink>
            </li>
            <li className="text-neutral-600 hover:text-red-600">Mushalla</li>
            <li className="text-neutral-600 hover:text-red-600">
              <NavLink to={`/info`}>Info Terkini</NavLink>
            </li>
            <li className="text-neutral-600 hover:text-red-600">Unduh Data</li>
            <li className="text-neutral-600 hover:text-red-600">Kontak Kami</li>
          </ul>
          <Link
            to={`/login`}
            className="rounded-2x text-sm bg-telkom-gradient border border-red-500 cursor-pointer text-white py-1 px-3 rounded-3xl"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default PublicHeader;
