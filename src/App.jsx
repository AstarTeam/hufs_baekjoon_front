import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Join from "./pages/join/Join";
import Login from "./pages/login/Login";
import Mypage from "./pages/mypage/Mypage";
import { AuthContextProvider } from "./context/authContext";
import Ranking from "./pages/ranking/Ranking";

const queryClient = new QueryClient();

function App() {
  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/mypage" element={<Mypage />} />
          </Route>
          <Route path="/*" element={<p>Error</p>} />
        </Routes>
      </QueryClientProvider>
    </AuthContextProvider>
  );
}

export default App;
