import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQuaTroChoi extends Component {
    render() {
        let { soBanChoi, soBanThang, banChon } = this.props.baiTapGameXucXacReducer;
        return (
            <div className="container text-center" style={{ fontSize: '30px' }}>
                <div className="">
                    Bạn chọn: <span className="text-danger">
                        {(banChon) ? 'Tài' : 'Xỉu'}
                    </span>
                </div>
                <div className="">
                    Số bàn thắng: <span className="text-success">{soBanThang}</span>
                </div>
                <div className="">
                    Tổng số bàn chơi: <span className="text-primary">{soBanChoi}</span>
                </div>
                <button className="btn btn-success mt-3" style={{ fontSize: '30px' }} onClick={() => {
                    const action = {
                        type: 'PLAY_GAME'
                    }
                    this.props.dispatch(action);
                }}>
                    <div className="">Play game</div>
                </button>

            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        baiTapGameXucXacReducer: rootReducer.baiTapGameXucXacReducer
    }
}

export default connect(mapStateToProps)(KetQuaTroChoi)