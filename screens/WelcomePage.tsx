import React from 'react'
import { View, Text, Button, TextInput } from "react-native"
import { styles } from "../styles/CommonStyles";
import { welcomeStyles } from '../styles/HomePageStyles';

export default function WelcomePage() {
  return (
    <View style={welcomeStyles.overall, styles.generalApp}>
      <Text style={welcomeStyles.overall, welcomeStyles.welcomeTitle}>Welcome! </Text>
      <Text style={welcomeStyles.welcomeSubTitle}>Please log in to your account</Text>
      <View style={welcomeStyles.loginForm}>
        <TextInput style={welcomeStyles.overall}></TextInput>
        <TextInput></TextInput>
        <Button></Button>
      </View>
    </View >
  )
}

