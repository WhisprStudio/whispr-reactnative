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
    return keyList;
  } catch (e) {
    // error reading keys
  }
};
