import React, { Component, useEffect } from 'react';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';
import { ImageListItem, ImageList } from '@material-ui/core';

const itemData = [
    {
        img: 'images/Gallary/1.jpg',
        title: 'Breakfast',
    },
    {
        img: 'images/Gallary/2.jpg',
        title: 'Burger',
    },
    {
        img: 'images/Gallary/3.jpg',
        title: 'Camera',
    },
    {
        img: 'images/Gallary/4.jpg',
        title: 'Coffee',
    },
    {
        img: 'images/Gallary/5.jpg',
        title: 'Hats',
    },
    {
        img: 'images/Gallary/6.jpg',
        title: 'Honey',
    },
    {
        img: 'images/Gallary/7.jpg',
        title: 'Breakfast',
    },
    {
        img: 'images/Gallary/8.jpg',
        title: 'Burger',
    },
    {
        img: 'images/Gallary/9.jpg',
        title: 'Camera',
    },
    {
        img: 'images/Gallary/10.jpg',
        title: 'Coffee',
    },
    {
        img: 'images/Gallary/11.jpg',
        title: 'Breakfast',
    },
    {
        img: 'images/Gallary/12.jpg',
        title: 'Burger',
    },
    {
        img: 'images/Gallary/13.0.webp',
        title: 'Camera',
    },
    {
        img: 'images/Gallary/14.jpg',
        title: 'Coffee',
    },
    {
        img: 'images/Gallary/15.jpg',
        title: 'Hats',
    },
    {
        img: 'images/Gallary/16.jpg',
        title: 'Honey',
    },
    {
        img: 'images/Gallary/17.jpg',
        title: 'Breakfast',
    },
    {
        img: 'images/Gallary/18.jpg',
        title: 'Burger',
    },
    {
        img: 'images/Gallary/19.jpg',
        title: 'Camera',
    },
    {
        img: 'images/Gallary/20.jpg',
        title: 'Coffee',
    },
    {
        img: 'images/Gallary/21.jpg',
        title: 'Breakfast',
    },
    {
        img: 'images/Gallary/22.webp',
        title: 'Burger',
    },
    {
        img: 'images/Gallary/23.jpg',
        title: 'Camera',
    },
    {
        img: 'images/Gallary/24.jpg',
        title: 'Coffee',
    },
    {
        img: 'images/Gallary/25.jpg',
        title: 'Hats',
    },
    {
        img: 'images/Gallary/26.jpg',
        title: 'Honey',
    },
    {
        img: 'images/Gallary/27.jpg',
        title: 'Breakfast',
    },
    {
        img: 'images/Gallary/28.jpg',
        title: 'Burger',
    },
    {
        img: 'images/Gallary/29.jpg',
        title: 'Camera',
    },
    {
        img: 'images/Gallary/30.jpg',
        title: 'Coffee',
    }
];

class Gallary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: false,
            isLoading: false
        };
    }
    componentDidMount() {
        this.checkIsMobile();
        window.addEventListener('resize', this.checkIsMobile);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.checkIsMobile);
    }

    checkIsMobile = () => {
        const isMobile = window.innerWidth <= 900; // Adjust the breakpoint as needed
        this.setState({ isMobile });
    };

    render() {
        const { isMobile } = this.state;
        const { isLoading } = this.state;

        return (
            <div>
                <Header />{
                    <div className="container" style={{ display: 'flex', justifyContent: 'space-around', overflow: 'hidden', flexDirection: 'column' }}>
                        <ImageList rowHeight={450} className={{ width: 500, height: 450 }} cols={isMobile ? 1 : 3}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img} cols={item.cols || 1}>
                                    {
                                        isMobile ? <img src={item.img} alt={item.title} /> :
                                            <img src={item.img} alt={item.title} style={{ height: '450px' }} />
                                    }
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                }

                <Footer />
            </div>
        );
    }
}

export default Gallary;