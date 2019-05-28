import React, { useState, useReducer } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import axios from 'axios'
import getRequest from './functions/getRequest'


// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//       </View>
//     );
//   }
// }

const App = props => {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
        {
          count: 0,
        }
    );

  const resetCount = () => {
    setState(state.count = 0)
  }

  const dogs = getRequest('https://dog.ceo/api/breed/hound/images')
  imageURI = "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"

  return(
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>Current Count of Presses: {state.count}</Text>
        <Button title="Press Me" onPress={() => setState(state.count++)}/>
        <Button title="Reset" onPress={resetCount}/>
      </View>
      <View style={styles.images}>
        {dogs.map(dog => {
          return(
            <Image source={{uri: dog}} style={{width: '45%', height: 100, flexWrap: 'wrap' }}/>
          )
        })}
      </View>
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    top: 200
  },
  images: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    top: 250,
    marginLeft: '10%'
  }
});
