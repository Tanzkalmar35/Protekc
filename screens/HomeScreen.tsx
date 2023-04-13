import { Text, View, Image } from "react-native";
import { styles } from "../styles/CommonStyles";

// icons

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
          <Image style={styles.greaterThanSvg} source={require('../assets/icons/greaterthan-svgrepo-com.svg')} />
        </View>
      </View>
      <View style={styles.subSectionOthers}>
        <Text style={styles.sectionDescription}>Other features</Text>
        <View style={styles.subSection}>
          <View style={styles.category}>
            <Image style={styles.staticCategorySvgIcon} source={require('../assets/icons/add-plus-circle-svgrepo-com.svg')} />
            <Text style={styles.categoryTitle}>Generate password</Text>
            <Image style={styles.greaterThanSvg} source={require('../assets/icons/greaterthan-svgrepo-com.svg')} />
          </View>
          <View style={styles.category}>
            <Image style={styles.staticCategorySvgIcon} source={require('../assets/icons/settings-svgrepo-com.svg')} />
            <Text style={styles.categoryTitle}>Settings</Text>
            <Image style={styles.greaterThanSvg} source={require('../assets/icons/greaterthan-svgrepo-com.svg')} />
          </View>
        </View>
      </View>
    </View >
  );
}
