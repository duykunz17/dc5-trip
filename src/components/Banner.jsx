import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {
    render() {
        return (
            <div className="bd-example">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
                        <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                        {/* <li data-target="#carouselExampleCaptions" data-slide-to={2} /> */}
                    </ol>
                    <div className="carousel-inner">
                        {/* <div className="carousel-item active">
                            <div className="row">
                                <div className="col-lg-4" style={{ backgroundImage: "url(" + "images/bg-fairy-land.jpg" + ")", backgroundRepeat: "no-repeat" }}>
                                    <div className='col-lg-10'>
                                        <div className="" style={{ display: "flex", alignItems: "center", flexDirection: "column", margin: "40px", textAlign: "center" }}>
                                            <img style={{ marginBottom: "10px" }} src="images/logo-fairy-land.jpg" className="d-block w-50" alt="..." />
                                            <p style={{ color: "white", marginBottom: "10px" }}>Lạc bước vào thế giới cổ tích lung linh như một giấc mơ, và ẩn chứa những trò chơi mạo hiểm không thể bỏ lỡ như siêu phẩm Tata show, Zipline đạt 3 kỷ lục, Đường lượn nhớ đời...</p>
                                            <img style={{ borderRadius: "10px", marginBottom: "10px" }} src="images/1.jpg" className="d-block w-100" alt="..." />
                                            <Link to="/place/1" className="boxed-btn3">Khám phá ngay</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4" style={{ backgroundImage: "url(" + "images/bg-adventure-land.jpg" + ")", backgroundRepeat: "no-repeat" }}>
                                    <div className='col-lg-10'>
                                        <div className="" style={{ display: "flex", alignItems: "center", flexDirection: "column", margin: "40px", textAlign: "center" }}>
                                            <img style={{ marginBottom: "10px" }} src="images/logo-adventure-land.jpg" className="d-block w-50" alt="..." />
                                            <p style={{ color: "white", marginBottom: "10px" }}>Lạc bước vào thế giới cổ tích lung linh như một giấc mơ, và ẩn chứa những trò chơi mạo hiểm không thể bỏ lỡ như siêu phẩm Tata show, Zipline đạt 3 kỷ lục, Đường lượn nhớ đời...</p>
                                            <img style={{ borderRadius: "10px", marginBottom: "10px" }} src="images/1.jpg" className="d-block w-100" alt="..." />
                                            <Link to="/place/1" className="boxed-btn3">Khám phá ngay</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4" style={{ backgroundImage: "url(" + "images/bg-adventure-land.jpg" + ")", backgroundRepeat: "no-repeat" }}>
                                    <div className='col-lg-10'>
                                        <div className="" style={{ display: "flex", alignItems: "center", flexDirection: "column", margin: "40px", textAlign: "center" }}>
                                            <img style={{ marginBottom: "10px" }} src="images/logo-adventure-land.jpg" className="d-block w-50" alt="..." />
                                            <p style={{ color: "white", marginBottom: "10px" }}>Lạc bước vào thế giới cổ tích lung linh như một giấc mơ, và ẩn chứa những trò chơi mạo hiểm không thể bỏ lỡ như siêu phẩm Tata show, Zipline đạt 3 kỷ lục, Đường lượn nhớ đời...</p>
                                            <img style={{ borderRadius: "10px", marginBottom: "10px" }} src="images/1.jpg" className="d-block w-100" alt="..." />
                                            <Link to="/place/1" className="boxed-btn3">Khám phá ngay</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-lg-4" >
                                    <img src="images/bg-fairy-land.jpg" className="d-block w-100" alt="..." style={{ height: "100%" }} />
                                    <div className="carousel-caption" style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%", top: "10%" }}>
                                        <img style={{ marginBottom: "10px", display: "inline-block" }} src="images/logo-fairy-land.jpg" className="" alt="..." />
                                        <span style={{ color: "white", marginBottom: "10px" }}>Lạc bước vào thế giới cổ tích lung linh như một giấc mơ, và ẩn chứa những trò chơi mạo hiểm không thể bỏ lỡ như siêu phẩm Tata show, Zipline đạt 3 kỷ lục, Đường lượn nhớ đời...</span>
                                        <img style={{ borderRadius: "10px", marginBottom: "10px" }} src="images/1.jpg" className="d-block w-100 img" alt="..." />
                                        <Link to="/place/1" className="boxed-btn3" style={{ padding: "15px 20px" }}>Khám phá ngay</Link>
                                    </div>
                                </div>
                                <div className="col-lg-4" >
                                    <img src="images/bg-adventure-land.jpg" className="d-block w-100" alt="..." style={{ height: "100%" }} />
                                    <div className="carousel-caption" style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%", top: "10%" }}>
                                        <img style={{ marginBottom: "10px", display: "inline-block" }} src="images/logo-adventure-land.jpg" className="" alt="..." />
                                        <span style={{ color: "white", marginBottom: "10px" }}>Thỏa sức chinh phục các trò chơi cảm giác mạnh đẳng cấp thế giới với độ thử thách không dành cho những người yếu tim, đặc biệt là Cuộc phiêu lưu hầm mỏ, Đu quay dây văng...</span>
                                        <img style={{ borderRadius: "10px", marginBottom: "10px" }} src="images/3.jpg" className="d-block w-100 img" alt="..." />
                                        <Link to="/place/2" className="boxed-btn3" style={{ padding: "15px 20px" }}>Khám phá ngay</Link>
                                    </div>
                                </div>

                                <div className="col-lg-4" >
                                    <img src="images/bg-tropical-paradise.jpg" className="d-block w-100" alt="..." style={{ height: "100%" }} />
                                    <div className="carousel-caption" style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%", top: "10%" }}>
                                        <img style={{ marginBottom: "10px", display: "inline-block" }} src="images/logo-tropical-paradise.jpg" className="" alt="..." />
                                        <span style={{ color: "white", marginBottom: "10px" }}>Thời gian mở cửa: 09:00 - 17:30 Thiên đường nhiệt đới nóng bỏng với công viên nước ngọt trên biển đầu tiên và duy nhất tại Việt Nam, Vịnh phao nổi 4.200m2 lớn nhất thế giới và hàng loạt trò chơi kỳ thú.</span>
                                        <img style={{ borderRadius: "10px", marginBottom: "10px" }} src="images/5.jpg" className="d-block w-100 img" alt="..." />
                                        <Link to="/place/3" className="boxed-btn3" style={{ padding: "15px 20px" }}>Khám phá ngay</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-lg-4" >
                                    <img src="images/bg-world-garden.jpg" className="d-block w-100" alt="..." style={{ height: "100%" }} />
                                    <div className="carousel-caption" style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%", top: "10%" }}>
                                        <img style={{ marginBottom: "10px", display: "inline-block" }} src="images/logo-world-garden.jpg" className="" alt="..." />
                                        <span style={{ color: "white", marginBottom: "10px" }}>Mục sở thị các bộ sưu tập "kỳ hoa dị thảo" khổng lồ đến từ 5 châu được tái hiện trong những "tiểu vũ trụ" thực vật tràn đầy nhựa sống.</span>
                                        <img style={{ borderRadius: "10px", marginBottom: "10px" }} src="images/7.jpg" className="d-block w-100 img" alt="..." />
                                        <Link to="/place/4" className="boxed-btn3" style={{ padding: "15px 20px" }}>Khám phá ngay</Link>
                                    </div>
                                </div>
                                <div className="col-lg-4" >
                                    <img src="images/bg-sea-world.jpg" className="d-block w-100" alt="..." style={{ height: "100%" }} />
                                    <div className="carousel-caption" style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%", top: "10%" }}>
                                        <img style={{ marginBottom: "10px", display: "inline-block" }} src="images/logo-sea-world.jpg" className="" alt="..." />
                                        <span style={{ color: "white", marginBottom: "10px" }}>Lạc bước vào thế giới cổ tích lung linh như một giấc mơ, và ẩn chứa những trò chơi mạo hiểm không thể bỏ lỡ như siêu phẩm Tata show, Zipline đạt 3 kỷ lục, Đường lượn nhớ đời...</span>
                                        <img style={{ borderRadius: "10px", marginBottom: "10px" }} src="images/8.jpg" className="d-block w-100 img" alt="..." />
                                        <Link to="/place/5" className="boxed-btn3" style={{ padding: "15px 20px" }}>Khám phá ngay</Link>
                                    </div>
                                </div>
                                <div className="col-lg-4" >
                                    <img src="images/bg-sea-world.jpg" className="d-block w-100" alt="..." style={{ height: "100%" }} />
                                    <div className="carousel-caption" style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%", top: "10%" }}>
                                        <img style={{ marginBottom: "10px", display: "inline-block" }} src="images/logo-sea-world.jpg" className="" alt="..." />
                                        <span style={{ color: "white", marginBottom: "10px" }}>Lạc bước vào thế giới cổ tích lung linh như một giấc mơ, và ẩn chứa những trò chơi mạo hiểm không thể bỏ lỡ như siêu phẩm Tata show, Zipline đạt 3 kỷ lục, Đường lượn nhớ đời...</span>
                                        <img style={{ borderRadius: "10px", marginBottom: "10px" }} src="images/8.jpg" className="d-block w-100 img" alt="..." />
                                        <Link to="/place/6" className="boxed-btn3" style={{ padding: "15px 20px" }}>Khám phá ngay</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" style={{width: "40px", height: "40px"}}/>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" style={{width: "40px", height: "40px"}}/>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Banner;