import { useEffect, useState } from "react";
import FetchTimezone from "./fetchTimezone";
export default function Main() {
    const [data, setData] = useState(null);
    useEffect(() => {
        document.body.style.backgroundColor = "white";
    }, []);
    return (
        <>
            <FetchTimezone setData={setData} />
            <div className="flex h-screen">
                <div className=" bg-amber-900 w-1/2">
                </div>
                <div className="flex flex-col items-center justify-center bg-red-300 w-1/2">
                    <div className="shadow-lg items-center bg-gray-600 w-1/2 h-1/2">
                        <div className="w-full p-5 border-b border-white-500 mt-5 mb-5">
                            <h1 className="font-bold text-xl">Time:</h1>
                            <h2 className="text-5xl">00:00</h2>
                        </div>
                        <div className="w-full p-5 border-b border-white-500 mb-5">
                            <h1 className="font-bold text-xl">Date:</h1>
                            <h2 className="text-5xl">jan 1 2025</h2>
                        </div>
                        <div className="w-full pt-5 pr-5 pl-5">
                            <h1 className="font-bold text-xl">Location:</h1>
                            <h2 className="text-5xl">Nepal</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}