import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const trips = [
    { imageSrc: 'images/1.png' },
    { imageSrc: 'images/2.png' },
    { imageSrc: 'images/3.png' },
    { imageSrc: 'images/1.png' },
    { imageSrc: 'images/2.png' },
    { imageSrc: 'images/3.png' },
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
                            <div className="section_title text-center mb_70">
                                <h3>SỰ KIỆN KHÔNG THỂ BỎ LỠ</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div id="carouselExampleCaptions2" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                {
                                    isMobile ? trips.map((item, index) => (
                                        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                            <div className="row" style={{ margin: 0, textAlign: "center", display: "flex", justifyContent: "space-around" }}>
                                                <div className="col-lg-4" style={{ backgroundImage: item.backgroundImage, padding: "50px 15px 50px 15px", margin: "-10px" }}>
                                                    <div className="single_trip">
                                                        <div className="thumb">
                                                            <img src={item.imageSrc} alt="" />
                                                        </div>
                                                        <div className="info">
                                                            <div className="date">
                                                                <span>Oct 12, 2019</span>
                                                            </div>
                                                            <Link to="">
                                                                <h3>Journeys Are Best Measured In
                                                                    New Friends</h3>
                                                            </Link>
                                                            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                                                                <Link to='/trip' className="boxed-btn4" >Xem thêm</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)) :
                                        groupedItems.map((group, index) => (
                                            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                                <div className="row" style={{ margin: 0, textAlign: "center", display: "flex", justifyContent: "space-between" }}>
                                                    {group.map((item, idx) => (
                                                        <div key={idx} className="col-lg-4">
                                                            <div className="single_trip">
                                                                <div className="thumb">
                                                                    <img src={item.imageSrc} alt="" />
                                                                </div>
                                                                <div className="info">
                                                                    <div className="date">
                                                                        <span>Oct 12, 2019</span>
                                                                    </div>
                                                                    <Link to="">
                                                                        <h3>Journeys Are Best Measured In
                                                                            New Friends</h3>
                                                                    </Link>
                                                                    <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                                                                        <Link to='/trip' className="boxed-btn4" >Xem thêm</Link>
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
                            <a className="carousel-control-prev" href="#carouselExampleCaptions2" role="button" data-slide="prev">
                                <img src="images/next.png" alt="Previous" style={{ width: isMobile ? "50px" : "60px", height: isMobile ? "50px" : "60px", transform: 'rotate(180deg)' }} />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleCaptions2" role="button" data-slide="next">
                                <img src="images/next.png" alt="Previous" style={{ width: isMobile ? "50px" : "60px", height: isMobile ? "50px" : "60px" }} />
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default RecentTrip;