import { Button, Text, View } from "react-native";
import { styles } from "../styles/CommonStyles";
import { SvgUri } from "react-native-svg-uri";

interface Props {
  navigation: any;
}

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.generalApp}>
      <Text style={styles.sectionDescription}>Vault</Text>
      <View style={styles.subSection}>
        {/* TODO: Implement dynamic category loading */}
        <View style={styles.category}>
          <View style={styles.vaultCategoryColor}></View>
          <Text style={styles.categoryTitle}>Favorites</Text>
          {/* TODO: insert svg (greater than) */}
        </View>
      </View>
      <View style={styles.subSectionOthers}>
        <Text style={styles.sectionDescription}>Other features</Text>
        <View style={styles.subSection}>
          <View style={styles.category}>
            {/* TODO: insert svg (logo) */}
            <Text style={styles.categoryTitle}>Generate password</Text>
            {/* TODO: insert svg (greater than) */}
          </View>
          <View style={styles.category}>
            {/* TODO: insert svg (logo) */}
            <Text style={styles.categoryTitle}>Settings</Text>
            {/* TODO: insert svg (greater than) */}
          </View>
        </View>
      </View>
    </View >
  );
}
