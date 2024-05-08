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
                                        <h3>Thế giới đại dương (Sea World)</h3>
                                        <p>Với vô vàn màu sắc với hai khu vực tham quan là Thuỷ Cung và Cung điện Hải Vương.</p>
                                        <p>Cung điện Hải Vương là hệ thống đường hầm mái vòm, đi xuyên qua bể sinh sống của hơn 30.000 sinh vật biển. Trong khi đó, khu vực Thuỷ Cung là ngôi nhà khổng lồ của các sinh vật biển từ cá nước ngọt, cá nước mặn đến các loài bò sát. Hãy cẩn thận vì có thể bạn sẽ bị “thôi miên” và không muốn về khi dạo quanh khu thủy cung có diện tích 3.400m2 này đấy!</p>
                                        <p><img src="../images/vinpearl/sea-world/thuycung2.jpeg" className="d-block w-100" alt="..." /></p>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Xem nàng tiên cá biểu diễn</h3>
                                        <p>Ghé thăm thủy cung, du khách đừng bỏ qua buổi biểu diễn uyển chuyển của những nàng tiên cá xinh đẹp. Các cô gái mặc lên mình những bộ trang phục lộng lẫy rồi hóa thân thành nàng tiên cá bơi lội tự do trong bể kính. Từng động tác nhịp nhàng, uyển chuyển chắc chắn khiến du khách không thể rời mắt. Chương trình biểu diễn nghệ thuật đầy hấp dẫn thu hút rất nhiều bạn nhỏ đến chiêm ngưỡng. </p>
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