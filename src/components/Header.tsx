import { useDarkModeContext } from "@/context/DarkMode";
import Image from "next/image";
import { FC } from "react";
import emoji from "$/emoji-removebg-preview.png"

export const Header: FC = () => {
    const { mode } = useDarkModeContext();
    return (
        <>
            <div className="my-[60px]">

                <div className="flex items-center justify-between">
                    <div >
                        <div className="text-[32px]">
                            <span>Ali</span>
                            <span className="text-unique">&nbsp;Ahmad</span>
                            <span>,</span>
                        </div>
                        <div className="text-[30px]">
                            full stack developer
                        </div>
                        <div className={`${mode.current == "dark" ? "light-white-text " : "text-foreground"} text-[20px] my-2`}>

                            As a full stack javascript developer, I make modern web apps with tools like
                            <div>
                                <span className="text-unique">React.js</span>,
                                &nbsp;<span className="text-unique">Next.js</span> &<span className="text-unique">&nbsp;Nodejs</span>
                            </div>

                        </div>
                    </div>
                    <div>
                        <Image src={emoji} alt="Developer img" width={250} />
                    </div>
                </div>
            </div>
        </>
    )
}
