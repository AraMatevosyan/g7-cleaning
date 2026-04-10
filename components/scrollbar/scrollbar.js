"use client";

import React from 'react';
import Link from "next/link";
import {FaAngleUp} from "react-icons/fa";
import {ScrollToTopHandler} from "../../utils/utils";

const Scrollbar = () => (
    <div className="col-lg-12">
        <div className="header-menu">
            <ul className="smothscroll">
                <Link onClick={ScrollToTopHandler} href='/'><FaAngleUp /></Link>
            </ul>
        </div>
    </div>
)

export default Scrollbar;
