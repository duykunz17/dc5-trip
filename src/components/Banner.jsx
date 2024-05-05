import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const carouselItems = [
    {
        backgroundImage: 'url("images/bg-fairy-land.jpg")',
        logo: 'images/logo-fairy-land.jpg',
        description: 'Bước chân vào xử sở thần tiên, trải nghiệm các trò chơi trong nhà cho gia đình. Và không thể bỏ qua siêu phẩm Zipline và Đường lượn nhớ đời nếu bạn là tín đồ của cảm giác mạnh',
        imageSrc: 'images/1.jpg'
    },
    {
        backgroundImage: 'url("images/bg-adventure-land.jpg")',
        logo: 'images/logo-adventure-land.jpg',
        description: 'Thỏa sức chinh phục các trò chơi cảm giác mạnh với độ thử thách không dành cho những người "yếu" bóng vía. Các trò chơi đặc sắc: Tháp rơi tự do, Bật nhảy Bungee...',
        imageSrc: 'images/3.jpg'
    },
    {
        backgroundImage: 'url("images/bg-safari.jpg")',
        logo: 'images/logo-safari.jpg',
        description: 'Là nơi bạn có thể khám phá đời sống hoang dã thu nhỏ giữa lòng VinWonders Nha Trang. Đây còn là nhà cho các loài vật khác như hươu cao cổ, hà mã, hồng hạc và hổ bengal quý hiếm.',
        imageSrc: 'images/7.jpg'
    },
    {
        backgroundImage: 'url("images/bg-fairy-land.jpg")',
        logo: 'images/logo-fairy-land.jpg',
        description: 'Bước chân vào xử sở thần tiên, trải nghiệm các trò chơi trong nhà cho gia đình. Và không thể bỏ qua siêu phẩm Zipline và Đường lượn nhớ đời nếu bạn là tín đồ của cảm giác mạnh',
        imageSrc: 'images/1.jpg'
    },
    {
        backgroundImage: 'url("images/bg-adventure-land.jpg")',
        logo: 'images/logo-adventure-land.jpg',
        description: 'Thỏa sức chinh phục các trò chơi cảm giác mạnh với độ thử thách không dành cho những người "yếu" bóng vía. Các trò chơi đặc sắc: Tháp rơi tự do, Bật nhảy Bungee...',
        imageSrc: 'images/3.jpg'
    },
    {
        backgroundImage: 'url("images/bg-safari.jpg")',
        logo: 'images/logo-safari.jpg',
        description: 'Là nơi bạn có thể khám phá đời sống hoang dã thu nhỏ giữa lòng VinWonders Nha Trang. Đây còn là nhà cho các loài vật khác như hươu cao cổ, hà mã, hồng hạc và hổ bengal quý hiếm.',
        imageSrc: 'images/7.jpg'
    }
];

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: false,
        };
    }
    componentDidMount() {
        this.checkIsMobile();
        window.addEventListener('resize', this.checkIsMobile);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.checkIsMobile);
    }

    checkIsMobile = () => {
        const isMobile = window.innerWidth <= 900; // Adjust the breakpoint as needed
        this.setState({ isMobile });
    };
    render() {
        const { isMobile } = this.state;
        const groupedItems = [];
        for (let i = 0; i < carouselItems.length; i += 3) {
            groupedItems.push(carouselItems.slice(i, i + 3));
        }
        return (
            <div className='container'>
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        {!isMobile && groupedItems.map((group, index) => (
                            <li key={index} data-target="#carouselExampleCaptions" data-slide-to={index} className={index === 0 ? "active" : ""} />
                        ))}
                    </ol>
                    <div className="carousel-inner">
                        {
                            isMobile ? carouselItems.map((item, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                    <div className="row" style={{ margin: 0, textAlign: "center", display: "flex", justifyContent: "space-around" }}>
                                        <div className="col-lg-4" style={{ backgroundImage: item.backgroundImage, padding: "50px 15px 50px 15px", margin: "-10px" }}>
                                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
                                                <div className="mc_logo_game">
                                                    <img style={{ maxWidth: "100%", height: "auto" }} src={item.logo} className="" alt="..." />
                                                </div>
                                                <div className="tg_desc_game">
                                                    <p>{item.description}</p>
                                                </div>
                                                <div className="mc_game_select" style={{ width: "100%", display: "inline-block", margin: "0 0 20px", height: "200px" }}>
                                                    <img style={{ borderRadius: "10px", marginBottom: "10px" }} src={item.imageSrc} alt="..." />
                                                </div>
                                                <Link to="/place/1" className="boxed-btn3" style={{ padding: "15px 20px" }}>Khám phá ngay</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )) :
                                groupedItems.map((group, index) => (
                                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                        <div className="row" style={{ margin: 0, textAlign: "center", display: "flex", justifyContent: "space-between" }}>
                                            {group.map((item, idx) => (
                                                <div key={idx} className="col-lg-4" style={{ backgroundImage: item.backgroundImage, padding: "50px 15px 50px 15px", margin: "-10px" }}>
                                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
                                                        <div className="mc_logo_game">
                                                            <img style={{ maxWidth: "100%", height: "auto" }} src={item.logo} className="" alt="..." />
                                                        </div>
                                                        <div className="tg_desc_game">
                                                            <p>{item.description}</p>
                                                        </div>
                                                        <div className="mc_game_select" style={{ width: "100%", display: "inline-block", margin: "0 0 20px", height: "200px" }}>
                                                            <img style={{ borderRadius: "10px", marginBottom: "10px" }} src={item.imageSrc} alt="..." />
                                                        </div>
                                                        <Link to="/place/1" className="boxed-btn3" style={{ padding: "15px 20px" }}>Khám phá ngay</Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))

                        }
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