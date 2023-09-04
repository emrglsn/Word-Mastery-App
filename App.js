import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView , ImageBackground, ScrollView} from 'react-native';

import Main from './pages/Main';
import Library from './pages/Library';
import Learn from './pages/Learn';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Exam from './pages/Exam';
import { LogBox } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  LogBox.ignoreAllLogs()
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown:false}}
      >

        <Stack.Screen name="Home" component={Main}/>
        <Stack.Screen name="eben" component={Library}/>
        <Stack.Screen name="Exam" component={Exam}/>
        <Stack.Screen name="Learn" component={Learn}/>




      </Stack.Navigator>  
    </NavigationContainer>
  );
}


