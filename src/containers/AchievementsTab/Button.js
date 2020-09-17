import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function OutlinedButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        style={{ backgroundColor: "#E2B254", color: "white" }}
        onClick={props.onClick}
      >
        {props.description}
      </Button>
    </div>
  );
}
