import { SafeAreaView, StyleSheet, Text, View, Col, Image } from 'react-native'
import React from 'react';

import FitnessCards from './FitnessCards';




const HomeScreen = (state) => {

    // const onChangeWeeklySteps = (val) => {
    //     console.warn("weekly steps value chaged", val);
    // } 
    return (
        <SafeAreaView>
            <View style={styles.orangeContainer}>
                <Text style={styles.heading}>Step Tracker</Text>
                <View style={styles.calorieCounterContainer}>
                    
                
                

                <View style={styles.imageContainer}>
                   
                <Image style={styles.imageContainer} source = {require('../Images/Header.png')} />
                </View>
                
                </View>
                {/* <StepCounter weeklySteps={onChangeWeeklySteps}/> */}
                <FitnessCards />
              
            </View>

        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    orangeContainer: {
        backgroundColor: '#CD853F',
        padding: 10,
        height: 150,

    },


    heading: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 28,
    },

    calorieCounterContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    

    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        width:360,
        marginTop: 20,
        borderRadius : 7,
        opacity: 1,
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        marginTop: 20,
        borderRadius: 7,
        opacity: 0.1,
    }

});