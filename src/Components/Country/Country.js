import React from 'react';

const Country = ( props ) => {
    // console.log(props);
    const {name, population, flag} = props.country;
    const flagStyle = {height: '100px'};
    const countryStyle = {border: '1px solid red', margin: '10px', padding: '10px'};
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <img style={flagStyle} src={flag} alt=""/>
            <h4>{name}</h4>
            {/* <p><small>Capital: {capital}</small></p> */}
            <p>Population: {population}</p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;