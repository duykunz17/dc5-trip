import React, { Component } from 'react';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';

class Place2 extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div>
                    <div className="destination_banner_wrap overlay" style={{ backgroundImage: `url(../images/3.jpg)` }}>
                        <div className="destination_text text-center">
                            <h3>Adventure Land</h3>
                        </div>
                    </div>
                    <div className="destination_details_info" >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Tháp rơi tự do</h3>
                                        <p><img src="../images/3.jpg" className="d-block w-100" alt="..." /></p>
                                        <p>Trải nghiệm ""rớt tim"" không thể nào quên khi bị đẩy lên cao và thả rơi đột ngột trên tòa tháp khổng lồ.</p>
                                        <p>Thời gian hoạt động.</p>
                                        <p>8:30 - 8:55 | 9:30 - 9:55</p>
                                        <p>17:50 - 18:15 | 18:50 - 19:15</p>
                                        <p>19:45 - 19:55</p>
                                        <p>Tạm ngưng hoạt động khi thời tiết có mưa. </p>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Đu quay dây văng</h3>
                                        <p><img src="../images/4.jpg" className="d-block w-100" alt="..." /></p>
                                        <p>Ở tư thế xoay tròn hoặc xoay nghiêng với độ cao 3m, trò chơi đu quay dây văng sẽ tạo cho bạn cảm giác như đang rơi tự do hoặc bay lượn trong không trung.</p>
                                        <p>Thời gian hoạt động:</p>
                                        <p>08:30 - 11:30 | 12:05 - 18:00</p>
                                        <p>18:35 - 19:55</p>
                                        <p>Thứ 7-CN:</p>
                                        <p>09:10 - 09:40 | 10:00 - 11:30</p>
                                        <p>12:00 - 18:00 | 18:40 - 19:10</p>
                                        <p>19:45 - 19:55</p>
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

export default Place2;