import * as React from 'react';
import {useEffect, useRef, useState} from "react";
//ts-ignore
import {Text, View, ScrollView, Image, Button} from 'react-native';
import {theme} from "../../theme";
import Panel from "../../pages/panel/Panel.js";
import CustomSlider from '@components/CustomSlider';
import {ConfigItem} from "@components/ConfigItem.js";
import AddConfigItem from "@components/AddConfigItem.js";
import {storeData, getData} from "@components/../dataStore/UtilsData.js";
import {getConfigs} from "../../dataStore/UtilsData";

export const Home = ({route, navigation}) => {
    const { deviceName, isConnected } = route.params;
    const [configs, setConfigs] = useState([<View key={"default"}></View>]);
    var configList = [];

    const [volume, setVolume] = useState(20);
    const [noiseCanceling, setNoiseCanceling] = useState(20);

    const refreshConfig = async () => {
        const keys = await getConfigs();
        configList = [];
        keys.forEach((key) => {
            const fillConfig = async () => {
                const obj = await getData(key);
                configList.push(<ConfigItem key={obj.name} title={obj.name} volume={obj.volume} noiseCanceling={obj.noiseCanceling} status={false} />)
            }
            fillConfig()
        })
        setTimeout(() => setConfigs(configList), 1000);
    }

    return (<>
    <View style={{height: "100%"}}>
        <Image style={{marginTop: "5%", marginLeft: "5%", marginBottom: "10%", width: 100, height: 50}} source={require('../../../assets/logo.png')}/>
        <CustomSlider title="Volume" setValue={setVolume} value={volume}/>
        <CustomSlider title="Noise Canceling" setValue={setNoiseCanceling} value={noiseCanceling}/>
        <Button color={theme.colors.yellow} title={"refresh config"} onPress={refreshConfig} />
        <ScrollView>
            {configs}
        <AddConfigItem title={"CONFIG NAME"} />
        </ScrollView>
    </View>
  <Panel navigation={navigation} source={require('../../../assets/portable.png')} noiseCanceling={noiseCanceling} deviceName={deviceName} isConnected={isConnected} />
  </>
  );
}
