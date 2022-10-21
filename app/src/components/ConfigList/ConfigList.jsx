import * as React from "react";
import { ConfigItem } from "../ConfigItem/ConfigItem";
import {getConfigs} from '@dataStore/UtilsData';

const ConfigList = () => {
  const [configs, setConfigs] = React.useState(null);
  const [selected, setSelected] = React.useState(null);

  React.useEffect(async () => {
    const keys = await getConfigs();
    configList = [];
    keys.forEach((key, index) => {
      const fillConfig = async () => {
        const obj = await getData(key);
        configList.push(
          {title: obj.name, volume: obj.volume, noiseCanceling: obj.noiseCanceling}
        );
      };
      if (key !== 'activeConfig' && key !== 'FAV') fillConfig();
    });
    setConfigs(configList);
  }, []);

  return (
    <>
      {configs && configs.map((value, index) => {
        <ConfigItem 
        index={index}
        title={obj.name}
        volume={obj.volume}
        noiseCanceling={obj.noiseCanceling} 
        setSelected={setSelected}
        selected={selected}
        />
      })}
    </>
  )
}

export default ConfigList;