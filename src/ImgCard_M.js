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
        maxWidth: 267,
    },
    typography: {
        fontSize: "14px"
    },
    cardActionArea: {
        maxHeight: "220px"
    }
});

export default function ImgMediaCard( { article }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.cardActionArea} onClick={() => window.open(article.url)}>
                <CardMedia
                    component="img"
                    alt={article.title}
                    height="140"
                    image={article.urlToImage}
                    title={article.title}
                />
                <CardContent >
                    <Typography className={classes.typography} gutterBottom variant="h5" component="h2">
                        {`${article.title.slice(0,90)}...`}
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
