import React, { Component } from 'react';
import {Switch,Route} from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";

class RouterPath extends Component {
    render(){
        return(
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/product' component={Product}/>
            </Switch> 
        )
    }
}
export default RouterPath