import React, {useMemo, useState} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {MainNavigator} from './main';
import {storeData, getData} from '@components/../dataStore/UtilsData.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const RootNavigator = (memo) => {
    const [firstUse, setFirstUse] = useState(false);
    const [loading, setLoading] = useState(false);

    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: 'transparent',
        },
    };

    const currentNavigator = useMemo(() => {
        if (firstUse) {
            return (
                <>
                {/* <Stack.Screen name="SetUp" component={SetUp}/> */}
                <Stack.Screen name="Main" component={MainNavigator}/>
                </>
            )
        }
        return <Stack.Screen name="Main" component={MainNavigator}/>;
    }, [firstUse]);

    // TO DO : Implement loading screen
    // if (loading) {
    //     return <SplashScreen source={'lottie_file_name'} />
    // }



    return (
        <NavigationContainer theme={MyTheme}>
        <Stack.Navigator 
          screenOptions={{
            gestureEnabled: true,
            headerShown: false,
          }}>
                {currentNavigator}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
