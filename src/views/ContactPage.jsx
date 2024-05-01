import React, { Component } from 'react';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';

class ContactPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <div className="where_togo_area">
                        <div className="row justify-content-center">
                            <div className="container">
                                <h2 style={{ color: 'white', textAlign: 'center' }}>DC5 ACTIVITIES</h2> <br/>
                                <img className="img-fluid" src="../images/dc5-activities-team.jpg"></img>
                            </div>
                        </div>
                    </div>
                    <section>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <img className="img-fluid rounded-circle" style={{ width: '400px', height: '300px' }} src="images/thong-nguyen.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <h2 className="display-4">THONG NGUYEN</h2>
                                        <p style={{ fontSize: '25px' }}>Sdt: 0798232621</p>
                                        <p style={{ fontSize: '25px' }}>Skype: live:nguyenhuythong2710</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 order-lg-2">
                                    <div className="p-4">
                                        <img className="img-fluid rounded-circle" style={{ width: '400px', height: '300px' }} src="images/duy-trinh.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 order-lg-1">
                                    <div className="p-4">
                                        <h2 className="display-4">DUY TRINH</h2>
                                        <p style={{ fontSize: '25px' }}>Sdt: 0947754954</p>
                                        <p style={{ fontSize: '25px' }}>Skype: live:trinhducduy10798</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <img className="img-fluid rounded-circle" style={{ width: '400px', height: '300px' }} src="images/hieu-hieu.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <h2 className="display-4">HIEU HIEU</h2>
                                        <p style={{ fontSize: '25px' }}>Sdt: 0337997729</p>
                                        <p style={{ fontSize: '25px' }}>Skype: live:.cid.a56daa37eec297f7</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 order-lg-2">
                                    <div className="p-4">
                                        <img className="img-fluid rounded-circle" style={{ width: '400px', height: '300px' }} src="images/tu-ngo.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 order-lg-1">
                                    <div className="p-4">
                                        <h2 className="display-4">TU NGO</h2>
                                        <p style={{ fontSize: '25px' }}>Sdt: 0339898300</p>
                                        <p style={{ fontSize: '25px' }}>Skype: live:tuhoangngo97</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <img className="img-fluid rounded-circle" style={{ width: '400px', height: '300px' }} src="images/vu-do.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <h2 className="display-4">VU DO</h2>
                                        <p style={{ fontSize: '25px' }}>Sdt: 0333848932</p>
                                        <p style={{ fontSize: '25px' }}>Skype: live:.cid.87d7e03dbfdbb88d</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 order-lg-2">
                                    <div className="p-4">
                                        <img className="img-fluid rounded-circle" style={{ width: '400px', height: '300px' }} src="images/huy-huynh.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 order-lg-1">
                                    <div className="p-4">
                                        <h2 className="display-4">HUY HUYNH</h2>
                                        <p style={{ fontSize: '25px' }}>Sdt: 0339704974</p>
                                        <p style={{ fontSize: '25px' }}>Skype: live:5780c634c85793b2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ContactPage;