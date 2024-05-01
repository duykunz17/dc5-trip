import React, { Component } from 'react';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';

class Place3 extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div>
                    <div className="destination_banner_wrap overlay" style={{ backgroundImage: `url(../images/5.jpg)` }}>
                        <div className="destination_text text-center">
                            <h3>Tropical Paradise</h3>
                        </div>
                    </div>
                    <div className="destination_details_info" >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Cơn cuồng nộ của Hải Vương </h3>
                                        <p><img src="../images/5.jpg" className="d-block w-100" alt="..." /></p>
                                        <p>Đưa bạn đến một cảm giác khó tả, đẩy giới hạn của trọng lực khi bay lên đỉnh của các đường cong 180 độ và 360 độ, tạo cuộc đua gay cấn giữa 2 làn. Đây đường trượt lần đầu tiên có mặt tại Việt Nam, với giải thưởng 2015 IAAPA đường trượt nước tốt nhất. </p>
                                        <p>Dành cho khách hàng cao từ 130cm.</p>
                                        <p>Thời gian hoạt động: 10:00 - 17:30</p>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Vòi rồng hung hãn</h3>
                                        <p><img src="../images/6.jpg" className="d-block w-100" alt="..." /></p>
                                        <p>Mang đến cho du khách những trải nghiệm khác biệt liên tiếp khi trượt quanh những vòng xoáy hình dạng chiếc đĩa, hoặc trải nghiệm hành trình rơi vào hộp đen đem đến cảm giác phấn khích cho du khách.</p>
                                        <p>Dành cho khách hàng cao từ 130cm.</p>
                                        <p>Thời gian hoạt động: 10:00 - 17:30</p>
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

export default Place3;