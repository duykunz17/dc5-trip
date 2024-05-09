import React, { Component } from 'react';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';

class Event5 extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div>
                    <div className="destination_banner_wrap overlay" style={{ backgroundImage: `url(../images/sukiennoibat/Event5/logo5.jpeg)` }}>
                        <div className="destination_text text-center">
                        </div>
                    </div>
                    <div className="destination_details_info" >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Vũ điệu thổ dân (10:40 - 10:50 | 16:00 - 16:10)</h3>
                                        <p>Lấy cảm hứng từ đời sống sinh hoạt của một bộ tộc thổ dân ẩn sâu trong rừng nhiệt đới Amazon, vũ điệu đậm chất Châu Phi tái hiện lại cảnh săn bắt thú rừng, chèo thuyền vượt sông suối, cảnh duyệt binh và giây phút reo hò ăn mừng chiến phẩm đầy hoang dã và đậm chất thiên nhiên núi rừng.</p>
                                        <p><img src="../images/sukiennoibat/Event5/photo1.jpeg" className="d-block w-100" alt="..." /></p>
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

export default Event5;