"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { animationCreate } from "../../utils/utils";
import HeaderOne from "../../common/header/HeaderOne";
import FooterOne from "../../common/footer/FooterOne";
import Scrollbar from "../scrollbar/scrollbar";

export default function AppShell({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      animationCreate();
    }, 500);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [pathname]);

  return (
    <div className="page-wrapper">
      <HeaderOne />
      {children}
      <FooterOne />
      <Scrollbar />
    </div>
  );
}
