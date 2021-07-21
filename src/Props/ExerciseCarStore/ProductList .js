import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class ProductList extends Component {

    renderProduct = () => {
        let { productsData, viewDetail } = this.props;
        return productsData.map((product, index) => {
            return <div key={index} className="col-3">
                <ProductItem product={product} viewDetail={viewDetail} />
            </div>
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderProduct()}
                </div>
            </div>
        )
    }
}
