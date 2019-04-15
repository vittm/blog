import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Header extends Component {
    shouldComponentUpdate(nextProps,nextSate){
        return (
            this.props.popup !== nextProps
        );
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                        <div className="container">
                            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                            {(this.props.popup.isShowHidden ? "Đã bật Popup" : "...")}
                            </a>
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link js-scroll-trigger" to={'/'}>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link js-scroll-trigger" to={'/product'}>Product</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}
export default Header