import React from "react";
import {useEffect, useState} from "react";
import {View, Text, Button, PermissionsAndroid } from "react-native";
import {storeData, getData} from "@components/../dataStore/UtilsData.js";
import { BleManager } from 'react-native-ble-plx';

export const manager = new BleManager();

export async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
        title: 'Location permission for bluetooth scanning',
        message: 'whatever',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Location permission for bluetooth scanning granted');
      return true;
    } else {
      console.log('Location permission for bluetooth scanning revoked');
      return false;
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
}

export const Bluetooth = ({route, navigation}) => {


    const [isLoading, setIsLoading] = useState(false);
    const [deviceId, setDeviceID] = useState(0);
    const [device, setDevice] = useState();

    const scanAndConnect = async () => {
        const permission = requestLocationPermission();
        console.log(device.name);
        if (!permission)
            return
        manager.startDeviceScan(null, null, (error, device) => {
            setIsLoading(true);
            if (error) {
                alert("Error in scan=> " + error);
                manager.stopDeviceScan();
            }
            if (device.name === 'Juliette’s AirPods Pro') {
                manager.stopDeviceScan();
                setIsLoading(false);
                setDeviceID(device.id);
                setDevice(device);
                console.log(device.id, device.name);
                manager.connectToDevice(device.id, {autoConnect:true}).then((device) => {
                       console.log(device);
                       device.characteristicsForDevice(deviceIdentifier, serviceUUID);
                });
            }
        });
    };

    const connect = async () => {
        if (device.isConnected()) {
            console.log(device);
            return;
        }
        manager.connectToDevice(device.id, {autoConnect:true}).then((device) =>
            {
               console.log(device);
            }
        );
    };

    return (
    <View>
        <Text>Bluetooth handler page</Text>
        <Button title={"blue"} onPress={scanAndConnect}/>
        {isLoading ? <Text style={{fontSize: 30}}>Looking for devices...</Text> :
            <Text style={{fontSize: 30}}>{deviceId}</Text>
        }
        <Button title={"connect"} onPress={connect}/>

        {
        device ? device.isConnected() ? <Text style={{fontSize: 30}}>connected to {device.name}</Text>: <></> : <></>

        }
    </View>
    )
}
