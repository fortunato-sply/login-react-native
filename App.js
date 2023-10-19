import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Login from './pages/Login';
import './global.css';
import { UserProvider } from './context/User';

export default function App() {
  const Stack = createStackNavigator();
  return (
      <NavigationContainer>
        <UserProvider>
          <Stack.Navigator>
          <Stack.Screen options={{headerStyle: { backgroundColor: '#111' }, headerTintColor: '#fff'}} name="home" component={Home} />
            <Stack.Screen options={{headerShown: false}} name="login" component={Login} />
            <Stack.Screen options={{headerShown: false}} name="cadastro" component={Cadastro} />
            
          </Stack.Navigator>
        </UserProvider>
      </NavigationContainer>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
