import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Routes from '../routes/App.Routes'


export default function Home(){
  return (
    <NavigationContainer>
      <Routes/> 
    </NavigationContainer>
  
    )
}

