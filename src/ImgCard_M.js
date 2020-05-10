import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { newsUrl } from './config';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default async function ImgMediaCard() {
    const classes = useStyles();
    console.log('in IMG')
    try {
        const response = await fetch(newsUrl);
        console.log('RESPONSEEEEEE:', response)
        if (response.ok) {
            const { articles } = await response.json();
            console.log('ARTICLES: ', articles)
            // setArticles(articles);
        }
        else {
            console.log('fuck response', response);
        }
    } catch (e) { console.log('error(29)', e) }
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
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
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