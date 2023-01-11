import AsyncStorage from '@react-native-async-storage/async-storage';
import {resolve} from 'react-native-svg/src/lib/resolve';

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getData = async (key, thenFunction) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key).then(thenFunction);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const getConfigs = async () => {
  var keyList = [];
  try {
    await AsyncStorage.getAllKeys((error, keys) => {
      keyList = keys;
    });
    console.log('keyList : ', keyList);
    return keyList;
  } catch (e) {
    // error reading keys
  }
};

export const getConfigsWithDetails = async () => {
  const keys = await getConfigs();
  let configList = [];
  keys.forEach( async (key, index) => {
      console.log('La clee en cours est : ', key)
      const obj = await getConfigsDetails(key);
      console.log('Apres le await de la clee :', key)
      configList.push({title: obj.name, volume: obj.volume, noiseCanceling: obj.noiseCanceling})
  });
  return configList

}
