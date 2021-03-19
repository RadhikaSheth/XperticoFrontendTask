import React from 'react';
import "./App.css";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import DefaultPricingTab from "./DefaultPricingTab";
import PremiumPricingTab from "./PremiumPricingTab";

export default function FrontendTask() {
  var tabList = ["All limited links", "Own analytics platform", "Chat support", "Optimize hashtags", "Unlimited users"];
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={"table"}>
        <Grid container spacing={5} justify="center" alignItems="center" >
          <Grid item >
            <DefaultPricingTab
              defaultPrice="20"
              defaultTitle="Intro"
              defaultDescription="For most businesses that want to otpimize web queries"
              defaultList={tabList}
            />
          </Grid>
          <Grid item >
            <DefaultPricingTab
              defaultPrice="50"
              defaultTitle="Base"
              defaultDescription="For most businesses that want to otpimize web queries"
              defaultList={tabList}
            />
          </Grid>
          <Grid item style={{ marginTop: "-50px" }}>
            <PremiumPricingTab
              premiumPrice="100"
              premiumTitle="Pro"
              premiumDescription="For most businesses that want to otpimize web queries"
              premiumList={tabList}
            />
          </Grid>
          <Grid item >
            <DefaultPricingTab
              defaultPrice="200"
              defaultTitle="Enterprise"
              defaultDescription="For most businesses that want to otpimize web queries"
              defaultList={tabList}
            />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}