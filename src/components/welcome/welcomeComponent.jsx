import { Text, View } from "react-native";
import { styles } from "./styles";
import { useEffect } from "react";

export const WelcomeComponent = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textoLogo}> Vegan </Text>
    </View>
  );
};
