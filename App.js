import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackDemo from './components/StackDemo';
function App() {
  return (
    <NavigationContainer>
      <StackDemo />
    </NavigationContainer>
  );
}
export default App;
// /https://medium.com/@dakota.lillie/using-action-cable-with-react-c37df065f296