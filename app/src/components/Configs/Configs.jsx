import * as React from 'react';
import {theme} from '../../theme';
import {getConfigs, getData, getConfigsWithDetails} from '@dataStore/UtilsData';
import ConfigList from '@components/ConfigList/ConfigList';
import { View, Text} from 'react-native';
import AddConfigItem from '@components/AddConfigItem/AddConfigItem.js';

export const ConfigsHandler = ({currentVolume = 50, currentNoiseCanceling = 50}) => {

    const [update, setUpdate] = React.useState(false)
      const [configs, setConfigs] = React.useState(null)

    //   const getConfigsDetails = async (key) => {
    //     const obj = await getData(key);
    //     console.log('La clee dans fill config :)', key)
    //     return obj
    //     // console.log()
    //     // console.log('obj :', obj)
    //     // configList.push(
    //     //   {title: obj.name, volume: obj.volume, noiseCanceling: obj.noiseCanceling}
    //     // );
    //     // console.log(index +' dans la boucle Config list : ', configList)
    // };

    const getConfigs = async () => {
        console.log(getConfigsWithDetails())
    //     const keys = await getConfigs();
    //     console.log('keys after get configs ?', keys)
    //     let configList = [];r
    //     keys.forEach( async (key, index) => {
    //         console.log('La clee en cours est : ', key)
    //         const obj = await getConfigsDetails(key);
    //         console.log('Apres le await de la clee :', key)
    //         configList.push({title: obj.name, volume: obj.volume, noiseCanceling: obj.noiseCanceling})
    // });
    // console.log('configList :', configList)
    // setConfigs(configList);
    }

    React.useEffect(() => {
        getConfigs();
        // setUpdate(false)
        // console.log('configList :', configList)
        return () => {}
      }, []);

    return (
        <View style={styles.configContainer}>
        <View style={styles.configHeader}>
          <Text style={styles.configTitle}>Configuration</Text>
          {/* <TouchableOpacity
            // onPress={}
          > */}
          <AddConfigItem update={setUpdate} />
            {/* <AddConfig /> */}
          {/* </TouchableOpacity> */}
        </View>
        <ConfigList configs={configs} update={() => {}}/>
      </View>
    );
}

const styles = {
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
    },
  };

export default ConfigsHandler;
