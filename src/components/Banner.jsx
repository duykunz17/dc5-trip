import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, Typography, Button } from '@material-ui/core';

const dummyArray = [
    { backgroundImage: 'url("images/bg-fairy-land.jpg")', logo: 'images/logo-fairy-land.jpg', description: 'Bước chân vào xử sở thần tiên, trải nghiệm các trò chơi trong nhà cho gia đình.', url: '/place/fairy-land' },
    { backgroundImage: 'url("images/bg-adventure-land.jpg")', logo: 'images/logo-adventure-land.jpg', description: 'Thỏa sức chinh phục các trò chơi cảm giác mạnh với độ thử thách không dành cho những người "yếu" bóng vía.', url: '/place/adventure-land' },
    { backgroundImage: 'url("images/bg-safari.jpg")', logo: 'images/logo-safari.jpg', description: 'Là nơi bạn có thể khám phá đời sống hoang dã thu nhỏ giữa lòng VinWonders Nha Trang.', url: '/place/safari' },
];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [itemMobile, setItemMobile] = useState(dummyArray[currentIndex]);

    const checkIsMobile = () => {
        const mobile = window.innerWidth <= 600;
        setIsMobile(mobile);
    };

    useEffect(() => {
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % dummyArray.length;
        setItemMobile(dummyArray[nextIndex]);
        setCurrentIndex(nextIndex);
    };

    const handlePrevious = () => {
        const newIndex = currentIndex - 1;
        if (newIndex >= 0) {
            setItemMobile(dummyArray[newIndex]);
            setCurrentIndex(newIndex);
        }
    };
    console.log('itemMobile', itemMobile);
    return (
        <Grid container spacing={3} justify="center">
            <Grid item xs={12}>
                <div style={{ position: 'relative' }}>
                    {isMobile && (
                        <Typography variant="button" style={{ zIndex: '999', position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)', cursor: 'pointer' }} onClick={handlePrevious}>
                            <span className="carousel-control-prev-icon" aria-hidden="true" style={{ width: "40px", height: "40px" }} />
                        </Typography>
                    )}

                    <div style={{ overflowX: 'hidden' }}>
                        <Grid container spacing={3} style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.5s ease' }}>
                            {isMobile ? (
                                <Grid item xs={12} sm={4}>
                                    <Paper style={{ padding: "50px 15px 50px 15px", margin: '15px', backgroundImage: itemMobile.backgroundImage, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '80%' }}>
                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
                                            <div className="mc_logo_game">
                                                <img style={{ maxWidth: "100%", height: "auto" }} src={itemMobile.logo} alt="..." />
                                            </div>
                                            <div className="tg_desc_game">
                                                <Typography variant='body2'>{itemMobile.description}</Typography>
                                            </div>
                                            <div className="mc_game_select" style={{ width: "100%", display: "inline-block", margin: "0 0 20px", height: "50vh" }}>
                                                <img style={{ borderRadius: "10px", marginBottom: "10px", maxWidth: "100%", height: "auto" }}
                                                    src={`images/${currentIndex + 1}.jpg`} alt="..." />
                                            </div>
                                            <Button component={Link} to="/place/1" variant="contained" color="primary" style={{ padding: "15px 20px" }}>Khám phá ngay</Button>
                                        </div>
                                    </Paper>
                                </Grid>
                            ) : (
                                dummyArray.map((item, index) => (
                                    <Grid item xs={12} sm={4} key={index}>
                                        <Paper style={{ padding: "50px 15px 50px 15px", margin: '15px', backgroundImage: item.backgroundImage, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '80%' }}>
                                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
                                                <div className="mc_logo_game">
                                                    <img style={{ maxWidth: "100%", height: "auto" }} src={item.logo} alt="..." />
                                                </div>
                                                <div className="tg_desc_game">
                                                    <Typography variant='body1'>{item.description}</Typography>
                                                </div>
                                                <div className="mc_game_select" style={{ width: "100%", display: "inline-block", margin: "0 0 20px", height: "50vh" }}>
                                                    <img style={{ borderRadius: "10px", marginBottom: "10px", maxWidth: "100%", height: "auto" }} src={`images/${index + 1}.jpg`} alt="..." />
                                                </div>
                                                <Button component={Link} to={item.url} variant="contained" color="primary" style={{ padding: "15px 20px" }}>Khám phá ngay</Button>
                                            </div>
                                        </Paper>
                                    </Grid>
                                ))
                            )}
                        </Grid>
                    </div>

                    {isMobile && (
                        <Typography variant="button" style={{ zIndex: '999', position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', cursor: 'pointer' }} onClick={handleNext}>
                            <span className="carousel-control-next-icon" aria-hidden="true" style={{ width: "40px", height: "40px" }} />
                        </Typography>
                    )}
                </div>
            </Grid>
        </Grid>
    );
};

export default Banner;
