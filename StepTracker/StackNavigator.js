import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import TodaySteps from './Screens/TodaySteps';
import WeeklySteps from './Screens/WeeklySteps';

//import TodaySteps from './Components/FitnessCards';


const StackNavigator = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}
                    options={{ headerShown: false }} />

                

                <Stack.Screen name="TodaySteps" component={TodaySteps}
                    options={{ headerShown: false }} />

                <Stack.Screen name="WeeklySteps" component={WeeklySteps}
                    options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})