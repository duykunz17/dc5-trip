import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
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
        });
    };
    render() {
        return (
            <footer className="footer">
                <div className="footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-md-6 col-lg-4 ">
                                <div className="footer_widget" >
                                    <div className="footer_logo">
                                        <Link to=""><img src="../../images/footer_logo.png" alt="footer_logo" /></Link>
                                    </div>
                                    <p><i className="fa fa-phone"></i>  (+84) 585868587</p><br />
                                    <p><i className="fa fa-envelope"></i>  contact@travelo.com.vn</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-lg-3">
                                <div className="footer_widget">
                                    <h3 className="footer_title" style={{marginLeft:'8px'}}>
                                        Mạng xã hội
                                    </h3>
                                    <div className="socail_links">
                                    <ul>
                                        <li>
                                        <a>
                                            <i className="fa fa-facebook" />
                                        </a>
                                        </li>
                                        <li>
                                            <Link to="">
                                                <i className="fa fa-google" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                <i className="fa fa-instagram" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                <i className="fa fa-youtube-play" />
                                            </Link>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-xl-3 col-md-6 col-lg-3">
                                <div className="footer_widget">
                                    <h3 className="footer_title"> Địa điểm </h3>
                                    <ul className="links double_links">
                                        <li><Link to=''>Lâm Đồng</Link></li>
                                        <li><Link to=''>Vũng Tàu</Link></li>
                                        <li><Link to=''>Cà Mau</Link></li>
                                        <li><Link to=''>Tp. Hồ Chí Minh</Link></li>
                                        <li><Link to=''>Cần Thơ</Link></li>
                                        <li><Link to=''>Bến Tre</Link></li>
                                        <li><Link to=''>Khánh Hòa</Link></li>
                                        <li><Link to=''>Đà Nẵng</Link></li>
                                    </ul>
                                </div>
                            </div> */}
                            <div className="col-xl-3 col-md-6 col-lg-3">
                                <div className="footer_widget">
                                    <h3 className="footer_title"> Hình ảnh nổi bật </h3>
                                    <div className="instagram_feed">
                                        <div className="single_insta">
                                            <Link to="/gallary"  onClick={this.scrollToTop}>
                                                <img src="../../images/Gallary/2.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="single_insta">
                                            <Link to="">
                                                <img src="../../images/Gallary/29.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="single_insta">
                                            <Link to="">
                                                <img src="../../images/Gallary/10.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="single_insta">
                                            <Link to="">
                                                <img src="../../images/Gallary/15.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="single_insta">
                                            <Link to="">
                                                <img src="../../images/Gallary/26.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="single_insta">
                                            <Link to="">
                                                <img src="../../images/Gallary/17.jpg" alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="copy-right_text">
                    <div className="container">
                        <div className="footer_border">
                            <div className="row">
                                <div className="col-xl-12">
                                    <p className="copy_right text-center">
                                        Website du lịch và dịch vụ bán sản phẩm du lịch <br />
                                        Bản quyền thuộc về Nhóm 28 - Khóa luận tốt nghiệp ® 2020
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </footer>
        );
    }
}

export default Footer;