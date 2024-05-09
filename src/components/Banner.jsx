import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, Typography, Button } from '@material-ui/core';

const carouselItems = [
    {
        backgroundImage: 'url("images/bg-fairy-land.jpg")',
        logo: 'images/logo-fairy-land.jpg',
        description: 'Bước chân vào xứ sở thần tiên, trải nghiệm các trò chơi trong nhà cho gia đình. Và không thể bỏ qua siêu phẩm Zipline nếu bạn là tín đồ của cảm giác mạnh',
        imageSrc: 'images/vinpearl/fairy-land/fairy-land.jpg',
        urlDetail: '/place/fairy-land'
    },
    {
        backgroundImage: 'url("images/bg-adventure-land.jpg")',
        logo: 'images/logo-adventure-land.jpg',
        description: 'Thỏa sức chinh phục các trò chơi cảm giác mạnh với độ thử thách không dành cho những người "yếu" bóng vía. Các trò chơi đặc sắc: Tháp rơi tự do, Bật nhảy Bungee...',
        imageSrc: 'images/vinpearl/adventure-land/adventure-land.jpg',
        urlDetail: '/place/adventure-land'
    },
    {
        backgroundImage: 'url("images/bg-sea-world.jpg")',
        logo: 'images/logo-sea-world.jpg',
        description: 'Khám phá hệ sinh thái biển lung linh, kỳ bí nơi hơn 30.000 sinh vật biển cư ngụ và chiêm ngưỡng màn biểu diễn uyển chuyển của những nàng tiên cá xinh đẹp',
        imageSrc: 'images/vinpearl/sea-world/content_seaworld.jpg',
        urlDetail: '/place/sea-world'
    },
    {
        backgroundImage: 'url("images/bg-tropical-paradise.jpg")',
        logo: 'images/logo-tropical-paradise.jpg',
        description: 'Thời gian mở cửa: 10:00 - 17:30 Thiên đường nhiệt đới nóng bỏng với công viên nước và Vịnh phao nổi 4.200m2 lớn nhất thế giới cùng hàng loạt trò chơi kỳ thú',
        imageSrc: 'images/vinpearl/tropical-paradise/tropical-paradise.jpg',
        urlDetail: '/place/tropical-paradise'
    },
    {
        backgroundImage: 'url("images/bg-safari.jpg")',
        logo: 'images/vinpearl/kings-garden/logo_kinggarden.png',
        description: 'Là nơi bạn có thể khám phá đời sống hoang dã thu nhỏ giữa lòng Vinpearl Nha Trang. Đây còn là nhà cho các loài vật khác nhau ở nhiều nơi trên thế giới',
        imageSrc: 'images/vinpearl/kings-garden/content_kinggarden.jpg',
        urlDetail: '/place/kings-garden'
    },
    {
        backgroundImage: 'url("images/bg-world-garden.jpg")',
        logo: 'images/logo-world-garden.jpg',
        description: 'Được mệnh danh là khu vườn địa đàng đẹp nhất Vinpearl Nha Trang. Bạn sẽ ngỡ ngàng và tưởng chừng như đang lạc vào xứ sở thần tiên đầy hoa thơm cỏ lạ',
        imageSrc: 'images/vinpearl/worlds-garden/worlds-garden.jpg',
        urlDetail: '/place/worlds-garden'
    },
    
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
    
    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // For smooth scrolling
        });
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
                                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%"}}>
                                                <div className="mc_logo_game">
                                                    <img style={{ maxWidth: "100%", height: "auto" }} src={item.logo} className="" alt="..." />
                                                </div>
                                                <div className="tg_desc_game">
                                                    <p>{item.description}</p>
                                                </div>
                                                <div className="mc_game_select" style={{ width: "100%", display: "inline-block", margin: "0 0 20px", height: "200px" }}>
                                                    <img style={{ borderRadius: "10px", marginBottom: "10px" }} src={item.imageSrc} alt="..." />
                                                </div>
                                                <Link to={item.urlDetail} className="boxed-btn3" onClick={this.scrollToTop} style={{ padding: "15px 20px" }}>Khám phá ngay</Link>
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
                                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", marginLeft: idx === 0 ? "10px" : "", marginRight: idx === 2 ? "10px" : "" }}>
                                                        <div className="mc_logo_game">
                                                            <img style={{ maxWidth: "100%", height: "auto" }} src={item.logo} className="" alt="..." />
                                                        </div>
                                                        <div className="tg_desc_game">
                                                            <p>{item.description}</p>
                                                        </div>
                                                        <div className="mc_game_select" style={{ width: "100%", display: "inline-block", margin: "0 0 20px", height: "200px" }}>
                                                            <img style={{ borderRadius: "10px", marginBottom: "10px" }} src={item.imageSrc} alt="..." />
                                                        </div>
                                                        <Link to={item.urlDetail} className="boxed-btn3" onClick={this.scrollToTop} style={{ padding: "15px 20px" }}>Khám phá ngay</Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))

                        }
                    </div>
                    {
                        isMobile ? <div>
                            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                <img src="images/next.png" alt="Previous" style={{ width: isMobile ? "50px" : "60px", height: isMobile ? "50px" : "60px", transform: 'rotate(180deg)' }} />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next" >
                                <img src="images/next.png" alt="Previous" style={{ width: isMobile ? "50px" : "60px", height: isMobile ? "50px" : "60px" }} />
                                <span className="sr-only">Next</span>
                            </a>
                        </div> : <div>
                            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev" style={{ position: 'absolute', left: '-150px' }}>
                                <img src="images/next.png" alt="Previous" style={{ width: isMobile ? "50px" : "60px", height: isMobile ? "50px" : "60px", transform: 'rotate(180deg)' }} />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next" style={{ position: 'absolute', right: '-150px' }}>
                                <img src="images/next.png" alt="Previous" style={{ width: isMobile ? "50px" : "60px", height: isMobile ? "50px" : "60px" }} />
                                <span className="sr-only">Next</span>
                            </a>
                        </div>

                    }

                </div>
            </div>
        );
    }

}

export default Banner;