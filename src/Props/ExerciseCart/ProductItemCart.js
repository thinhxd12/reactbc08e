import React, { Component } from 'react'

export default class ProductItemCart extends Component {
    render() {
        let { sp, themGioHang } = this.props;
        return (
            <div className="card">
                <img src={sp.hinhAnh} height={350} alt="..." />
                <div className="card-body text-white bg-dark">
                    <h3>{sp.tenSP}</h3>
                    <p>{sp.giaBan.toLocaleString()}</p>
                    <button className="btn btn-success">Xem chi tiết</button>
                    <button className="btn btn-danger ml-2" onClick={() => {
                        //Click vào gọi lại hàm themGioHang (ExcerciseCart Component)
                        themGioHang(sp);
                    }}>Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}
