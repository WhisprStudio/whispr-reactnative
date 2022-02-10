import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import {Text, View, ScrollView, Image, Button} from 'react-native';
import {theme} from '../../theme';
import CustomSlider from '@components/CustomSlider';
import {ConfigItem} from '@components/ConfigItem.js';
import AddConfigItem from '@components/AddConfigItem.js';
import {storeData, getData} from '@components/../dataStore/UtilsData.js';
import {getConfigs} from '../../dataStore/UtilsData';
import Jauge from '../../components/Jauge';
import StatusLight from '../../components/StatusLight';
import {Fav} from '../../icons/Fav';

export const Home = ({route, navigation}) => {
  const {deviceName, isConnected} = route.params;
  const [configUpdate, setConfigUpdate] = useState(true);
  const [configs, setConfigs] = useState([<View key={'default'} />]);
  let configList = [];
  const [volume, setVolume] = useState(20);
  const [noiseCanceling, setNoiseCanceling] = useState(20);
  const [fav, setFav] = useState('');

  useEffect(() => {
    if (configUpdate) {
      refreshConfig();
      setConfigUpdate(false);
    }
  }, [configUpdate]);

  useEffect(() => {}, [volume, noiseCanceling]);

  const isConfigActive = async conf => {
    const data = await getData('activeConfig');
    if (data?.name === conf.name) {
      setVolume(conf.volume);
      setNoiseCanceling(conf.noiseCanceling);
      return true;
    }
    return false;
  };

  const refreshConfig = async () => {
    const res = await getFav();
    console.log(res, 'res');
    const keys = await getConfigs();
    configList = [];
    keys.forEach(key => {
      const fillConfig = async () => {
        const obj = await getData(key);
        configList.push(
          <ConfigItem
            remove={setConfigUpdate}
            key={obj.name}
            title={obj.name}
            volume={obj.volume}
            noiseCanceling={obj.noiseCanceling}
            status={await isConfigActive(obj)}
          />,
        );
      };
      if (key !== 'activeConfig' && key != 'FAV') fillConfig();
    });
    setTimeout(() => setConfigs(configList), 100);
  };

  const addFav = () => {
    storeData('FAV', deviceName);
  };

  const getFav = async () => {
    const res = await getData('FAV');
    setFav(res);
  };

  return (
    <>
      {/* <SafeAreaView> */}
      <Image
        style={{
          marginTop: '5%',
          marginLeft: '5%',
          marginBottom: '10%',
          width: 100,
          height: 50,
        }}
        source={require('../../../assets/logo.png')}
      />
      <ScrollView style={{}}>
        <CustomSlider title="Volume" setValue={setVolume} value={volume} />
        <CustomSlider
          title="Noise Canceling"
          setValue={setNoiseCanceling}
          value={noiseCanceling}
        />
        {/*<Button color={theme.colors.yellow} title={"refresh config"} onPress={() => {setConfigUpdate(true)}} />*/}
        <ScrollView>
          {configs}
          <AddConfigItem
            update={setConfigUpdate}
            title={'CONFIG NAME'}
            volume={volume}
            noiseCanceling={noiseCanceling}
          />
        </ScrollView>
        <View style={styles.panelContainer}>
          <View>
            <View style={styles.speakerNameContainer}>
              <StatusLight color={isConnected ? '#29872F' : '#E55B5B'} />
              <Text style={styles.connectedText}>
                {isConnected ? 'connected to' : 'not connected'}
              </Text>
            </View>
            {deviceName ? (
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
            ) : (
              <Button
                color={theme.colors.yellow}
                title={'CONNECT'}
                onPress={() => {
                  // eslint-disable-next-line react/prop-types
                  navigation.navigate('Bluetooth');
                }}
              />
            )}
          </View>
          <Image
            style={styles.imageContainer}
            source={require('../../../assets/portable.png')}
          />
        </View>
        <View style={{paddingLeft: 200, paddingRight: 40}}>
          <Text style={styles.speakerName}>{fav}</Text>
          <Button
            color={theme.colors.yellow}
            title={'FAV'}
            onPress={() => addFav()}
          />
        </View>
        <Jauge percentage={noiseCanceling} />
        <View style={{height: 20}} />
      </ScrollView>
      {/* </SafeAreaView> */}
      {/*<Panel navigation={navigation} source={require('../../../assets/portable.png')} noiseCanceling={noiseCanceling} deviceName={deviceName} isConnected={isConnected} />*/}
    </>
  );
};

const styles = {
  speakerNameContainer: {
    flex: 1,
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
    color: '#fff',
    fontFamily: 'Cubano',
    fontWeight: '200',
  },
  speakerName: {
    color: '#fff',
    fontFamily: 'Cubano',
    fontWeight: '200',
    fontSize: 25,
  },
};
