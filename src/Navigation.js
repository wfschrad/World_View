import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import UserContext from './UserContext';

const Navigation = () => {
  const { currCountry } = useContext(UserContext);

  useEffect(() => {

  }, [currCountry])

  return (
    <div className='nav-container'>
        <span className='nav-container__left'>
          <div className="nav-container__icon-button">
            <i className="fa fa-bars"></i>
          </div>
          <div className="nav-container__icon-button">
            <i className="fa fa-search"></i>
          </div>
        </span>
        <span className='nav-container__center'>
            <h1 className='nav-container__h1'>World View</h1>
            <span className='nav-container__center__country'>{`Current Country: ${currCountry.toUpperCase()}`}</span>
        </span>
        <span className='nav-container__right'>
            <a className='nav-container__right--loggedOut' href='/login'>Login</a>
            <a className='nav-container__right--loggedOut' href='/login'>Join</a>
        </span>
    </div>
  )
}

export default Navigation;
