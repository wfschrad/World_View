import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { newsUrl } from './config';
import UserContext from './UserContext';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function ImgMediaCard( { articles }) {
    const classes = useStyles();

    console.log('articles in img_M', articles)
    // const [articles, setArticles] = useState([]);
    // let article;
    // // const { articles, loadArticles } = useContext(UserContext);

    // useEffect(() => {
    //       // console.log(pokemon.length)

    //     // if (!articles) return null;

    //     (async () => {
    //         try {
    //             const response = await fetch(newsUrl);
    //             console.log('RESPONSEEEEEE:', response)
    //             if (response.ok) {
    //                 articles = await response.json().articles;
    //                 console.log('ARTICLES: ', articles)
    //                 // setArticles(articles);
    //                 console.log('single article', article)
    //                 // setArticles(articles);
    //             }
    //             else {
    //                 console.log('response not okay in img', response);
    //             }
    //         } catch (e) { console.log('error(29)', e) }
    //     })();
    // }, [articles]);

    // if (!articles) return null;

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://bitcoinist.com/wp-content/uploads/2020/05/road-trip-with-raj-_cbKur5I60A-unsplash-1920x1280.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {articles[4].description}
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Save
        </Button>
                <Button size="small" color="primary">
                    Full Story
        </Button>
            </CardActions>
        </Card>
    );
}
