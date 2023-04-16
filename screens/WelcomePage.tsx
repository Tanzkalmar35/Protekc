import { View, Text, Button, Image } from "react-native"

// styles
import { styles } from "../styles/CommonStyles";
import { welcomeStyles } from '../styles/HomePageStyles';

// login form
import { Fumi } from 'react-native-textinput-effects';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/FontAwesome5";

// helper functions
import { createUser, getAllUsers, userExisting } from '../database/Verification';
import { useState } from "react";

export default function WelcomePage() {

  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  function clickLoginButton() {
    inputCorrect(email) && inputCorrect(password) && userExisting(email) ? console.log('VALID INPUT')
      : setInputError()
    createUser(email, password);
  }

  function inputCorrect(input: string) {
    return input === "" ? false : true;
  }

  function setInputError() {
    const inputErrorText = document.getElementById('errorText');
    // TODO: make the error text accessable and change the display attribute based on error or not
    //inputErrorText === null ? "" : inputErrorText.style.removeProperty('display');
  }

  const handleEmailChange = (newEmail: string) => {
    setEmail(newEmail);
  }

  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword);
  }

  return (
    <View style={styles.generalApp}>
      <View style={welcomeStyles.welcomePage}>
        <Image
          style={welcomeStyles.welcomeImage}
          source={require('../assets/img/undraw_Security_re_a2rk-removebg-preview.png')}
        />
        <Text style={welcomeStyles.welcomeTitle}>Welcome! </Text>
        <Text style={welcomeStyles.welcomeSubTitle}>Please sign in to continue</Text>
        <View>
          <Fumi
            label={'Email Address'}
            iconClass={FontAwesomeIcon}
            iconName={'envelope'}
            iconColor={'#fff'}
            inputPadding={16}
            style={welcomeStyles.inputFields}
            onChangeText={handleEmailChange}
          />
          <Fumi
            label={'Password'}
            iconClass={Icon}
            iconName={'lock'}
            iconColor={'#fff'}
            inputPadding={16}
            style={welcomeStyles.inputFields}
            onChangeText={handlePasswordChange}
          />
          <Text style={styles.inputError}>Email or password incorrect</Text>
          <Button
            onPress={clickLoginButton}
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

