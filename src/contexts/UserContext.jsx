import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const persistedAuth = JSON.parse(localStorage.getItem("auth"));
  const persistedURLS = JSON.parse(localStorage.getItem("shortURLS"));

  const [auth, setAuth] = useState(persistedAuth);
  const [shortURLS, setShortURLS] = useState(persistedURLS);


  function login(authData) {
    setAuth(authData);
    localStorage.setItem("auth", JSON.stringify(authData));
  }

  function updateShortURLS(subscriptionData) {
    setSubscription(subscriptionData);
    localStorage.setItem("shortURLS", JSON.stringify(shortURLS));
  }

  return (
    <UserContext.Provider
      value={{ auth, setAuth, shortURLS, setShortURLS, login, updateShortURLS }}
    >
      {children}
    </UserContext.Provider>
  )
}
