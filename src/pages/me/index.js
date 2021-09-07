import React from 'react'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        height: 'auto ',
        width: '300px',
        // border: '1px solid',
        textAlign: 'center',
        fontSize : '12px',
        color: 'grey'
       
    }

})

function Me() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h3>  Asgar Ansari .</h3>
            i'm from West champaran (BIHAR) Narkatiyagang , Dumria , Rampur , jaltoli,
            ward no 11 !  Mr. Nuralam Ansari is my father. he is a tailor Master !
            I  i'm feeling Alone.. because right now i'm studying in hyderabaad no one is my friend with me ? <br/>
            my collage name - <b>Holy Mary institute tecnology and Scince (JNTU .HYDERABAAD)</b> ,
            my topic is B-Tech in CSE (computer scince engineering)!

        </div>
    )
}

export default Me;
