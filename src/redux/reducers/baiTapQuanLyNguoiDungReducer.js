const stateDefault = {
    mangNguoiDung: [
        {
            taiKhoan: 'nguyenvana',
            hoTen: 'Nguyễn Văn A',
            matKhau: '123456789',
            email: 'nguyenvana@gmail.com',
            soDienThoai: '090090',
            loaiNguoiDung: 'KhachHang'
        },
        {
            taiKhoan: 'nguyenvanb',
            hoTen: 'Nguyễn Văn B',
            matKhau: '9138217418',
            email: 'nguyenvanb@gmail.com',
            soDienThoai: '091091',
            loaiNguoiDung: 'QuanTri'
        }
    ]
}

export const BaiTapQuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'THEM_NGUOI_DUNG': {
            state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung]
            // state.mangNguoiDung.push(action.nguoiDung)
            return { ...state }
        }
        case 'XOA_NGUOI_DUNG':{
            const mangNguoiDungCapNhat = [...state.mangNguoiDung]
            state.mangNguoiDung = mangNguoiDungCapNhat.filter(nguoiDung=>nguoiDung.taiKhoan !== action.taiKhoan)
            return {...state}
        }

        default: return state;
    }
}