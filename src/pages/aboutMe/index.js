import { Link, Typography } from '@material-ui/core'
import React from 'react';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        height: 'auto ',
        width: '300px',
        border: '1px solid',
        textAlign: 'center',
        color: 'green',
        fontWeight: 'bold',
        "& .MuiLink-underlineHover": {
            marginRight: '15px'
        }
    }

})



function AboutMe() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h4>i am     <Link href='https://www.facebook.com/iasgaransari/'>Asgar.</Link> <br /> </h4>
            <Typography>alaways Be Happy my dear friends.  </Typography>
            <h3> my 12th friends list..._______</h3>

            <Link href='https://www.facebook.com/profile.php?id=100011686873672'>Sehbaj khan</Link> <br />
            <hr />
            <Link href='https://www.facebook.com/profile.php?id=100065094939553'>Farhan akhtar</Link><br /><hr />
            <Link href='https://www.facebook.com/mdekram.fajal'>Ekram fajal</Link><br /><hr />
            <Link href='https://www.facebook.com/bholakumar.kushawaha.1'>Bhola kumar</Link><hr />
            <Link href='https://www.facebook.com/mdfarhad.khan.10297701'>Farhad khan</Link> <hr />
            <Link href='https://www.facebook.com/profile.php?id=100036022300935'>Faiz Ahmad </Link><hr />
            <Link href='https://www.facebook.com/nisha.hussain.5680'>Shahnawaz Hussain</Link><hr />
            <Link href='https://www.facebook.com/profile.php?id=100029049930795'>saif bhai </Link> <hr />
            <Link href='https://www.facebook.com/romeo.kaif.790'> RoMeo KaiF </Link> <hr />
            <Link href='https://www.facebook.com/ajim.akhtar.9'>  Ajim Akhtar </Link> <hr />
            <Link href='https://www.facebook.com/profile.php?id=100040832596594' >      Khurshed alam</Link>

            <h6>Click on Name...."Magic"</h6>







        </div>
    )
}

export default AboutMe
