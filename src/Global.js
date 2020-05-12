import React, { useState } from 'react';
import App from './App';
import UserContext from './UserContext';
import { newsUrl } from "./config";
import { getByAltText } from '@testing-library/react';

const Global = () => {

    const newsCategories = [
        'business',
        'entertainment',
        'general',
        'health',
        'science',
        'sports',
        'technology'
    ]

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
    const [categories, __setCategories] = useState(newsCategories);
    const [countries, __setCountries] = useState(newsCountries);

    const login = (token) => {
        window.localStorage.setItem("state-worldViewElite-token", token);
        setAuthToken(token);
        setNeedLogin(false);
    };

    const loadArticles = async () => {
        try {
            const response = await fetch(newsUrl);
            if (response.ok) {
                const { articles } = await response.json();
                setArticles(articles);
                console.log('articles in global func', articles)
                return articles;
            }
        } catch(e) { console.log(e); }
    };

    return (
        <UserContext.Provider
            value={{
                articles,
                setArticles,
                authToken,
                needLogin,
                login,
                loadArticles,
                categories,
                countries
            }}
        >
            <App />
        </UserContext.Provider>
    );
};

export default Global;
