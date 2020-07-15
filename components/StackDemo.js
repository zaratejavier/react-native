import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to  Options"
        onPress={() => navigation.navigate('Options')}
      />
    </View>
  );
}

function OptionsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>options Screen</Text>
       <Button title="Go to  Props screen"
        onPress={() => navigation.navigate('Props', {
          userName: "Timmothy",
        })}
      />
      <Button title="Go back"
        onPress={() => navigation.goback()}
      />
    </View>
  );
}

function PropsScreen({ navigation, route, myProp }) {
  const {userName} = route.params
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Props Screen</Text>
      <Text>{userName}</Text>
      <Text>{myProp}</Text>
       <Button title="Go to  home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function StackDemo() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Options" component={OptionsScreen} options={{
          title: "My Options",
          headerStyle: {
            backgroundColor: '#456789',
          },
          headerTintColor: '#fff'
        }} />

        <Stack.Screen name="Props" >
          {(props) => <PropsScreen {...props} myProp={"yoyo"}/>}
        </Stack.Screen>


      </Stack.Navigator>
  );
}

export default StackDemo;