import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import backgroundImg from "../../assets/img/bg3.png"
import mobileBackground from "../../assets/img/mobilebg2.jpg"

const useStyles = makeStyles((theme) => ({
    mainImgContainer: {
        backgroundImage: `url(${backgroundImg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: "60em",
        maxWidth: "100%",
        [theme.breakpoints.down("sm")]: {
            backgroundImage: `url(${mobileBackground})`,
            height: "30em",
            maxWidth: '100%'
        }
    },
    rowContainer: {
        padding: '5em',
        [theme.breakpoints.down("sm")]: {
            padding: '1.5em'
        }
    },
    mainTitle: {
        fontWeight: 'lighter',
        marginBottom: '0.3em',
        color: '#43484d',

    },
    subHeading: {
        color: '#848c96',
        fontSize: '1.2em',
        fontWeight: '350'
    }

}))
const PlatformPage = () => {
    const theme = useTheme();
    const classes = useStyles();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Grid container direction='row' justify='center'
              className={[classes.mainImgContainer, classes.rowContainer]}>
            <Grid item lg={10}>
                <Grid container direction='column' alignItems='center'>
                    <Grid item>
                        <Typography align='center' className={classes.mainTitle} variant={matchesSM ? 'h4' : 'h3'}>
                            The Cross-Platform App
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container direction='column' alignItems='center'>
                    <Grid item lg={5} md={6} sm={7} xs={12}>
                        <Typography align='center' className={classes.subHeading}>
                            I hate peeping Toms, For one thing they usually step all over the hedges and plants on
                            the side
                            of someones house killing them
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default PlatformPage;