import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ImageListItem, ImageList } from '@material-ui/core';

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },

];

class Utilities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: false,
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
        return (
            <div className="travel_variation_area">
                <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', overflow: 'hidden', flexDirection: 'column' }}>
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section_title text-center">
                                <h3>HÌNH ẢNH NỔI BẬT</h3>
                            </div>
                        </div>
                    </div>

                    <ImageList rowHeight={250} className={{ width: 500, height: 450 }} cols={isMobile ? 1 : 3}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img} cols={item.cols || 1}>
                                <img src={item.img} alt={item.title} />
                            </ImageListItem>
                        ))}
                    </ImageList>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="more_place_btn text-center" style={{marginTop: "62px"}}>
                                <Link to='/gallary' className="boxed-btn4" >Xem thêm</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Utilities;