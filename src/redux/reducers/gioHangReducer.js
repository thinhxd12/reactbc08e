const gioHang = [
    // { maSP: 0, tenSP: 'iPhone', giaBan: 1000, soLuong: 1, hinhAnh: 'https://picsum.photos/200/200' }
]


export const gioHangReducer = (state = gioHang, action) => {
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            const spGH = { ...action.sanPhamClick, soLuong: 1 };
            //Kiểm tra sản phẩm có trong giỏ hàng chưa
            let gioHangCapNhat = state;
            let spGioHang = gioHangCapNhat.find(sp => sp.maSP === spGH.maSP);
            if (spGioHang) {
                spGioHang.soLuong += 1;
            }
            else {
                gioHangCapNhat.push(spGH);
            }
            // console.log('gioHangCapNhat', gioHangCapNhat)
            //immutable (Tính bất biến object phải trả về object mới, arr phải trả về arr mới)
            return [...gioHangCapNhat];
            //trả về state mới (lưu ý kiểu dữ liệu state trả về phải giống kiểu dữ liệu state cữ)
        }
        case 'XOA_GIO_HANG': {
            const gioHangCapNhat = state.filter(sp => sp.maSP !== action.maSPClick);
            return [...gioHangCapNhat];
        }
        case 'TANG_GIAM_SO_LUONG': {
            let gioHangCapNhat = [...state];
            let spCapNhat = gioHangCapNhat.find(sp => sp.maSP === action.maSPClick);
            if (spCapNhat) {
                spCapNhat.soLuong += action.soLuongTangGiam;
                if (spCapNhat.soLuong < 1) {
                    alert('Số lượng tối thiểu là 1!')
                    spCapNhat.soLuong -= action.soLuongTangGiam;
                }
            }
            return [...gioHangCapNhat]
        }
        default: return state;
    }
}