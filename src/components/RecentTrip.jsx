import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RecentTrip extends Component {
    render() {
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
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions2" data-slide-to={0} className="active" />
                        <li data-target="#carouselExampleCaptions2" data-slide-to={1} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="single_trip">
                                        <div className="thumb">
                                            <img src="images/1.png" alt="" />
                                        </div>
                                        <div className="info">
                                            <div className="date">
                                                <span>Oct 12, 2019</span>
                                            </div>
                                            <Link to="">
                                                <h3>Journeys Are Best Measured In
                                                    New Friends</h3>
                                            </Link>
                                            <div style={{display: "flex", justifyContent: "center", marginTop: "10px"}}>
                                                <Link to='/trip' className="boxed-btn4" >Xem thêm</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single_trip">
                                        <div className="thumb">
                                            <img src="images/2.png" alt="" />
                                        </div>
                                        <div className="info">
                                            <div className="date">
                                                <span>Oct 12, 2019</span>
                                            </div>
                                            <Link to="">
                                                <h3>Journeys Are Best Measured In
                                                    New Friends</h3>
                                            </Link>
                                            <div style={{display: "flex", justifyContent: "center", marginTop: "10px"}}>
                                                <Link to='/trip' className="boxed-btn4" >Xem thêm</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="single_trip">
                                        <div className="thumb">
                                            <img src="images/3.png" alt="" />
                                        </div>
                                        <div className="info">
                                            <div className="date">
                                                <span>Oct 12, 2019</span>
                                            </div>
                                            <Link to="">
                                                <h3>Journeys Are Best Measured In
                                                    New Friends</h3>
                                            </Link>
                                            <div style={{display: "flex", justifyContent: "center", marginTop: "10px"}}>
                                                <Link to='/trip' className="boxed-btn4">Xem thêm</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="single_trip">
                                        <div className="thumb">
                                            <img src="images/3.png" alt="" />
                                        </div>
                                        <div className="info">
                                            <div className="date">
                                                <span>Oct 12, 2019</span>
                                            </div>
                                            <Link to="">
                                                <h3>Journeys Are Best Measured In
                                                    New Friends</h3>
                                            </Link>
                                            <div style={{display: "flex", justifyContent: "center", marginTop: "10px"}}>
                                                <Link to='/trip' className="boxed-btn4" >Xem thêm</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single_trip">
                                        <div className="thumb">
                                            <img src="images/1.png" alt="" />
                                        </div>
                                        <div className="info">
                                            <div className="date">
                                                <span>Oct 12, 2019</span>
                                            </div>
                                            <Link to="">
                                                <h3>Journeys Are Best Measured In
                                                    New Friends</h3>
                                            </Link>
                                            <div style={{display: "flex", justifyContent: "center", marginTop: "10px"}}>
                                                <Link to='/trip' className="boxed-btn4" >Xem thêm</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="single_trip">
                                        <div className="thumb">
                                            <img src="images/2.png" alt="" />
                                        </div>
                                        <div className="info">
                                            <div className="date">
                                                <span>Oct 12, 2019</span>
                                            </div>
                                            <Link to="">
                                                <h3>Journeys Are Best Measured In
                                                    New Friends</h3>
                                            </Link>
                                            <div style={{display: "flex", justifyContent: "center", marginTop: "10px"}}>
                                                <Link to='/trip' className="boxed-btn4" >Xem thêm</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions2" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" style={{width: "40px", height: "40px"}}/>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions2" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" style={{width: "40px", height: "40px"}}/>
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