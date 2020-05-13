import React, { useContext } from 'react';
import Select from 'react-select';

import UserContext from './UserContext';

const CountrySelect = () => {
    const { countries } = useContext(UserContext);

    const selectCountries = [];
    for (let country in countries) {
        selectCountries.push({ label: country, value: countries[country] });
    }

    return (
        <div className="cat-select-component">
          {/* <div className="cat-search-container"> */}
            <Select className="cat-select" options={selectCountries} />
          {/* </div> */}
        </div>
          );
}

export default CountrySelect;
