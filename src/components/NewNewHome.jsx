import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
// import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import NewContactForm from './NewContactForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons'

import { Button, ButtonGroup } from 'reactstrap'

import "../styles/new-home.scss";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://highlandswebdesign.com/">
        highlandswebdesign.com
      </Link>
      {" 2020 | (310) 562-7707 | Portfolio of work upon request."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none"
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5),
    textTransform: "capitalize"
  },
  linkButton: {
    margin: theme.spacing(1, 1.5),
    textTransform: "capitalize",
    fontFamily: "Cabin",
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }
  },
  buttonWrapper: {
    display: "flex",
    margin: "30px 0",
    justifyContent: "center",
    width: "100%"
  }
}));

export default function NewHome() {
  const classes = useStyles();
  const [pageState, setPageState] = useState("why-us");

  const contactClick = () => {
    setPageState("contact"); 
    window.scrollTo(0,document.body.scrollHeight);
  }

  return (
    <CssBaseline>
      <div className="bg" style={{
        // backgroundPosition: "center center",
        // backgroundRepeat: "no-repeat",
        // backgroundAttachment: "fixed",
        // backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
        position: "absolute",
        // background: "#d4d4d4"
      }}>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent} className="title-wrapper">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
          className="main-title"
          style={{
            // border: "1px solid black",
            // borderRadius: "2px",
            // boxShadow: "0px 6px 10px 0px #000000",
            fontSize: "3rem",
            fontFamily: "Cinzel",
            width:"100%"
          }}
        >
          Highlands Web Design
          {/* This font doesnt have any more bold */}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
          className="main-sub-title"
          style={{
            fontSize: "1.3rem",
            fontFamily: "Cabin"
          }}
        >
          High-quality, affordable websites to take your company to the next
          level.
        </Typography>
      </Container>

      <Container>
        <div className={classes.buttonWrapper}>
          <ButtonGroup>
            <Button onClick={() => setPageState("why-us")}>Why Us?</Button>
            <Button onClick={() => setPageState("pricing")}>Pricing</Button>
            <Button onClick={() => contactClick() }>Contact</Button>
          </ButtonGroup>
        </div>

        <div className="centered-content">
        {pageState === "why-us" && (
          <div 
            className="new-home-grid1" 
            id="why-us" 
            style={{
              display: "flex"
            }}
          >
            <Typography 
              variant="h4" 
              align="center" 
              style={{
                margin: "20px 0",
                fontSize: "1.4rem",
                textAlign: "center"
              }}
            >
              <span style={{ fontWeight: "bold", fontSize: "150%", width: "100%", textAlign: "center" }}>
                Professional Development
              </span><br/>
              We take care of design, coding, hosting, and search engine
              optimization. Contact us today for a free consultation
            </Typography>
            {/* <div className="side-section">
              <FontAwesomeIcon className="font-awesome" icon={faLaptopCode} style={{
                fontSize: "12rem"
              }}/>
            </div> */}
          </div>
        )}

        {pageState === "pricing" && (
          <div className="new-home-grid1" id="pricing">
            <Typography variant="h4" align="center" style={{
                fontSize: "1.5rem"
            }}>
              <span style={{ fontWeight: "bold" }}>
                Affordable Web Design
              </span><br/>
              We offer financing options such as low monthly payments to get your site up and running without hurting your wallet!
            </Typography>
            <div className="side-section">
              {/* <div className="img-class"> */}
                {/* <ReactImageAppear 
                  src={moneyImg}
                  className="img-class"
                /> */}
              {/* </div> */}
              <FontAwesomeIcon className="font-awesome" icon={faMoneyCheckAlt} style={{
                fontSize: "12rem",
                color: "black"
              }}/>
            </div>

          </div>
        )}

        {pageState === "contact" && (
          <div style={{
            display: "flex",
            width: "65%",
            justifyContent: "center"
          }}>
            <NewContactForm/>
          </div>
        )}
        </div>
      </Container>

      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </div>
    </CssBaseline>
  );
}