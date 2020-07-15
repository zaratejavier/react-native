import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackDemo from './components/StackDemo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View, Text} from "react-native"


function SettingsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>settings Screen</Text>
      
    </View>
  );
}

function UsersScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Users Screen</Text>
      
    </View>
  );
}

const Tab = createBottomTabNavigator()

function App() {
  return (
    <NavigationContainer>
      {/* <StackDemo /> */}
      <Tab.Navigator>
        <Tab.Screen name={"Users"} component={UsersScreen} />
        <Tab.Screen name={"Settings"} component={StackDemo}/>
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
// /https://medium.com/@dakota.lillie/using-action-cable-with-react-c37df065f296