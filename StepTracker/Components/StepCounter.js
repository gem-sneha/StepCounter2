import { ListViewBase, StyleSheet, Text, View } from 'react-native'
import React, { dispatch, useEffect, useState } from 'react'
import GoogleFit, { Scopes, BucketUnit, adjustment } from 'react-native-google-fit';
// import TodaySteps from '../Screens/TodaySteps';
import WeeklySteps from '../Screens/WeeklySteps';
import weeklyStepsData from '../WeeklyStepsData';


const StepCounter = (props) => {

  var [dailySteps, setdailySteps] = useState(0);
  var [weeklySteps, setWeeklySteps] = useState([]);




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
    bucketInterval: 15, // optional - default 1.
  };
  function getLastWeek() {
    var today = new Date();
    var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    return lastWeek.toISOString();
  }

  const opt2 = {

    startDate: getLastWeek(), // required ISO8601Timestamp
    endDate: today.toISOString(), // required ISO8601Timestamp
    bucketUnit: 'MINUTE', // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
    bucketInterval: 15, // optional - default 1.
  };



  let fetchStepsData = async opt => {


    const res = await GoogleFit.getDailyStepCountSamples(opt2);
    console.log(res);
    // const res2 = await  GoogleFit.getWeeklySteps(opt2).then().catch();
    // console.log(res2);
    if (res.length !== 0) {
      console.log("response");
      console.log(res);
      for (var i = 0; i < res.length; i++) {

        if (res[i].source === 'com.google.android.gms:estimated_steps') {
          let data = res[i].steps.reverse();
          console.log(data);
          dailyStepCount = res[i].steps;
          weeklySteps = res[i].steps;
          setdailySteps(data[0].value);
          //console.log('line 64',res);

          //console.log("before setting");
          //console.log(weeklySteps);
          setWeeklySteps(data);
          console.log('line 68', weeklySteps);
          // weeklyStepsData = weeklySteps;
          //console.log("after setting", weeklyStepsData);
         // console.log(weeklySteps);
          
          //console.log("weekly");
          //console.log(setWeeklySteps);

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
      <Text style={styles.Steps}> TODAY'S STEPS:  {dailySteps}</Text>
      <Text>WeeklySteps:</Text>
      
      {/* <WeeklySteps /> */}

       {/* { console.warn(weeklySteps)} */}
          {weeklySteps.map((d) => <Text>{d.date}:  {d.value }</Text>
          )} 
    {/* /   <TodaySteps weeklySteps={weeklySteps}/> */}
      

    </View>
  )
}

export default StepCounter;

const styles = StyleSheet.create({
  Steps: {
    fontSize: 18,
    color: '#CD853F',
  }

})
