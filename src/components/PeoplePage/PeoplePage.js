import React from 'react';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import RUserPic1 from '../../assets/img/Review_Userpic1.jpg'
import RUserPic2 from '../../assets/img/Review_Userpic2.jpg'
import RUserPic3 from '../../assets/img/Review_Userpic3.jpg'
import RUserPic4 from '../../assets/img/Review_Userpic4.jpg'
import RUserPic5 from '../../assets/img/Review_Userpic5.jpg'
import RUserPic6 from '../../assets/img/Review_Userpic6.jpg'
import TwitterIcon2 from '../../assets/img/Twitter Icon.png'
import CardContent from '@material-ui/core/CardContent';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {CardHeader, useTheme} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import useMediaQuery from "@material-ui/core/useMediaQuery";
const useStyles = makeStyles((theme) => ({
    root: {
        width: 360,
        height: 200,
    },
    iconStyle: {
        "&:hover": {
            backgroundColor: 'transparent'
        }
    },
    rowContainer: {
        padding: '5em',

        [theme.breakpoints.down("md")]: {
            padding: '2em',
        },
        backgroundColor:'#f4f4f4'
    },
    cardNameStyle: {
        color: '#43484d', fontWeight: '500'
    },
    cardDesStyle: {
        color: '#95a1aa', fontSize: '0.8em'
    },
    cardContentStyle: {
        color: '#86939e', fontSize: '0.9em', lineHeight: '1.6'
    },
    pageHeadingStyle:{
        color:'#43484d',
        fontWeight:'lighter',
        paddingBottom:'1em'
    }
}))
const reviewData = [
    {
        id: 1,
        name: 'Arthur Fleck',
        designation: 'Designer',
        reviewContent: 'Thank you Facebook, I can now farm without going outside, cook without being in my kitchen, feed fish I don\'t have & waste an entire day without having a life.',
        profilePic: RUserPic1
    },
    {
        id: 2,
        name: 'Khal Drogo',
        designation: 'Dothraki King',
        reviewContent: 'From this day on I shall be known as Bob. For Bob is a good name and I am good. But if you want you can just call me Sally.',
        profilePic: RUserPic2
    },
    {
        id: 3,
        name: 'Chico',
        designation: 'Gangstar',
        reviewContent: 'I saw six men kicking and punching the mother-in-law. My neighbor said “Are you going to help?” I said, “No, Six should be enough.”',
        profilePic: RUserPic3
    },
    {
        id: 4,
        name: 'Vito Corleone',
        designation: 'Don',
        reviewContent: 'Some people come into our lives and leave footprints on our hearts, while others come into our lives and make us wanna leave footprints on their face.',
        profilePic: RUserPic4
    },
    {
        id: 5,
        name: 'Louis Litt',
        designation: 'Senior Partner',
        reviewContent: 'From this day on I shall be known as Bob. For Bob is a good name and I am good. But if you want you can just call me Sally.',
        profilePic: RUserPic5
    },
    {
        id: 6,
        name: 'Harold Gandarson',
        designation: 'Associate',
        reviewContent: 'Now this is the story all about how My life got flipped, turned upside down And I\'d like to take a minute just sit right there I\'ll tell you how I became the prince of a town called Bel-air.',
        profilePic: RUserPic6
    },
]
const PeoplePage = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <div className={classes.rowContainer}>
                <Grid container direction='row' justify='center'>
                    <Grid item lg='8'>
                        <Typography variant={matchesMD ?'h4':'h2'} align='center' className={classes.pageHeadingStyle}>
                            What People are Saying
                        </Typography>
                    </Grid>
                </Grid>
            <Grid container direction='row' alignItems={'center'} justify={'center'}
                  spacing={4}>
                {reviewData.map((card) => (
                    <Grid item lg={4}>
                        <Card key={card.id} className={classes.root} elevation={0} >
                            <CardHeader
                                avatar={<Avatar src={card.profilePic}/>}
                                action={<IconButton className={classes.iconStyle} disableRipple>
                                    <TwitterIcon
                                        style={{color: '#1DA1F2',}}/>
                                </IconButton>}
                                title={<Typography
                                    className={classes.cardNameStyle}>{card.name}</Typography>}
                                subheader={<Typography
                                    className={classes.cardDesStyle}>{card.designation}</Typography>}
                            />
                            <CardContent>
                                <Typography className={classes.cardContentStyle}>
                                    {card.reviewContent}
                                </Typography>


                            </CardContent>
                        </Card>
                    </Grid>
                ))}

            </Grid>
        </div>
    );
};

export default PeoplePage;