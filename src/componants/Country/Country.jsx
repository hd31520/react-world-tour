import { useState } from 'react';
import './country.css'
import Countrydetails from './countryDatails/Countrydetails';

const Country = ({country, handleVisitedCountry, handleVisitedFlag}) => {
    const {name, flags, population, area, cca3 } = country;
    const [visited, setVisited ] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }


    const passwithParent = () =>{
        handleVisitedCountry(country);
    }


  
    return (
        <div className={` ${visited ? 'visited' : 'non-visited'}`}>
            <h3>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={passwithParent}>Mark Visied</button>

            <br />
            <button onClick={() => handleVisitedFlag(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited': 'Going'}</button>
            {visited ? ' I have visited this Country ': 'Ihave wnat top visited'}
            <hr />
            <Countrydetails 
                country={country}
            ></Countrydetails>
            
        </div>
    );
};

export default Country;