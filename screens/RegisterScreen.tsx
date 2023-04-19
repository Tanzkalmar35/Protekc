import {Button, Text, View} from "react-native";
import {welcomeStyles} from "../styles/HomePageStyles";
import {Fumi} from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/FontAwesome5";
import {styles} from "../styles/CommonStyles";
import {useState} from "react";
import {createUser, userExisting} from "../database/Verification";

export function RegisterScreen({navigation}) {

    const [name, setName]: [string, ((value: (((prevState: string) => string) | string)) => void)] = useState("");
    const [email, setEmail]: [string, ((value: (((prevState: string) => string) | string)) => void)] = useState("");
    const [password, setPassword]: [string, ((value: (((prevState: string) => string) | string)) => void)] = useState("");
    const [retypePassword, setRetypePassword]: [string, ((value: (((prevState: string) => string) | string)) => void)] = useState("");
    const [errorText, setErrorText]: [string, ((value: (((prevState: string) => string) | string)) => void)] = useState("");

    function signUp() {
        if (inputValid()) {
            createUser(name, email, password)
            navigation.navigate("Home");
        }
    }

    function inputValid() {
        if (userExisting(email)) {
            setErrorText("This email is already assigned to an account. Please log in to it...")
        }
        return checkRetypePassword(retypePassword) && isValid(email) && isValid(password) && isValid(name);
    }

    function isValid(inputText: string): Boolean {
        if (inputText !== null && inputText !== "") {
            return true;
        }
        setErrorText("Please fill out every field")
        return false;
    }

    const handleNameChange = (newName: string): void => {
        setName(newName);
    }

    const handleEmailChange = (newEmail: string): void => {
        setEmail(newEmail);
    }

    const handlePasswordChange = (newPassword: string): void => {
        setPassword(newPassword);
    }

    const handleRetypePassword = (newPassword: string) => {
        setRetypePassword(newPassword);
    }

    const checkRetypePassword = (newPassword: string): Boolean => {
        if (newPassword === password) {
            return true;
        }
        setErrorText("Retype password needs to be equal to password");
        return false;
    }

    return (
        <View style={styles.generalApp}>
            <View style={welcomeStyles.welcomePage}>
                <Text style={welcomeStyles.welcomeTitle}>Welcome stranger! </Text>
                <Text style={welcomeStyles.welcomeSubTitle}>Create an account to get started</Text>
                <View>
                    <Fumi
                        label={'Name'}
                        iconClass={FontAwesomeIcon}
                        iconName={'user'}
                        iconColor={'#fff'}
                        style={welcomeStyles.inputFields}
                        onChangeText={handleNameChange}
                    />
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
                    <Fumi
                        label={'Retype Password'}
                        iconClass={Icon}
                        iconName={'lock'}
                        iconColor={'#fff'}
                        style={welcomeStyles.inputFields}
                        onChangeText={handleRetypePassword}
                    />
                    <Text style={styles.inputError}>{errorText}</Text>
                    <Button
                        onPress={signUp}
                        title={'Sign Up'}
                        color={'#35b5a6'}
                    />
                    <View style={welcomeStyles.signUpLink}>
                        <Text style={styles.subDescriptionText}>Already have an account?</Text>
                        <Text style={styles.textLinkSignUp} onPress={() => {
                            navigation.navigate("Welcome")
                        }}> Sign in instead</Text>
                    </View>
                </View>
            </View>

        </View>
    );
}