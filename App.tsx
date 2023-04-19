import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

// Screens
import HomeScreen from './screens/HomeScreen';
import WelcomePage from './screens/WelcomePage';
import {RegisterScreen} from "./screens/RegisterScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Welcome"
                    component={WelcomePage}
                    options={{
                        headerShown: false,
                    }}/>
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>);
}

