import React from 'react';
import logo from './login avatar.png';
import first from './download.jpg';
import second from './second.jpg';
import third from './third.jpg';
import four from './four.jpg';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {  blueGrey } from '@material-ui/core/colors';
import Badge from '@material-ui/core/Badge';
import { createMuiTheme,  ThemeProvider } from '@material-ui/core/styles';



import Button from '@material-ui/core/Button';

import {  withStyles } from '@material-ui/core/styles';

console.log(logo)
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    width:'100%',
    height:'100%',
    // padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));
const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 3px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: '80%',
      // left: '90%',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);
const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 80,
    height: 80,
    // border: `2px solid ${theme.palette.background.paper}`,
    border:'2px solid lightpink',
  },
}))(Avatar);
const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
  },
});

const message = `Gartner believes that enterprise data will grow 650 percent in the next ... These visual tools enable non-developers to get data from websites `;

export default function AutoGridNoWrap() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{backgroundColor:'lightblue',width:'100%',height:'180px'}} m='0'>
        
     
      <Grid container wrap='nowrap' justify="flex-start" alignItems="flex-end">
          <Grid item lg={6} style={{paddingTop:'12px',paddingLeft:'500x'}} >
         <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
        <SmallAvatar alt="login" src={logo} className={classes.large}  variant="circle"  overlap="rectangle" spacing={40} />
      </StyledBadge>
      </Grid>
      </Grid>
      <Grid container wrap='nowrap' justify="flex-end" alignItems="flex-end">
      <Grid item sm={6} p={30}>
       <b> UserName</b>
       <div>User1234</div>
       <div style={{marginLeft:'68px'}}>Live your own dreams..</div>
      </Grid>
      <Grid item sm={6} p={60}>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" className={classes.margin} >
          Create New Tweet
        </Button>
      </ThemeProvider>
      </Grid>
        </Grid>
        </div>
        <Grid container theme={theme} >
          <Grid item xs={12} style={{fontWeight:'200px',fontSize:'40px',color:'grey'}} >
          <div style={{marginTop:'23px'}}>  Recent Tweets For The Related Topic</div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={8} >
            <div style={{border:'1px solid lightgrey',marginBottom:'20px',marginTop:'40px'}} ></div>
            </Grid>
            <Grid item xs={2}></Grid> 
        </Grid>
      <Paper className={classes.paper} elevation={9}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
       <a href="#"> <SmallAvatar alt="login" src={first} className={classes.large}  variant="square"  overlap="rectangle" spacing={40} />
       </a>
          </Grid>
          <Grid item lg={12} zeroMinWidth>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper} elevation={9} style={{width:'900px'}}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
       <a href="#"> <SmallAvatar alt="login" src={second} className={classes.large}  variant="square"  overlap="rectangle" spacing={40} />
       </a>
          </Grid>
          <Grid item lg={12} zeroMinWidth>
            <Typography noWrap>{message}</Typography>
          </Grid>
        </Grid>

      </Paper>
      <Paper className={classes.paper} elevation={9}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
        <a href="#"><SmallAvatar alt="login" src={third} className={classes.large}  variant="square"  overlap="rectangle" spacing={40} />
        </a>
          </Grid>
          <Grid item lg={12} zeroMinWidth>
            <Typography >{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
     
    </div>
  );
}
