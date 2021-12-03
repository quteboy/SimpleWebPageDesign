import React, {Fragment} from 'react';
import {makeStyles, useTheme} from '@material-ui/core'
import sideImg from "../../assets/img/Video.jpg"
import CardIcon1 from '../../assets/img/Icon3.png'
import CardIcon2 from '../../assets/img/Icon4.png'
import CardIcon3 from '../../assets/img/Icon5.png'
import CardIcon4 from '../../assets/img/Icon6.png'
import sketchLogo from '../../assets/img/Icon1.png'
import psLogo from '../../assets/img/Icon2.png'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
    rowContainer: {
        paddingLeft: "6.5em",
        paddingRight: "6.5em",
        paddingTop: '6em',
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em",
            paddingTop: '1.5em',
        }
    },
    iconSpace: {
        marginLeft: '2em'
    },
    paper: {
        // padding: theme.spacing(2),
        textAlign: 'center',
        // color: theme.palette.text.secondary,
    },
    subTextStyle: {
        color: '#868f99',
        fontSize: '1.2em',
        fontWeight:'350'
    },
    mainTextStyle: {
        color: '#43484d',
        fontSize: '2.5em',
        fontWeight: '350'
    },
    imgMargin: {
        marginBottom: '1em',
        height: '65px',
        width: 'auto'
    },
    sideImgStyle: {
        maxWidth: '100%'
    }
}))
const moduleData = [
    {
        label: 'Clean Structure',
        subText: '24/7 proactive threat scanning to prevent attack',
        cardLogo: CardIcon1,
        id: 1,
    },
    {
        label: 'Secure',
        subText: 'To keep your site safe from any hiccups',
        cardLogo: CardIcon2,
        id: 2,
    },
    {
        label: 'Layers',
        subText: 'Reliably powered by Google cloud with NGINX caching',
        cardLogo: CardIcon3,
        id: 3,
    },
    {
        label: 'Great Fonts',
        subText: 'Free and automatic SSL with Lets Encrypt',
        cardLogo: CardIcon4,
        id: 4,
    },
]
const ModulePage = () => {
    const theme = useTheme();
    const classes = useStyles();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    // const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Fragment>
            <Grid container direction='row' alignItems='center' className={classes.rowContainer}
                  justify={matchesMD ? 'center' : 'initial'}>
                <Grid item lg={6}>
                    <Grid container direction="column" spacing={0} justify='center'>
                        <Grid item>
                            <Typography className={classes.mainTextStyle} align={matchesMD ? 'center' : 'left'}
                                        gutterBottom>
                                What Is Module ?
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="column" spacing={0} justify='center'>
                        <Grid item lg={9}>
                            <Typography className={classes.subTextStyle} align={matchesMD ? 'center' : 'left'}
                                        gutterBottom
                            >
                                I hate peeping Toms, For one thing they usually step all over the hedges and plants on
                                the side
                                of someones house killing them
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction='row' alignItems='center' justify={matchesMD ? 'center' : undefined}
                          style={{marginTop: matchesMD ? '1em' : '1.5em', marginBottom: matchesMD ? '1em' : undefined}}>
                        <Grid item>
                            <img src={sketchLogo}/>
                        </Grid>
                        <Grid item>
                            <img className={classes.iconSpace} style={{textAlign: matchesMD ? 'center' : undefined}}
                                 src={psLogo}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={6}>
                    <Grid container direction='row' justify='flex-end'>
                        <Grid item>
                            <img className={classes.sideImgStyle} src={sideImg}/>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
            <Grid container alignItems='center' direction={"row"} justify='center'
                  className={classes.rowContainer}
                  style={{marginTop: matchesMD ? '1.5em' : '3em', marginBottom: matchesMD ? '1.5em' : '4em'}}
                  spacing={2}>
                {moduleData.map((card) => (
                    <Grid item lg={3} key={card.id}
                          style={{
                              marginBottom: matchesMD ? '1em' : undefined,
                              textAlign: 'center',
                              width: 'auto',
                              height: '200px',
                          }}>

                        <img  className={classes.imgMargin} src={card.cardLogo}/>

                        <Typography align='center'>
                            {card.label}
                        </Typography>
                        <Typography align='center'>
                            {card.subText}
                        </Typography>
                    </Grid>
                ))}

            </Grid>


        </Fragment>
    );
};

export default ModulePage;