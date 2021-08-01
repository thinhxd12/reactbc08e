
// Liệt kê các state của ứng dụng bài tập game

const stateDefault = {
    soBanChoi: 0,
    soBanThang: 0,
    banChon: true,
    mangXucXac: [
        { hinhAnh: './img/gameXucXac/1.png', diem: 1 },
        { hinhAnh: './img/gameXucXac/2.png', diem: 2 },
        { hinhAnh: './img/gameXucXac/3.png', diem: 3 },
    ]
}

export const baiTapGameXucXacReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC': {
            state.banChon = action.banChon;
            return { ...state }
        }
        case 'PLAY_GAME': {
            //tạo ra xúc xắc ngẫu nhiên từ số random
            let mangXucXacNgauNhien = [];
            for (let i = 0; i < 3; i++) {
                //Mỗi lần chạy sẽ tạo ra 1 số  ngẫu nhiên
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                //Từ số ngẫu nhiên tạo ra 1 object xúc xắc ngẫu nhiên
                let xxnn = { hinhAnh: `./img/gameXucXac/${soNgauNhien}.png`, diem: soNgauNhien };
                mangXucXacNgauNhien.push(xxnn);
            }
            state.mangXucXac = mangXucXacNgauNhien;
            //Xử lý thắng cuộc
            let tongDiem = mangXucXacNgauNhien.reduce((tongDiem, xxnn, index) => {
                return tongDiem += xxnn.diem;
            }, 0)

            if ((state.banChon && tongDiem > 11) || (!state.banChon && tongDiem <= 11)) {
                state.soBanThang += 1;
            }
            state.soBanChoi += 1;
            return { ...state }
        }

        default: return { ...state }
    }

}