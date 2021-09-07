import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        height: 'auto',
        width: '300px',
        // border: '1px solid',
        textAlign: 'center'
    },
    text: {
        height: 'auto',
        width: '100%',
        // border: '1px solid',
        fontWeight: 'bold',
        color: 'green'

    }

})

export default function Mywork() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h4>
                <a href='https://github.com/asgaransari19/CoinBasedApp/tree/development'>coineBased App</a><br /><br />
                <a className={classes.h4} href='https://github.com/asgaransari19/assessmentApp/tree/frontend'>assessment App</a><br /><br />
                <a href='https://github.com/asgaransari19/Expanse-Management'>expenssessManagement App</a>
            </h4>
            <h6>these are my projects</h6>

            <h4> my Skills</h4>
            <div className={classes.text}>HTML__<br />
                CSS__<br />
                JAVASCRIPT__<br />
                REACTJS__<br />
                MATERIALUI(Mui)_<br /><br />
                𝐹𝓇𝑜𝓃𝓉-𝐸𝓃𝒹 𝒹𝑒𝓋𝑒𝓁𝑜𝓅𝑒𝓇
            </div>
            <h6>click on blur colour text_  "magic"</h6>

        </div>
    )
}


