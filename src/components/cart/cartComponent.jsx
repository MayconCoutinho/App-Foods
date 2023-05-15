import { View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { styles } from "../../styles/styles";

export const CartComponent = ({ focused, size, color }) => {
  return (
    <View
      style={[
        styles.tabCart,
        { backgroundColor: focused ? "#0F6657" : "#fff" },
      ]}
    >
      <Feather
        name="shopping-cart"
        color={focused === true ? "#fff" : "#0F6657"}
        size={size}
      />
    </View>
  );
};
