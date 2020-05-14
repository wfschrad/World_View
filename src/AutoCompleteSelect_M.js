/* eslint-disable no-use-before-define */
import React, { useContext, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import UserContext from './UserContext';

export default function ComboBox() {
    const { countries, setCurrCountry } = useContext(UserContext);
    // const [currCountry, setCurrCountry] = useState('us');

    const handleChange = (ev, newVal) => {
        setCurrCountry(countries[newVal]);
        console.log('newVal', newVal)
    }
    return (
    <Autocomplete
      id="combo-box-demo"
      options={Object.keys(countries)}
      onChange={handleChange}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Choose a country" variant="standard" />}
    />
  );
}
