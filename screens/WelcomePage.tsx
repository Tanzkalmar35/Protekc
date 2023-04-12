import React from 'react'
import { View, Text, Button, TextInput } from "react-native"
import { styles } from "../styles/CommonStyles";
import { welcomeStyles } from '../styles/HomePageStyles';
import { Kohana } from 'react-native-textinput-effects';
import MaterialsIcon from "react-native-vector-icons/MaterialIcons";

export default function WelcomePage() {
  return (
    <View style={styles.generalApp}>
      <View style={welcomeStyles.welcomePage}>
        <Text style={welcomeStyles.welcomeTitle}>Welcome! </Text>
        <Text style={welcomeStyles.welcomeSubTitle}>Please log in to your account</Text>
        <View style={welcomeStyles.loginForm}>
          <Kohana
            style={{ backgroundColor: '#f9f5ed' }}
            label={'Email'}
            iconClass={MaterialsIcon}
            iconName={'email'}
            iconColor={'purple'}
            labelStyle={{ color: 'purple' }}
            labelContainerStyle={{ padding: 5 }}
            useNativeDriver
          />
          <Kohana
            style={{ backgroundColor: '#f9f5ed' }}
            label={'Password'}
            iconClass={MaterialsIcon}
            iconName={'lock'}
            iconColor={'purple'}
            labelStyle={{ color: 'purple' }}
            labelContainerStyle={{ padding: 5 }}
            useNativeDriver
          />
          <Button></Button>
        </View>
      </View>
    </View >
  )
}

