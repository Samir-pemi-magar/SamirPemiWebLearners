import { data } from "autoprefixer";
import { useEffect } from "react";
export default function FetchTimezone({ setData }) {
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
    return (
        null
    );
}