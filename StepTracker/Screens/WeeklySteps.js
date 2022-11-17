import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WeeklySteps = () => {
  return (
    <View>
      <Text><StepCounter style= {styles.Steps} /></Text>
    </View>
  )
}

export default WeeklySteps

const styles = StyleSheet.create({})