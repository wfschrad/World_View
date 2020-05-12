import React, { useEffect, useContext } from 'react';

import UserContext from './UserContext';
import HighlightArticle from './HighlightArticle';



const Home = () => {
    // const articles = localStorage.getItem('world-view-articles');
    const { loadArticles, setArticles } = useContext(UserContext);
    let { articles } = useContext(UserContext);

    useEffect(() => {
        (async () => {
            const storedArticles = localStorage.getItem('worldViewArticles-layoutDev');
            console.log('stored', storedArticles);
            if (storedArticles !== 'undefined') {
                articles = JSON.parse(storedArticles);
                setArticles(articles)
                console.log('articles in "if"', articles)
            }else {
                console.log('fetching');
                const fetchedArticles = await loadArticles();
                localStorage.setItem('worldViewArticles-layoutDev', JSON.stringify(fetchedArticles));
                articles = fetchedArticles
            }
        })();
            if (articles) console.log('articles in Home', articles);
    }, []);
    return (
        <div className='home-container'>
            <div className='home-main__left'></div>
            <div className='home-main__right'>
                { articles.length > 0 ? (
                    <div><HighlightArticle/>{JSON.stringify(articles[1])}</div>
                    ) : (
                    <div>{JSON.stringify(articles)}</div>
                    )
                }
            </div>
        </div>
    )
}

export default Home;
