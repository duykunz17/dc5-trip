import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PopularPlaces extends Component {

    render() {
        return (
            <div className="popular_places_area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section_title text-center mb_70">
                                <h3>LÝ DO NHẤT ĐỊNH PHẢI TỚI VINWONDERS NHA TRANG</h3>
                                <p>Là công viên chủ đề có quy mô hàng đầu tại Việt Nam, nổi bật với 6 phân khu lớn được tổ chức thành 70 hoạt động vui chơi, giải trí, mua sắm, khám phá thiên nhiên,… VinWonders Nha Trang “thừa sức” làm hài lòng ngay cả du khách khó tính nhất, tạo nên trải nghiệm du lịch tuyệt vời cho gia đình hoặc nhóm bạn và là một trong những nơi bạn phải "đến và trải nghiệm một lần" trong đời</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* show list places */}
                        { this.props.children }
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="more_place_btn text-center">
                                <Link to='/trip' className="boxed-btn4" >Xem thêm</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopularPlaces;