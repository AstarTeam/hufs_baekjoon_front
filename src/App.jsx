import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Join from "./pages/join/Join";
import LogIn from "./pages/login/LogIn";
import Mypage from "./pages/mypage/Mypage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/join" element={<Join />} />
          <Route path="/mypage" element={<Mypage />} />
        </Route>
        <Route path="/*" element={<p>Error</p>} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
