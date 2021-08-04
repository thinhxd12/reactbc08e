import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducers/gioHangReducer";
import { baiTapGameXucXacReducer } from './reducers/baiTapGameXucXacReducer'
import {BaiTapQuanLyNguoiDungReducer} from './reducers/baiTapQuanLyNguoiDungReducer'
//state trong redux là reducer


const rootReducer = combineReducers({
    //Các state ứng dụng sẽ được lưu tại đây

    gioHangReducer: gioHangReducer,

    baiTapGameXucXacReducer,

    BaiTapQuanLyNguoiDungReducer
});


export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());