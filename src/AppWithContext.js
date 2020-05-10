import React, { useState } from 'react';
import App from './App';
import { UserContext } from './UserContext';
import { newsUrl } from "./config";

const AppWithContext = () => {
    const localStorageToken = localStorage.getItem("state-worldViewElite-token");

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
                singlearticle,
                authToken,
                needLogin,
                login,
                loadArticles,
                getOneArticle,
            }}
        >
            <App />
        </UserContext.Provider>
    );
};

export default AppWithContext;
