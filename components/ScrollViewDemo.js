import React from "react"
import { ScrollView, View, StyleSheet, Text, Image } from "react-native"

export default function ScrollViewDemo() {
  return (
    <ScrollView>
      <View style={styles.bigBox}>
        <Text>Start</Text>
      </View>
      <View style={styles.bigBox}></View>
      <View style={styles.bigBox}></View>
      <ScrollView horizontal>
        <View style={styles.hbox} />
        <View style={styles.hbox}/>
        <View style={styles.hbox}/>
        <View style={styles.hbox}/>
      </ScrollView>
      <View style={styles.bigBox}></View>
      <View style={styles.bigBox}>
        <Text>End</Text>
      </View>

      <Image
        style={styles.img}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
    </ScrollView>  
  )
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
  bigBox: {
    width: 450,
    height: 300,
    backgroundColor: 'teal',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hbox: {
    height: 200,
    width: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'lightsteelblue',
  },
  img: {
    width: 100,
    height: 100,
  },
})