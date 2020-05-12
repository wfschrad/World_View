import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <div className='nav-container'>
        <span className='nav-container__left'>
        <div className="nav-container__icon-button">
          <i className="fa fa-bars"></i>
        </div>
        <div className="nav-container__icon-button">
          <i className="fa fa-search"></i>
        </div>
        </span>
        <h1 className='nav-container__h1'>World View</h1>
        <span className='nav-container__right'>
            <a className='nav-container__right--loggedOut' href='/login'>Login</a>
            <a className='nav-container__right--loggedOut' href='/login'>Join</a>
        </span>
    </div>
)

export default Navigation;
