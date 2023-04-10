import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<p>로그인페이지</p>} />
        <Route path="/join" element={<p>회원가입페이지</p>} />
        <Route path="/mypage" element={<p>마이페이지</p>} />
      </Route>
      <Route path="/*" element={<p>Error</p>} />
    </Routes>
  );
}

export default App;
