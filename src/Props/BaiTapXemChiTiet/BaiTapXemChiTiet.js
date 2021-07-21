import React, { Component } from 'react'
import SanPham from './SanPham'

export default class BaiTapXemChiTiet extends Component {
    mangDienThoai = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    state = {
        sanPhamChiTiet: {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2, Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        },
    }

    renderSanPham = () => {
        /*
        callback function: là 1 hàm chưa được gọi đóng vai trò là tham số truyền đi.
        Và sẽ được gọi tại hàm hoặc component nhận hàm này.
        */

        return this.mangDienThoai.map((sanpham, index) => {
            return <div key={index} className="col-4">
                <SanPham sp={sanpham} xemChiTiet={this.xemChiTiet}/>
            </div>
        })
    }

    xemChiTiet = (sanPhamClick) => {
        this.setState({ sanPhamChiTiet: sanPhamClick });
    }

    render() {
        let { sanPhamChiTiet } = this.state; //bóc tách thuộc tính sanPhamChiTiet từ state
        return (
            <div className="container">
                <h3 className="text-center">Danh sách sản phẩm</h3>
                <div className="row">


                    {this.renderSanPham()}

                </div>

                <div className="row mt-5">
                    <div className="col-5 text-center">
                        <h3>{sanPhamChiTiet.tenSP}</h3>
                        <img src={sanPhamChiTiet.hinhAnh} alt="..." className="img-fluid" />
                    </div>
                    <div className="col-7">
                        <h3>Thông số kỹ thuật</h3>
                        <table className="table mt-4">
                            <thead>
                                <tr>
                                    <th>Màn hình</th>
                                    <th>{sanPhamChiTiet.manHinh}</th>
                                </tr>
                                <tr>
                                    <th>Hệ điều hành</th>
                                    <th>{sanPhamChiTiet.heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>Camera trước</th>
                                    <th>{sanPhamChiTiet.cameraTruoc}</th>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <th>{sanPhamChiTiet.cameraSau}</th>
                                </tr>
                                <tr>
                                    <th>RAM</th>
                                    <th>{sanPhamChiTiet.ram}</th>
                                </tr>
                                <tr>
                                    <th>ROM</th>
                                    <th>{sanPhamChiTiet.rom}</th>
                                </tr>
                            </thead>
                        </table>

                    </div>
                </div>
            </div>
        )
    }
}
