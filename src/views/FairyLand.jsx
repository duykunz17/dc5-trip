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
                                        <p>Là điểm đến đầu tiên sau khi bạn đi qua cổng chính Vinpearl, cũng là quảng trường nơi diễn ra Tatashow vào lúc 19:30 tối. Quảng trường thần thoại là nơi mà các tín đồ sống ảo cho ra đời những bức ảnh hết sức ảo diệu.</p>
                                        <p>Đây cũng là nơi bạn có thể lựa chọn các trò chơi gia đình như: <strong>khu trò chơi trong nhà "Adventure World"; thiên đường vui cho bé - Tata ở xứ sở thần tiên; Tata World River Adventure...</strong> </p>
                                        <p>Hoặc nếu bạn là tín đồ của việc bay lượn, tự do trên không hãy đến và trải nghiệm Đu dây trên không Zipline hoặc Đường lượn nhớ đời. Đây là những trò chơi “cực hot” & mỗi giờ chỉ có 10 lượt chơi, vậy bạn hãy đến xếp hàng từ sớm (lúc 10h) để kịp trải nghiệm này nhé!</p>
                                        <p><img src="../images/vinpearl/fairy-land/luminarysquare.jpg" className="d-block w-100" alt="..." /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Tata World River Adventure </h3>
                                        <p>Tata World River Adventure là trò chơi thuyền nướctrong bóng tối <strong><em>đầu tiên của Việt Nam</em></strong>.
                                        Đây là loại trò chơi được yêu thích nhất tại các công viên chủ đề trên thế giới, 
                                        sử dụng nhiều công nghệ đa phương tiện (robot rối máy, LED, hiệu ứng ánh sáng, âm thanh, khói, sương…).
                                        </p>
                                        <p>Với Tata River Adventure, ngay từ khi bước vào cổng phân khu, thành viên DC5 sẽ được trải nghiệm cảm giác đắm mình vào 
                                        không gian cổ tích với phần giới thiệu trong không gian đầy ma thuật, hành trình được dẫn dắt theo lời kể 
                                        của nhân vật đặc biệt mang tên “Người lưu giữ các câu chuyện cổ tích”.</p>
                                        <p></p>
                                        <p><img src="../images/vinpearl/fairy-land/tatariver.jpg" className="d-block w-100" alt="..." /></p>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Tata ở xứ sở thần tiên - Thiên đường vui chơi cho bé</h3>
                                        <p>Là khu vui chơi được thiết kế đặc biệt dành cho du khách nhí, không chỉ đưa các bé đắm chìm vào thế giới cổ tích với những câu chuyện quen thuộc như Jack và cây đậu thần, Peter Pan, nàng Bạch Tuyết, Hansel và Gretel… mà còn giúp các bé thoả thích vận động với hàng loạt trò chơi hấp dẫn:
                                            <li>- Bé có thể bay lên cao khám phá bầu trời trên chiếc xe ma thuật của công chúa </li> 
                                            <li>- Ngồi trên chiếc khinh khí cầu hình kẹo khổng lồ khám phá xưởng kẹo của Gretel</li> 
                                            <li>- Cùng bố mẹ vượt qua những thử thách tại vùng đất rừng xanh </li> 
                                            <li>- Hay leo lên cây đậu thần khổng lồ để khám phá những bí mật trên ngọn cây đó. Và còn rất nhiều trò chơi đang chờ các bé khám phá...</li> 
                                        </p>
                                        <p><img src="../images/vinpearl/fairy-land/tata-xu-so-than-tien.jpg" className="d-block w-100" alt="..." /></p>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Đu dây trên không (Zipline)</h3>
                                        <p>Nếu bạn là một “tín đồ” của các trò chơi cảm giác mạnh thì không nên bỏ qua trải nghiệm đầy thử thách này tại VinWonders Nha Trang đâu nha. Nắm giữ ba kỷ lục: đường trượt dài nhất, dốc nhất và có cú nhảy tiếp đất cao nhất tại Việt Nam, trò chơi đu dây mạo hiểm zipline tại VinWonders Nha Trang sẽ cho bạn cảm giác “bay giữa không trung”, ngắm trọn một vùng biển cả bao la, xanh ngát.</p>
                                        <p>Thời gian hoạt động: 10:00 - 17:00. Đây là trò chơi <strong><em>khá đắt khách</em></strong> vì thường có nhiều người xếp hàng, cho nên bạn hãy tranh thủ thời gian để trải nghiệm nó đầu tiên nhé!</p>
                                        <p><img src="../images/vinpearl/fairy-land/zipline.jpeg" className="d-block w-100" alt="..." /></p>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-9">
                                    <div className="destination_info">
                                        <h3>Đường lượn nhớ đời (Alpine coaster)</h3>
                                        <p>Sự bức bối của mùa hè đôi khi vắt cạn những dư vị của tuổi trẻ nồng nhiệt. Vậy thì tại sao bạn không chinh phục điều gì đó ngay trong Hè này tại Vinpearl Land! </p>
                                        <p>Với chiều dài 1,760m cùng độ cao chênh lệch 133m giữa hai ga, Đường Trượt Nhớ Đời sẽ là chuyến hành trình thưởng ngoạn và mạo hiểm độc đáo dành riêng cho bạn. Trong chặng đầu của chuyến hành trình, bạn sẽ đi từ ga dưới chân núi để thưởng lãm vẻ đẹp tuyệt tác của vịnh Nha Trang xinh đẹp.
                                        Hãy tự thêm chút “gia vị” vào cuộc sống của mình và vẽ lại chặng hành trình tuổi trẻ bằng những trải ngiệm khó quên. 😊</p>
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