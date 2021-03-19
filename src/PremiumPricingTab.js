import React from 'react';
import "./App.css";
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    CheckIcon: {
      color: "white",
      display: "inline-flex",
      verticalAlign: "center",
      fontSize: "20px"
    },
    premiumTabButton: {
      margin: theme.spacing(1),
      textTransform: 'none',
      maxHeight: "45px",
      maxWidth: "232px",
      minHeight: "45px",
      minWidth: "232px",
      borderRadius: "24px",
      fillOpacity: "0.1",
      backgroundColor: "#F496D1",
      color: "#231D4F",
      fontSize: "15px"
    },
    premiumTopButton: {
      margin: theme.spacing(1),
      textTransform: 'none',
      maxHeight: "27px",
      maxWidth: "121px",
      minHeight: "27px",
      minWidth: "121px",
      borderRadius: "13.5px",
      fillOpacity: "0.1",
      backgroundColor: "#4031B3",
      color: "#F496D1",
      fontSize: "10px",
    },
  }));
export default function PremiumPricingTab(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Paper className="populargrid" square={false} style={{ borderRadius: "26px", backgroundColor: " #5243C2", boxShadow: "0px 42px 34px rgba(82, 67, 194, 0.295755)" }}>
                <div style={{ textAlign: "end" }}>
                    <Button className={classes.premiumTopButton}>
                        MOST POPULAR
                    </Button>
                </div>
                <span className="premiumTabPrice1"> ${props.premiumPrice}</span>
                <span className="premiumTabPrice2">&nbsp;&nbsp;/month</span>
                <br />
                <br />
                <span className="premiumTabTitle">{props.premiumTitle}</span>
                <br />
                <br />
                <span className="premiumTabDescription">{props.premiumDescription}</span>
                <br />
                <br />
                <span className="premiumTabList">
                    {props.premiumList.map((premiumListItem) => {
                        return (
                            <>
                                <CheckIcon className={classes.CheckIcon} />&nbsp;{premiumListItem}<br />
                            </>
                        )
                    })}
                </span>
                <br />
                <Button className={classes.premiumTabButton}>
                    Choose plan
                </Button>
            </Paper>
        </React.Fragment>
    );
}