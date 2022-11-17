import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { BarChart, graphStyle, screenWidth, chartConfig, color } from "react-native-chart-kit";
import StepCounter from '../Components/StepCounter';




const TodaySteps = () => {


    const data = {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [
            {
                data: [70, 45, 28, 80, 99, 43, 45]
            }
        ]
    };

   // const { weeklySteps } = useContext(StepCounter);
    //console.log("Weekly Step data", { weeklySteps });
    //   const weeklyStep = {
    //     labels: weeklySteps.date,
    //     datasets : weeklySteps.value
    // }

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    return (
        <SafeAreaView>
            <StepCounter style={styles.steps} />
            <BarChart
                style={graphStyle}
                data={data}
                width={380}
                height={500}
                chartConfig={chartConfig}
                verticalLabelRotation={30}
            />
            {/* {console.log("Weekly Step data",weeklyStepsData)
} */}


            {/* {weeklySteps.map((d) => <Text>{d.date}:  {d.value}</Text>)} */}
        </SafeAreaView>
    )
}


export default TodaySteps

const styles = StyleSheet.create({
    steps: {
        // margin : 'auto',
        marginBottom: 50

    }
})