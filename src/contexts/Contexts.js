import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { Children, createContext, useEffect, useState } from "react";
import apiBlood from "../service/apiBlood";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setLoading] = useState();
  const [userToken, setToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  //   const [id, setId] = useState(null);

  const login = (cpf, senha) => {
    setLoading(true);
    apiBlood
      .post("/loginUsuario", {
        cpf,
        senha,
      })
      .then((response) => {
        let userInfo = response.data;
        setUserInfo(userInfo);
        setToken(userInfo.token);

        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        AsyncStorage.setItem("userToken", userInfo.token);

        console.log(userInfo);
        navigation.navigate("Menu")
        // console.log("Token e id do usuário" + userInfo.token);
      })
      .catch((err) => {
        console.log("Login error: " + err.message);
      });
    setLoading(false);
  };

  const logout = () => {
    setLoading(true);
    setToken(null);
    AsyncStorage.removeItem("UserInfo");
    AsyncStorage.removeItem("userToken");
    setLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setLoading(true);
      let userToken = await AsyncStorage.getItem("userToken");
      let userInfo = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        setToken(userToken);
        setUserInfo(userInfo);
      }
      setLoading(false);
    } catch (err) {
      console.log("Deu erro no login!");
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, isLoading, userToken, userInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
