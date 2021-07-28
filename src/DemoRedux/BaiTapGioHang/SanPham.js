import React, { Component } from 'react'
import { connect } from 'react-redux'

class SanPham extends Component {
    render() {
        let { sanPham } = this.props;
        return (
            <div className="card">
                <img src={sanPham.hinhAnh} height={350} alt="..." />
                <div className="card-body text-white bg-dark">
                    <h3>{sanPham.tenSP}</h3>
                    <p>{sanPham.giaBan.toLocaleString()}</p>
                    <button className="btn btn-outline-success" onClick={() => {
                        const action = {
                            type: 'THEM_GIO_HANG',  //thuộc tính bắt buộc
                            sanPhamClick: sanPham
                        }
                        //Đưa dữ liệu lên redux
                        this.props.dispatch(action);
                    }}>Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}


//Kết nối redux
export default connect()(SanPham)