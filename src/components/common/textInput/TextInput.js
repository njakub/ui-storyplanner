import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const TextInput = ({ field, form, ...props }) => {
  const useStyles = makeStyles({
    root: {
      paddingRight: "20px"
    }
  });

  const classes = useStyles();

  return (
    <TextField {...field} {...props} size="medium" className={classes.root} />
  );
};

export default TextInput;
