import React from 'react';
import "./App.css";
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
  tabs: {
    width: "110px",
    color: "#848199",
    minWidth: "110px",
    height: "44px",
    borderRadius: "22px",
    minHeight: "44px",
    background: 'white',
    '&.Mui-selected': {
      background: '#5243C2',
      color: "#F496D1",
      borderRadius: "22px",
      weight: "900",
      style: "normal",
      size: "10px",
      spacing: " 0.833333px",
    }
  },
}));

export default function SwitchTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <div className="switchtabs">
        <Tabs indicatorColor="white" value={value} onChange={handleChange} >
          <Tab className={classes.tabs} label={<span className="tabLabelStlye">Monthly</span>}/>
          <Tab className={classes.tabs} label={<span className="tabLabelStlye">Yearly</span>}/>
        </Tabs>
      </div>
    </React.Fragment>
  );
}




