---
description: Item to display pre-configuration - if the configuration is active or not and it's name
labels: ['Title', 'volume', 'noiseCanceling', 'status']
---

## Props
title - str <br />
volume - numer <br />
noiseCanceling - number <br />
status - bool <br />

## This is how the code should look like

```js
() => {
    const [volume, setVolume] = useState(5);

    return  <ConfigItem
            remove={setConfigUpdate}
            title={obj.name}
            volume={obj.volume}
            noiseCanceling={obj.noiseCanceling}
            status={await isConfigActive(obj)}
          />
};
```

## This is how the code is used


<!-- ```js live=true
() => {

};
``` -->
