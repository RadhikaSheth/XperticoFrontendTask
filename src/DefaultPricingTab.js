import React from 'react';
import "./App.css";
import Paper from '@material-ui/core/Paper';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  CheckCircleOutlineIcon: {
    color: "#5243c2",
    display: "inline-flex",
    verticalAlign: "center",
    fontSize: "20px"
  },
  defaultTabButton: {
    margin: theme.spacing(1),
    textTransform: 'none',
    maxHeight: "45px",
    maxWidth: "207px",
    minHeight: "45px",
    minWidth: "207px",
    borderRadius: "24px",
    fillOpacity: "0.1",
    backgroundColor: "#F496D119",
    color: "#F496D1",
    fontSize: "15px"
  },
}));

export default function DefaultPricingTab(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper className="defaultgrid" elevation={0}>
        <br />
        <span className="defaultTabPrice1"> ${props.defaultPrice}</span>
        <span className="defaultTabPrice2">&nbsp;&nbsp;/month</span>
        <br />
        <br />
        <span className="defaultTabTitle">{props.defaultTitle}</span>
        <br />
        <br />
        <span className="defaultTabDescription">{props.defaultDescription}</span>
        <br />
        <br />
        <span className="defaultTabList">
          {props.defaultList.map((defaultListItem) => {
            return (
              <>
                <CheckCircleOutlineIcon className={classes.CheckCircleOutlineIcon} />&nbsp;{defaultListItem}<br />
              </>
            )
          })}
        </span>
        <br />
          <Button className={classes.defaultTabButton}>
            Choose plan
          </Button>
      </Paper>
    </React.Fragment>
  );
}