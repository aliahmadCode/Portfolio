'use client';


import { FC, useState } from "react";

// icons
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { RiMenu5Fill } from "react-icons/ri";

import { CiLight } from "react-icons/ci";

// helper menu
import { MenuHelper } from "./Menu";
import { useDarkModeContext } from "@/context/DarkMode";
import Link from "next/link";

export const Navbar: FC = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const { mode, toggleMode } = useDarkModeContext();

    const changeMode = () => {
        if (mode.current == "light") {
            toggleMode(true);
        } else {
            toggleMode(false);
        }
    }

    return (
        <>
            <div className="flex items-center justify-between">
                <Link href={"/"} className={`${mode.current == "dark" ?
                    "bg-foreground text-[#333]" :
                    "bg-[#333] text-[#eee]"} px-[6px] text-[28px] font-[600]
                bg-foreground hover:-rotate-12 hover:scale-[.9] transition-transform transform duration-500 ease  rounded-md select-none  cursor-pointer`}>a.a</Link>
                <div className="flex items-center gap-4 ">
                    <div onClick={changeMode} className={`${mode.current == "dark" ?
                        "bg-[#0b241e] hover:bg-[#0b241e] " :
                        "bg-[#fcf6e6] hover:bg-[#eeeeee] "} p-2 rounded-3xl cursor-pointer`}>
                        {mode.current == "dark" ? (<CiLight className=" text-xl" onClick={changeMode} />)
                            : (<MdOutlineDarkMode className=" text-xl" />)}
                    </div>
                    <div>
                        {showMenu ? (
                            <MenuHelper />
                        ) : (
                            <span className={`${mode.current == "dark" ?
                                "bg-[#0b241e] hover:bg-[#0b241e] " :
                                "bg-[#fcf6e6] hover:bg-[#eeeeee] "}  rounded-full cursor-pointer`}
                                style={{ width: "40px", height: "40px" }}
                            >
                                <RiMenu5Fill className={`${mode.current == "dark" ?
                                    "bg-[#0b241e] hover:bg-[#0b241e] " :
                                    "bg-[#fcf6e6] hover:bg-[#eeeeee] "} text-[35px]  p-2 rounded-full`} />
                            </span>
                        )}
                    </div>
                </div>
            </div >
        </>
    )
}




