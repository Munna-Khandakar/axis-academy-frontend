import Link from "next/link";
import React from "react";

const Sidebar = () => {
  const NAV_ITEMS = [
    {
      name: "Home",
      link:'',
    },
    {
      name: "Student",
      link:'dashboard/students',
    },
  ];
  return (
    <div className="flex justify-start flex-col">
      {NAV_ITEMS.map((nav, index) => (
        <NavItem key={index} nav={nav} />
      ))}
    </div>
  );
};

const NavItem = ({ nav }: { nav: { name: string ,link:string} }) => {
  return (
    <Link href={nav?.link} className="text-base text-slate-800 font-normal p-2 border">
      <span>{nav?.name}</span>
    </Link>
  );
};

export default Sidebar;
