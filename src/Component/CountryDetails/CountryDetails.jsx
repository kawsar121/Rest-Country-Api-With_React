import Optional from "../Optional/Optional";

const CountryDetails = ({country}) => {
    return (
        <div>
            <p>Details :{country.name.common}</p>
            {/* <p>Rajdani:{country.capital}</p> */}
            <Optional
                op={country}
            ></Optional>
        </div>
    );
};

export default CountryDetails;