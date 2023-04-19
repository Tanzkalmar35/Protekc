import {Button, Image, Text, View} from "react-native"

// styles
import {styles} from "../styles/CommonStyles";
import {welcomeStyles} from '../styles/HomePageStyles';

// login form
import {Fumi} from 'react-native-textinput-effects';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/FontAwesome5";

// helper functions
import {userExisting} from '../database/Verification';
import {useState} from "react";

export default function WelcomePage({navigation}): JSX.Element {

    const [email, setEmail]: [string, ((value: (((prevState: string) => string) | string)) => void)] = useState("");
    const [password, setPassword]: [string, ((value: (((prevState: string) => string) | string)) => void)] = useState("");
    const [errorText, setErrorText]: [string, ((value: (((prevState: string) => string) | string)) => void)] = useState("");

    async function clickLoginButton(): Promise<void> {
        console.log(userExisting(email))
        inputCorrect(email) && inputCorrect(password) && await userExisting(email) ? navigation.navigate("Home") : setInputError();
    }

    function inputCorrect(input: string): Boolean {
        return input !== "" && input !== null;
    }

    function setInputError(): void {
        setErrorText("Email or password incorrect")
    }

    const handleEmailChange = (newEmail: string): void => {
        setEmail(newEmail);
    }

    const handlePasswordChange = (newPassword: string): void => {
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
                        style={welcomeStyles.inputFields}
                        onChangeText={handleEmailChange}
                    />
                    <Fumi
                        label={'Password'}
                        iconClass={Icon}
                        iconName={'lock'}
                        iconColor={'#fff'}
                        style={welcomeStyles.inputFields}
                        onChangeText={handlePasswordChange}
                    />
                    <Text style={styles.inputError}>{errorText}</Text>
                    <Button
                        onPress={clickLoginButton}
                        title={'Login'}
                        color={'#35b5a6'}

                    />
                    <Text style={styles.textLinkForgotPassword}>Forgot Password?</Text>
                    <View style={welcomeStyles.signUpLink}>
                        <Text style={styles.subDescriptionText}>Don't have an account yet?</Text>
                        <Text style={styles.textLinkSignUp} onPress={() => {
                            navigation.navigate("Register")
                        }}> Sign up</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

