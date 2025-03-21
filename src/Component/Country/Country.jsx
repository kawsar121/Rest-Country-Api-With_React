import './Country.css'
const Country = ({bidesh}) => {
    const {name, flags, population, capital} = bidesh
    console.log(bidesh)
    return (
        <div className="country">
            <img src={flags.png} alt="" srcset="" />
            <h3>Name :{name.common}</h3>
            <h4>Capital : {capital}</h4>
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;