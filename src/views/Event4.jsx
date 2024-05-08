import React, { Component } from 'react';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';

class Event4 extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div>
                    <div className="destination_banner_wrap overlay" style={{ backgroundImage: `url(../images/sukiennoibat/Event4/header4.jpeg)` }}>
                        <div className="destination_text text-center">
                        </div>
                    </div>
                    <div className="destination_details_info" >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Biểu diễn chim (11:00 - 11:20 | 15:00 - 15:20)</h3>
                                        <p>Tận mắt chiêm ngưỡng 10 tiết mục đến từ 10 loài chim quý hiếm biểu diễn những vũ điệu độc đáo dưới sự chỉ đạo tài tình của người huấn luyện. Vào cuối show diễn, đừng quên dành vài phút để chụp ảnh với các “diễn viên” tí hon, lưu lại kỷ niệm trong tour Nha Trang đáng nhớ nhé!</p>
                                        <p><img src="../images/sukiennoibat/Event4/photo1.jpeg" className="d-block w-100" alt="..." /></p>
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

export default Event4;