import { jsonEval } from "@firebase/util";
import { useEffect, useState } from "react";

const LoadData = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    return [items, setItems];
}


export default LoadData;