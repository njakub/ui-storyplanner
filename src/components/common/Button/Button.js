import React, { useState } from "react";
import MaterialButton from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const Button = ({ field, form, ...props }) => {
  const useStyles = makeStyles({
    root: {
      marginTop: "20px"
    }
  });

  const classes = useStyles();

  return (
    <MaterialButton
      {...props}
      size="medium"
      variant="outlined"
      className={classes.root}
    />
  );
};

export default Button;
