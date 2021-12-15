import * as React from 'react';
import {useEffect, useRef, useState} from "react";
//ts-ignore
import {Text, View, ScrollView, Image, Button, SafeAreaView} from 'react-native';
import {theme} from "../../theme";
import Panel from "../../pages/panel/Panel.js";
import CustomSlider from '@components/CustomSlider';
import {ConfigItem} from "@components/ConfigItem.js";
import AddConfigItem from "@components/AddConfigItem.js";
import {storeData, getData} from "@components/../dataStore/UtilsData.js";
import {getConfigs} from "../../dataStore/UtilsData";
import Jauge from "../../components/Jauge";
import StatusLight from "../../components/StatusLight";

export const Home = ({route, navigation}) => {
    const { deviceName, isConnected } = route.params;
    const [configUpdate, setConfigUpdate] = useState(true);
    const [configs, setConfigs] = useState([<View key={"default"}></View>]);
    var configList = [];

    useEffect(() => {
        if (configUpdate) {
            refreshConfig();
            setConfigUpdate(false)
        }
    }, [configUpdate])

    const [volume, setVolume] = useState(20);
    const [noiseCanceling, setNoiseCanceling] = useState(20);

    const refreshConfig = async () => {
        const keys = await getConfigs();
        configList = [];
        keys.forEach((key) => {
            const fillConfig = async () => {
                const obj = await getData(key);
                console.log('obj', obj)
                configList.push(<ConfigItem remove={setConfigUpdate} key={obj.name} title={obj.name} volume={obj.volume} noiseCanceling={obj.noiseCanceling} status={false} />)
            }
            fillConfig()
        })
        setTimeout(() => setConfigs(configList), 1000);
    }

    return (<>
    {/* <SafeAreaView> */}
    <Image style={{marginTop: "5%", marginLeft: "5%", marginBottom: "10%", width: 100, height: 50}} source={require('../../../assets/logo.png')}/>
    <ScrollView style={{}}>
            <CustomSlider title="Volume" setValue={setVolume} value={volume}/>
            <CustomSlider title="Noise Canceling" setValue={setNoiseCanceling} value={noiseCanceling}/>
            {/*<Button color={theme.colors.yellow} title={"refresh config"} onPress={() => {setConfigUpdate(true)}} />*/}
            <ScrollView>
                {configs}
            <AddConfigItem update={setConfigUpdate} title={"CONFIG NAME"} volume={volume} noiseCanceling={noiseCanceling}/>
            </ScrollView>
        <View style={styles.panelContainer}>
            <View>
                <View style={styles.speakerNameContainer}>
                    <StatusLight color={isConnected ? "#29872F" : "#E55B5B"} />
                    <Text style={styles.connectedText}>{isConnected ? "connected to" : "not connected"}</Text>
                </View>
                {deviceName ? <View>
                    <Text style={styles.speakerName}>{deviceName}</Text>
                    <Button color={theme.colors.yellow} title={"DISCONNECT"} onPress={() => {navigation.navigate('Bluetooth')}} />
                </View>: <Button color={theme.colors.yellow} title={"CONNECT"} onPress={()=> navigation.navigate('Bluetooth')}/>}
            </View>
            <Image style={styles.imageContainer} source={require('../../../assets/portable.png')}></Image>
        </View>
        <Jauge percentage={noiseCanceling} />
        <View style={{height: 20}}/>
    </ScrollView>
    {/* </SafeAreaView> */}
  {/*<Panel navigation={navigation} source={require('../../../assets/portable.png')} noiseCanceling={noiseCanceling} deviceName={deviceName} isConnected={isConnected} />*/}
  </>
  );
}

const styles = {
    speakerNameContainer: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
    },
    panel: {
        backgroundColor: "#353535",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 2.62,
        elevation: 4,
    },
    panelContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 20,
    },
    imageContainer: {
        width: 120,
        height: 120,
    },
    connectedText: {
        color: "#fff",
        fontFamily: "Cubano",
        fontWeight: "200",
    },
    speakerName: {
        color: "#fff",
        fontFamily: "Cubano",
        fontWeight: "200",
        fontSize: 25,
    },
};
