import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import {Text, View, ScrollView, Image, Button, TouchableOpacity, TextInput} from 'react-native';
import {theme} from '../../theme';
import CustomSlider from '@components/CustomSlider/CustomSlider';
import {storeData, getData} from '@components/../dataStore/UtilsData.js';
import Carousel from '@components/Carousel/Carousel';
import {getConfigs} from '@dataStore/UtilsData';
import Jauge from '@components/Jauge/Jauge';
import StatusLight from '@components/StatusLight/StatusLight';
import BluetoothSerial from "react-native-bluetooth-serial";
import AddConfig from "../../../assets/svg/AddConfig.js";
import Toast from "react-native-toast-message";
import ConfigsHandler from '@components/Configs/Configs';
import RecordScreen from '../Audio';

export const Home = ({route, navigation}) => {
  const {deviceName, isConnected} = route.params;
  const [connected, setConnected] = useState(false);
  const [configUpdate, setConfigUpdate] = useState(true);
  const [showTutorial, setShowTutorial] = useState(false)
  const [configs, setConfigs] = useState([<View/>]);
  // let configList = [];
  const [volume, setVolume] = useState(20);
  const [noiseCanceling, setNoiseCanceling] = useState(20);
  const [fav, setFav] = useState('');

  useEffect(() => {
    getData('alreadyLaunched', (value) => {
      if(value == null) {
        storeData('alreadyLaunched', true);
        setShowTutorial(true)
      } else {
        setShowTutorial(false)
      }
    })
  }, [route.params])

  useEffect(() => {
    if (configUpdate) {
      // refreshConfig();
      setConfigUpdate(false);
    }
  }, [configUpdate]);

  useEffect(async () => {
    if (!BluetoothSerial.isConnected()) {
      triggerErrorToast()
    } else {
      setConnected(true)
    }
    if (volume !== undefined && noiseCanceling !== undefined)
      await BluetoothSerial.write(`volume: ${volume}, noiseCanceling: ${noiseCanceling}\n`)
  }, [volume, noiseCanceling, setConnected]);

  const isConfigActive = async conf => {
    const data = await getData('activeConfig');
    if (data?.name === conf.name) {
      setVolume(conf.volume);
      setNoiseCanceling(conf.noiseCanceling);
      if (conf.volume !== undefined && conf.noiseCanceling !== undefined) {
        await BluetoothSerial.write(`Config name: ${conf.name}, volume ${conf.volume}, noiseCanceling ${conf.noiseCanceling}\n`)
      }
      return true;
    }
    return false;
  };

  const addFav = () => {
    storeData('FAV', deviceName);
  };

  const getFav = async () => {
    const res = await getData('FAV');
    setFav(res);
  };

  const triggerErrorToast = () => Toast.show({
    type: 'info',
    text1: 'Info',
    text2: 'Please, connect to your speaker through settings.'
  });

  if (showTutorial === true) {
    return (
      <>
        <Carousel setShowTutorial={setShowTutorial}/>
      </>
    )
  }
  return (
    <>
      {/* <SafeAreaView> */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Image
          style={{
            marginTop: '5%',
            marginLeft: '5%',
            marginBottom: '5%',
            width: 100,
            height: 50,
            // border: 'solid 1px red'
          }}
          source={require('../../../assets/logo.png')}
        />
        <TouchableOpacity
          style={{
            marginTop: '5%',
            marginRight: '2%',
          }}
          onPress={() => {
            setShowTutorial(true)
          }}
        >
          <Image
            style={{
              width: 40,
              height: 50,
            }}
            resizeMode={'contain'}
            source={require('../../../assets/query.png')}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={{}}>
        {/*<Button color={theme.colors.yellow} title={"refresh config"} onPress={() => {setConfigUpdate(true)}} />*/}
        <ScrollView>
        <View style={styles.panelContainer}>
            <View style={styles.speakerNameContainer}>
              <Text style={styles.connectedText}>
                {connected ? 'Connected' : 'Not connected'}
              </Text>
              <StatusLight color={connected ? '#29872F' : '#E55B5B'} />
            </View>
            {deviceName && (
              <View>
                <Text style={styles.speakerName}>{deviceName}</Text>
                <Button
                  color={theme.colors.yellow}
                  title={'DISCONNECT'}
                  onPress={() => {
                    // eslint-disable-next-line react/prop-types
                    navigation.navigate('Bluetooth');
                  }}
                />
              </View>
            )}
            {/*              <Button
                color={theme.colors.yellow}
                title={'CONNECT'}
                onPress={() => {
                  // eslint-disable-next-line react/prop-types
                  navigation.navigate('Bluetooth');
                }}
              />*/}

          {/* </View> */}
          <Image
            style={styles.imageContainer}
            source={require('../../../assets/portable.png')}
          />
        </View>

              {/* AJOUTER CONFIGSHANDLER ICI */}
              {/* <ConfigsHandler /> */}
              <RecordScreen />
          {/* <AddConfigItem
            update={setConfigUpdate}
            title={'CONFIG NAME'}
            volume={volume}
            noiseCanceling={noiseCanceling}
          /> */}
        </ScrollView>
        {/* <Jauge percentage={noiseCanceling} /> */}
        <View style={{marginBottom: 30}} >
        <CustomSlider title="Volume" setValue={setVolume} value={volume} />
        <CustomSlider
          title="Noise Canceling"
          setValue={setNoiseCanceling}
          value={noiseCanceling}
        />
        </View>
      </ScrollView>
      {/* </SafeAreaView> */}
      {/*<Panel navigation={navigation} source={require('../../../assets/portable.png')} noiseCanceling={noiseCanceling} deviceName={deviceName} isConnected={isConnected} />*/}
    </>
  );
};

const styles = {
  speakerNameContainer: {
    // marginLeft: 20,

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  panel: {
    backgroundColor: '#353535',
    shadowColor: '#000',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  imageContainer: {
    width: 120,
    height: 120,
  },
  connectedText: {
    color: theme.colors.gray,
    fontFamily: theme.fonts.primary.normal,
    fontWeight: '200',
    marginRight: 10,
  },
  speakerName: {
    color: '#fff',
    fontFamily: 'Cubano',
    fontWeight: '200',
    fontSize: 25,
  },
  configContainer: {
    padding: 20,
    margin: 20,
    backgroundColor: '#383A45',
    borderRadius: 10,
  },
  configHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  configTitle: {
    color: theme.colors.white,
    fontFamily: theme.fonts.primary.italicBold,
    fontSize: 25,
    // marginLeft: 20,
  },
};
