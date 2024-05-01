import React, { Component } from 'react';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';

class Place1 extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div>
                    <div className="destination_banner_wrap overlay" style={{ backgroundImage: `url(../images/1.jpg)` }}>
                        <div className="destination_text text-center">
                            <h3>Fairy Land</h3>
                        </div>
                    </div>
                    <div className="destination_details_info" >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Zipline</h3>
                                        <p><img src="../images/1.jpg" className="d-block w-100" alt="..." /></p>
                                        <p>Trải nghiệm cảm giác “bay giữa không trung” và hòa mình vào sắc xanh ngát của biển, của trời tại Zipline 03 kỷ lục: đường trượt dài nhất, dốc nhất và có cú nhảy tiếp đất cao nhất tại Việt Nam! </p>
                                        <p>Cứ mỗi 30 phút đón 10 khách.</p>
                                        <p>Thứ 2-6: 10:00 - 17:00</p>
                                        <p>Thứ 7, CN: 09:00 - 17:00</p>
                                        <p>Tạm ngưng hoạt động khi thời tiết có gió và mưa lớn.</p>
                                        <p>Trò chơi sẽ dừng nhận khách khi số lượng khách đã xếp hàng đợi hết công suất trong ngày. </p>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Đường lượn nhớ đời</h3>
                                        <p><img src="../images/2.jpg" className="d-block w-100" alt="..." /></p>
                                        <p>Thưởng ngoạn hành trình với đường 1 dài 2531m và đường 2 dài 2576m, khám phá bức tranh cảnh tráng lệ vòng quanh đảo Hòn Tre trên hệ thống xe trượt quanh núi lớn nhất Đông Nam Á!</p>
                                        <p>Thời gian hoạt động: 08:30 - 19:00</p>
                                        <p>Tạm ngưng hoạt động khi thời tiết có gió và mưa lớn.</p>
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

export default Place1;