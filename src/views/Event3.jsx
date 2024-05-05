import React, { Component } from 'react';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';

class Event3 extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div>
                    <div className="destination_banner_wrap overlay" style={{ backgroundImage: `url(../images/sukiennoibat/Event3/header3.jpeg)` }}>
                        <div className="destination_text text-center">
                            <h3>Biểu diễn cho cá ăn - Nàng tiên cá</h3>
                        </div>
                    </div>
                    <div className="destination_details_info" >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Biểu diễn cho cá ăn (10:00 – 10:15 | 17:00 – 17:15)</h3>
                                        <p>Tại cung điện hải vương, các thành viên DC5 sẽ được tận mắt xem buổi biểu diễn cho cá ăn đầy ấn tượng giữa lòng đại dương sâu thẳm - nơi cư ngụ của 30.000 sinh vật biển đặc sắc tại hệ thống đường hầm mái vòm đầu tiên ở Việt Nam.</p>
                                        <p>Đừng bỏ qua cảnh tượng các chú cá muôn màu được cho ăn đầy độc đáo, mới lạ này nhé.</p>
                                        <p><img src="../images/sukiennoibat/Event3/photo1.jpeg" className="d-block w-100" alt="..." /></p>
                                    </div>
                                </div>

                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Biểu diễn nàng tiên cá </h3>
                                        <p>Với chủ đề “Khúc hát tiên cá” – Câu chuyện về nàng tiên cá bí ẩn với giọng hát mê đắm dưới lòng đại dương là một trong những trải nghiệm cực “hot” tại thuỷ cung lớn bậc nhất cả nước. Hơn cả một thế giới muôn vàn màu sắc, đó là những khoảnh khắc độc nhất chỉ tìm được trong không gian của show diễn này.</p>
                                        <p><img src="../images/sukiennoibat/Event3/photo2.jpeg" className="d-block w-100" alt="..." /></p>
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

export default Event3;