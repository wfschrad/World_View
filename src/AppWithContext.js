import React, { useState } from 'react';
import App from './App';
import UserContext from './UserContext';
import { newsUrl } from "./config";
import { getByAltText } from '@testing-library/react';

const AppWithContext = () => {

    const newsCountries = {
        Argentina: 'ar',
        Australia: 'au',
        Austria: 'at',
        Belgium: 'be',
        Brazil: 'br',
        Bulgaria: 'bg',
        Canada: 'ca',
        China: 'cn',
        Colombia: 'co',
        Cuba: 'cu',
        "Czech Republic": 'cz',
        Egypt: 'eg',
        France: 'fr',
        Germany: 'de',
        Greece: 'gr',
        "Hong Kong": 'hk',
        Hungary: 'hu',
        India: 'in',
        Indonesia: 'id',
        Ireland: 'ie',
        Israel: 'il',
        Italy: 'it',
        Japan: 'jp',
        Latvia: 'lv',
        Lithuania: 'lt',
        Malaysia: 'my',
        Mexico: 'mx',
        Morocco: 'ma',
        Netherlands: 'nl',
        "New Zealand": 'nz',
        Nigeria: 'ng',

        Norway: 'no',
        Philippines: 'ph',
        Poland: 'pl',
        Portugal: 'pt',
        Romania: 'ro',
        Russia: 'ru',
        "Saudi Arabia": 'sa',
        Serbia: 'rs',
        Singapore: 'sg',
        Slovakia: 'sk',
        Slovenia: 'si',
        "South Africa": 'za',
        "South Korea": 'kr',
        Sweden: 'se',
        Switzerland: 'ch',
        Taiwan: 'tw',
        Thailand: 'th',
        Turkey: 'tr',
        UAE: 'ae',
        Ukraine: 'ua',
        "United Kingdowm": 'gb',
        "United States": 'us',
        Venuzuela: 've'
    }

    const localStorageToken = localStorage.getItem("worldViewjtid_ACCESS_TOKEN");

    const [articles, setArticles] = useState([]);
    const [singleArticle, setSingleArticle] = useState(null);
    const [authToken, setAuthToken] = useState(localStorageToken);
    const [needLogin, setNeedLogin] = useState(!localStorageToken);

    const login = (token) => {
        window.localStorage.setItem("state-worldViewElite-token", token);
        setAuthToken(token);
        setNeedLogin(false);
    };

    const loadArticles = async () => {
        // const response = await fetch(`${newsUrl}`, {
        //     headers: { Authorization: `Bearer ${authToken}` }
        // });
        const response = await fetch(newsUrl);
        if (response.ok) {
            const { articles } = await response.json();
            console.log('ARTICLES: ', articles)
            setArticles(articles);
        }
    };

    // const getOneArticle = async (id) => {
    //     const response = await fetch(`${baseUrl}/pokemon/${id}`, {
    //         headers: { Authorization: `Bearer ${authToken}` },
    //     });
    //     if (response.ok) {
    //         const pokemonResponse = await response.json();
    //         setSinglePokemon(pokemonResponse);
    //     }
    // };

    return (
        <UserContext.Provider
            value={{
                articles,
                singleArticle,
                authToken,
                needLogin,
                login,
                loadArticles,
                // getOneArticle,
            }}
        >
            <App />
        </UserContext.Provider>
    );
};

export default AppWithContext;
