import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const authContext = createContext();

export default function AuthContextProvider({ children }) {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("shoppify-auth-status") || false
  );

  const handleLogout = () => {
    let bool = window.confirm("do you want to logout ? ");
    if (bool) {
      localStorage.setItem("shoppify-auth-status", false);
      setIsAuth(false);
      navigate("/login");
    }
  };

  return (
    <authContext.Provider value={{ isAuth, handleLogout }}>
      {children}
    </authContext.Provider>
  );
}
