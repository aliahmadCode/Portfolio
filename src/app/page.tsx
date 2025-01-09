'use client';

import Link from "next/link";
import atom from "$/atom.png"
import c from "$/c.svg"
import cpp from "$/c++.svg"
import js from "$/js.png"
import ts from "$/ts.svg"
import nextjs from "$/nextjs.svg"
import Image from "next/image";


export default function Page() {

    return (
        <div className="bg-background text-foreground w-full min-h-[100vh] px-5 sm:px-[97px] py-7 select-none">
            <div className="flex items-center justify-between">
                <Link href={"/"} className={`
                      bg-foreground text-[#333]
                      px-[6px] text-[18px] font-[600]
                     hover:-rotate-12 hover:scale-[.96] transition-transform
                    transform duration-500 ease  rounded-md select-none  cursor-pointer`}
                >a.a</Link>
            </div >

            <div className="mt-[50px] mb-[10px]">
                <div >
                    <div className="text-[28px]">
                        <span>Ali</span>
                        <span className="light-white-text">&nbsp;Ahmad</span>
                        <span>,</span>
                    </div>
                    <div className="text-[28px]">
                        Software Engineer
                    </div>
                    <div className={`light-white-text text-[16px] my-3`}>
                        I craft Softwares
                    </div>
                </div>
            </div>

            <div>
                <div className={`light-white-text text-[22px] font-mono mt-10 mb-4`}>Programming Journey</div>
                <div className=" light-white-text px-5 py-[2px]">
                    <span>• With a strong foundation of progarmming in&nbsp;
                        <Link target="_blank" href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
                            className=" italic hover:underline">JavaScript</Link>
                        &nbsp;and&nbsp;<Link target="_blank" href={"https://react.dev/"}
                            className=" italic hover:underline">React</Link>
                        ,&nbsp;I&apos;m <span className="text-[#FFD700]">mastering&nbsp;</span>
                        <Link target="_blank" href={"https://www.typescriptlang.org/"}
                            className=" italic hover:underline">TypeScript</Link>
                        &nbsp;and&nbsp;
                        <Link target="_blank" href={"https://nextjs.org/"}
                            className=" italic hover:underline">NextJs</Link>.
                    </span>

                </div>

                <div className=" light-white-text px-5 py-[2px]">
                    <span>• I am also studying &nbsp;
                        <Link target="_blank" href={"https://en.wikipedia.org/wiki/Algorithm"}
                            className=" italic hover:underline">Data Structures</Link>
                        &nbsp;and&nbsp;
                        <Link target="_blank" href={"https://en.wikipedia.org/wiki/Algorithm"}
                            className=" italic hover:underline">Algorithms</Link>.
                    </span>
                </div>


                <div className=" light-white-text px-5 py-[4px]">
                    <div className="flex items-center gap-4">
                        <Image src={c} alt="C" width={30} />
                        <Image src={cpp} alt="C++" width={30} />
                        <Image src={js} alt="Js" width={30} />
                        <Image src={ts} alt="Ts" width={30} />
                        <Image src={atom} alt="ReactJs" width={30} />
                        <Image src={nextjs} alt="NextJs" width={30} />
                    </div>
                </div>

                <div className={`light-white-text text-[22px] font-mono mt-6 mb-4`}>Projects</div>
                <div className=" light-white-text px-5 py-[2px]">
                    <span>• Making a &nbsp;
                        <Link target="_blank" href={"https://github.com/aliahmadCode/simpleDB"}
                            className="italic text-[#FFD700] hover:underline">Simple Data Base</Link>
                        &nbsp;in&nbsp;
                        <Link target="_blank" href={"https://en.wikipedia.org/wiki/C_(programming_language)"}
                            className=" italic text-[#FFD700] hover:underline">C Programming language</Link>.
                    </span>
                </div>

                <div className={`light-white-text text-[22px] font-mono mt-6 mb-4`}>Education</div>
                <div className=" light-white-text px-5 py-[2px]">
                    <span>
                        • I’m pursuing a&nbsp;
                        <Link href={"https://en.wikipedia.org/wiki/Bachelor_of_Computer_Science"}
                            target="_blank" className="italic  text-[#FFD700] hover:underline">Bachelor of Computer Science</Link>.
                    </span>
                </div>


                <div className={`light-white-text text-[22px] font-mono mt-6 mb-4`}>Hobbies</div>
                <div className=" light-white-text px-5 py-[2px]">
                    • Using&nbsp;
                    <Link href={"https://neovim.io/"} target="_blank" className="italic  text-[#FFD700] hover:underline cursor-pointer">Neovim</Link>
                </div>
                <div className=" light-white-text px-5 py-[2px]">
                    • Using&nbsp;
                    <Link href={"https://wiki.archlinux.org/title/Main_page"}
                        target="_blank" className="italic  text-[#FFD700] hover:underline cursor-pointer"
                    >ArchLinux</Link>
                </div>


                <div className={`light-white-text text-[22px] font-mono mt-6 mb-4`}>Social Links</div>
                <div className=" light-white-text px-5 py-[2px]">
                    •&nbsp;
                    <Link href={"https://www.linkedin.com/in/ali-ahmad-994b2227a/"}
                        target="_blank" className="italic  text-[#FFD700] hover:underline cursor-pointer"
                    >LinkedIn</Link>
                </div>

                <div className=" light-white-text px-5 py-[2px]">
                    •&nbsp;
                    <Link href={"https://github.com/aliahmadCode"}
                        target="_blank" className="italic  text-[#FFD700] hover:underline cursor-pointer"
                    >Github</Link>
                </div>

                <div className=" light-white-text px-5 py-[2px]">
                    •&nbsp;
                    <Link href={"https://wa.me/+923286029066"}
                        target="_blank" className="italic  text-[#FFD700] hover:underline cursor-pointer"
                    >WhatsApp</Link>
                </div>
            </div>
        </div>
    );
}

