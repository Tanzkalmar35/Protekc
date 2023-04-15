import React from 'react'
import { View, Text, Button, Image } from "react-native"
import { styles } from "../styles/CommonStyles";
import { welcomeStyles } from '../styles/HomePageStyles';

// login form
import { Fumi } from 'react-native-textinput-effects';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function WelcomePage() {
  return (
    <View style={styles.generalApp}>
      <View style={welcomeStyles.welcomePage}>
        <Image
          style={welcomeStyles.welcomeImage}
          source={require('../assets/img/undraw_Security_re_a2rk-removebg-preview.png')}
        />
        <Text style={welcomeStyles.welcomeTitle}>Welcome! </Text>
        <Text style={welcomeStyles.welcomeSubTitle}>Please sign in to continue</Text>
        <View style={welcomeStyles.loginForm}>
          <Fumi
            label={'Email Address'}
            iconClass={FontAwesomeIcon}
            iconName={'envelope'}
            iconColor={'#fff'}
            inputPadding={16}
            style={welcomeStyles.inputFields}
          />
          <Fumi
            label={'Password'}
            iconClass={Icon}
            iconName={'lock'}
            iconColor={'#fff'}
            inputPadding={16}
            style={welcomeStyles.inputFields}
          />
          <Button
            title={'Login'}
            color={'#35b5a6'}
          />
          <Text style={styles.textLinkForgotPassword}>Forgot Password?</Text>
          <View style={welcomeStyles.signUpLink}>
            <Text style={styles.subDescriptionText}>Don't have an account yet?</Text>
            <Text style={styles.textLinkSignUp}> Sign up</Text>
          </View>
        </View>
      </View>
    </View >
  )
}

