import React, { Component } from 'react';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';

class Event6 extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div>
                    <div className="destination_banner_wrap overlay" style={{ backgroundImage: `url(../images/sukiennoibat/Event6/header6.webp)` }}>
                        <div className="destination_text text-center">
                            <h3>M.O.N.T.A</h3>
                        </div>
                    </div>
                    <div className="destination_details_info" >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>M.O.N.T.A (10:00 tại Tata ở xứ sở thần tiên) &  (15:00 tại Quảng Trường Đại Dương)</h3>
                                        <p>Màn biểu diễn sôi động của chú khỉ Monta và những người bạn đáng yêu chào mừng bạn đến với xứ sở thần tiên.</p>
                                        <p><img src="../images/sukiennoibat/Event6/photo1.webp" className="d-block w-100" alt="..." /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Event6;