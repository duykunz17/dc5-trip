import React, { Component } from 'react';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';

class TropicalParadise extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div>
                    <div className="destination_banner_wrap overlay" style={{ backgroundImage: `url(../images/vinpearl/tropical-paradise/tropical-paradise.jpeg)` }}>
                        <div className="destination_text text-center">
                        </div>
                    </div>
                    <div className="destination_details_info" >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Máng trượt gia đình</h3>
                                        <p>Máng trượt gia đình là trò chơi phù hợp với nhóm 6 thành viên, các bạn sẽ cùng ngồi trên một chiếc phao và vượt qua dòng thác với độ cao 12,5m.</p>
                                        <p><img src="../images/vinpearl/tropical-paradise/mangtruotGiadinh.webp" className="d-block w-100" alt="..." /></p>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Đường trượt phao</h3>
                                        <p>Nếu bạn muốn một mình chinh phục những trò chơi mạo hiểm ở VinWonders Nha Trang thì đường trượt phao tại khu Công viên nước là một trong những trò chơi bạn nhất định phải thử. Ở thử thách này, bạn phải tự mình vượt qua đường trượt uốn lượn cao 12m, gồm 4 máng trượt với rất nhiều vòng cua gắt và có độ dốc “không phải dạng vừa” đâu nha!</p>
                                        <p><img src="../images/vinpearl/tropical-paradise/duongtruotPhao.webp" className="d-block w-100" alt="..." /></p>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Vòi rồng hung hãn</h3>
                                        <p>Mang đến cho du khách những trải nghiệm khác biệt liên tiếp khi trượt quanh những vòng xoáy hình dạng chiếc đĩa, hoặc trải nghiệm hành trình rơi vào hộp đen đem đến cảm giác phấn khích cho du khách.</p>
                                        <p>Dành cho khách hàng cao từ 130cm.</p>
                                        <p><img src="../images/vinpearl/tropical-paradise/voi-rong-hung-han.jpg" className="d-block w-100" alt="..." /></p>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Vịnh phao nổi (Tắm biển)</h3>
                                        <p>Nếu bạn là tín đồ của những trò chơi vận động dưới nước thì không thể bỏ qua vịnh phao nổi Vinpearl Nha Trang. Đây sẽ là nơi bạn thể hiện sự khéo léo của bản thân, sức mạnh của tinh thần đồng đội, nơi thỏa mãn đam mê chinh phục của tất cả những ai ưa khám phá, trải nghiệm.</p>
                                        <p><img src="../images/vinpearl/tropical-paradise/vinhphaonoi.jpeg" className="d-block w-100" alt="..." /></p>
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

export default TropicalParadise;