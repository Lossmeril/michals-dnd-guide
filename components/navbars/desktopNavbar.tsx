"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type NavbarItem = {
  text: string;
  link: string;
  subMenu?: NavbarItem[];
};

const navbarItems: NavbarItem[] = [
  {
    text: "Home",
    link: "/",
  },
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
    <Link href={link} className="cursor-pointer">
      <li
        className="border-b border-slate-800 p-3"
        style={{
          color: active ? "#94a3b8" : "",
          fontWeight: active ? "bold" : "",
          borderBottom: subMenu ? "0" : "",
          paddingBottom: subMenu ? "0" : "",
        }}
      >
        {children}
      </li>
    </Link>
  );
};

const DesktopNavbar = () => {
  const path = usePathname();

  return (
    <nav className="hidden lg:block w-full py-4">
      <ul className="mr-16">
        {navbarItems.map((item) => (
          <>
            <DesktopNavbarLink
              key={item.link}
              link={item.link}
              active={path === item.link}
            >
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
          </>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
