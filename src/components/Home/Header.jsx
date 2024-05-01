import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import CartItem from '../Modal/Cart/CartItem';

// import button checkout paypal
import callAPI from '../../utils/connectAPI';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            cart: {
                products: [],
                total: 0
            },
            countCart: 0
        }
    }

    componentDidMount() {
        let user = JSON.parse(sessionStorage.getItem("user"));
        let cart = JSON.parse(sessionStorage.getItem("cart"));
        let countCart = Number(sessionStorage.getItem("countCart"));
        this.setState({ user, cart, countCart });
    }
    componentDidUpdate(prevState) {
        let preAmount = prevState.amountCurrentItemCart, currAmount = this.props.amountCurrentItemCart;
        if (preAmount != null && currAmount != null && preAmount < currAmount) {
            let user = JSON.parse(sessionStorage.getItem("user"));
            let cart = JSON.parse(sessionStorage.getItem("cart"));
            let countCart = Number(sessionStorage.getItem("countCart"));
            this.setState({ user, cart, countCart });
        }
    }

    isLogout = () => {
        if (sessionStorage.getItem("user")) {
            sessionStorage.removeItem("user");
            window.location.href = '/login';
        }
    }

    onDeleteItemCart = (id) => {
        let { cart } = this.state;
        cart.products = cart.products.filter(el => el._id !== id);

        let countCart = 0, total = 0;
        if (cart.products.length > 0) {
            cart.products.forEach(el => {
                total += el.price * el.quantity;
                countCart += el.quantity;
            });
        }
        cart.total = total;
        this.setState({ cart, countCart });

        sessionStorage.setItem("cart", JSON.stringify(cart));
        sessionStorage.setItem("countCart", Number(countCart));
    }
    onChangQuantity = (_id, newQuantity) => {
        let { cart } = this.state;
        let countCart = 0, total = 0;
        if (cart.products.length > 0) {
            cart.products.forEach(el => {
                if (el._id === _id)
                    el.quantity = newQuantity;

                total += el.price * el.quantity;
                countCart += el.quantity;
            });
        }
        cart.total = total;
        this.setState({ cart, countCart });

        sessionStorage.setItem("cart", JSON.stringify(cart));
        sessionStorage.setItem("countCart", Number(countCart));
    }
    showModalCartItem = (products) => {
        let result = null;
        if (products.length > 0) {
            result = products.map((element, index) => {
                return (
                    <CartItem
                        key={index} element={element} countCart={this.state.countCart}
                        onDeleteItemCart={this.onDeleteItemCart}
                        onChangQuantity={this.onChangQuantity}
                    />
                );
            });
        }
        return result;
    }

    resultsPaypalPayment = (success, cancel, err) => {
        if (success) {
            this.onSaveBill("thanh toán paypal");
        }
        else if (cancel) {
            Swal.fire({
                icon: 'warning',
                title: cancel,
            });
        }
        else if (err) console.log(err);
    }

    onSaveBill = (checkout) => {
        let cart = this.state.cart;
        sessionStorage.removeItem("cart");
        sessionStorage.removeItem("countCart");
        this.setState({
            cart: {
                products: [],
                total: 0
            },
            countCart: 0
        });
        let bill = { user: this.state.user, cart, checkout };
        // use to api connect server to save Bill
        callAPI('bill/add', 'POST', { bill })
            .then(res => {
                let icon = 'success', title = "", text = "", outOfStock = res.data.outOfStock;
                if (res.data.success)
                    title = res.data.success;
                else if (res.data.fail) {
                    icon = "error";
                    title = res.data.fail;
                }
                else if (outOfStock) {
                    let length = outOfStock.length;
                    title = "Bạn đã thanh toán thành công!";
                    text = `Xin lỗi! Chúng tôi đã bỏ qua sản phẩm (`;
                    for (let i = 0; i < length; i++) {
                        if (i === length - 1)
                            text += `${outOfStock[i].name}) do không đủ`;
                        else
                            text += `${outOfStock[i].name} - `;
                    }
                }
                Swal.fire({
                    icon,
                    title,
                    text
                });
            })
            .catch((err) => { console.log(err) });
    }

    render() {
        let { user, cart, countCart } = this.state;
        return (
            <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/">
                        <img src="../../images/logo.png" alt="logo" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="container-fluid">
                            <div class="navbar-nav" style={{margin: 20}}>
                                <li><Link className="nav-item nav-link active" to="/">Trang Chủ</Link></li>
                                <li>
                                    <Link className="nav-item nav-link" to="/place">Địa Điểm</Link>
                                </li>
                                <li><Link className="nav-item nav-link" to="/trip">Lịch Trình</Link></li>
                                <li><Link className="nav-item nav-link" to="/contact">Liên Hệ</Link></li>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* <div className="header-area">
                    <div id="sticky-header" className="main-header-area">
                        <div className="container-fluid">
                            <div className="header_bottom_border">
                                <div className="row align-items-center">
                                    <div className="col-xl-2 col-lg-2">
                                        <div className="logo">
                                            <Link to="/">
                                                <img src="../../images/logo.png" alt="logo" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-7">
                                        <div className="main-menu  d-none d-lg-block topnav" id="myTopnav">
                                            <nav>
                                                <ul id="navigation">
                                                    <li><Link className="active" to="/">trang chủ</Link></li>
                                                    <li>
                                                        <Link to="/place">địa điểm</Link>
                                                    </li>
                                                    <li><Link to="/trip">lịch trình</Link></li>
                                                    <li><Link to="/contact">liên hệ</Link></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </header>

        );
    }
}

export default Header;