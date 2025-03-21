import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const CounrysApi = () => {
    const [countrys, setCountrys] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data=> setCountrys(data))
    },[])
    return (
        <div>
            <h2>Country : {countrys.length}</h2>
            {
                countrys.map(desh => <Country bidesh={desh}></Country>)
            }
        </div>
    );
};

export default CounrysApi;