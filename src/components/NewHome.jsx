// import React, { useState } from "react";
// import AppBar from "@material-ui/core/AppBar";
// import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Link from "@material-ui/core/Link";
// import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
// import Box from "@material-ui/core/Box";

// import ContactForm from './ContactForm';

// import ReactImageAppear from 'react-image-appear';
// import codeImg from "../images/code.jpg";
// import moneyImg from "../images/money.jpg";

// import "../styles/new-home.scss";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://highlandswebdesign.com/">
//         highlandswebdesign.com
//       </Link>
//       {" 2020."}
//     </Typography>
//   );
// }

// const useStyles = makeStyles(theme => ({
//   "@global": {
//     ul: {
//       margin: 0,
//       padding: 0,
//       listStyle: "none"
//     }
//   },
//   appBar: {
//     borderBottom: `1px solid ${theme.palette.divider}`
//   },
//   toolbar: {
//     flexWrap: "wrap"
//   },
//   toolbarTitle: {
//     flexGrow: 1
//   },
//   link: {
//     margin: theme.spacing(1, 1.5),
//     textTransform: "capitalize"
//   },
//   linkButton: {
//     margin: theme.spacing(1, 1.5),
//     textTransform: "capitalize",
//     // fontSize: "1.3rem"
//   },
//   heroContent: {
//     padding: theme.spacing(8, 0, 6)
//   },
//   footer: {
//     borderTop: `1px solid ${theme.palette.divider}`,
//     marginTop: theme.spacing(8),
//     paddingTop: theme.spacing(3),
//     paddingBottom: theme.spacing(3),
//     [theme.breakpoints.up("sm")]: {
//       paddingTop: theme.spacing(6),
//       paddingBottom: theme.spacing(6)
//     }
//   }
// }));

// export default function NewHome() {
//   const classes = useStyles();
//   const [pageState, setPageState] = useState("why-us");

//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <AppBar
//         position="sticky"
//         color="default"
//         elevation={0}
//         className={classes.appBar}
//       >
//         <Toolbar className={classes.toolbar}>
//           <Typography
//             variant="h6"
//             color="inherit"
//             noWrap
//             className={classes.toolbarTitle}
//           >
//             Highlands Web Design
//           </Typography>

//           <nav>
//             <Button
//               href="#contact"
//               color="primary"
//               variant="outlined"
//               className={classes.link}
//               onClick={() => setPageState("contact")}
//             >
//               Contact
//             </Button>
//           </nav>
//         </Toolbar>
//       </AppBar>
//       {/* Hero unit */}
//       <Container maxWidth="sm" component="main" className={classes.heroContent}>
//         <Typography
//           component="h1"
//           variant="h2"
//           align="center"
//           color="textPrimary"
//           gutterBottom
//         >
//           Highlands Web Design
//         </Typography>
//         <Typography
//           variant="h5"
//           align="center"
//           color="textSecondary"
//           component="p"
//         >
//           High-quality, affordable websites to take your company to the next
//           level.
//         </Typography>
//       </Container>

//       <Container>
//         <div className="buttons-wrapper">
//           <Button
//             color="secondary"
//             className={classes.linkButton}
//             onClick={() => setPageState("why-us")}
//             variant="contained"
//           >
//             Why Us?
//           </Button>

//           <Button
//             color="secondary"
//             className={classes.linkButton}
//             onClick={() => setPageState("pricing")}
//             variant="contained"
//           >
//             Pricing
//           </Button>

//           <Button
//             color="secondary"
//             className={classes.linkButton}
//             onClick={() => setPageState("contact")}
//             variant="contained"
//           >
//             Contact
//           </Button>
//         </div>

//         {pageState === "why-us" && (
//           <div className="new-home-grid1" id="why-us">
//             <Typography variant="h4" align="center">
//               <span style={{ fontWeight: "bold", textTransform: "uppercase" }}>
//                 Professional development
//               </span><br/>
//               We take care of design, coding, hosting, and search engine
//               optimization. Contact us today for a free consultation.
//             </Typography>
//             <div className="img-container">
              // <ReactImageAppear 
              //     src={codeImg}
              //     className="img-class"
              //   />
//             </div>
//           </div>
//         )}

//         {pageState === "pricing" && (
//           <div className="new-home-grid1" id="pricing">
//             <Typography variant="h4" align="center">
//               <span style={{ fontWeight: "bold" }}>
//                 AFFORDABLE WEB DESIGN
//               </span><br/>
//               We offer financing options such as low monthly payments to get your site up and running without hurting your wallet!
//             </Typography>
//             <div>
//               <ReactImageAppear 
//                 src={moneyImg}
//                 className="img-class"
//               />
//             </div>
//           </div>
//         )}

//         {pageState === "contact" && <ContactForm/>}

//       </Container>

//       {/* Footer */}
//       <Container maxWidth="md" component="footer" className={classes.footer}>
//         <Box mt={5}>
//           <Copyright />
//         </Box>
//       </Container>
//       {/* End footer */}
//     </React.Fragment>
//   );
// }

import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import ContactForm from './ContactForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons'

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
    // fontSize: "1.3rem"
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
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
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Highlands Web Design
          </Typography>
          <nav>
            {/* <Button href="#" color="primary" variant="outlined" className={classes.link}>
            Why Us?
          </Button> */}
            <Button
              href="#contact"
              color="primary"
              variant="outlined"
              className={classes.link}
              onClick={ () => contactClick() }
            >
              Contact Us
            </Button>
          </nav>
        </Toolbar>
      </AppBar>
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
            fontSize: "2.7rem"
          }}
        >
          Highlands Web Design
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
          className="main-sub-title"
          style={{
            fontSize: "1.3rem"
          }}
        >
          High-quality, affordable websites to take your company to the next
          level.
        </Typography>
      </Container>

      <Container>
        <div className="buttons-wrapper">
          <Button
            color="secondary"
            className={classes.linkButton}
            onClick={() => setPageState("why-us")}
            variant="contained"
          >
            Why Us?
          </Button>

          <Button
            color="secondary"
            className={classes.linkButton}
            onClick={() => setPageState("pricing")}
            variant="contained"
          >
            Pricing
          </Button>

          <Button
            color="secondary"
            className={classes.linkButton}
            onClick={() => contactClick()}
            variant="contained"
          >
            Contact
          </Button>
        </div>

        <div className="centered-content">
        {pageState === "why-us" && (
          <div className="new-home-grid1" id="why-us">
            <Typography 
              variant="h4" 
              align="center" 
              style={{
                fontSize: "1.5rem"
              }}
            >
              <span style={{ fontWeight: "bold" }}>
                Professional Development
              </span><br/>
              We take care of design, coding, hosting, and search engine
              optimization. Contact us today for a free consultation
            </Typography>
            <div className="side-section">
              {/* <div className="img-class">
                <ReactImageAppear 
                  src={codeImg}
                  className="img-class"
                />
              </div> */}
              <FontAwesomeIcon className="font-awesome" icon={faLaptopCode} style={{
                fontSize: "12rem"
              }}/>
            </div>

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
                fontSize: "12rem"
              }}/>
            </div>

          </div>
        )}

        {pageState === "contact" && (
          <div style={{
            display: "flex",
            width: "100%",
            justifyContent: "center"
          }}>
            <ContactForm/>
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
    </React.Fragment>
  );
}