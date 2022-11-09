import { StyleSheet, Text, View } from 'react-native'
import React, {dispatch, useEffect, useState} from 'react'
import GoogleFit, { Scopes,BucketUnit, adjustment} from 'react-native-google-fit';
import moment from 'moment';


const StepCounter = () => {
  

    var [dailySteps, setdailySteps] = useState(0);

    
       
        
    var today = new Date();
    var lastWeekDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 1,
    );
    const opt = {
      startDate: lastWeekDate.toISOString(), // required ISO8601Timestamp
      endDate: today.toISOString(), // required ISO8601Timestamp
      bucketUnit: 'MINUTE', // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
      bucketInterval: 1, // optional - default 1.
    };

    let fetchStepsData = async opt => {
        

        const res = await GoogleFit.getDailyStepCountSamples(opt);
        if (res.length !== 0) {
            console.log("response");
            console.log(res);
          for (var i = 0; i < res.length; i++) {
            
            if (res[i].source === 'com.google.android.gms:merge_step_deltas') {
              let data = res[i].steps.reverse();
              console.log(data);
              dailyStepCount = res[i].steps;
              //setdailySteps(data[0].value);
            }
           
          }
        } else {
          console.log('Not Found');
        }
      };


    const options = {
        scopes: [
            Scopes.FITNESS_ACTIVITY_READ,
            Scopes.FITNESS_ACTIVITY_WRITE,
            Scopes.FITNESS_BODY_READ,
            Scopes.FITNESS_BODY_WRITE,
            Scopes.FITNESS_BLOOD_PRESSURE_READ,
            Scopes.FITNESS_BLOOD_PRESSURE_WRITE,
            Scopes.FITNESS_BLOOD_GLUCOSE_READ,
            Scopes.FITNESS_BLOOD_GLUCOSE_WRITE,
            Scopes.FITNESS_NUTRITION_WRITE,
            Scopes.FITNESS_SLEEP_READ,
            Scopes.FITNESS_LOCATION_READ
        ],
      }
      GoogleFit.checkIsAuthorized().then(() => {
        var authorized = GoogleFit.isAuthorized;
        console.log(authorized);
        if (authorized) {
          // if already authorized, fetch data
        } else {
          // Authentication if already not authorized for a particular device
          GoogleFit.authorize(options)
            .then(authResult => {
              if (authResult.success) {
                console.log('AUTH_SUCCESS');
                
                fetchStepsData(opt);
               
              } else {
                console.log('AUTH_DENIED ' + authResult.message);
              }
            })
            .catch(() => {
              dispatch('AUTH_ERROR');
            });
        }
  });

  return (
    <View>
      <Text>{dailySteps}</Text>
    </View>
  )
}

export default StepCounter

const styles = StyleSheet.create({})