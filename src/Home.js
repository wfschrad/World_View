import React, { useEffect, useContext } from 'react';

import UserContext from './UserContext';
import HighlightArticle from './HighlightArticle';
import ImgCard from './ImgCard_M';



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
                    <div className='story-container'>
                        <HighlightArticle/>
                        <div className='subHighlight-ImgCardPane'>
                            <ImgCard className='subHighlight-ImgCardPane__img' article={articles[2]}/>
                            <ImgCard className='subHighlight-ImgCardPane__img' article={articles[3]}/>
                            <ImgCard className='subHighlight-ImgCardPane__img' article={articles[4]}/>
                        </div>
                        <button className='home-additional-articles-button'>Browse more articles</button>
                        {/* Above button should render new container component with list of horizontal
                        highlight cards. Evaluate use case for lazy-loading */}
                        {JSON.stringify(articles[1])}
                    </div>
                    ) : (
                    <div>OH SNAP!</div>
                    )
                }
            </div>
        </div>
    )
}

export default Home;
