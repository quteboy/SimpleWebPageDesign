import React from 'react';
import GamingImg from '../../assets/img/ImageLaptop.jpg';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from '@material-ui/core/Grid';
import { shadows } from '@material-ui/system';
const useStyles = makeStyles((theme) => ({
    imgContainer: {
        position: 'relative',
    },
    imageItSelf: {
        marginTop:'-80px',
        marginBottom:'10px'
    },
    image: {
        maxWidth: '100%',
        boxShadow: theme.shadows[20],
        [theme.breakpoints.down("sm")]: {
            boxShadow: theme.shadows[10],
        }
    }
}))
const GamingPage = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div>
            <Grid container direction='row' justify='center'>
                <Grid item className={classes.imageItSelf}>
                    <img boxShadow={40} className={classes.image} src={GamingImg}/>
                </Grid>
            </Grid>

        </div>
    );
};

export default GamingPage;