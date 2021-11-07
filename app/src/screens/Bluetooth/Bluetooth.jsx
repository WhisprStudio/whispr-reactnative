import React from "react";
import {useEffect, useState} from "react";
import {View, Text, Button} from "react-native";
import {storeData, getData} from "@components/../dataStore/UtilsData.js";
import { BleManager } from 'react-native-ble-plx';

export const manager = new BleManager();

export const Bluetooth = ({route, navigation}) => {


    const [isLoading, setIsLoading] = useState(false);

    const scanAndConnect = () => {
        console.log("passage");
        manager.startDeviceScan(null, null, (error, device) => {
            console.log("device scan start", device);
            setIsLoading(true);
            if (error) {
                // Handle error (scanning will be stopped automatically)
                return
            }
            if (device !== null)
                setIsLoading(false);
        });
    }

    return (
    <View>
        <Text>Bluetooth handler page</Text>
        <Button title={"blue"} onPress={scanAndConnect}/>
        {isLoading ? <Text style={{fontSize: 30}}>Looking for devices...</Text> :
            <></>
        }
    </View>
    )
}
