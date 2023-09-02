import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../_screens/Login";
import Cadastro from "../_screens/Register";
import Register from "../_screens/Register";

const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default Routes;
