import { Text, TouchableOpacity, View } from "react-native";
import { ScrollViewComponent } from "./scrollViewComponent";

export const HomeComponent = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text> Sair</Text>
      </TouchableOpacity>
      <ScrollViewComponent />
    </View>
  );
};
