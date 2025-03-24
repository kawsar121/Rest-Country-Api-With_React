import { useState } from 'react';
import './Country.css'
import './Visited.css'
import CountryDetails from '../CountryDetails/CountryDetails';
const Country = ({bidesh, visit, flagShow, capitals}) => {
    const {name, flags, population, capital} = bidesh;
    console.log(bidesh)
    const [visited, setVisited] = useState(false);
    const handleClick = () =>{
        setVisited(!visited)
    }
    return (
        <div className={`country ${visited && 'visited' }`}>
            <img src={flags.png} alt="" srcset="" />
            <h3 style={{color : visited ? 'green' : 'black' }}>Name :{name.common}</h3>
            <h4>Capital : {capital}</h4>
            <p>Population: {population}</p>
            <button onClick={handleClick}>{visited ? "visited" : "going"}</button>
            <button onClick={()=>visit(bidesh)}>Mark Visited</button>
            <button onClick={()=>{flagShow(bidesh.flags.png)}}>Mark Flag</button>
            <button onClick={()=>{capitals(bidesh.capital)}}>Cheek Capital</button>
            <hr />
            <CountryDetails
                country={bidesh}
                
            >
            </CountryDetails>
        </div>
    );
};

export default Country;