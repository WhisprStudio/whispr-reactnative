import React from "react";
import {useEffect, useState} from "react";
import {View, Text, Button, PermissionsAndroid, ScrollView, ActivityIndicator } from "react-native";
import {BleManager} from 'react-native-ble-plx';
import Card from "@components/Card/Card";
import {Popup} from "@components/Popup/Popup";
import Toast from 'react-native-toast-message';
import {theme} from "@theme/theme";
import BluetoothStateManager from 'react-native-bluetooth-state-manager';

async function requestLocationPermission() {
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
      }
}

export const Bluetooth = ({route, navigation}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedDevice, setSelectedDevice] = useState();
    const [devices, setDevices] = useState([]);
    let array = [];
    let idList = [];

    const [editModal, setEditModal] = useState(false);
    let manager = null;

    useEffect(() => {
        manager = new BleManager();
    }, [])

    const getServicesAndCharacteristics = (device) => {
        return new Promise((resolve, reject) => {
            device.services().then(services => {
                const characteristics = []
                console.log("ashu_1",services)
                services.forEach((service, i) => {
                    service.characteristics().then(c => {
                        console.log("service.characteristics")
                        characteristics.push(c)
                        console.log(characteristics)
                        if (i === services.length - 1) {
                            const temp = characteristics.reduce(
                                (acc, current) => {
                                    return [...acc, ...current]
                                },
                                []
                            )
                            const dialog = temp.find(
                                characteristic =>
                                    characteristic.isWritableWithoutResponse
                            )
                            if (!dialog) {
                                reject('No writable characteristic')
                            }
                            resolve(dialog)
                        }

                    })
                })
            })
        })
    };

    const connectToCard = (deviceToConnect) => {
        manager.stopDeviceScan();
        setIsLoading(false);
        console.log(deviceToConnect.id, "<----- device id")
        manager.connectToDevice(deviceToConnect.id, {autoConnect:true}).then((connectedDevice) => {
            if (connectedDevice.isConnected()) {
                setEditModal(true);
            }
            setSelectedDevice(connectedDevice)
            const lol = async () => {
                const services = await connectedDevice.discoverAllServicesAndCharacteristics()
                console.log(services)
                const characteristic = await getServicesAndCharacteristics(services)
                console.log("characteristic")
                console.log(characteristic)
                console.log("Discovering services and characteristics", characteristic.uuid);
            };
            lol();

        }).catch((error)=>{
            console.log(error)
                Toast.show({
                    type: 'error',
                    text1: 'Error',
                    text2: 'Paring to device failed',
                })
            }
        );
    };

    const scanAndConnect = async () => {
        const permission = await requestLocationPermission();
        if (!permission)
            return
        manager.startDeviceScan(null, null, (error, device) => {
            // console.log('device :', device)
            setIsLoading(true);
            if (error) {
                Toast.show({
                    type: 'error',
                    text1: 'Error',
                    text2: error.reason,
                })
                console.log(error.errorCode)
                if (error.errorCode === 102) {
                    if (BluetoothStateManager.enable()) {
                        Toast.show({
                            type: 'info',
                            text1: 'Bluetooth is disabled',
                            text2: 'We are taking care of this...',
                        })
                    }
                }
                manager.stopDeviceScan();
                return;
            }
<<<<<<< HEAD
            if (device?.id && device.name !== "[TV] Samsung 6 Series (32)") {
=======
            if (device?.id && device.name !== "[TV] Samsung 7 Series (65)") {
>>>>>>> 026053b9a22a1f7d42a12b235dae7ed5990a8398
                if (idList.indexOf(device?.id) === -1) {
                    idList.push(device?.id)
                    array = [array, <Card id={device?.id} key={`key-${device?.id}`} onPress={() => connectToCard(device)} text={device.name}/>]
                    setDevices(array)
                }
            }
        });
    };

    useEffect(() => {
        console.log(selectedDevice)

    }, [selectedDevice])

    return (
    <View>
        <Popup editModal={editModal} setEditModal={setEditModal} navigation={navigation} device={selectedDevice}/>
        <Text style={styles.text}>FIND YOUR SPEAKER</Text>
        <View style={{width: "100%"}}>
            <View style={{width: "50%", margin: "auto"}}>
                <Button title={"SCAN FOR DEVICES"} color={theme.colors.yellow} onPress={scanAndConnect}/>
            </View>
        </View>
        {isLoading ? <ActivityIndicator size={"large"} color={theme.colors.yellow}/>:
            <Text style={{fontSize: 30}}>{selectedDevice ? selectedDevice?.id : "none"}</Text>
        }
            <ScrollView>{devices}</ScrollView>
    </View>
    )
}

const styles = {
    text: {
        width: "100%",
        marginBottom: "15%",
        textAlign: "center",
        marginTop: "15%",
        fontFamily: theme.fonts.primary.normal,
        fontSize: 27,
        color: "#fff",
    }
};
