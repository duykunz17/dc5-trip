import React, { Component } from 'react';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';

class AdventureLand extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div>
                    <div className="destination_banner_wrap overlay" style={{ backgroundImage: `url(../images/vinpearl/adventure-land/adventuremind.webp)` }}>
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
                                        <p>Muốn chơi trò mạo hiểm nhưng ngại phải chơi một mình? Vậy thì cứ rủ rê anh chị em hoặc nhóm bạn ngồi “cùng thuyền” và thử ngay trò chơi tháp rơi tự do ở “Vùng đất phiêu lưu” nha!</p>
                                        <p>Tạm ngưng hoạt động khi thời tiết có mưa. </p>
                                        <p><img src="../images/vinpearl/adventure-land/thap-roi-tu-do.jpg" className="d-block w-100" alt="..." /></p>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Cuộc phiêu lưu hầm mỏ (Mind adventure)</h3>
                                        <p>Hầm mỏ bí ẩn ở “Adventure Land” cũng là nơi để bạn trải nghiệm cảm giác phiêu lưu kỳ thú. Tại đây bạn sẽ được lượn vòng quanh vách núi nhân tạo, chinh phục nhiều khúc cua ngoạn mục với vận tốc lên đến 12,7m/s.</p>
                                        <p><img src="../images/vinpearl/adventure-land/adventuremind.webp" className="d-block w-100" alt="..." /></p>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Bật nhảy Bungee (Bungee Jumping)</h3>
                                        <p>Nhắc đến những trò chơi cảm giác mạnh thì không thể không kể đến Bungee! Với những thiết bị hỗ trợ an toàn và hiện đại nhất, bật nhảy bungee là một trò chơi sẽ có thể thỏa niềm đam mê chinh phục độ cao của bạn đấy!</p>
                                        <p>Trò chơi sẽ dừng nhận khách khi số lượng khách đã xếp hàng đợi hết công suất trong ngày.</p>
                                        <p><img src="../images/vinpearl/adventure-land/bungeejumping.webp" className="d-block w-100" alt="..." /></p>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Đu quay dây văng</h3>
                                        <p>Ở tư thế xoay tròn hoặc xoay nghiêng với độ cao 3m, trò chơi đu quay dây văng sẽ tạo cho bạn cảm giác như đang rơi tự do hoặc bay lượn trong không trung.</p>
                                        <p>Tạm ngưng hoạt động khi thời tiết có gió và mưa lớn.</p>
                                        <p><img src="../images/vinpearl/adventure-land/du-quay-day-vang.jpg" className="d-block w-100" alt="..." /></p>
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

export default AdventureLand;