import React, { Component } from 'react';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';

class FairyLand extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <div className="destination_banner_wrap overlay" style={{ backgroundImage: `url(../images/vinpearl/fairy-land/fairy-land.jpg)` }}>
                        <div className="destination_text text-center">
                        </div>
                    </div>
                    <div className="destination_details_info" >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Quảng Trường Thần Thoại (Luminary Square)</h3>
                                        <p>Là điểm đến đầu tiên sau khi bạn đi qua cổng chính VinWonders, cũng là quảng trường nơi diễn ra Tatashow vào lúc 19:30 tối. Quảng trường thần thoại là nơi mà các tín đồ sống ảo cho ra đời những bức ảnh hết sức ảo diệu.</p>
                                        <p>Đây cũng là nơi bạn có thể lựa chọn các trò chơi gia đình rong nhà như: ADVENTURE WORLD, khu vực TATA Ở XỨ SỞ THẦN TIÊN.</p>
                                        <p>Hoặc nếu bạn là tín độ của việc bay lượn, tự do trên không hãy đến và trải nghiệm Đu dây trên không Zipline và Đường lượn nhớ đời. Đây là trò chơi “cực hot” & mỗi giờ chỉ có 10 lượt chơi, vậy bạn hãy đến xếp hàng từ sớm để kịp trải nghiệm này (lúc 10h) nhé!</p>
                                        <p><img src="../images/vinpearl/fairy-land/luminarysquare.jpg" className="d-block w-100" alt="..." /></p>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Tata ở xứ sở thần tiên- Thiên đường vui chơi cho bé</h3>
                                        <p>Là khu vui chơi được thiết kế đặc biệt dành cho du khách nhí, không chỉ đưa các bé đắm chìm vào thế giới cổ tích với những câu chuyện quen thuộc như Jack và cây đậu thần, Peter Pan, nàng Bạch Tuyết, Hansel và Gretel…mà còn giúp các bé thoả thích vận động với hàng loạt trò chơi hấp dẫn:</p>
                                        <p>- Bé có thể bay lên cao khám phá bầu trời trên chiếc xe ma thuật của công chúa Tata</p>
                                        <p>- Ngồi trên chiếc khinh khí cầu hình kẹo khổng lồ khám phá xưởng kẹo của Gretel</p>
                                        <p>- Cùng bố mẹ vượt qua những thử thách tại vùng đất rừng xanh</p>
                                        <p>- Hay leo lên cây đậu thần khổng lồ để khám phá những bí mật trên ngọn cây đó.</p>
                                        <p>Còn rất nhiều trò chơi đang chờ các bé khám phá...</p>
                                        <p><img src="../images/vinpearl/fairy-land/tata-xu-so-than-tien.jpg" className="d-block w-100" alt="..." /></p>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Đu dây trên không - Zipline</h3>
                                        <p>Nếu bạn là một “tín đồ” của các trò chơi cảm giác mạnh thì không nên bỏ qua trải nghiệm đầy thử thách này tại VinWonders Nha Trang đâu nha. Nắm giữ ba kỷ lục: đường trượt dài nhất, dốc nhất và có cú nhảy tiếp đất cao nhất tại Việt Nam, trò chơi đu dây mạo hiểm zipline tại VinWonders Nha Trang sẽ cho bạn cảm giác “bay giữa không trung”, ngắm trọn một vùng biển cả bao la, xanh ngát. Cứ mỗi 30 phút đón 10 khách.</p>
                                        <p>Thứ 2-6: 10:00 - 17:00</p>
                                        <p>Thứ 7, CN: 09:00 - 17:00</p>
                                        <p>Tạm ngưng hoạt động khi thời tiết có gió và mưa lớn.</p>
                                        <p>Trò chơi sẽ dừng nhận khách khi số lượng khách đã xếp hàng đợi hết công suất trong ngày.</p>
                                        <p><img src="../images/vinpearl/fairy-land/zipline.jpeg" className="d-block w-100" alt="..." /></p>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Đường lượn nhớ đời</h3>
                                        <p>Thưởng ngoạn hành trình với đường 1 dài 2531m và đường 2 dài 2576m, khám phá bức tranh cảnh tráng lệ vòng quanh đảo Hòn Tre trên hệ thống xe trượt quanh núi lớn nhất Đông Nam Á!</p>
                                        <p>Thời gian hoạt động: 08:30 - 19:00</p>
                                        <p>Tạm ngưng hoạt động khi thời tiết có gió và mưa lớn.</p>
                                        <p><img src="../images/vinpearl/fairy-land/duong-luon-nho-doi.jpg" className="d-block w-100" alt="..." /></p>
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

export default FairyLand;