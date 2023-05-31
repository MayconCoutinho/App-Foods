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
      <View style={styles.container}>
        <Text style={styles.title}> Registra </Text>

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
