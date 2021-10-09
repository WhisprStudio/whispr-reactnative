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
        <Tab.Navigator 
          screenOptions={{
            gestureEnabled: true,
            headerShown: false,
          }}>
            <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: () => <Image source={require('../../assets/home.png')} style={{height: 20, width: 20}}/>
              }} />
            <Tab.Screen
            name="SelectSpeaker"
            component={SelectSpeaker}
            options={{
                tabBarLabel: 'SelectSpeaker',
                tabBarIcon: () => <Image source={require('../../assets/speaker.png')} style={{height: 20, width: 20}}/>
              }} />
            <Tab.Screen
            name="Bluetooth"
            component={Bluetooth}
            options={{
                tabBarLabel: 'Bluetooth',
                tabBarIcon: () => <Image source={require('../../assets/bluetooth.png')} style={{height: 20, width: 20}}/>
              }}/>
            <Tab.Screen
            name="Settings"
            component={Home}
            options={{
                tabBarLabel: 'Settings',
                tabBarIcon: () => <Image source={require('../../assets/settings.png')} style={{height: 20, width: 20}}/>
              }} />
        </Tab.Navigator>
    );
});
