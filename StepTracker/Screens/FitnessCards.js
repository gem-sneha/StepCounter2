import { Pressable, StyleSheet, Text, View , Image} from 'react-native'
import React from 'react';
import StepCounter from '../Components/StepCounter';
import {useNavigation} from '@react-navigation/native';
import TodaySteps from './TodaySteps';


const FitnessCards = () => {
   
    const navigation = useNavigation();

  return (
    <>
       <Pressable style= {styles.Container} onPress={()=>navigation.navigate('TodaySteps')}>
           {/* <StepCounter style= {styles.Steps}/> */}
           <Text>Today's Steps</Text>
        </Pressable>
        <Pressable style= {styles.Container} onPress={()=>navigation.navigate('WeeklySteps')}> 
        <Text>WeeklySteps Steps</Text>
        </Pressable >

        
        </>

    
  )
}

export default FitnessCards

const styles = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width:360,
        marginTop: 20,
        borderRadius : 7,
        opacity: 1,
        borderColor: '#CD853F',
        borderWidth: 3,
        
    },

    
})