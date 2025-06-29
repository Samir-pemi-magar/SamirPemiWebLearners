import { useEffect, useState } from "react";
import { setLocalStorage, getLocalStorage, ResetLocalStorage } from '../../Store/LocalStorageManagement';
import { useNavigate } from "react-router-dom";

const timeData = [
    "Asia/Kathmandu",
    "Africa/Abidjan",
    "Africa/Accra",
    "Africa/Addis_Ababa",
    "Africa/Algiers",
    "Asia/Tokyo"
]

export default function Main() {
    document.body.style.backgroundColor = "#fef3c7";


    // const [data, setData] = useState([]);
    // const [country, setCountry] = useState("Nepal");
    // const [value, setValue] = useState([]);

    // function getShortCut(countryName) {
    //     const map = {};
    //     value.forEach((item) => {
    //         map[item.countryName] = item.countryCode;
    //     })
    //     return map[countryName];
    // }
    // useEffect(() => {
    //     fetch(`https://api.timezonedb.com/v2.1/list-time-zone?key=LEXEUFQXKRYX&format=json`)
    //         .then((response) => response.json())
    //         .then((value) => {
    //             setValue(value.zones);
    //         });
    // }, []);

    // useEffect(() => {
    //     fetch(`https://api.timezonedb.com/v2.1/list-time-zone?key=LEXEUFQXKRYX&format=json&country=${getShortCut(country)}`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setData(data);
    //         });
    // }, [country]);

    const [time, setTime] = useState("");
    const [zone, setZone] = useState("Asia/kathmandu");
    const [savedData, setSavedData] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const Check = localStorage.getItem('isLoggedIn');
        if (!Check) {
            navigate("/");
        }
        else {
            console.log("welcome to homepage");
        }
    })

    useEffect(() => {
        const data = getLocalStorage();
        if (Object.keys(data).length > 0) {
            setSavedData(data);
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formatted = now.toLocaleTimeString("en-US", {
                timeZone: zone,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            });
            setTime(formatted);
        }, 1000);
        return () => clearInterval(interval);
    }, [zone]);

    useEffect(() => {
        const interval = setInterval(() => {
            const updatedSavedData = {};
            Object.keys(savedData || {}).forEach((zoneKey) => {
                const now = new Date();
                const formatted = now.toLocaleTimeString("en-US", {
                    timeZone: zoneKey,
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                });
                setLocalStorage({ timeZone: zoneKey, timeStamp: formatted });
                updatedSavedData[zoneKey] = formatted;
            });
            setSavedData(updatedSavedData);
        }, 1000);

        return () => clearInterval(interval);
    }, [savedData]);

    return (
        <>
            <div className="flex h-screen">
                <div className="flex flex-col items-end justify-center w-3/3 bg-amber-100">
                    {/* <select value={country} onChange={(e) => setCountry(e.target.value)} >
                        {
                            value && value.map(item => (
                                <option key={`${item.countryName}-${item.countryCode}-${item.zoneName}`} value={item.countryName}>
                                    {item.countryName}
                                </option>

                            ))
                        }
                    </select> */}


                    <div className="shadow-lg items-center bg-amber-500 w-fit h-fit p-5 rounded-lg">
                        <div className="w-full p-5 border-b border-white-500 mt-5 mb-5">
                            <select
                                value={zone}
                                onChange={(e) => setZone(e.target.value)}
                            >
                                {timeData.map((timeZone) =>

                                    <option key={timeZone} value={timeZone}>
                                        {timeZone}
                                    </option>
                                )}
                            </select>
                        </div>
                        {/* <div className="w-full p-5 border-b border-white-500 mt-5 mb-5">
                            <h1 className="font-bold text-xl">Time:</h1>
                            <h2 className="text-5xl">{data[0]?.zoneName || "Loading..."}</h2>
                        </div> */}
                        <div className="w-full p-5 border-b border-white-500 mt-5 mb-5">
                            <h1 className="font-bold text-xl">Time:</h1>
                            <h2 className="text-5xl">{time}</h2>
                        </div>
                        {/* <div className="w-full pt-5 pr-5 pl-5 mb-5">
                            <h1 className="font-bold text-xl">Location:</h1>
                            <h2 className="text-5xl">{data[0]?.timestamp || "Loading..."}</h2>
                        </div> */}
                        <div className="w-full pt-5 pr-5 pl-5 mb-5">
                            <h1 className="font-bold text-xl">Location:</h1>
                            <h2 className="text-5xl">{zone}</h2>
                        </div>
                        <div className="flex justify-center">
                            <button
                                className="p-3 mt-5 mb-3 bg-green-300 w-1/2 font-bold text-black"
                                onClick={() => {
                                    setLocalStorage({ timeZone: zone, timeStamp: time });
                                    setSavedData(getLocalStorage());
                                }}
                            >
                                Save
                            </button>

                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-1/2  bg-amber-100">
                    {savedData && Object.keys(savedData).length > 0 && (
                        <>
                            <div className="flex justify-end w-full">
                                <button className="p-2 m-3 bg-amber-300 w-1/3" onClick={() => {
                                    ResetLocalStorage();
                                    setSavedData(null);
                                }}>Reset</button>
                            </div>
                            {Object.entries(savedData).map(([zone, time]) => (
                                <div className="flex flex-col justify-center items-center bg-amber-200 m-5">
                                    <div className="w-full p-5 border-b border-white-500 mt-5 mb-5">
                                        <h1 className="font-bold text-xl">Time:</h1>
                                        <h2 className="text-5xl">{time}</h2>
                                    </div>
                                    <div className="w-full pt-5 pr-5 pl-5 mb-5">
                                        <h1 className="font-bold text-xl">Location:</h1>
                                        <h2 className="text-5xl">{zone}</h2>
                                    </div>
                                </div>
                            ))}
                        </>)}

                </div>
            </div >
        </>
    );
}