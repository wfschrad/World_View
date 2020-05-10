import React from 'react';

import { newsUrl } from './config';
import ImgCard from './ImgCard_M';

const fetchTest = async () => {
    try {
        const res = await fetch(newsUrl);
        const { articles } = await res.json();
        console.log('res:', res);
        console.log('articles:', articles)
        // return <ImgCard />
        console.log('at the end')
    } catch (e) { console.log(e) }
    return (<div>FUCK</div>);
}

export default fetchTest;