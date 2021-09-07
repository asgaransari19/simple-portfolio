import React from 'react'
import { Badge, Button, Drawer, Link, List, ListItem, makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";


const useStyles = makeStyles({
    root: {
        backgroundSize: 'cover',
        backgroundImage: ' url(./assets/asgar.jpeg)',
        width: '300px',
        height: '500px',
        border: '1px solid',
        margin: 'auto auto auto auto ',
        borderRadius: '10px',
        boxShadow: '2px 3px 20px black'
    },
    menuButton: {
        height: '30px',
        width: '30px',
        // border: '1px solid',
        marginLeft: '250px',
        color: 'white',
        marginTop: '20px'

    },
    dp: {
        height: '100px',
        width: '100px',
        border: '1px solid  #00c3ff ',
        borderRadius: '50%',
        color: 'white',
        margin: '120px auto auto auto',
        backgroundSize: 'cover',
        backgroundImage: ' url(./assets/asgar.jpeg)',
        boxShadow: '2px 3px 20px #44b700'

    },

    badge: {
        height: '15px',
        width: '15px',
        borderRadius: '50%',
        border: '1px solid #44b700 ',
        backgroundColor: '#44b700',
        color: '#44b700',
        margin: '60px auto  0 80%',


    },


    icons: {
        height: '50px',
        width: '100%',
        // border: '1px solid',
        marginTop: '50px',
        display: 'flex',
        justifyContent: 'space-Around'
    },
    btn: {
        "& .MuiSvgIcon-root": {
            height: '40px',
            color: ' #00c3ff',
            width: '40px',
            // border: '1px solid  #00c3ff ',
        }
    },

    drawer: {

        "& .MuiIconButton-label ": {
            justifyContent: 'start'
        },
        // width: '100%',
        "& .MuiList-padding": {

            width: '200px',
            textAlign: 'center',
            "& .MuiTypography-displayBlock": {
                marginTop: '10px',
                fontSize: '18px',
                fontWeight: 'bold',

            }
        }
    }
})

const list = [
    {
        text: 'My dear friends.',
        index: (0),
        pagePaths: '/aboutme'
    },
    {
        text: 'me',
        index: (1),
        pagePaths: '/me'
    },
    {
        text: 'My Work',
        index: (2),
        pagePaths: '/mywork'
    },

];

function Asgar() {
    const classes = useStyles();
    const [open, setOpen] = React.useState();

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <IconButton
                onClick={handleDrawerOpen}
                className={classes.menuButton}  >

                <Badge color="secondary" variant="dot" >
                    <MenuIcon />
                </Badge>

            </IconButton>
            <div className={classes.dp}>

                <Badge className={classes.badge}
                    overlap="circular"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                >
                </Badge>


            </div>
            <div className={classes.icons}>
                <Button className={classes.btn} href='https://www.facebook.com/iasgaransari'> <Badge color='primary' badgeContent={10} overlap='circular'>
                    <FacebookIcon />
                </Badge>
                </Button>

                <Button size='large' className={classes.btn} href='https://www.     instagram.com/imasgar_19/'> <Badge color="error" badgeContent={1} >
                    <InstagramIcon />
                </Badge>
                </Button>

                <Button size='large' className={classes.btn} href='https://github.com/asgaransari19'><Badge color="secondary" badgeContent={5} >
                    <GitHubIcon />
                </Badge>
                </Button>


                <Button className={classes.btn} href='https://www.youtube.com/'>
                    <Badge color="secondary" badgeContent={5} >
                        <YouTubeIcon />
                    </Badge>
                </Button>


            </div>

            <Drawer className={classes.drawer} open={open}>

                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
                <List>

                    {
                        list.map((obj, i) => {
                            return <ListItem
                                className={classes.listitom}
                                component={Link}
                                href={obj.pagePaths}>

                                {obj.text}
                            </ListItem>
                        })
                    }



                </List>
            </Drawer>
        </div>


    )
}

export default Asgar;