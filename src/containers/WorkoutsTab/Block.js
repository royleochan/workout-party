import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
// import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 500,
    minWidth: 300,
  },
  media: {
    height: 500,
    width: 500,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  // const isDesktop = useMediaQuery("min-width: 600px", "min-height: 600px");

  return (
    <div style={{ padding: "1%" }}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            // image={`${props.image}`}
            image={props.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.header}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
      </Card>
    </div>
  );
}
