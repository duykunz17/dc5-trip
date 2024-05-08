import React, { Component } from 'react';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';

class Event1 extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div>
                    <div className="destination_banner_wrap overlay" style={{ backgroundImage: `url(../images/sukiennoibat/Event1/header1.jpeg)` }}>
                        <div className="destination_text text-center">
                            <h3>Biểu diễn Tata Show</h3>
                        </div>
                    </div>
                    <div className="destination_details_info" >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Tata Show - Bom tấn thực cảnh 3D tại Việt Nam</h3>
                                        <p>Một trong sự kiện “nhất định phải xem” sẽ trở thành ký ức tuyệt vời nhất cho mỗi thành viên DC5 khi ghé thăm Vinpearl Nha Trang trong mùa hè này.</p>
                                        <p><img src="../images/sukiennoibat/Event1/photo1.jpeg" className="d-block w-100" alt="..." /></p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Lịch trình diễn và địa điểm Tata Show Nha Trang</h3>
                                        <p>Thời gian: 19h30 – 20h15 hằng ngày</p>
                                        <p>Địa điểm: Quảng trường thần thoại</p>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Tata show là gì?</h3>
                                        <p>Tata Show  là vở diễn thực cảnh đa phương tiện đẳng cấp quốc tế lần đầu tiên xuất hiện trên thị trường giải trí Việt Nam.</p>
                                        <p>Sự kết hợp giữa công nghệ mapping 3D hiện đại bậc nhất tại Việt Nam, trình diễn ánh sáng, khói lửa và đặc biệt phần biểu diễn của 150 diễn viên trong nước và quốc tế đã tạo ra những màn trình diễn hoành tráng và mãn nhãn cho người xem.</p>
                                        <p><img src="../images/sukiennoibat/Event1/photo2.jpeg" className="d-block w-100" alt="..." /></p>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Cốt truyện huyền ảo với dàn nhân vật đầy sức hút</h3>
                                        <p>Tata Show không chỉ hấp dẫn khán giả với dàn nhân vật đầy sức hút (Công chúa Tata xinh đẹp, trong sáng cùng Hoàng tử Đại Dương dũng cảm, chân thành cùng những người bạn thân thiết Monta, Vẹt,...) mà quan trọng hơn cả là cốt truyện huyền ảo với những nút thắt vỡ oà cảm xúc trong xứ sở thần tiên.</p>
                                        <p>Nội dung của Tata Show là nàng công chúa Tata, hoàng tử Đại dương cùng những người bạn thân thiết phiêu lưu qua các thế giới kỳ thú, dũng cảm chiến đấu với cái ác để bảo vệ xứ sở Vạn hoa rực rỡ sắc màu. Họ phải đương đầu với thế lực hắc ám hùng mạnh của Chúa Tể Bóng Tối để bảo vệ viên ngọc Hạnh phúc và xứ sở thần tiên của mình.</p>
                                        <p><img src="../images/sukiennoibat/Event1/photo3.jpeg" className="d-block w-100" alt="..." /></p>
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

export default Event1;