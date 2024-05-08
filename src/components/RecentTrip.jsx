import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const trips = [
    {
        title: 'Biểu diễn Tata Show',
        subTitle: '19:30 - 20:10',
        imageSrc: 'images/sukiennoibat/Event1/logo1.jpeg',
        location: 'QUẢNG TRƯỜNG THẦN THOẠI',
        urlDetail: '/event/1'
    },
    {
        title: 'Biểu diễn nhạc nước',
        subTitle: '19:00 - 19:15',
        imageSrc: 'images/sukiennoibat/Event2/logo2.jpeg',
        location: 'SÂN KHẤU NHẠC NƯỚC',
        urlDetail: '/event/2'
    },
    {
        title: 'Biểu diễn cho cá ăn - Nàng tiên cá',
        subTitle: '10:00 - 10:15 | 11:00 - 11:10',
        imageSrc: 'images/sukiennoibat/Event3/logo3.jpeg',
        location: 'CUNG ĐIỆN HẢI VƯƠNG',
        urlDetail: '/event/3'
    },
    {
        title: 'Biểu diễn chim',
        subTitle: '11:00 - 11:20 | 15:00 - 15:20',
        imageSrc: 'images/sukiennoibat/Event4/logo4.jpeg',
        location: 'SÂN KHẤU BIỂU DIỄN CHIM - VƯỜN QUÝ VƯƠNG',
        urlDetail: '/event/4'
    },
    {
        title: 'Vũ điệu Thổ dân',
        subTitle: '10:40 - 10:50 | 16:00 - 16:10',
        imageSrc: 'images/sukiennoibat/Event5/logo5.jpeg',
        location: 'VƯỜN QUÝ VƯƠNG',
        urlDetail: '/event/5'
    },
    {
        title: 'M.O.N.T.A',
        subTitle: '10:00 - 10:10 | 15:00 - 15:100',
        imageSrc: 'images/sukiennoibat/Event6/logo6.jpeg',
        location: 'QUẢNG TRƯỜNG ĐẠI DƯƠNG',
        urlDetail: '/event/6'
    },
];
class RecentTrip extends Component {
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
        });
    };

    render() {
        const { isMobile } = this.state;
        const groupedItems = [];
        for (let i = 0; i < trips.length; i += 3) {
            groupedItems.push(trips.slice(i, i + 3));
        }
        return (
            <div className="recent_trip_area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section_title text-center">
                                <h3>SỰ KIỆN KHÔNG THỂ BỎ LỠ</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div id="carouselExampleCaptions2" className="carousel slide" data-interval="false">
                            <div className="carousel-inner" style={{ minHeight: "600px" }}>
                                {
                                    isMobile ? trips.map((item, index) => (
                                        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                            <div className="row" style={{ margin: 0, display: "flex", justifyContent: "space-around" }}>
                                                <div className="col-lg-4" style={{ backgroundImage: item.backgroundImage, padding: "50px 15px 50px 15px", margin: "-10px" }}>
                                                    <div className="single_trip">
                                                        <div className="thumb">
                                                            <img src={item.imageSrc} alt="" />
                                                        </div>
                                                        <div className="info">
                                                            <h3>{item.title}</h3>
                                                            <h5>{item.subTitle}</h5>
                                                            <div className="location" style={{ minHeight: "50px" }}>
                                                                <img src="images/icon-location.webp"></img> &nbsp;
                                                                <span style={{ color: "#dc502c" }}>{item.location}</span>
                                                            </div>
                                                            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                                                                <Link to={item.urlDetail} className="boxed-btn4" onClick={this.scrollToTop} >Xem thêm</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)) :
                                        groupedItems.map((group, index) => (
                                            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                                <div className="row" style={{ margin: 0, display: "flex", justifyContent: "space-between" }}>
                                                    {group.map((item, idx) => (
                                                        <div key={idx} className="col-lg-4">
                                                            <div className="single_trip">
                                                                <div className="thumb">
                                                                    <img src={item.imageSrc} alt="" style={{ height: "233px", maxWidth: "100%" }} />
                                                                </div>
                                                                <div className="info">
                                                                    <h4>{item.title}</h4>
                                                                    <h6> {item.subTitle}</h6>
                                                                    <div className="location" style={{ minHeight: "40px" }}>
                                                                        <img src="images/icon-location.webp"></img> &nbsp;
                                                                        <span style={{ color: "#dc502c" }}>{item.location}</span>
                                                                    </div>
                                                                    <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                                                                        <Link to={item.urlDetail} className="boxed-btn4" onClick={this.scrollToTop} >Xem thêm</Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))
                                }
                            </div>
                            {
                                !isMobile ? <div>
                                    <a className="carousel-control-prev" href="#carouselExampleCaptions2" role="button" data-slide="prev" style={{ position: 'absolute', left: '-150px',top: '-150px' }}>
                                        <img src="images/next.png" alt="Previous" style={{ width: isMobile ? "50px" : "60px", height: isMobile ? "50px" : "60px", transform: 'rotate(180deg)' }} />
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleCaptions2" role="button" data-slide="next" style={{ position: 'absolute', right: '-150px',top: '-150px' }}>
                                        <img src="images/next.png" alt="Previous" style={{ width: isMobile ? "50px" : "60px", height: isMobile ? "50px" : "60px" }} />
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div> :
                                    <div>
                                        <a className="carousel-control-prev" href="#carouselExampleCaptions2" role="button" data-slide="prev" >
                                            <img src="images/next.png" alt="Previous" style={{ width: isMobile ? "50px" : "60px", height: isMobile ? "50px" : "60px", transform: 'rotate(180deg)' }} />
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleCaptions2" role="button" data-slide="next" >
                                            <img src="images/next.png" alt="Previous" style={{ width: isMobile ? "50px" : "60px", height: isMobile ? "50px" : "60px" }} />
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                            }

                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default RecentTrip;