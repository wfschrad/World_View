import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import Link from '@material-ui/core/Link';
import { BrowserRouter, NavLink } from 'react-router-dom';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function ActiveLastBreadcrumb() {
    return (
        // <BrowserRouter>
        <Breadcrumbs aria-label="breadcrumb">
            <NavLink activeClassName='link-selected' color="inherit" to="/" onClick={handleClick}>
                Home
            </NavLink>
            <NavLink activeClassName='link-selected' color="inherit" to="/getting-started/installation/" onClick={handleClick}>
                Search
            </NavLink>
            <NavLink activeClassName='link-selected'
                color="textPrimary"
                to="/components/breadcrumbs/"
                onClick={handleClick}
                aria-current="page"
            >
                Browse
            </NavLink>
        </Breadcrumbs>
        // </BrowserRouter>
    );
}