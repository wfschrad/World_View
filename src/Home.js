import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import UserContext from './UserContext';
import HighlightArticle from './HighlightArticle';
import ImgCard from './ImgCard_M';



const Home = () => {
    // const articles = localStorage.getItem('world-view-articles');
    const { loadArticles, setArticles, currCountry } = useContext(UserContext);
    let { articles } = useContext(UserContext);
    let history = useHistory();

    const routeToResults = () => {
        history.push('/showAll')
    }

    useEffect(() => {
        (async () => {
            const storedArticles = localStorage.getItem(`worldViewArticles-layoutDev-${currCountry}`);
            if (storedArticles && storedArticles !== 'undefined') {
                console.log('stored in...', storedArticles);
                articles = JSON.parse(storedArticles);
                setArticles(articles)
            }else {
                console.log('in else before fetch')
                const fetchedArticles = await loadArticles();
                console.log('in else after fetch')
                localStorage.setItem(`worldViewArticles-layoutDev-${currCountry}`, JSON.stringify(fetchedArticles));
                articles = fetchedArticles
            }
        })();
            if (articles) console.log('articles in Home', articles);
    }, [currCountry]);
    return (
        <div className='home-container'>
            <div className='home-main__left'></div>
            <div className='home-main__center'>
                { (articles && articles.length > 0) ? (
                    <div className='story-container'>
                        <HighlightArticle article={articles[0]}/>
                        <div className='subHighlight-ImgCardPane'>
                            <ImgCard className='subHighlight-ImgCardPane__img' article={articles[2]}/>
                            <ImgCard className='subHighlight-ImgCardPane__img' article={articles[3]}/>
                            <ImgCard className='subHighlight-ImgCardPane__img' article={articles[4]}/>
                        </div>
                        <button onClick={routeToResults} className='home-additional-articles-button'>BROWSE MORE</button>
                        {/* Above button should render new container component with list of horizontal
                        highlight cards. Evaluate use case for lazy-loading */}
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
