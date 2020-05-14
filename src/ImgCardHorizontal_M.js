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
        display: "flex",
        flexDirection: 'column',
        maxWidth: "840px",
        maxHeight: "320px"
    },
    typography: {
        fontSize: "14px"
    },
    cardActionArea: {
        maxHeight: "320px"
    }
});

export default function ImgMediaCard() {
    let { articles, getArticles, setArticles, loadArticles } = useContext(UserContext);

    useEffect(() => {
        (async () => {
            const storedArticles = localStorage.getItem('worldViewArticles-layoutDev');
            console.log('stored', storedArticles);
            if (storedArticles !== 'undefined') {
                articles = JSON.parse(storedArticles);
                console.log('articles20', articles)
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

    const classes = useStyles();

    console.log('articles in img_M Horizontal', articles)
    console.log('In IMG Render!!!')

    if (articles.length === 0) return (
        <div>Loading...</div>
    );

    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.cardActionArea} onClick={() => window.open(articles[8].url)}>
                <CardMedia
                    component="img"
                    alt={articles[8].title}
                    height="140"
                    image={articles[8].urlToImage}
                    title={articles[8].title}
                />
                <CardContent >
                    <Typography className={classes.typography} gutterBottom variant="h5" component="h2">
                        {`${articles[8].title.slice(0,90)}...`}
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {/* {article.description} */}
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
