import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../_screens/Login";
import Register from "../_screens/Register";
import Home from "../_screens/Home";
import Profile from "../_screens/Profile";
import EditProfile from "../_screens/EditProfile";

const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default Routes;
