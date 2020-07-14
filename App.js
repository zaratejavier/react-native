import React from 'react';
import { StyleSheet,View, Text, SafeAreaView } from 'react-native';
import ScrollViewDemo from './components/ScrollViewDemo';
import GetDataDemo from './components/GetDataDemo';
import InputDemo from './components/InputDemo';

const App = () => {
  return (
    // <View style={styles.container}>
    //   <View style={styles.square}>
    //     <Text>hello</Text>
    //   </View>
    // </View>

    <SafeAreaView>
      {/* <ScrollViewDemo/>   */}
      <InputDemo/>
      {/* <GetDataDemo/> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'teal',
    borderColor: 'steelblue',
    borderWidth: 2,

  }
});

export default App;
