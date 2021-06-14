import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
       axios.get("https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag")
            .then((response) =>{
                setData(response.data)
            })
      },[]);
    return (
        <div className="countries">
            <ul className="sort-container">
                {data.map((country) =>(
                    <Card  country={country} />
                ))}
            </ul>
        </div>
    );
};

export default Countries;