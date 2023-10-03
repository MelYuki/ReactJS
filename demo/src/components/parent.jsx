import { useState } from "react";
import Child from "./child";

const Parent = () => {

    const [data, setData] = useState('Jawad');

    const prenom = 'Laurent';

    return (
        <>
            <Child firstname={data} changeName={setData}/>
            <p>{data}</p>
        </>
    )
};

export default Parent;
