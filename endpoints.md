## News Api Endpoints ##

# topic-search: all headlines #
* https://newsapi.org/v2/everything?q=bitcoin&apiKey=API_KEY

# topic-search: top-headlines #
* https://newsapi.org/v2/top-headlines?q=trump&apiKey=API_KEY

# source-search: top-headlines #
* https://newsapi.org/v2/top-headlines?sources=associated-press&apiKey=API_KEY
* https://newsapi.org/v2/top-headlines?sources=associated-press,entertainment-weekly&apiKey=API_KEY

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('API_KEY');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
  sources: 'bbc-news,the-verge',
  q: 'bitcoin',
  category: 'business',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});
// To query /v2/everything
// You must include at least one q, source, or domain
newsapi.v2.everything({
  q: 'bitcoin',
  sources: 'bbc-news,the-verge',
  domains: 'bbc.co.uk, techcrunch.com',
  from: '2017-12-01',
  to: '2017-12-12',
  language: 'en',
  sortBy: 'relevancy',
  page: 2
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});
// To query sources
// All options are optional
newsapi.v2.sources({
  category: 'technology',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      sources: [...]
    }
  */
});

---------------------------------------------------------
Request parameters
country
The 2-letter ISO 3166-1 code of the country you want to get headlines for. Possible options: ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za . Note: you can't mix this param with the sources param.

category
The category you want to get headlines for. Possible options: business entertainment general health science sports technology . Note: you can't mix this param with the sources param.

sources
A comma-seperated string of identifiers for the news sources or blogs you want headlines from. Use the /sources endpoint to locate these programmatically or look at the sources index. Note: you can't mix this param with the country or category params.

q
Keywords or a phrase to search for.

pageSize
int
The number of results to return per page (request). 20 is the default, 100 is the maximum.

page
int
Use this to page through the results if the total results found is greater than the page size.

apiKey
REQUIRED
Your API key. Alternatively you can provide this via the X-Api-Key HTTP header.

Response object
status
string
If the request was successful or not. Options: ok, error. In the case of error a code and message property will be populated.

totalResults
int
The total number of results available for your request.

articles
array[article]
The results of the request.

source
object
The identifier id and a display name name for the source this article came from.

author
string
The author of the article

title
string
The headline or title of the article.

description
string
A description or snippet from the article.

url
string
The direct URL to the article.

urlToImage
string
The URL to a relevant image for the article.

publishedAt
string
The date and time that the article was published, in UTC (+000)

content
string
The unformatted content of the article, where available. This is truncated to 260 chars for Developer plan users.
