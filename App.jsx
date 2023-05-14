import { NavigationContainer } from "@react-navigation/native";
import { Router } from "./src/routes/router.jsx";
import { StatusBar } from "react-native";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#00AD8F"} barStyle="light-content" />
      <Router />
    </NavigationContainer>
  );
};

export default App;
