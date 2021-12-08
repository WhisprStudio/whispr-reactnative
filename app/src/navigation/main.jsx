import React, {memo} from 'react';
import {Image} from 'react-native';
import {Home, Bluetooth, Settings, SelectSpeaker} from '@screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {icons} from '../constants';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const MainNavigator = memo(() => {
    return (
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: true,
            headerShown: false,
          }}>
            <Stack.Screen
            name="Home"
            component={Home}
            initialParams={{device: null}}
            />
            <Stack.Screen
            name="SelectSpeaker"
            component={SelectSpeaker}
            />
            <Stack.Screen
            name="Bluetooth"
            component={Bluetooth}
            />
            <Stack.Screen
            name="Settings"
            component={Home}
            />
        </Stack.Navigator>
    );
});
