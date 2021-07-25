import React, { Component } from 'react'
import Cart from './Cart'
import ProductListCart from './ProductListCart'
// import dataPhone from '../../assets/data/dataPhone.json'

const dataPhone = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
]


export default class ExerciseCart extends Component {
    state = {
        gioHang: [
            // { maSP: 4, tenSP: 'Iphone', giaBan: 1000, soLuong: 3, hinhAnh: 'https://picsum.photos/200/200' }
        ]
    }

    //State nằm ở đâu thì setstate nằm ở đó
    themGioHang = (spClick) => {
        // console.log('spClick', spClick)

        //Khi click vào sp thêm thuộc tính soLuong vào spClick
        let spGioHang = { ...spClick, soLuong: 1 }
        //Lấy sản phẩm đó thêm vào mảng giỏ hàng
        let gioHangCapNhat = [...this.state.gioHang];
        //Kiểm tra sản phẩm vừa click có tồn tại trong giỏ hàng hay chưa
        let spGH = gioHangCapNhat.find(sp => sp.maSP === spGioHang.maSP);

        if (spGH) { //tìm thấy tăng số lượng
            spGH.soLuong += 1;
        }
        else { //không tìm thấy
            gioHangCapNhat.push(spGioHang); //thêm vào giỏ hàng
            // gioHangCapNhat = [...gioHangCapNhat,spGioHang];
        }


        //setState => cập nhật giá trị mới cho giỏ hàng
        this.setState({ gioHang: gioHangCapNhat })
    }

    xoaGioHang = (maSPClick) => {
        // console.log('maSPClick', maSPClick)

        //Xử lý setState => thay đổi giỏ hàng

        let { gioHang } = this.state;

        //Tìm ra vị trí phần tử trong mảng có cùng maSp với maSPClick

        // cách xoá 1: có thể nhầm lẫn khi trùng nhau

        // let index = gioHang.findIndex(sp => sp.maSP === maSPClick);
        // if (index !== -1) {
        //     gioHang.splice(index, 1);
        // }


        // cách xoá 2:

        gioHang = gioHang.filter(sp => sp.maSP !== maSPClick);

        //Xử lý setState -> cập nhật lại giỏ hảng
        this.setState({ gioHang: gioHang })
    }


    tangGiamSoLuong = (maSPClick, soLuongTangGiam) => {
        // console.log('maSPClick,soLuongTangGiam', maSPClick, soLuongTangGiam)
        let { gioHang } = this.state;
        let spTangGiam = gioHang.find(sp => sp.maSP === maSPClick);
        //tìm ra sản phẩm tăng giảm
        if (spTangGiam) {
            spTangGiam.soLuong += soLuongTangGiam;
            if (spTangGiam.soLuong < 1) {
                alert('Số lượng tối thiểu là 1!')
                spTangGiam.soLuong -= soLuongTangGiam;

                //Nếu muốn xoá luôn 
                // this.xoaGioHang(maSPClick);
                // return;
            }
        }
        //Xử lý setState -> cập nhật lại giỏ hảng
        this.setState({ gioHang: gioHang })
    }

    tinhTongSoLuong = () => {
        let { gioHang } = this.state;
        let tongSoLuong = gioHang.reduce((soLuong, sanPham, index) => {
            return soLuong += sanPham.soLuong;
        }, 0)
        return tongSoLuong.toLocaleString();
    }

    tinhTongTien = () => {
        let { gioHang } = this.state;
        let tongTien = gioHang.reduce((thanhTien, sanPham, index) => {
            return thanhTien += sanPham.soLuong * sanPham.giaBan;
        }, 0)
        return tongTien.toLocaleString();
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center">Bài tập giỏ hàng</h3>
                <div className="text-right mb-2">
                    <span style={{ cursor: 'pointer' }} className="text text-danger font-weight-bold" data-toggle="modal" data-target="#modelId">Giỏ hàng ({this.tinhTongSoLuong()} - {this.tinhTongTien()})</span>
                </div>
                <Cart gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong} />
                <ProductListCart mangSanPham={dataPhone} themGioHang={this.themGioHang} />
            </div>
        )
    }
}
