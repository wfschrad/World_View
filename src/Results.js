import React, { useContext } from 'react';

import UserContext from './UserContext';
import HighlightArticle from './HighlightArticle';

const Results = () => {
    let { articles } = useContext(UserContext);
    console.log('articles in results', articles)

    return (
        <div className='results-container'>
            <div className='results-container__left'></div>
            <div className='results-container__main'>
                {articles.map((article, idx) => (
                    <HighlightArticle key={idx} article={article}/>
                ))}

            </div>
        </div>
    )
}

export default Results;
