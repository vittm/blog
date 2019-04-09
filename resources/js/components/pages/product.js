import React, {Component} from 'react';
import axios from 'axios';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', products: ''};
    }
    componentDidMount() {
        axios.get('http://localhost/blog/public/products')
            .then(response => {
                this.setState({ products: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        if(this.state.products instanceof Array){
            return this.state.products.map(function(object, i){
                return (
                    <tr key={i}>
                        <td>
                            { i }
                        </td>
                        <td>
                            { object.title }
                        </td>
                        <td>
                            { object.body }
                        </td>
                        <td>
                            <form>
                                <input type="submit" value="Edit" className="btn btn-success"/>
                            </form>
                        </td>
                    </tr>
                );
            })
        }
    }
    render() {
        return (
            <div>
                <h1>Products List - Demo</h1>
                <div className="row">
                    <div className="col-md-10"></div>
                    <div className="col-md-2">
                        <button className="btn btn--l" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" value="Add Product" className="btn btn-success">Add Product</button>
                    </div>
                    </div><br />
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <td>ID</td>
                        <td>Product Title</td>
                        <td>Product Body</td>
                        <td width="200px">Actions</td>
                    </tr>
                    </thead>
                    <tbody>
                        { this.tabRow() }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Product
