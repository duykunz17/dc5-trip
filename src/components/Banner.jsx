import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {
    render() {
        return (
            <div className='container'>
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
                        <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                        {/* <li data-target="#carouselExampleCaptions" data-slide-to={2} /> */}
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row" style={{ margin: 0, textAlign: "center", display: "flex", justifyContent: "space-around" }}>
                                <div className="col-lg-4" style={{ backgroundImage: `url("images/bg-fairy-land.jpg")`, padding: "50px 15px 50px 15px", margin: "-10px" }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
                                        <div className="mc_logo_game">
                                            <img style={{ maxWidth: "100%", height: "auto" }} src="images/logo-fairy-land.jpg" className="" alt="..." />
                                        </div>
                                        <div className="tg_desc_game">
                                            <p>Bước chân vào xử sở thần tiên, trải nghiệm các trò chơi trong nhà cho gia đình. Và không thể bỏ qua siêu phẩm Zipline và Đường lượn nhớ đời nếu bạn là tín đồ của cảm giác mạnh</p>
                                        </div>
                                        <div className="mc_game_select" style={{ width: "100%", display: "inline-block", margin: "0 0 20px", height: "200px" }}>
                                            <img style={{ borderRadius: "10px", marginBottom: "10px" }} src="images/1.jpg" alt="..." />
                                        </div>
                                        <Link to="/place/1" className="boxed-btn3" style={{ padding: "15px 20px" }}>Khám phá ngay</Link>
                                    </div>
                                </div>

                                <div className="col-lg-4" style={{ backgroundImage: `url("images/bg-adventure-land.jpg")`, padding: "50px 15px 50px 15px" }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
                                        <div className="mc_logo_game">
                                            <img style={{ maxWidth: "100%", height: "auto" }} src="images/logo-adventure-land.jpg" className="" alt="..." />
                                        </div>
                                        <div className="tg_desc_game">
                                            <p>Thỏa sức chinh phục các trò chơi cảm giác mạnh với độ thử thách không dành cho những người "yếu" bóng vía. Các trò chơi đặc sắc: Tháp rơi tự do, Bật nhảy Bungee...</p>
                                        </div>
                                        <div className="mc_game_select" style={{ width: "100%", display: "inline-block", margin: "0 0 20px", height: "200px" }}>
                                            <img style={{ borderRadius: "10px", marginBottom: "10px" }} src="images/3.jpg" alt="..." />
                                        </div>
                                        <Link to="/place/1" className="boxed-btn3" style={{ padding: "15px 20px" }}>Khám phá ngay</Link>
                                    </div>
                                </div>

                                <div className="col-lg-4" style={{ backgroundImage: `url("images/bg-safari.jpg")`, padding: "50px 15px 50px 15px", margin: "-10px" }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
                                        <div className="mc_logo_game">
                                            <img style={{ maxWidth: "100%", height: "auto" }} src="images/logo-safari.jpg" className="" alt="..." />
                                        </div>
                                        <div className="tg_desc_game">
                                            <p>Là nơi bạn có thể khám phá đời sống hoang dã thu nhỏ giữa lòng VinWonders Nha Trang. Đây còn là nhà cho các loài vật khác như hươu cao cổ, hà mã, hồng hạc và hổ bengal quý hiếm.</p>
                                        </div>
                                        <div className="mc_game_select" style={{ width: "100%", display: "inline-block", margin: "0 0 20px", height: "200px" }}>
                                            <img style={{ borderRadius: "10px", marginBottom: "10px" }} src="images/7.jpg" alt="..." />
                                        </div>
                                        <Link to="/place/1" className="boxed-btn3" style={{ padding: "15px 20px" }}>Khám phá ngay</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" style={{ width: "40px", height: "40px" }} />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" style={{ width: "40px", height: "40px" }} />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Banner;