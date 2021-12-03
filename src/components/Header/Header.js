import React, {useState, useEffect, Fragment} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {makeStyles} from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {useMediaQuery} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import {useTheme} from "@material-ui/core/styles";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from "@material-ui/icons/Menu";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: '35px',
        paddingRight: '35px',
        [theme.breakpoints.down("md")]: {
            paddingLeft: '25px',
            paddingRight: '25px',
        },
        [theme.breakpoints.down("xs")]: {
            paddingLeft: '20px',
            paddingRight: '20px',
        },
    },
    toolBarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "0",
        [theme.breakpoints.down("md")]: {
            marginBottom: '0.5em'
        },
        [theme.breakpoints.down("sm")]: {
            marginBottom: 0
        },
    },
    logo: {
        height: "8em",
        [theme.breakpoints.down("md")]: {
            height: '7em'
        },
        [theme.breakpoints.down("sm")]: {
            height: '5.5em'
        },
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent",
        },
        textTransform: 'none',
        color: '#fff',
        fontSize: '1.1rem',
        marginRight: '15px'
    },
    tabContainer: {
        marginRight: "auto",
    },
    tab: {
        minWidth: 10,
        marginLeft: "20px",
        textTransform: 'none'
    },
    button: {
        color: '#fff',
        marginLeft: "20px",
        backgroundColor: theme.palette.common.blue,
        height: "30px",
        "&:hover": {
            backgroundColor: theme.palette.common.blue,
        },
        border: '2px solid #86bbe7',
        textTransform: 'none',
        padding: '1rem',
        width: '100px'
    },
    textButton: {
        color: '#fff',
        marginBottom: '12px',
        textTransform: 'none',
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: "white",
        borderRadius: "0px",
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1,
        },
    },
    drawerIconContainer: {
        marginLeft: 'auto',
        "&:hover": {
            backgroundColor: 'transparent'
        }
    },
    drawerIcon: {
        height: '40px',
        width: '40px',
        color:'#fff'
    },
    drawer: {
        backgroundColor: theme.palette.primary.dark,
        padding:'2em'
    },
    drawerItem: {
        color: '#ffff',
        opacity: 0.7,
        textTransform: 'none',
    },
    drawerItemSelected: {
        opacity: 1,
    },
    arrowStyle: {
        display: 'flex',
        alignItems: 'center',
    },
    arrow: {
        marginLeft: '5px'
    }
}));

function ElevationScroll(props) {
    const {children} = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

export default function Header(props) {
    const classes = useStyles();
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'))
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [openDrawer, setOpenDrawer] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    };
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpen(true);
    };
    const handleClose = (e) => {
        setAnchorEl(null);
        setOpen(false);
    };
    const handleMenuClick = (e, i) => {
        setAnchorEl(null);
        setOpen(false);
        setSelectedIndex(i);
    };
    const menuOption = [
        {name: "Profile", link: "/profile"},
        {name: "Settings", link: "/settings"},
        {name: "Logout", link: "/logout"},
    ];
    useEffect(() => {
        if (window.location.pathname === "/" && value !== 0) {
            setValue(0);
        } else if (window.location.pathname === "/profile" && value !== 1) {
            setValue(1);
        } else if (window.location.pathname === "/settings" && value !== 2) {
            setValue(2);
        } else if (window.location.pathname === "/about" && props.value !== 3) {
            setValue(3);
        } else if (window.location.pathname === "/Logout" && props.value !== 4) {
            setValue(4);

        } else if (window.location.pathname === "/privacy" && props.value !== 5) {
            setValue(5);

        }
        else if (window.location.pathname === "/terms" && props.value !== 6) {
            setValue(6);

        }
        switch (window.location.pathname) {
            case "/":
                if (value !== 0) {
                    setValue(0);
                }
                break;
            case "/profile":
                if (value !== 1) {
                    setValue(1);
                    setSelectedIndex(0);
                }

            case "/settings":
                if (value !== 1) {
                    setValue(1);
                    setSelectedIndex(1);
                }
                break;
            case "/logout":
                if (value !== 1) {
                    setValue(1);
                    setSelectedIndex(2);
                }
                break;
            default:
                break;
        }
    }, [value]);
    const tabData = [
        {
            id:1,
            title:'Design'
        },
        {
            id:1,
            title:'CMS'
        },
        {
            id:1,
            title:'Data'
        },
        {
            id:1,
            title:'More'
        },
    ]
    const tabs = (
        <Fragment>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                className={classes.tabContainer}
            >
                <Tab
                    className={classes.tab}
                    label="Design"
                />


                <Tab
                    className={classes.tab}
                    label="CMS"
                />
                <Tab
                    className={classes.tab}
                    label="Cases"
                />
                <Tab
                    aria-owns={anchorEl ? "simple-menu" : undefined}
                    aria-haspopup={anchorEl ? true : undefined}
                    className={classes.tab}
                    label={<span className={classes.arrowStyle}>More<ExpandMoreIcon className={classes.arrow}/></span>}

                    onClick={(event) => handleClick(event)}

                />
            </Tabs>
            <Button
                className={classes.textButton}
                variant="text"
                color="secondary"
                disableElevation
            >
                Login
            </Button>
            <Button
                disableElevation
                className={classes.button}
                variant="contained"
                color="secondary"
            >
                Sign up
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                classes={{paper: classes.menu}}
                MenuListProps={{onMouseLeave: handleClose}}
                elevation={0}
            >
                {menuOption.map((option, i) => (
                    <MenuItem
                        key={option}
                        classes={{root: classes.menuItem}}
                        onClick={(event) => {
                            handleMenuClick(event, i);
                            props.setValue(1);
                            handleClose();
                        }}
                        // selected={i === setSelectedIndex && value === 1}
                    >
                        {option.name}
                    </MenuItem>
                ))}
            </Menu>
        </Fragment>
    )
    const drawerData = [
        {
            id:1,
            title:'Design',
        },
        {
            id:2,
            title:'CMS',
        },
        {
            id:3,
            title:'Cases',
        },
        {
            id:4,
            title:'Profile',
        },
        {
            id:5,
            title:'Settings',
        },
        {
            id:6,
            title:'Privacy Policy',
        },
        {
            id:7,
            title:'Terms',
        },
        {
            id:8,
            title:'Log Out',
        },
    ]
    const drawer = (
        <Fragment>
            <SwipeableDrawer classes={{paper: classes.drawer}} disableBackdropTransition={!iOS} disableDiscovery={iOS}
                             open={openDrawer}
                             onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}
            >
                <List disablePadding>
                    {drawerData.map((item)=>(
                        <ListItem  button onClick={() => {
                            setOpenDrawer(false);
                            setValue(item.id)
                        }} selected={value === item.id}>
                            <ListItemText
                                className={value === 0 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}
                                disableTypography>{item.title}</ListItemText>
                        </ListItem>
                    ))}
                </List>

            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)}
                        disableRipple>
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </Fragment>
    )
    return (
        <>
            <ElevationScroll>
                <AppBar position={"fixed"} className={classes.root}>
                    <Toolbar disableGutters>
                        <Button
                            className={classes.logoContainer}
                            onClick={() => setValue(0)}
                            disableRipple
                        >
                            <div>module<sup>02</sup></div>
                        </Button>
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolBarMargin}/>
        </>
    );
}
