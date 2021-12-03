import React, {useState} from 'react';
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
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.common.blue,
        "& .MuiFormLabel-root": {
            color: "#83b3da",
            fontWeight: 'lighter',
            fontSize: '0.9em'
        }
    },

    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em"
        }
    },
    mainHeadingStyle: {
        color: '#fff',
        fontWeight: 'lighter',
    },
    subHeadingStyle: {
        color: '#fff',
        fontWeight: 'lighter'
    },
    tryButtonStyle: {
        padding: '11px',
        width: '140px',
        color: '#fff',
        height: '55px',
        textTransform: 'none',
        "&:hover": {
            backgroundColor: theme.palette.common.green,
        },
    },
    inputStyle: {
        backgroundColor: '#3080c1',
        borderRadius: '3px',
    },
    inputLabelStyle: {
        marginBottom: '10px'
    },
    noBorder: {
        border: "none",
    },
}));
const LandingPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const validationSchema = Yup.object().shape({

        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .required('Password is required')
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
        <div className={classes.root}>
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
                <Grid item className={classes.rowContainer}
                      style={{marginTop: matchesMD ? "1em" : "5em"}}>
                    <Typography
                        align={'center'}
                        variant={matchesMD ? "h4" : "h3"}
                        className={classes.mainHeadingStyle}
                    >
                        Ultimate Tool for any kind of<br/> work on Earth
                    </Typography>
                </Grid>
                <Grid
                    item
                    container
                    direction={matchesMD ? "column" : "row"}
                    alignItems="center"
                    className={classes.rowContainer}
                    style={{marginTop: "1.5em"}}
                >
                    <Grid item lg>
                        <Typography
                            align={"center"}
                            variant="h6"
                            paragraph
                            className={classes.subHeadingStyle}
                        >
                            You need the potential to design something completely new.
                            <br/>
                            Prototyping shouldn't limit you
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    direction={matchesMD ? "column" : "row"}
                    style={{marginTop: matchesMD ? "1em" : "2em", marginBottom: matchesMD ? '6em' : '10em'}}
                >
                    <Grid item>
                        <TextField
                            className={classes.inputStyle}
                            id='outlined-basic'
                            label='Email'
                            variant='outlined'
                            style={{width: "350px"}}
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
                            style={{width: "350px"}}
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
        </div>
    );
};

export default LandingPage;