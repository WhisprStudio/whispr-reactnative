import * as React from "react";
import { Text } from "react-native";
import { ConfigItem } from "../ConfigItem/ConfigItem";
import {getConfigs, getData} from '@dataStore/UtilsData';

const ConfigList = ({update}) => {
  const [configs, setConfigs] = React.useState(null);
  const [selected, setSelected] = React.useState(null);

  React.useEffect(async () => {
    const keys = await getConfigs();
    const configList = [];
    await keys.forEach((key, index) => {
      const fillConfig = async () => {
        const obj = await getData(key);
        console.log('obj :', obj)
        configList.push(
          {title: obj.name, volume: obj.volume, noiseCanceling: obj.noiseCanceling}
        );
        console.log(index +'Config list : ', configList)
        setConfigs(configList);
      };
      if (key !== 'activeConfig' && key !== 'FAV') fillConfig();
    });
    // console.log('configList :', configList)
  }, [update]);

  console.log('CONFIGS ====', configs)
  // console.log('configs', configs)
  return (
    <>
      {configs && configs.map((value, index) => {
        return (

        <>
        <ConfigItem
        index={index}
        title={value.title}
        volume={value.volume}
        key={index}
        noiseCanceling={value.noiseCanceling}
        setSelected={setSelected}
        selected={selected}
        update={update}
        />
        </>
        )
      })}
    </>
  )
}

export default ConfigList;
