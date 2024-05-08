import React, { Component } from 'react';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';

class AdventureLand extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <div className="destination_banner_wrap overlay" style={{ backgroundImage: `url(../images/vinpearl/adventure-land/adland.jpeg)` }}>
                        <div className="destination_text text-center">
                        </div>
                    </div>
                    <div className="destination_details_info" >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Tháp rơi tự do (Sky Deep)</h3>
                                        <p>Muốn chơi trò mạo hiểm nhưng ngại phải chơi một mình? Vậy thì cứ rủ rê anh chị em DC5 và thử ngay trò chơi tháp rơi tự do nhé!</p>
                                        <p>Bắt đầu từ vị trí tại mặt đất, người chơi được nâng lên đến độ cao của một tòa nhà 7 tầng. Tại đây bạn được phóng tầm mắt ngắm nhìn vịnh biển Nha Trang hùng vĩ và bất ngờ tuột dốc tự do đầy kịch tính. </p>
                                        <p><img src="../images/vinpearl/adventure-land/thap-roi-tu-do.jpg" className="d-block w-100" alt="..." /></p>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Cuộc phiêu lưu hầm mỏ (Mind Adventure)</h3>
                                        <p>Ở hầm mỏ bí ẩn, nơi có hàng chục khúc cua ngoạn mục, bạn sẽ được trải nghiệm cuộc phiêu lưu qua lòng núi trên con tàu lao vun vút ở vận tốc lên đến 12,7m/s. Đây chắc chắn sẽ là trải nghiệm đáng nhớ mà bạn đừng bỏ lỡ khi đến Vinpearl Nha Trang.</p>
                                        <p><img src="../images/vinpearl/adventure-land/adventuremind.webp" className="d-block w-100" alt="..." /></p>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Bật nhảy Bungee (Bungee Jumping)</h3>
                                        <p>Bật nhảy Bungee là một trong những trò chơi mạo hiểm ở Vinpearl Nha Trang được nhiều du khách yêu thích. Ở trò chơi này, người chơi được buộc dây đai quanh người rồi từ vị trí cao 15m, quăng mình xuống phía dưới. Khi khoảng cách với bề mặt tiếp xúc còn không xa, sợi dây sẽ kéo người chơi giật trở lại.</p>
                                        <p>Trò chơi với những cú nhảy trên không mạnh mẽ sẽ mang lại cho du khách cảm giác bay bổng, phấn khích và thỏa đam mê chinh phục độ cao.</p>
                                        <p><img src="../images/vinpearl/adventure-land/bungee.jpg" className="d-block w-100" alt="..." /></p>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Đu quay dây văng (Swing Carousel)</h3>
                                        <p>Đu quay dây văng khiến người chơi có cảm giác đang bay lượn trong không trung và như đang rơi tự do. Trải nghiệm phấn khích này đến từ tư thế xoay tròn hoặc xoay nghiêng của đu quay ở độ cao 3m.</p>
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