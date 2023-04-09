import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// Screens
import HomeScreen from './screens/HomeScreen';
import WelcomePage from './screens/WelcomePage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Protekc Password Manager',
            headerStyle: { backgroundColor: '#212121' },
            headerTitleStyle: { color: 'white' },
          }}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomePage} />
      </Stack.Navigator>
    </NavigationContainer >);
}

