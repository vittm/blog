import React, { Component } from 'react';
import {Router, Switch,Route} from "react-router-dom";
import Home from "./pages/home";
import Hihi from "./pages/hihi";
import Product from "./pages/product";
class RouterPath extends Component {
    render(){
        return(
            <Switch>
                <main id="main">
                    <Route exact path='/' component={Hihi} />
                    <Route  path='/product' component={Product} />
                </main>
            </Switch>
        )
    }
}
export default RouterPath