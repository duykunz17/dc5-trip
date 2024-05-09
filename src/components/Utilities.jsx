import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ImageListItem, ImageList } from '@material-ui/core';

const itemData = [
    {
        img: 'images/Gallary/4.jpg',
        title: 'IMAGE1',
    },
    {
        img: 'images/Gallary/5.jpg',
        title: 'IMAGE2',
    },
    {
        img: 'images/Gallary/28.jpg',
        title: 'IMAGE3',
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
    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // For smooth scrolling
        });
    };

    render() {
        const { isMobile } = this.state;
        return (
            <div className="travel_variation_area">
                <div className="container" style={{ overflow: 'hidden', flexDirection: 'column' }}>
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section_title text-center">
                                <h3>MỘT SỐ GÓC CHỤP ẢNH ĐẸP</h3>
                            </div>
                        </div>
                    </div>
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

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="more_place_btn text-center" style={{ marginTop: "62px" }}>
                                <Link to='/gallary' className="boxed-btn4" onClick={this.scrollToTop}>Xem thêm</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Utilities;