  
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
        <a href="mailto:contact.us.highlandswebdesign@gmail.com"style={styles.a}>contact.us.highlandswebdesign@gmail.com</a>
      </div>
    </div>
  );
}