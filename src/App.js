import FunctionComponent from "./Components/FunctionComponent";
import ClassComponent from "./Components/ClassComponent";
import HomeComponent from "./Components/BaiTapLayoutComponent/HomeComponent";
import Databinding from "./Databinding/Databinding";
import BaiTapThucHanhLayout from "./BaiTapLayoutComponent/BaiTapThucHanhLayout/BaiTapThucHanhLayout";

function App() {
  return (
    <div className="App">
      {/* <HomeComponent/> */}
      {/* <Databinding/> */}
      <BaiTapThucHanhLayout/>
    </div>
  );
}

export default App;
