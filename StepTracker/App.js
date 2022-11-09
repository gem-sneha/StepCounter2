import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React from 'react'
import StepCounter from './Components/StepCounter'
import Header from './Screens/Header'

const App = () => {
  return (
    <View>
      <Header/>
      <Text>My Fitness App</Text>
     <StepCounter />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})