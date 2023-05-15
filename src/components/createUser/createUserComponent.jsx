import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../../styles/styles";

export const CreateUserComponent = () => {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <Text styles={styles.title}> Registra </Text>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          autoCorrect={false}
          onChangeText={() => {}}
        />
      </View>

      <TouchableOpacity
        style={styles.btnSubmit}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.submitText}> Registrar </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
