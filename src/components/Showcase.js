import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    // maxWidth: 445,
    width:280,
    minHeight:350,
    margin:8,
  },
  media: {
    height: 220,
  },
  
});

export default function MediaCard({eachData:{name, url, price, id}, homeLink}) {
  const classes = useStyles();
  const navigate = useNavigate()

  return (
    <Card className={classes.root} onClick={()=> navigate(homeLink?'/':`product/${id}`)}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={url}
          title={name}
        />
        <CardContent className={classes.cardcontent}>
          <Typography variant="h6" component="h5">
            {name}
          </Typography>
          <Typography variant="h5" component="h4">
            {'$'+price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
