import {
  Animated,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../../styles/styles";
import { useEffect, useState } from "react";

export const LoginComponent = ({ navigation }) => {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 155, y: 155 }));

  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      keyboardDidShow
    );
    keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      keyboardDidHide
    );

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true,
      }).start(),

      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start(),
    ]);
  }, []);

  const keyboardDidShow = () => {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 75,
        duration: 50,
        useNativeDriver: false,
      }).start(),
      Animated.timing(logo.y, {
        toValue: 75,
        duration: 50,
        useNativeDriver: false,
      }).start(),
    ]);
  };

  const keyboardDidHide = () => {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 155,
        duration: 50,
        useNativeDriver: false,
      }).start(),
      Animated.timing(logo.y, {
        toValue: 155,
        duration: 50,
        useNativeDriver: false,
      }).start(),
    ]);
  };

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Animated.Image
          source={require("../../assets/login/prato.png")}
          style={{ width: logo.x, height: logo.y }}
        />
      </View>

      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [{ translateY: offset.y }],
          },
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TextInput
          style={styles.input}
          placeholder="password"
          autoCorrect={false}
          onChangeText={() => {}}
        />
      </Animated.View>

      <TouchableOpacity
        style={styles.btnSubmit}
        onPress={() => navigation.navigate("Tabs")}
      >
        <Text style={styles.submitText}> Acessar </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnRegister}
        onPress={() => navigation.navigate("Create")}
      >
        <Text style={styles.registerText}>
          Não possui cadastro? Clique aqui.
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
