import Link from "next/link";
import React from "react";
import menu_data from "./menu-data";

const NavMenu = () => (
  <ul className="main-menu__list" role="list">
    {menu_data.map((item, i) => (
      <li key={i}>
        <Link href={item.link}>{item.title}</Link>
      </li>
    ))}
  </ul>
);

export default NavMenu;
