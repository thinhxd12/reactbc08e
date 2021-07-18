import React, { Component } from 'react'

export default class ProductDemo extends Component {
    render() {

        //this.props: thuộc tính có sẵn của rcc

        //Phân biệt State và Props

        /*
        + Giống nhau: cả 2 đều là thuộc tính có sẵn của react class component để binding dữ liệu lên giao diện
        
        + Khác nhau:
        
        this.state dùng để chứa các giá trị thay đổi trên giao diện và có thể gán lại qua phương thức this.setState
        this.props dùng để nhận giá trị từ component cha (nơi sử dụng thẻ đó) truyền vào. Lưu ý: không thể gán lại giá trị thẻ đó
        
        */

        let { product } = this.props;

        return (
            <div className="card">
                <img src={product.img} alt="..." />
                <div className="card-body bg-dark text-white">
                    <h4>{product.name}</h4>
                    <h4>{product.price}</h4>
                </div>

            </div>
        )
    }
}
