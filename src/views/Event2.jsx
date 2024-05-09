import React, { Component } from 'react';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';

class Event2 extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div>
                    <div className="destination_banner_wrap overlay" style={{ backgroundImage: `url(../images/sukiennoibat/Event2/logo2.jpeg)` }}>
                        <div className="destination_text text-center">
                        </div>
                    </div>
                    <div className="destination_details_info" >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Màn biểu diễn nhạc nước Vinpearl Nha Trang có gì hấp dẫn?</h3>
                                        <p>Sân khấu nhạc nước độc đáo này có vị trí nằm tại ở giữa đường di chuyển từ Quảng trường thần thoại đến Quảng trường Đại dương. Show diễn nhạc nước là trải nghiệm hấp dẫn mà thành viên DC5 không nên bỏ lỡ trong chuyến du lịch Nha Trang.</p>
                                        <p>Đón xem show diễn, đảm bảo mọi giác quan của bạn sẽ được thỏa mãn bởi sự kết hợp đỉnh cao giữa âm thanh, các sắc màu ánh sáng. </p>
                                        <p><img src="../images/sukiennoibat/Event2/photo1.webp" className="d-block w-100" alt="..." /></p>
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

export default Event2;