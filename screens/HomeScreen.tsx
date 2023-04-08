import { Button, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>This is the Home Screen</Text>
      <Button title="welcome page" onPress={() => navigation.navigate("Welcome")} />
    </View>
  );
}
