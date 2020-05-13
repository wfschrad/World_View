import React, { useContext } from 'react';

import CountrySelect from './CountrySelect';
import UserContext from './UserContext';


const StatusBar = () => {
    const { countries } = useContext(UserContext);

    const selectCountries = [];
    for (let country in countries) {
        selectCountries.push({ label: country, value: countries[country] });
    }

    return (
        <div className='status-bar'>
            <div className='status-bar__left'>A broader perspective</div>
            <span className='status-bar__center'>Current Country:
            <CountrySelect/>
            {/* Use button to produce modal??? */}
            {/* <datalist id='status-bar-countrySelect'>
                {options=selectCountries}
            </datalist>
            <input className='status-bar__select' autoComplete='on' list='status-bar-countrySelect'/> */}
            </span>
            <div className='status-bar__right'>
            </div>
        </div>
    )
}

export default StatusBar;
