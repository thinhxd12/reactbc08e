import React, { Component } from 'react'
import ProductItemCart from './ProductItemCart'

export default class ProductListCart extends Component {
    renderProductList = () => {
        let { mangSanPham,themGioHang } = this.props;
        return mangSanPham.map((product, index) => {
            return <div key={index} className="col-4">
                <ProductItemCart sp={product} themGioHang={themGioHang}/>
            </div>
        })

    }
    render() {
        return (
            <div className="row">
                {this.renderProductList()}
            </div>
        )
    }
}
