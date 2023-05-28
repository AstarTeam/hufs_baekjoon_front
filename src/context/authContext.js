import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import qs from "qs";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    //로그인 세션이 남아있으면, 해당 user정보를 state에 저장 필요
    setUserData({
      ...JSON.parse(sessionStorage.getItem("userData")),
    });
  }, []);
  console.log(userData);

  //로그인 함수
  const handleLogin = async data => {
    try {
      const res = await axios({
        method: "POST",
        url: "/login",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // x-www-form-urlencoded 타입 선언
        },
        data: qs.stringify(data),
      });
      console.log(res.data);
      if (res.data.access_token) {
        setUserData({ ...res.data });
        sessionStorage.setItem("userData", JSON.stringify(res.data));
      }
      setTimeout(() => navigate("/"), 500);
    } catch (e) {
      console.log(e);
      alert("로그인 실패");
    }
  };

  //로그아웃 함수
  const handleLogout = () => {};

  return (
    <AuthContext.Provider
      value={{ userData, onLogin: handleLogin, onLogout: handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
