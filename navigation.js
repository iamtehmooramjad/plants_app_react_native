import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {StatusBar} from "react-native";
import COLORS from "./theme/colors";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailsScreen";

const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <StatusBar barStyle={"dark-content"} backgroundColor={COLORS.white}/>
            <Stack.Navigator screenOptions={{headerShown:false}} >
                <Stack.Screen name={'Home'} component={HomeScreen}/>
                <Stack.Screen name={'Details'} component={DetailScreen}/>
            </Stack.Navigator>

        </NavigationContainer>
    );
};

export default Navigation;