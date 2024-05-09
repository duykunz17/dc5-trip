import React, { Component } from 'react';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';

class SeaWorld extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div>
                    <div className="destination_banner_wrap overlay" style={{ backgroundImage: `url(../images/vinpearl/sea-world/thuy-cung-nha-trang_1.jpg)` }}>
                        <div className="destination_text text-center">
                        </div>
                    </div>
                    <div className="destination_details_info" >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Thủy Cung (Sea World)</h3>
                                        <p>Hành trình khám phá thủy cung Vinpearl sẽ bắt đầu trong lòng núi nhân tạo, gồm hai tầng được chia theo từng chức năng cụ thể, giúp bạn dễ dàng khám phá. Bạn có thể di chuyển lần lượt theo các khu vực hoặc lựa chọn ngay điểm đến mà mình yêu thích.
                                            <li>&nbsp; <strong>- Tầng trên:</strong> triển lãm trưng bày những loại bò sát, côn trùng, lưỡng cư phổ biến</li>
                                            <li>&nbsp; <strong>- Tầng dưới:</strong> với hệ thống đường hầm mái vòm hiện đại, được thiết kế theo dạng bể kính mái vòm rộng lớn. Cách thiết kế này giúp du khách dễ dàng tham quan và tạo cảm giác như đang ở đáy đại dương vô cùng sinh động </li>
                                        </p>
                                        <p><img src="../images/vinpearl/sea-world/thuycung2.jpeg" className="d-block w-100" alt="..." /></p>
                                        <p><img src="../images/vinpearl/sea-world/thuycung3.jpg" className="d-block w-100" alt="..." /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Biểu diễn cho cá ăn (10:00 – 10:15)</h3>
                                        <p>Tại Thủy cung, các thành viên DC5 sẽ được tận mắt xem buổi biểu diễn cho cá ăn đầy ấn tượng giữa lòng đại dương sâu thẳm - nơi cư ngụ của 30.000 sinh vật biển đặc sắc tại hệ thống đường hầm mái vòm đầu tiên ở Việt Nam.</p>
                                        <p><img src="../images/vinpearl/sea-world/showcaan.jpeg" className="d-block w-100" alt="..." /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Xem nàng tiên cá biểu diễn (11:00 – 11:10)</h3>
                                        <p>Bạn không thể bỏ qua buổi biểu diễn nàng tiên cá hấp dẫn. Các cô gái xinh đẹp sẽ khoác lên mình trang phục lộng lẫy rồi nhập vai thành sinh vật diệu kỳ bơi lượn trong bể kính. Từng động tác uyển chuyển, nhịp nhàng chắc chắn sẽ khiến bạn không khỏi rời mắt. Chương trình biểu diễn nghệ thuật đầy mãn nhãn này không chỉ được lòng người lớn mà còn cả các bạn nhỏ đến tham quan. </p>
                                        <p><img src="../images/vinpearl/sea-world/tiencashow.jpeg" className="d-block w-100" alt="..." /></p>
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

export default SeaWorld;