import React, { Component } from 'react'
import CardProduct from './CardProduct'
import Footer from './Footer'
import ProductDemo from './ProductDemo'

export default class HomeLayout extends Component {

    arrProduct = [
        { id: 1, name: 'Iphone', price: 1000, img: "https://picsum.photos/id/1/400/400" },
        { id: 2, name: 'Iphone X', price: 1500, img: "https://picsum.photos/id/2/400/400" },
        { id: 3, name: 'Iphone XS', price: 2000, img: "https://picsum.photos/id/3/400/400" },
    ]

    render() {
        return (
            <div className="container-fluid">
                <h3>Home layout</h3>
                <input type="text" />
                <Footer bgColor="black" content="FrontEnd" />
                <Footer bgColor="red" content="Backend" />
                <Footer bgColor="yellow" content="Fullstack" />
                <Footer bgColor="green" content="Cybersoft" />
                <hr />
                <h3>Product</h3>
                <div className="row">
                    <div className="col-md-4">
                        <ProductDemo product={this.arrProduct[0]} />
                    </div>
                    <div className="col-md-4">
                        <ProductDemo product={this.arrProduct[1]} />
                    </div>
                    <div className="col-md-4">
                        <CardProduct product={this.arrProduct[2]} />
                    </div>

                </div>
            </div>
        )
    }
}
