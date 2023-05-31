import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import qs from "qs";
import { postLogin } from "../api/auth";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    //로그인 세션이 남아있으면, 해당 user정보를 state에 저장
    setUserData({
      ...JSON.parse(sessionStorage.getItem("userData")),
    });
  }, []);
  console.log(userData);

  //로그인 함수
  const handleLogin = async data => {
    const userData = await postLogin(data);
    sessionStorage.setItem("userData", JSON.stringify(userData));
    setTimeout(() => navigate("/"), 300);
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
