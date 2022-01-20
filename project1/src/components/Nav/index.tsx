import React, { useState, useEffect } from "react";
import "./style.scss";
import avata1 from "../../assets/images/avata1.png";
// import { Link, Navigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Search from "../Search";
const index = () => {

  return (
    <React.Fragment>
      <AppBar
        sx={{ backgroundColor: "#F9F6F4" ,height: '85px', minWidth: '620px' }}
        position="sticky"
        elevation={0}
      >
        <Toolbar sx={{height: "100%"}}>
          <Grid container  spacing={1} alignItems="center">
            <Grid item xs={2.2} sx={{minWidth:'280px'}} lg={1}>
            </Grid>
            <Grid container item xs={3}>
              <Search name="Search"></Search>
            </Grid>
            <Grid item xs>
            </Grid>
            <Grid container item xs={3} justifyContent="flex-end">
              <Tooltip title="Alerts • No mail">
                <IconButton sx={{color: "#000"}}>
                  <MailOutlineIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Alerts • No alerts">
                <IconButton sx={{color: "#000"}}>
                  <NotificationsNoneIcon />
                </IconButton>
              </Tooltip>
            

            
              <IconButton
                color="inherit"
                
              >
                <Avatar
                  src={avata1}
                  alt="My Avatar"
                />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
        {/* <Toolbar className="kz-index">
          <Box className="kz-index" sx={{ width: 'auto' , height: 273}}></Box>
        </Toolbar> */}
      </AppBar>
    </React.Fragment>
  );
};

export default index;
