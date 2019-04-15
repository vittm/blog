import React, { Component } from 'react';
import Header from "./part/header";
import Footer from "./part/footer";
import RouterPath from "./routerPath";

class Index extends Component {
    render(){
        console.log(this.props);
        return(
            <div>
                <Header popup= {this.props.popup }></Header>
                <RouterPath popup= {this.props.popup } dispatch={this.props.dispatch}></RouterPath>
                <Footer></Footer>
            </div>
        )
    }
}
export default Index