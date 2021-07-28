import React, { Component } from 'react'
//Thư viện kết nối redux
import { connect } from 'react-redux'

class GioHang extends Component {
    renderGioHang = () => {
        return this.props.gioHang.map((spGH, index) => {
            return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td><img src={spGH.hinhAnh} alt="..." width={50} /></td>
                <td>
                    <button className="btn btn-outline-primary mr-2" onClick={() => {
                        const action = {
                            type: 'TANG_GIAM_SO_LUONG',
                            maSPClick: spGH.maSP,
                            soLuongTangGiam: 1
                        }
                        this.props.dispatch(action);
                    }}>+</button>
                    {spGH.soLuong}
                    <button className="btn btn-outline-primary ml-2" onClick={() => {
                        const action = {
                            type: 'TANG_GIAM_SO_LUONG',
                            maSPClick: spGH.maSP,
                            soLuongTangGiam: -1
                        }
                        this.props.dispatch(action);
                    }}>-</button>
                </td>
                <td>{spGH.giaBan.toLocaleString()}</td>
                <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
                <td><button className="btn btn-danger" onClick={() => {
                    const action = {
                        type: 'XOA_GIO_HANG',
                        maSPClick: spGH.maSP
                    }
                    // Dung hàm this.props.dispatch từ redux cung cấp đẻ gửi dữ liệu lên redux (reducer)
                    this.props.dispatch(action);
                }}>Xoá</button></td>
            </tr>
        })

    }

    render() {
        return (
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Giỏ hàng</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Mã sản phẩm</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Hình ảnh</th>
                                        <th>Số lượng</th>
                                        <th>Giá bán</th>
                                        <th>Thành tiền</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderGioHang()}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//Hàm này sẽ giúp gửi dữ liệu lên redux (giống this.props.dispatch)

// const mapDispatchToProps = (dispatch) => {
//     //Trả về props là hàm
//     return {
//         xoaGioHang: (maSPClick) => {
//             const action = {
//                 type: 'XOA_GIO_HANG',
//                 maSPClick: maSPClick
//             }
//             dispatch(action)
//         }
//     }
// }


//Hàm này giúp lấy giá trị state từ redux về biến đổi thành props của component

const mapStateToProps = (rootReducer) => {
    //Trả về props là giá trị
    return {
        gioHang: rootReducer.gioHangReducer
    }
}

const ComponentGioHangRedux = connect(mapStateToProps)(GioHang)

export default ComponentGioHangRedux;