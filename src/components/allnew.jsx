import Time from "./all";
export default function AllNew() {
    const timeData = [
        "Africa/Accra",
        "Africa/Abidjan",
        "Africa/Addis_Ababa",
        "Africa/Algiers",
        "Asia/Kathmandu",
        "Asia/Tokyo"
    ];
    return (
        <div className="flex flex-row flex-wrap m-5 p-5">
            {timeData.map((value) => (
                <Time timeZone={value} LocationName={value} key={value} />
            ))}
        </div>
    );
}