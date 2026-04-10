import React from "react";
import Link from "next/link";
import menu_data from "./menu-data";

const MobileMenus = ({onClose}) => (
    <nav className="mean-nav">
      <ul>
        {menu_data.map((menu, i) => (
            <li key={i}>
              <Link onClick={onClose} href={menu.link}>{menu.title}</Link>
            </li>
        ))}
      </ul>
    </nav>
);

export default MobileMenus;
