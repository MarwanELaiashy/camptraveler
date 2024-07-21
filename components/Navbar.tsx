"use client";

import React from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Button from "./Button";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          variant="btn_dark_green"
          icon="/user.svg"
        />
      </div>
      <div className="inline-block lg:hidden">
        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="cursor-pointer"
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="fixed top-0 left-0 w-full bg-gray-400 h-screen transition-all flex-col z-50 flexCenter slide-bottom">
            <IoIosCloseCircleOutline
              fontSize={37}
              onClick={() => setToggleMenu(false)}
              className="cursor-pointer absolute top-5 right-5 text-white hover:text-black"
            />
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className=" text-gray-100 cursor-pointer transition-all flexCenter hover:text-black m-8 text-2xl  "
                onClick={() => setToggleMenu(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
