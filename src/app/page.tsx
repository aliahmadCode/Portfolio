'use client';

import { Navbar } from "@/components/Navbar";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader"
import { Header } from "@/components/Header"

export default function Page() {
    const [someDelay, setSomeDelay] = useState<boolean>(true);
    useEffect(() => {
        setTimeout(() => {
            setSomeDelay(false);
        }, 500);
    }, [])

    if (someDelay) {
        return (
            <Loader />
        )
    }
    return (
        <div className="bg-background text-foreground w-full min-h-[100vh] px-5 sm:px-[97px] py-7">
            <Navbar />
            <Header />
        </div>
    );
}

