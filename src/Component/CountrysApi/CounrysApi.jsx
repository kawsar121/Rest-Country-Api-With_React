import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countrys.css'

const CounrysApi = () => {
    const [countrys, setCountrys] = useState([]);
    const [markVisited, setMarkVisited] = useState([]);
    const [markFlag, setFlag] = useState([]);
    const [capital, setCapital] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data=> setCountrys(data))
    },[])
    const handleVisited = (visit_korse) =>{ //puro_bidesh_ta_pawar_jonno
        console.log(visit_korse);
        const addCountry = [...markVisited, visit_korse];
        setMarkVisited(addCountry)
    }
    const clickFlag = (flagShowkorse) =>{
        console.log('okokk');
        const newFlag = [...markFlag,flagShowkorse ];
        setFlag(newFlag)
    }
    const capitalCheek = (pokki) =>{
        console.log(pokki);
        const newCap = [...capital,pokki];
        setCapital(newCap)
    }
    return (
        <div style={{display:"flex", gap:'50px'}}>
           <div>
           <h2>Country : {countrys.length}</h2>
            <div className="lol">
            {
                countrys.map(desh => <Country bidesh={desh} visit={handleVisited} flagShow={clickFlag} capitals={capitalCheek}> </Country>)
            }
            </div>
           </div>
           <div>
                <h4>My Visited   country :{markVisited.length}</h4>
                <ul>
                    {
                        markVisited.map(alreadyVisited => <li>{alreadyVisited.name.common}</li>)
                    }
                </ul>
                <div>
                {
                    markFlag.map(flag=> <img  style={{width:'100px'}} src={flag}></img> )
                }
                </div>
                <div>
                    {
                        capital.map(rajdani=> <p>{rajdani}</p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CounrysApi;