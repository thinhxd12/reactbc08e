import React, { Component } from 'react'
import { connect } from 'react-redux'

class XucXac extends Component {
    renderKetQua = () => {
        let { mangXucXac } = this.props;
        let tongDiem = mangXucXac.reduce((tongDiem, xucxac, index) => {
            return tongDiem += xucxac.diem;
        }, 0)
        let ketQua = tongDiem > 11 ? 'Tài' : 'Xỉu';
        return `${tongDiem} - ${ketQua}`
    }

    render() {
        let { mangXucXac } = this.props;
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-3">
                        <button className="btn btn-danger" onClick={() => {
                            const action = {
                                type: 'DAT_CUOC',
                                banChon: true
                            }
                            this.props.dispatch(action);
                        }}>
                            <div className="p-5 display-4">Tài</div>
                        </button>
                    </div>
                    <div className="col-6 text-center">
                        <img src={mangXucXac[0].hinhAnh} alt="..." width={50} />
                        <img src={mangXucXac[1].hinhAnh} alt="..." width={50} />
                        <img src={mangXucXac[2].hinhAnh} alt="..." width={50} />
                        <div style={{ fontSize: '25px', marginTop: '20px', color: 'red' }}>
                            {this.renderKetQua()}
                        </div>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-dark" onClick={() => {
                            const action = {
                                type: 'DAT_CUOC',
                                banChon: false
                            }
                            this.props.dispatch(action);
                        }}>
                            <div className="p-5 display-4">Xỉu</div>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

//hàm này giúp lấy dữ liệu state từ redux về
const mapStateToProps = (rootReducer) => {
    return {
        mangXucXac: rootReducer.baiTapGameXucXacReducer.mangXucXac
    }
}

export default connect(mapStateToProps)(XucXac);