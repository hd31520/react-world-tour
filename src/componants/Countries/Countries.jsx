import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './countries.css'



const Countries = () => {


    const [countries, setCountries] = useState([]);

    const [visitCountries, setVisitedCountries] = useState([]);

    const [visitedflag, setVisitedFlag] = useState([]);



    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
       
    })

    const handleVisitedCountry = country => {
        console.log('Add thid to visited Country');
        const  newvisitedCountries = [...visitCountries, country];
        setVisitedCountries(newvisitedCountries);

    }


    const  handleVisitedFlag= flag =>{
        
       const newVisitedFlag = [...visitedflag, flag];
       setVisitedFlag(newVisitedFlag);
    }


    return (
        <div>
            <h3>Countriers : {countries.length}</h3>

                <div className="flag-container">

                    <ul>
                        {
                            visitedflag.map((flag, idx) => <img key={idx} src={flag}></img>)
                        }
                    </ul>
                </div>


            {/* handleVisitedFlagisited ountries */}
            <div>
                <h5>visited Country : {visitCountries.length}</h5>
                <ul>

                    {
                        visitCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }

                </ul>
            </div>
            {/* Country Component */}
           
           <div className="country-cointainer">
           {
            countries.map(country => <Country 
                key={country.ccas}
                handleVisitedCountry ={handleVisitedCountry}
                handleVisitedFlag = {handleVisitedFlag}
                 country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;