import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function LoginScreen() {
  // Your login screen implementation here
}

function RegisterScreen() {
  // Your register screen implementation here
}

const TabsNavigation = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator 
        screenOptions={{
          contentStyle: {
            backgroundColor: 'red', // Replace with your desired color
          },
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default TabsNavigation;
