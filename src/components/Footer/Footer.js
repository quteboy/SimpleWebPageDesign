import React from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
    footer: {
        width: "100%",
    },
    rowContainer: {
        paddingTop: '1.5em',
        paddingLeft: '2.5em',
        paddingBottom: '1.5em'
    },
    buttonStyle: {
        "&:hover": {
            backgroundColor: theme.palette.common.blue
        },
        textTransform: 'none',
        fontSize:'0.8em',
        fontWeight:'400'
    },
    footerTextStyle: {
        fontWeight: '400',
        color: '#86939e'
    }
}))
const Footer = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <footer className={classes.footer}>
            <Grid container direction='row' alignItems='center' className={classes.rowContainer}>
                <Hidden mdDown>
                    <Grid item container lg={6} direction='row' alignItems='center' justifyContent='flex-start'
                          spacing={3}>
                        <Grid item>
                            <Typography className={classes.footerTextStyle} variant='subtitle2'>
                                Powered by Great Studio
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.footerTextStyle} variant='subtitle2'>
                                Terms of use
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.footerTextStyle} variant='subtitle2'>
                                Privacy Policy
                            </Typography>
                        </Grid>
                    </Grid>
                </Hidden>
                <Grid item container lg={6} direction='row' alignItems='center'
                      justifyContent={matchesSM ? 'flex-start' : 'flex-end'} spacing={3}>
                    <Grid item>
                        <Typography className={classes.footerTextStyle} style={{color:'#687280'}} variant='subtitle2'>
                            Free 14 days trial.No credit card required.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button color='primary' variant='contained' className={classes.buttonStyle} disableElevation>
                            Get Started
                        </Button>
                    </Grid>

                </Grid>
            </Grid>
        </footer>
    );
};

export default Footer;