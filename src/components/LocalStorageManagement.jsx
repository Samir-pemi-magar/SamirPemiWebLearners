export function setLocalStorage({ timeZone, timeStamp }) {
    // const data = localStorage.getItem("country");
    // const value = JSON.parse(data);
    // if (value == undefined) {
    //     localStorage.setItem("country", JSON.stringify([timeZone]));
    // } else {
    //     value.forEach(element => {
    //         if (timeZone == element) {

    //         } else {
    //             const newValue = [...value, timeZone];
    //             localStorage.setItem("country", JSON.stringify(newValue));
    //         }
    //     });
    // }
    localStorage.setItem(timeZone, JSON.stringify(timeStamp));
    return null;
}
export function getLocalStorage() {
    const savedData = {};
    for (let i = 0; i < localStorage.length; i++) {
        const timeZone = localStorage.key(i);
        const timeStamp = localStorage.getItem(timeZone);

        try {
            const parsed = JSON.parse(timeStamp);
            if (parsed !== undefined && parsed !== null) {
                savedData[timeZone] = parsed;
            }
        } catch (e) {
            console.warn(`Skipping invalid localStorage value for ${timeZone}:`, timeStamp);
        }
    }
    return savedData;
}


export function ResetLocalStorage() {
    localStorage.clear();
    return null;
}