import React, { useState, useEffect } from 'react';

import { newsUrl } from './config';
import ImgCard from './ImgCard_M';

const FetchTest = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
    (async () => {
        try {
            const res = await fetch(newsUrl);
            const { articles } = await res.json();
            setArticles(articles);
            console.log('res:', res);
            console.log('articles:', articles)
            // return <ImgCard />
            console.log('at the end')
        } catch (e) { console.log(e) }
    })();
    console.log('articles in fetchTest', articles);
    }, []);
    if (articles.length === 0) return null;
    return (<ImgCard articles={articles}/>);
}

export default FetchTest;
