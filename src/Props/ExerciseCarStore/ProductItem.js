import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let { product } = this.props;
        return (
            <div className="card">
                <img src={product.img} alt="..." />
                <div className="card-body bg-dark text-white">
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <button className="btn btn-success" data-toggle="modal" data-target="#modelId" onClick={() => {
                        this.props.viewDetail(product);
                    }}>Xem chi tiết</button>
                </div>
            </div>
        )
    }
}
