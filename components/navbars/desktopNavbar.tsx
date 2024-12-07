"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type NavbarItem = {
  text: string;
  link: string;
  subMenu?: NavbarItem[];
};

type NavbarSection = {
  title: string;
  items: NavbarItem[];
};

const navbarItems: NavbarSection[] = [
  {
    title: "Character Creation",
    items: [
      {
        text: "Home",
        link: "/",
      },
      { text: "Races", link: "/races" },
      {
        text: "Classes",
        link: "/classes",
        subMenu: [
          {
            text: "Basic",
            link: "/classes/basic",
          },
          {
            text: "Advanced",
            link: "/classes/advanced",
          },
          {
            text: "Mighty",
            link: "/classes/mighty",
          },
        ],
      },
    ],
  },
];

interface DesktopNavbarLinkProps {
  children: React.ReactNode;
  link: string;
  active?: boolean;
  subMenu?: boolean;
}

const DesktopNavbarLink: React.FC<DesktopNavbarLinkProps> = ({
  children,
  link,
  active,
  subMenu,
}) => {
  return (
    <Link
      href={link}
      className="cursor-pointer hover:text-gray-500 transition-all"
    >
      <li
        className="py-2 px-4"
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

const DesktopNavbar = () => {
  const path = usePathname();

  return (
    <nav className="hidden lg:block w-full py-4">
      {navbarItems.map((section) => (
        <div key={section.title}>
          <p className="text-blue-300 font-bold uppercase mb-2">
            {section.title}
          </p>
          <ul className="mr-16 pb-8 border-b border-slate-700">
            {section.items.map((item) => (
              <div key={item.link}>
                <DesktopNavbarLink link={item.link} active={path === item.link}>
                  {item.text}
                </DesktopNavbarLink>
                {item.subMenu === undefined ? (
                  <></>
                ) : (
                  <ul className="ml-4">
                    {item.subMenu.map((subItem) => (
                      <DesktopNavbarLink
                        key={subItem.link}
                        link={subItem.link}
                        active={path.includes(subItem.link)}
                        subMenu
                      >
                        {subItem.text}
                      </DesktopNavbarLink>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default DesktopNavbar;
