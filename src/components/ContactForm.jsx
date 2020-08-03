  
import React from 'react'
import {Typography} from '@material-ui/core'

const styles = {
  a: {
    color: "red",
    fontSize: "1rem"
  },
  mailConatiner: {
    display: "flex",
    justifyContent: "center"
  }
}

export default function ContactForm() {
  return (
    <div >
      <Typography component="h1" variant="h5" align="center">
        Send us an email:
      </Typography>
      <div style={styles.mailConatiner}>
        <a href="mailto:Contact@HighlandsWebDesign.com"style={styles.a}>Contact@HighlandsWebDesign.com</a>
      </div>
    </div>
  );
}