import React, { Component } from 'react';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';

class KingsGarden extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div>
                    <div className="destination_banner_wrap overlay" style={{ backgroundImage: `url(../images/vinpearl/kings-garden/header_kingsgarden.jpeg)` }}>
                        <div className="destination_text text-center">
                        </div>
                    </div>
                    <div className="destination_details_info" >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Vườn Quý Vương (King's garden)</h3>
                                        <p>King’s Garden là nơi bạn có thể thay đổi bầu không khí bằng cách khám phá đời sống hoang dã thu nhỏ giữa lòng VinWonders Nha Trang. Đây chính là “đại bản doanh” của khoảng 30 loài chim sắc màu đến từ hàng chục quốc gia, trong đó có loài hồng hạc vô cùng kiêu hãnh. Ngoài ra thì ở King’s Garden còn có các loài vật khác như hươu cao cổ, hà mã và hổ bengal quý hiếm.</p>
                                        <p><img src="../images/vinpearl/kings-garden/header_kingsgarden.jpeg" className="d-block w-100" alt="..." /></p>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Biểu diễn Chim (Bird Show)</h3>
                                        <p>Hàng ngày: 11:00 - 11:20 | 15:00 - 15:20</p>
                                        <p>SÂN KHẤU BIỂU DIỄN CHIM - VƯỜN QUÝ VƯƠNG</p>
                                        <p>10 tiết mục đến từ 10 loài chim quý hiếm, biểu diễn những vũ điệu độc đáo dưới sự chỉ đạo tài tình của người huấn luyện</p>
                                        <p><img src="../images/vinpearl/kings-garden/bieudienchim.jpeg" className="d-block w-100" alt="..." /></p>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Hồ hồng hạc (Flamingos Lake)</h3>
                                        <p>BẠN ĐÃ TỚI HỒ HỒNG HẠC VINPEARL LAND NHA TRANG NƠI ĐỨNG VÀO LÀ CÓ ẢNH ĐẸP CHƯA?</p>
                                        <p>Là góc check in yêu thích của vô vàn du khách. Hồng hạc vừa kiêu sa, vừa huyền bí, cùng khung cảnh đẹp tựa như tranh, đây là nơi phóng tác nghệ thuật ảnh của rất nhiều tín đồ du lịch. </p>
                                        <p><img src="../images/vinpearl/kings-garden/vuonhonghac.jpeg" className="d-block w-100" alt="..." /></p>
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

export default KingsGarden;