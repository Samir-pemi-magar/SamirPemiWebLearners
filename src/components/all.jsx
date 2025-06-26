import { useEffect, useState } from "react";
export default function Time({ timeZone, LocationName }) {

    // const [data, setData] = useState(null);
    // const [country, setCountry] = useState();
    // 
    // useEffect(() => {
    //     fetch(`https://api.timezonedb.com/v2.1/list-time-zone?key=LEXEUFQXKRYX&format=json&country=${country}`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setData(data);
    //         });
    // }, []);

    const [time, setTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formatted = now.toLocaleTimeString("en-US", {
                timeZone: timeZone,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            });
            setTime(formatted);
        }, 1000);
        return () => clearInterval(interval);
    })

    return (
        <div className="flex flex-row justify-center bg-gray-300 m-5 rounded-lg">
            <div className="shadow-lg items-center w-fit h-fit p-5">
                <div className="w-full p-5 border-b border-white-500 mt-5 mb-5">
                    <h1 className="font-bold text-xl">Time:</h1>
                    <h2 className="text-5xl">{time}</h2>
                </div>
                <div className="w-full pt-5 pr-5 pl-5 mb-5">
                    <h1 className="font-bold text-xl">Location:</h1>
                    <h2 className="text-5xl">{LocationName}</h2>
                </div>
            </div>
        </div>

    );
}