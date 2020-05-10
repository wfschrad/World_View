import React, { useState, useContext } from 'react';
// import { Button } from 'react-router-dom';

import { newsUrl } from './config';
import { asyncHandler } from './utils';
import UserContext from './UserContext';

const handleClick = asyncHandler(async (ev) => {
    console.log('Fetch button clicked');

    //fetch weather
    // loadArticles();
});

const SearchReturn = () => {
    console.log('user context (function): ', UserContext)
    console.log('userContext', useContext(UserContext));
    // const { articles, loadArticles } = useContext(UserContext);
    return (
        <div>
            <span className='news-fetch-button' onClick={handleClick}>Fetch newsApi return</span>
            <div className='new-fetch-simple-content-box'></div>
        </div>
    )
};

export default SearchReturn;

//JSON RESPONSE


// log.js:24 [HMR] Waiting for update signal from WDS...
// SearchReturn.js:7 Fetch button clicked
// SearchReturn.js:12 data
// {status: "ok", totalResults: 4149, articles: Array(20)}
// articles: Array(20)
// 0:
// {
//    author: "Mike Bohn"
    // content: "By Mike Bohn |
    // ↵May 8, 2020 11:51 pm
    // ↵The eve of UFC 249 has proven to be a dramatic one as the promotion lost a fight for its comeback event due to a positive coronavirus test.
    // ↵Ronaldo Souza was flagged for COVID-19, causing his middleweight bout with Uriah… [+4264 chars]"
    // description: "A less-than-ideal situation, to say the least."
    // publishedAt: "2020-05-09T03:51:33Z"
    // source: {
        // id: "usa-today"
        // name: "USA Today"
    // }__proto__: {
        // constructor: ƒ Object()
        // hasOwnProperty: ƒ hasOwnProperty()
        // isPrototypeOf: ƒ isPrototypeOf()
        // propertyIsEnumerable: ƒ propertyIsEnumerable()
        // toLocaleString: ƒ toLocaleString()
        // toString: ƒ toString()
        // valueOf: ƒ valueOf()
        // __defineGetter__: ƒ __defineGetter__()
        // __defineSetter__: ƒ __defineSetter__()
        // __lookupGetter__: ƒ __lookupGetter__()
        // __lookupSetter__: ƒ __lookupSetter__()
        // get __proto__: ƒ __proto__()
  //   }   set __proto__: ƒ __proto__()
    // title: "Twitter reacts to 'Jacare' Souza's positive coronavirus test before UFC 249"
    // url: "https://mmajunkie.usatoday.com/2020/05/ufc-249-twitter-reacts-jacare-souza-coronavirus-test"
    // urlToImage: "https://usatmmajunkie.files.wordpress.com/2019/11/jacare-souza-ufc-sao-paulo-2.jpg?w=1024&h=576&crop=1"
    // __proto__:
    // constructor: ƒ Object()
    // hasOwnProperty: ƒ hasOwnProperty()
    // isPrototypeOf: ƒ isPrototypeOf()
    // propertyIsEnumerable: ƒ propertyIsEnumerable()
    // toLocaleString: ƒ toLocaleString()
    // toString: ƒ toString()
    // valueOf: ƒ valueOf()
    // __defineGetter__: ƒ __defineGetter__()
    // __defineSetter__: ƒ __defineSetter__()
    // __lookupGetter__: ƒ __lookupGetter__()
    // __lookupSetter__: ƒ __lookupSetter__()
    // get __proto__: ƒ __proto__()
    // set __proto__: ƒ __proto__()
//}
