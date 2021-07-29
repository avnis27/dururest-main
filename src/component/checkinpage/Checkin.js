import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "../checkinpage/checkin.scss";
import logo from "../../assets/images/Oval.png";
import smlogo from "../../assets/images/image8.png";
import itemimg from "../../assets/images/Ellipse3.png";
import itemsec from "../../assets/images/Ellipse4.png";
import itemthr from "../../assets/images/Ellipse5.png";
import itemfr from "../../assets/images/Ellipse7.png";
import itemfv from "../../assets/images/Ellipse9.png";
import itemsix from "../../assets/images/Ellipse10.png";
import itemsvn from "../../assets/images/Ellipse12.png";
import itemegt from "../../assets/images/Ellipse14.png";
import itemnn from "../../assets/images/Ellipse15.png";
import itemten from "../../assets/images/Ellipse17.png";
import itemelvn from "../../assets/images/Ellipse19.png";
import itemtwl from "../../assets/images/Ellipse20.png";
import signature from "../../assets/images/signature.png";

import {
  Container,
  Avatar,
  Typography,
  Button,
  TextField,
  Link,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#F5F6FB",
    fontFamily : 'Avenir',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    background: "#F5F6FB",
  },
  icons: {
    display: "flex",
    justifyContent: "space-between",
    background: "#F5F6FB",
    marginBottom: "18px",
  },
  pink: {
    color: "theme.palette.getContrastText(pink[500])",
    backgroundColor: "#ffcf33",
  },
  green: {
    color: "#fff",
    backgroundColor: "#4caf50",
  },
  light: {
    color: "#fff",
    backgroundColor: "#d7e360",
  },
  btn: {
    display: "block",
    width: "100%",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} lg={6}>
            <Box className="smlogo">
              <img src={smlogo} />
            </Box>

            <Paper elevation={0} className={classes.paper}>
              <div className="main_content">
                <Typography variant="h4">Successful Check-In</Typography>
                <img src={logo} />
                <Typography variant="h5">Duru Restaurant</Typography>
                <Button variant="contained" className="primary_btn">
                  English
                </Button>
                <Button variant="outlined" className="dark">
                  Deutsch
                </Button>
              </div>
            </Paper>
          </Grid>
          <Grid item lg={6}>
            <Paper elevation={0} className="content">
              <Box className="headcontent_height">
                <Typography variant="h4">Hello Guest,</Typography>
              </Box>
              <Box className="content_height">
                <Typography variant="h6">
                  welcome to your online ordering experience!
                  <br />
                  We are excited to share our new product with you.
                </Typography>
              </Box>
              <Box className="content_height">
                <Typography variant="h6">
                  Your order goes directly to the waiter and the kitchen. Be up
                  to date with your order.
                </Typography>
              </Box>
              <Box className="content_height">
                <Typography variant="h6">
                  Try it out this time, if you don’t like it, well then order as
                  you always had previously.
                </Typography>
              </Box>
              <Box className="sgn_text">
                <img src={signature} />
                <Typography variant="caption" display="block" gutterBottom>
                  Umut Delil,
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  Founder Gastropro
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item lg={6}>
            <Paper elevation={0} className="bhvn">
              <Box className="last_content">
                <Typography variant="h6" display="inline" gutterBottom>
                  Your name
                </Typography>
                <Typography variant="caption" display="inline" gutterBottom>
                  optional
                </Typography>
                <Typography variant="body1" display="block" gutterBottom>
                  if empty, you will be call guest.
                </Typography>
              </Box>

              <form className={classes.root} autoComplete="off">
                <TextField
                  id="outlined-basic"
                  fullWidth
                  placeholder="Your first name (Guest)"
                  variant="outlined"
                />
              </form>
              <Box className="last_content">
                <Typography variant="h6" display="inline" gutterBottom>
                  Your profile picture
                </Typography>
                <Typography variant="caption" display="inline" gutterBottom>
                  optional
                </Typography>
                <Typography variant="body1" display="block" gutterBottom>
                  Choose your profile picture
                </Typography>
              </Box>

              <div className={classes.icons} id="profileimages">
                <img src={itemimg} />
                <img src={itemsec} />
                <img src={itemthr} />
                <img src={itemfr} />
                <img src={itemfv} />
                <img src={itemsix} />
              </div>
              <div className={classes.icons}>
                <img src={itemsvn} />
                <img src={itemegt} />
                <img src={itemnn} />
                <img src={itemten} />
                <img src={itemelvn} />
                <img src={itemtwl} />
              </div>
              <Button variant="contained" className={classes.btn}>
                Start ordering
              </Button>
              <Box className="policy_text">
                <Typography variant="h6">
                  By clicking "Start ordering" I have confirm I have read and
                  accept <Link href="#">turms of use</Link> and
                  <Link href="#"> privacy policy</Link>.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
