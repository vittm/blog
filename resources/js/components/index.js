import React, { Component } from 'react';
import Header from "./part/header";
import Footer from "./part/footer";
import RouterPath from "./routerPath";

class Index extends Component {
    render(){
        return(
            <div>
                <Header></Header>
                <RouterPath dispatch={this.props.dispatch}></RouterPath>
                <Footer></Footer>
            </div>
        )
    }
}
export default Index