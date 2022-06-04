import React, {useEffect, useState, useRef} from "react";
import { View, Image, ScrollView, Dimensions, Text, StyleSheet, Button} from "react-native";
import { theme } from "@theme/theme";

const {width, height} = Dimensions.get("window")
// const height = width * 100 / 60;

const images = [
    require('../../../assets/tuto1.png'),
    require('../../../assets/tuto2.png'),
    require('../../../assets/tuto3.png'),
]

const Carousel = ({setShowTutorial}) => {
    const [active, setActive] = useState(0);
    const scrollViewRef = useRef();

    return (
        <View style={{}}>
            <ScrollView
                pagingEnabled
                horizontal
                ref={scrollViewRef}
                onScroll={({nativeEvent}) => {
                    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
                    if(slide !== active) {
                        setActive(slide)
                    }
                }}
                showsHorizontalScrollIndicator={false}
                style={style.scrollContainer}
            >
                {
                    images.map((image, index) => (
                        <Image
                            style={style.image}
                            resizeMode={'contain'}
                            key={index}
                            source={image}
                        />
                    ))
                }
            </ScrollView>
                <View style={style.command}>
                    <Button
                            style={{width: 100}}
                            title={'Skip'}
                            color={theme.colors.yellow}
                            width={200}
                            onPress={() => {
                                setShowTutorial(false)
                            }}
                        />
                </View>
                <View style={style.pagination}>
                    {
                        images.map((i, k) => (
                            <Text key={k} style={k===active ? style.pagingTextActive : style.pagingText}>●</Text>
                            ))
                        }
                </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {},
    scrollContainer: {width, height},
    image: {borderColor: 'white', borderWidth: 0.001, width: width, height,},
    pagination: {flexDirection: 'row', position: 'absolute', bottom: 20, alignSelf: 'center'},
    command: {position: 'absolute', bottom: 60, marginLeft: 15, width: 100},
    pagingText: {color: '#888', margin: 3},
    pagingTextActive: {color: '#fff', margin: 3},
})

export default Carousel
