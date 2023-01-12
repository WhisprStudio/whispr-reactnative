import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Alert, PermissionsAndroid, Platform, Image } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

export const isPermitted = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'External Storage Write Permission',
          message: 'App needs access to Storage data',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      alert('Write permission err', err);
      return false;
    }
  } else {
    return true;
  }
};

const RecordScreen = () => {
  const [audioRecorderPlayer, setAudioRecorderPlayer] = useState(new AudioRecorderPlayer());
  const [recording, setRecording] = useState(false);
  const [recorded, setRecorded] = useState(false);
  const [playing, setPlaying] = useState(false);


  const startRecord = async () => {
    setRecording(true);
    await audioRecorderPlayer.startRecorder();
  };

  const stopRecord = async () => {
    setRecording(false);
    setRecorded(true);
    await audioRecorderPlayer.stopRecorder();
  };

  const startPlay = async () => {
    setPlaying(true);
    await audioRecorderPlayer.startPlayer();
    audioRecorderPlayer.addPlayBackListener((e) => {
      if(e.currentPosition === e.duration) {
        setPlaying(false);
      }
    });
  };

  const stopPlay = async () => {
    setPlaying(false);
    await audioRecorderPlayer.stopPlayer();
  };

  const reset = async () => {
    setRecorded(false);
    await audioRecorderPlayer.removeRecorderFile();
  }

  return (
    <View style={styles.container}>
      {recording ? (
        <TouchableOpacity style={styles.squareButton} onPress={stopRecord}>
          <Image
            style={styles.icon}
            source={require('../../assets/stop.png')}
          />
        </TouchableOpacity>
      ) : recorded ? (
        playing ? (
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.roundButton} onPress={stopPlay}>
              <Image
                style={styles.icon}
                source={require('../../assets/stop.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundButton} onPress={reset}>
              <Image
                style={styles.icon}
                source={require('../../assets/reset.png')}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.roundButton} onPress={startPlay}>
              <Image
                style={styles.icon}
                source={require('../../assets/play.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundButton} onPress={reset}>
              <Image
                style={styles.icon}
                source={require('../../assets/reset.png')}
              />
            </TouchableOpacity>
          </View>
        )
      ) : (
        <TouchableOpacity style={styles.roundButton} onPress={startRecord}>
          <Image
            style={styles.icon}
            source={require('../../assets/record.png')}
          />
        </TouchableOpacity>
      )}
    </View>  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  roundButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F44336',
    alignItems: 'center',
    justifyContent: 'center',
  },
  squareButton: {
    width: 100,
    height: 100,
    backgroundColor: '#F44336',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icon: {
    width: 50,
    height: 50,
  },
});

export default RecordScreen
