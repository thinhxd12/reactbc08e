import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    arrProduct = [
        { id: 1, name: 'Iphone', price: 1000, img: "https://picsum.photos/id/1/200/200" },
        { id: 2, name: 'Iphone X', price: 1500, img: "https://picsum.photos/id/2/200/200" },
        { id: 3, name: 'Iphone XS', price: 2000, img: "https://picsum.photos/id/3/200/200" },
    ]

    renderProduct = () => {
        // let content = '';
        let content = this.arrProduct.map((product, index) => {
            return <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>
                    <img width={50} height={50} src={product.img} alt="..." />
                </td>
                <td>{product.price}</td>
                <td></td>
            </tr>

        })
        return content;
    }


    // renderProduct = () => {
    //     let content = [];
    //     for (let i = 0; i < this.arrProduct.length; i++) {
    //         let product = this.arrProduct[i];
    //         //Từ đốI tượng product => tạo ra 1 tagJSX
    //         let tagTr = <tr>
    //             <td>{product.id}</td>
    //             <td>{product.name}</td>
    //             <td>
    //                 <img src={product.img} alt="..." />
    //             </td>
    //             <td>{product.price}</td>
    //             <td></td>

    //         </tr>
    //         content.push(tagTr);  //[<tr></tr>,<tr></tr>,<tr></tr>]
    //     };
    //     return content;
    // }

    renderProductCard = () => {
        let content = this.arrProduct.map((product, index) => {
            return <div className="col-4">
                <div className="card">
                    <img src={product.img} alt="..." />
                    <div className="card-body text-white bg-dark">
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </div>
                </div>
            </div>
        })
        return content;
    }

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <th>id</th>
                        <th>name</th>
                        <th>image</th>
                        <th>price</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {/* {[<tr></tr>,<tr></tr>,<tr></tr>,<tr></tr>,<tr></tr>]} */}
                        {this.renderProduct()}
                    </tbody>

                </table>
                <hr />
                <h3>Danh sách sản phẩm</h3>
                <div className="row">
                    {this.renderProductCard()}
                </div>
            </div>
        )
    }
}
