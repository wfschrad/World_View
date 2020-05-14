import React, { useState } from 'react';
import App from './App';
import UserContext from './UserContext';
import { newsUrlTopCountry, newsUrlTopCountryV1, apiKEY } from "./config";
import { getByAltText } from '@testing-library/react';

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(apiKEY);

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
    const [currCountry, setCurrCountry] = useState('us')

    const login = (token) => {
        window.localStorage.setItem("state-worldViewElite-token", token);
        setAuthToken(token);
        setNeedLogin(false);
    };

    const loadArticles = async () => {
        try {
            const response = await fetch(`${newsUrlTopCountryV1}${currCountry}&apiKey=${apiKEY}`);
            // const response = await newsapi.v2.topHeadlines({
            //     language: 'en',
            //     country: currCountry
            // });
            console.log('language en')
            if (response.ok) {
                const { articles } = await response.json();
                setArticles(articles);
                console.log('res', response);
                console.log('articlesGLOBE99', articles)
                return articles;
            }
        } catch(e) { console.log(e); }
    };
    const getArticles = async() => {
        const storedArticles = localStorage.getItem(`worldViewArticles-layoutDev-${currCountry}`);
        console.log('stored', storedArticles);
        if (storedArticles !== 'undefined') {
            articles = JSON.parse(storedArticles);
            setArticles(articles)
        }else {
            console.log('fetching');
            const fetchedArticles = await loadArticles();
            localStorage.setItem(`worldViewArticles-layoutDev-${currCountry}`, JSON.stringify(fetchedArticles));
            articles = fetchedArticles
            setArticles(articles);
            return articles;
        }
    };

    return (
        <UserContext.Provider
            value={{
                articles,
                setArticles,
                authToken,
                setAuthToken,
                needLogin,
                setNeedLogin,
                categories,
                __setCategories,
                countries,
                __setCountries,
                login,
                loadArticles,
                getArticles,
                currCountry,
                setCurrCountry
            }}
        >
            <App />
        </UserContext.Provider>
    );
};

export default Global;
