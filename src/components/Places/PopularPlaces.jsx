import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PopularPlaces extends Component {
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
        return (
            <div className="popular_places_area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section_title text-center mb_70">
                                <h3>LÝ DO NHẤT ĐỊNH PHẢI TỚI Vinpearl NHA TRANG</h3>
                                <p>Là công viên chủ đề có quy mô hàng đầu tại Việt Nam, nổi bật với 6 phân khu lớn được tổ chức thành 70 hoạt động vui chơi, giải trí, mua sắm, khám phá thiên nhiên,… Vinpearl Nha Trang “thừa sức” làm hài lòng ngay cả du khách khó tính nhất, tạo nên trải nghiệm du lịch tuyệt vời cho gia đình hoặc nhóm bạn và là một trong những nơi bạn phải "đến và trải nghiệm một lần" trong đời</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* show list places */}
                        {this.props.children}
                    </div>
                    <div className="row">
                        <div className="col-lg-12" style={{display:'flex',justifyContent:'center',gap:'10px'}}>
                            <div className="more_place_btn text-center">
                                <Link to='/trip' className="boxed-btn4" onClick={this.scrollToTop} >Xem thêm</Link>
                            </div>
                            <div className="more_place_btn text-center">
                                <Link to='/map' className="boxed-btn4" onClick={this.scrollToTop} >Xem Bản Đồ</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopularPlaces;