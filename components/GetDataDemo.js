import React from "react"
import useAxios from 'axios-hooks'
import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from "react-native"

function GetDataDemo() {
  const [{ data, loading, error }, refetch] = useAxios(
    'https://reqres.in/api/users?delay=1'
  )

  if (loading) return(
  <ActivityIndicator size="large"/>
  )
  if (error) return (
     <View>
    <Text>Error</Text>
    </View>
  )

  function renderUsers(){
    if (data && data.data.length <= 0) {
      return (<View>
        <Text> NO users</Text>
      </View>)
    }
    return data.data.map(user => {
      return (
        <View style={styles.userCard}>
          <Text>{`${user.first_name} ${user.last_name}`}</Text>
        </View>
    )
    })
  }

  return (
    // <div>
    //   <button onClick={refetch}>refetch</button>
    //   <pre>{JSON.stringify(data, null, 2)}</pre>
    // </div>

    <View style={styles.listContainer}>
      <Text>get datta demo</Text>
      <ScrollView>{renderUsers()}</ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  userCard: {
    height: 300,
    borderColor: 'black',
    borderWidth: 2,
    margin: 10,
  }
})

export default GetDataDemo