import React, { Component } from 'react';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';

class WorldsGarden extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div>
                    <div className="destination_banner_wrap overlay" style={{ backgroundImage: `url(../images/vinpearl/worlds-garden/vuonNhat.jpeg)` }}>
                        <div className="destination_text text-center">
                            <h3>Worlds Garden</h3>
                        </div>
                    </div>
                    <div className="destination_details_info" >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Vườn Nhật (Japanese Garden)</h3>
                                        <p>Ở Việt Nam, một trong những Vườn Nhật đúng nghĩa đầu tiên đã được xây dựng tại VinWonders Nha Trang. Đến đây, tín đồ văn hóa Phù Tang đễ dàng bắt gặp những khu vườn cảnh truyền thống với hoa cỏ, sỏi đá... mô phỏng sông ngòi, hồ nước hay núi đá trong tự nhiên.</p>
                                        <p>Ngoài ra những biểu tượng của văn hóa Nhật Bản như cổng trời Torii, ngôi nhà gỗ, cây cầu màu đỏ vắt ngang con suối với đàn cá Koi tung tăng bơi lội, những chậu cây bonsai mang vẻ đẹp thanh tịnh ... đều có ở VinWonders Nha Trang.</p>
                                        <p><img src="../images/vinpearl/worlds-garden/vuonNhat.jpeg" className="d-block w-100" alt="..." /></p>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Hoang mạc Châu Phi (African Desert)</h3>
                                        <p>Với diện tích hơn 3.5 hecta, công viên thực vật của VinWonders Nha Trang tái hiện châu Phi hoang dã với những ngôi nhà đất sét của người người Cameroon, hay những sa mạc khô cằn xứ Chad. Xung quanh đó là những quần thể xương rồng hơn 400 loài, cùng những loài cây đặc trưng châu Phi như cây bao báp (250 tuổi), cây chorisia (cây chai), và cây ô-liu (500 tuổi).</p>
                                        <p><img src="../images/vinpearl/worlds-garden/hoangmacChauphi.jpeg" className="d-block w-100" alt="..." /></p>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Đại lộ bầu trời (Sky Boulevard) - Bánh xe bầu trời (Sky Wheel) </h3>
                                        <p>Bạn muốn trải nghiệm hoàng hôn thật rực rỡ nơi mà giữa biển và bầu trời dường như hoà làm một, để rồi có thể có cho mình một bức hình đẹp vào thời điểm cuối ngày này. Hãy đến Đại lộ bầu trời và trải nghiệm ngay.</p>
                                        <p>Cùng với Bánh xe bầu trời được công nhận kỷ lục Guinness cho vòng quay lớn nhất Việt Nam. Cho đến nay, vòng đu quay này đã để lại nhiều ấn tượng độc đáo với du khách tham quan với thiết kế tráng lệ, tạo nên điểm nổi bật cho vịnh Nha Trang. Từ độ cao 120m, du khách sẽ thu trọn trong tầm mắt toàn bộ khung cảnh nên thơ của vịnh biển xanh thẳm, đẹp tựa như tranh, và cũng là một trong 29 vịnh biển đẹp nhất thế giới.</p>
                                        <p><img src="../images/vinpearl/worlds-garden/banhxebautroi.jpeg" className="d-block w-100" alt="..." /></p>
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

export default WorldsGarden;