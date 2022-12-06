import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
import apiBlood from "../service/apiBlood";

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
  const [isLoading, setisLoading] = useState(false)
  const [userToken, setUserToken] = useState(null)
  const [userInfo, setUserInfo] = useState(null)

  const login = (cpf, senha) =>{
    setisLoading(true)
    apiBlood.post('/loginUsuario', {
      cpf,
      senha
    })
    .then(response => {
      console.log(response.data)
      let userInfo = response.data
      setUserInfo(userInfo)
      setUserToken(userInfo.token)
      AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
      AsyncStorage.setItem('userToken', userInfo.token)
      console.log(userInfo)
    })
    .catch(e => {
      console.log(`Login error: ${e.message}`)
    })
    setisLoading(false)
  }

  const logout = () =>{
    setisLoading(true)
    setUserToken(null)
    AsyncStorage.removeItem('userToken')
    AsyncStorage.removeItem('userInfo')
    setisLoading(false)
  }

  const isLoggedIn = async () => {
    try{
      setisLoading(true)
      let userInfo = await AsyncStorage.getItem('userInfo')
      let userToken = await AsyncStorage.getItem('userToken')
      setUserToken(userToken)
      setisLoading(false)
    } catch(e){
      console.log("isLoggedIn error: " + e)
    }
  }

  useEffect(() => {
    isLoggedIn()
  }, [])

  return (
    <AuthContext.Provider value={{login, logout, isLoading, userToken, userInfo}}>
      {children}
    </AuthContext.Provider>

  )
}