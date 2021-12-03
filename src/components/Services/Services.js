import React, {Fragment, useEffect, useState} from 'react';
import './Services.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {makeStyles, useTheme} from '@material-ui/core'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import UserAvatar1 from "../../assets/img/Userpic.jpg"
import UserAvatar2 from "../../assets/img/Userpic1.jpg"
import UserAvatar3 from "../../assets/img/Userpic4.jpg"
import UserAvatar4 from "../../assets/img/Userpic3.jpg"
import UserAvatar5 from "../../assets/img/Userpic5.jpg"
import Arrow1 from "../../assets/img/Arrow.png"
import Arrow2 from "../../assets/img/Arrow1.png"
import WarningIcon from '@material-ui/icons/Warning';
const PreviousBtn = (props) => {
    // console.log(props);
    const {className, onClick} = props;
    return (
        <div className={className} onClick={onClick}>
            <img src={Arrow1}/>
        </div>
    );
};
const data2 = [UserAvatar1, UserAvatar2, UserAvatar3, UserAvatar4, UserAvatar5]
const imgSlideData = [
    {
        id: 1,
        slideImg: UserAvatar1,
    },
    {
        id: 2,
        slideImg: UserAvatar2,
    },
    {
        id: 3,
        slideImg: UserAvatar3,
    },
    {
        id: 4,
        slideImg: UserAvatar4,
    },
    {
        id: 5,
        slideImg: UserAvatar5,
    },
]
const Cardata = [
    {
        name: "Shirley Fultz",
        designation: 'Designer',
        companyName: 'Retro Studio',
        description: "It Helps to personalize my business Experience",
        testimonial: 'It\'s freeing to be able to catch up on customized news and not be distracted by a social media element on the same site',
        userAvatar: UserAvatar1,
        id: 1,
    },
    {
        name: "Tobias Eton",
        designation: 'Businessman',
        companyName: 'Relator Studio',
        description: "Backend services are outstanding",
        testimonial: 'The simple and intuitive design makes it easy for me use. I highly recommend Fetch to my peers.',
        userAvatar: UserAvatar2,
        id: 2,
    },
    {
        name: "Free Guy",
        designation: 'Executive',
        companyName: 'Vyom Studio',
        description: "E-commerce services are top notch",
        testimonial: 'I enjoy catching up with Fetch on my laptop, or on my phone when I\'m on the go!',
        userAvatar: UserAvatar3,
        id: 3,
    },
    {
        name: "unFree Boy",
        designation: 'Executive',
        companyName: 'Kamikaze Studio',
        description: "E-commerce services are top notch",
        testimonial: 'I enjoy catching up with Fetch on my laptop, or on my phone when I\'m on the go!',
        userAvatar: UserAvatar4,
        id: 4,
    },
    {
        name: "Cable Guy",
        designation: 'Executive',
        companyName: 'Venom Studio',
        description: "E-commerce services are top notch",
        testimonial: 'I enjoy catching up with Fetch on my laptop, or on my phone when I\'m on the go!',
        userAvatar: UserAvatar5,
        id: 5,
    },
]
const useStyles = makeStyles((theme) => ({
    rowContainer: {
        padding: '5em',
        [theme.breakpoints.down("sm")]: {
            padding: '1.55em',
        },
        [theme.breakpoints.down("md")]: {
            padding: "2.5em",
        }
    },
    imgAvatar: {
        width: 'auto',
        height: '60px',
        opacity: 0.7,
        // "&:hover": {
        //     opacity:1,
        // },
    },
    mainText: {
        marginBottom: '1em'
    }

}))
const NextBtn = (props) => {
    const {className, onClick} = props;
    return (
        <div className={className} onClick={onClick}>
            <img src={Arrow2}/>
        </div>
    );
};
const Services = () => {
    const theme = useTheme();
    const classes = useStyles();
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);
    useEffect(() => {

        setNav1(slider1);
        setNav2(slider2);

    }, []);
    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        nextArrow: (
            <div style={{backgroundColor:'red'}}>
                <NextBtn/>
            </div>
        ),
        prevArrow: (
            <div>
                <PreviousBtn/>
            </div>
        ),
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 500,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    };

    const settingsThumbs = {
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: '10px'
    };
    const slidesData = [
        {
            id: 1,
            title: 'repellendus id ullam',
            label: 'Dolorem officiis temporibus.'
        }, {
            id: 2,
            title: 'excepturi consequatur est',
            label: 'Officia non provident dolor esse et neque.'
        }, {
            id: 3,
            title: 'eius doloribus blanditiis',
            label: 'Ut recusandae vel vitae molestiae id soluta.'
        }, {
            id: 4,
            title: 'nihil voluptates delectus',
            label: 'Qui vel consequatur recusandae illo repellendus.'
        }, {
            id: 5,
            title: 'nemo dolorem necessitatibus',
            label: 'Placeat odit velit itaque voluptatem.'
        }, {
            id: 6,
            title: 'dolorem quibusdam quasi',
            label: 'Adipisci officiis repudiandae.'
        },
    ];
    return (
        <div className={classes.rowContainer}>
            <Grid container direction='row' justify='center'>
                <Grid item>
                    <Typography variant='h4' align='center' className={classes.mainText}>
                        This Page is work in progress
                    </Typography>
                </Grid>
                <Grid>
                    <WarningIcon/>
                </Grid>
            </Grid>
            {/*<div className="slider-wrapper">*/}
            {/*    <div className="thumbnail-slider-wrap">*/}
            {/*        <Slider*/}
            {/*            {...settingsThumbs}*/}
            {/*            asNavFor={nav1}*/}
            {/*            ref={slider => (setSlider2(slider))}>*/}

            {/*            {Cardata.map((slide) =>*/}

            {/*                <div className="slick-slide" key={slide.id}>*/}
            {/*                    <img className="slick-slide-image"*/}
            {/*                         src={slide.userAvatar}/>*/}
            {/*                </div>*/}
            {/*            )}*/}

            {/*        </Slider>*/}
            {/*    </div>*/}
            {/*    <Slider*/}
            {/*        {...settingsMain}*/}
            {/*        asNavFor={nav2}*/}
            {/*        ref={slider => (setSlider1(slider))}*/}
            {/*    >*/}

            {/*        {Cardata.map((slide) =>*/}

            {/*            <div className="slick-slide" key={slide.id}>*/}
            {/*                <h2 className="slick-slide-title">{slide.name}</h2>*/}
            {/*                <div>*/}
            {/*                    {slide.description}*/}
            {/*                </div>*/}
            {/*                <div>*/}
            {/*                    {slide.testimonial}*/}
            {/*                </div>*/}
            {/*                <label>{slide.designation}</label>*/}
            {/*            </div>*/}
            {/*        )}*/}

            {/*    </Slider>*/}

            {/*</div>*/}
        </div>
    );
};

export default Services;