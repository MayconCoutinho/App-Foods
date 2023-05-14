import { Text, TouchableOpacity, View } from "react-native";

export const HomeComponent = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text> Sair</Text>
      </TouchableOpacity>
      <Text> Estou no Home</Text>
    </View>
  );
};
