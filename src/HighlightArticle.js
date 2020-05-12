import React, { useContext } from 'react';

import UserContext from './UserContext';

const HighlightArticle = () => {
    const { articles } = useContext(UserContext);
    return (
        <div className='highlight-article' onClick={() => window.open(articles[1].url)}>
            <div className='highlight-article__content'>
                <div className='highlight-article__content__title'>
                    {articles[1].title}
                </div>
                <div className='highlight-article__content__description'>
                    {articles[1].content.slice(0,260)}
                </div>
            </div>
            <img className='highlight-article__img'src={articles[1].urlToImage} alt={articles[0].title}/>
        </div>
    )
}

export default HighlightArticle;
