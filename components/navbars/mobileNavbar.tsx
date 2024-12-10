"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import { navbarItems } from "./desktopNavbar";
import Link from "next/link";

interface MobileNavbarLinkProps {
  children: React.ReactNode;
  link: string;
  active?: boolean;
  subMenu?: boolean;
  menuToggle: (state?: boolean) => void;
}

const MobileNavbarLinks: React.FC<MobileNavbarLinkProps> = ({
  children,
  link,
  active,
  subMenu,
  menuToggle,
}) => {
  return (
    <Link
      href={link}
      className="cursor-pointer hover:text-gray-500 transition-all"
      onClick={() => menuToggle()}
    >
      <li
        className="py-2"
        style={{
          color: active ? "#93c5fd" : "",
          fontWeight: active ? "bold" : "",
          paddingBottom: subMenu ? "0.25rem" : "",
        }}
      >
        {subMenu ? "◆ " : ""}
        {children}
      </li>
    </Link>
  );
};

interface MobileMenuProps {
  active: boolean;
  menuToggle: (state?: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ active, menuToggle }) => {
  const path = usePathname();

  return (
    <nav
      className="w-full origin-top-left absolute mt-10 px-10 pt-6 top-0 left-0 z-10 bg-gray-800 border border-slate-600 rounded-md overflow-hidden shadow-xl"
      style={{
        scale: !active ? "0" : "1",
        opacity: !active ? "0" : "1",
        transition: "all ease-in-out 0.25s",
      }}
    >
      <nav className="flex flex-col text-left">
        {navbarItems.map((section) => (
          <div className="my-4" key={section.title}>
            <p className="text-blue-300 font-bold uppercase mb-2">
              {section.title}
            </p>
            <ul className="pb-6 border-b border-slate-700">
              {section.items.map((item) => (
                <div key={item.link}>
                  <MobileNavbarLinks
                    link={item.link}
                    active={
                      (path.includes(item.link) && item.link !== "/") ||
                      path === item.link
                    }
                    menuToggle={menuToggle}
                  >
                    {item.text}
                  </MobileNavbarLinks>
                  {item.subMenu === undefined ? (
                    <></>
                  ) : (
                    <ul className="ml-4 mb-4">
                      {item.subMenu.map((subItem) => (
                        <MobileNavbarLinks
                          key={subItem.link}
                          link={subItem.link}
                          active={path.includes(subItem.link)}
                          subMenu
                          menuToggle={menuToggle}
                        >
                          {subItem.text}
                        </MobileNavbarLinks>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </nav>
  );
};

const MobileNavbar = () => {
  const [mobileNavActive, setMobileNav] = useState(false);

  const handleMenuToggle = (state?: boolean) => {
    setMobileNav((prev) => (typeof state === "boolean" ? state : !prev));
  };

  return (
    <>
      <div className="relative w-full flex lg:hidden">
        <div onClick={() => handleMenuToggle()}>
          <GiHamburgerMenu
            size={24}
            className="cursor-pointer active:scale-95"
          />
        </div>
        <MobileMenu active={mobileNavActive} menuToggle={handleMenuToggle} />
      </div>
    </>
  );
};

export default MobileNavbar;
