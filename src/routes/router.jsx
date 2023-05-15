import { LoginScreen } from "../screens/login/loginScreen";
import { CreateScreen } from "../screens/create/createScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WelcomeScreen } from "../screens/welcome/welcomeScreen";
import { HomeScreen } from "../screens/home/homeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { CartScreen } from "../screens/cart/cartScreens";
import { PerfilScreen } from "../screens/perfil/perfilScreen";
import { CartComponent } from "../components/cart/cartComponent";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopColor: "transparent",
        },

        tabBarActiveTintColor: "#0F6657",
        tabBarInactiveTintColor: "#6b6b6b",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            return <Entypo name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <CartComponent size={size} color={color} focused={focused} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => {
            return <Feather name="user" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="Create"
        component={CreateScreen}
        options={{
          headerShown: true,
        }}
        
      />
      <Stack.Screen name="Tabs" component={HomeTabs} />
    </Stack.Navigator>
  );
};
