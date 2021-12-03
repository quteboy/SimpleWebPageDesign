import React, {Fragment, useState} from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LappyImage from "../../assets/img/LaptopLayer3.png"
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        backgroundColor: theme.palette.common.blue,
        "& .MuiFormLabel-root": {
            color: "#83b3da",
            fontWeight: 'lighter',
            fontSize: '0.9em'
        }
    },
    rowContainer: {
        paddingLeft: "5em",
        paddingTop: "5em",
        paddingBottom: '5em',
        [theme.breakpoints.down("sm")]: {
            paddingLeft: '1.5em',
            paddingBottom: '1.5em',
            paddingTop: '1.5em',
        },
    },
    imageStyle: {
        maxWidth: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '30em',
        [theme.breakpoints.down("sm")]: {
            height: 'unset',
            marginRight: '10em'
        }
    },
    tryButtonStyle: {
        padding: '10px',
        width: '130px',
        color: '#fff',
        height: '50px',
        textTransform: 'none',
        "&:hover": {
            backgroundColor: theme.palette.common.green,
        },
        [theme.breakpoints.down("md")]: {
            marginBottom: '1em',
        }
    },
    inputStyle: {
        backgroundColor: '#3080c1',
        borderRadius: '3px',
        marginBottom: '1em',
        [theme.breakpoints.down("md")]: {
            marginRight: '1.5em'
        }

    },
    inputLabelStyle: {
        marginBottom: '10px'
    },
    mainHeadingStyle: {
        color: '#ffff',
        [theme.breakpoints.down("md")]: {
            paddingRight: '1em'
        }
    },
    subHeadingStyle: {
        marginBottom: '2em',
        color: '#ffff',
        lineHeight: '1.5',
        fontWeight: 'lighter',
        wordSpacing: '7px',
        [theme.breakpoints.down("sm")]: {
            paddingRight: '1em'
        }
    },
    inputRightMR: {
        paddingRight: undefined,
        [theme.breakpoints.down("sm")]: {
            paddingRight: 0
        }
    },
    noBorder: {
        border: "none",
    },
}))
const GetStarted = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const validationSchema = Yup.object().shape({

        email: Yup.string()
            .required('!Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .required('!Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password must not exceed 40 characters'),


    });
    const {
        register,
        control,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const onSubmit = data => {
        console.log(JSON.stringify(data, null, 2));
    };
    return (
        <Grid
            container
            alignItems="center"
            className={[classes.root, classes.rowContainer]}
            direction={'row'}
            spacing={0}
        >
            <Grid item lg={6}>
                <Grid container direction='column' spacing={0}>
                    <Grid item lg={8}>
                        <Typography className={classes.mainHeadingStyle} variant={matchesMD ? 'h4' : 'h3'}
                                    align={matchesMD ? 'center' : undefined} gutterBottom>Get Started Now
                        </Typography>
                    </Grid>


                </Grid>
                <Grid container direction='column' spacing={0}>
                    <Grid item lg={8}>
                        <Typography className={classes.subHeadingStyle} variant='h6'
                                    align={matchesMD ? 'center' : undefined} gutterBottom>
                            Sign up and quickly get up running with examples,tutorials,
                            documentations and a helpful community
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container direction='column' spacing={0} alignItems={matchesMD ? 'center' : undefined}
                      justifyContent={matchesMD ? 'center' : undefined}>
                    <Grid item>
                        <TextField
                            className={classes.inputStyle}
                            label='Email'
                            variant='outlined'
                            style={{width: matchesMD ? "320px" : "450px"}}
                            InputProps={{

                                classes: {notchedOutline: classes.noBorder}
                            }}
                            {...register('email')}
                            error={!!errors.email}
                            helperText={<Typography variant="caption" color="error">
                                {errors.email?.message}
                            </Typography>}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            className={classes.inputStyle}
                            label='Password'
                            variant="outlined"
                            style={{width: matchesMD ? "320px" : "450px"}}
                            type={showPassword ? "text" : "password"}
                            onChange={() => {
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            style={{color: '#83b3da'}}
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <Visibility/> : <VisibilityOff/>}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                                classes: {notchedOutline: classes.noBorder}
                            }}
                            {...register('password')}
                            error={!!errors.password}
                            helperText={<Typography variant="caption" color="error">
                                {errors.password?.message}
                            </Typography>}
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            disableElevation
                            className={classes.tryButtonStyle}
                            color='secondary'
                            variant='contained'
                            onClick={handleSubmit(onSubmit)}
                        >
                            Try it for free
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            {/*<Hidden xsDown>*/}
            <Grid item lg={6} >
                <img src={LappyImage} className={classes.imageStyle}/>
            </Grid>
            {/*</Hidden>*/}

        </Grid>
    );
};

export default GetStarted;