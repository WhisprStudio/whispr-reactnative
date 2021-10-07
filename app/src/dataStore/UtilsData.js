import React, { AsyncStorage } from 'react-native';

const _storeData = async (key, value) => {
            try {
              await AsyncStorage.setItem(
                key,
                value
              );
            } catch (error) {
              // Error saving data
            }
};

const _retrieveData = async (key) => {
            try {
              const value = await AsyncStorage.getItem(key);
              if (value !== null) {
                return Promise<value>
              }
            } catch (error) {
              // Error retrieving data
            }
            return Promise<void>;
};

export function saveConfig() {

}

export function getConfigs() {

}

export function getActiveConfig() {

}

export function editConfig() {

}