import React from 'react';
import "./App.css";
import Header from "./Header";
import SwitchTabs from "./SwitchTabs";
import Table from "./Table";
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
export default function Pricing() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box justifyContent="center" className="priceStyle">
        <Header />
        <SwitchTabs />
        <Table />
      </Box>
    </React.Fragment>
  );
}