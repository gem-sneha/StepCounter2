import { StyleSheet, Text,SafeAreaView, Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
       

<Image style={styles.logo} source = {require('../Images/Logo.png')} />

      <Text style={styles.heading}>My Fitness Tracker</Text>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
container: {
   width: '100%',
   height: 120,
   backgroundColor : '#A6FF00',
   display:'flex',
   flexDirection:'row',
   padding:8
},
heading:{
    margin: 'auto',
    fontSize: 30,
    color: 'gray',
    marginTop: 20,
    marginLeft: 7,
},
logo:{
    width: 80,
    height: 80,
    borderRadius: 50,
    border : '2 solid gray',
    margin: 3,
}
})