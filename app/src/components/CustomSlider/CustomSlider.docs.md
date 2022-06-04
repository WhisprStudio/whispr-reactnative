---
description: Custom tactil slider
---


A custom slider to change the value of the props sent

# Props
Title - str <br />
SetValue - function <br />
value - bool <br />


## This is how the code should look like

```js
() => {
    const [volume, setVolume] = useState(5);

    return <CustomSlider title="Volume" setValue={setVolume} value={volume} />
};
```

<!-- ## This is how the code is used -->


<!-- ```js live=true
() => {
    const [volume, setVolume] = useState(5);

    return <CustomSlider title="Slide me" setValue={setVolume} value={volume} />
};
``` -->
