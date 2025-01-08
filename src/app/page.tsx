'use client';

import Link from "next/link";

export default function Page() {

    return (
        <div className="bg-background text-foreground w-full min-h-[100vh] px-5 sm:px-[97px] py-7">
            <div className="flex items-center justify-between">
                <Link href={"/"} className={`
                    bg-foreground text-[#333]
                     px-[6px] text-[28px] font-[600]
                 hover:-rotate-12 hover:scale-[.9] transition-transform transform duration-500 ease  rounded-md select-none  cursor-pointer`}>a.a</Link>
            </div >

            <div className="mt-[60px] mb-[10px]">
                <div >
                    <div className="text-[32px]">
                        <span>Ali</span>
                        <span className="light-white-text">&nbsp;Ahmad</span>
                        <span>,</span>
                    </div>
                    <div className="text-[30px]">
                        Software Engineer
                    </div>
                    <div className={`light-white-text text-[16px] my-3`}>
                        I craft Softwares
                    </div>
                </div>
            </div>

            <div>
                <div className={`light-white-text text-[22px] font-mono my-10`}>Future Goals</div>
            </div>

        </div>
    );
}

