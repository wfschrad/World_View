import React, { useContext, useState } from 'react';
import Select from 'react-select';
import { makeStyles } from '@material-ui/core/styles';

import UserContext from './UserContext';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const CountrySelect = () => {
    const { countries } = useContext(UserContext);

    const classes = useStyles();
    const [country, setCountry] = useState('us');
    const [open, setOpen] = useState(false);

    const handleChange = (selected, action) => {
      console.log('selected', selected)
      console.log('action', action);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const handleOpen = () => {
      setOpen(true);
    };

    const selectCountries = [];
    for (let country in countries) {
        selectCountries.push({ label: country, value: countries[country] });
    }

    return (
        <div className="cat-select-component">
          {/* <div className="cat-search-container"> */}
            <Select className="cat-select"
              options={selectCountries}
              value={'us'}
              onChange={handleChange}
              defaultValue={selectCountries[0]}
            />
          {/* </div> */}
        </div>
          );
}

export default CountrySelect;
