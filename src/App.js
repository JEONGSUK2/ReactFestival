import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./component/GlobalStyle";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Aside from "./component/Aside";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
// import Example from "./pages/Example";
// import Example2 from "./pages/Example2";
// import Example3 from "./pages/Example3";


function App() {
  const light = {
    colors: {
      Primary : "orange",
      Secondary : "orangered"
    }
  }
  const dark = {
    colors : {
      Primary : "#272929",
      Secondary : "#e9e9e9"
    }
  }

  const [themeConfig, setThemeConfig] = useState("light")
  const DarkMode = themeConfig === 'light' ? light : dark;
  const ThemeSelect = ()=>{
    setThemeConfig(themeConfig === 'light' ? 'dark' : 'light')
  }
// 어떠한 기능을 만들었다면 보내기 위해 routing을 해줘야 한다 


  return (
    <>
    <ThemeProvider theme={DarkMode} >
    <GlobalStyle />
    <Aside ThemeSelect={ThemeSelect} themeConfig={themeConfig} />
    <ul>
      {/* <li><NavLink to="/">홈</NavLink></li>
      <li><NavLink to="/detail">디테일</NavLink></li> */}
    </ul>
      <Routes>
        {/* <Route path="/" element={<Main/>}></Route> */}
        {/* /의 의미는 화면에 접속할때 먼저 보여줄 페이지 */}
        <Route path="/" element={<Main />}></Route>
        <Route path="/detail" element={<Detail/>}></Route>
      </Routes>
      </ThemeProvider>
    </>
  );
}
export default App;
