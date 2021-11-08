import React, { useEffect, useState } from "react";
import { View, Text, Button, Image, Pressable} from "react-native";
import {theme} from "@theme";

export const CardBluetooth = ({imageSrc, wirelessName, select, setSelect}) => {
    const [selectCard, setSelectCard] = useState(null)

    useEffect(() => {
        if (wirelessName === select) {
            setSelectCard(true);
        } else {
            setSelectCard(false)
        }
    }, [select, selectCard]);

    return (
        <View style={selectCard ? styles.cardSelected : styles.card}>
            <Pressable onPress={() => {
                if (select === wirelessName)
                    setSelect(null)
                else if (select !== wirelessName)
                    setSelect(wirelessName)
            }}>
                <View style={styles.imageWrapper}>
                    <Image style={styles.image} source={imageSrc}/>
                </View>
                <Text style={selectCard ? styles.textSelected : styles.text}>
                    {wirelessName}
                </Text>
            </Pressable>
        </View>
    );
};

const styles = {
    card: {
        width: '85%',
        borderColor: theme.colors.gray,
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
        margin: 10,
        paddingTop: 10,
    },
    cardSelected: {
        borderColor: theme.colors.yellow,
        borderWidth: 1,
        borderRadius: 5,
        width: '85%',
        marginLeft: 'auto',
        marginRight: 'auto',
        margin: 10,
        paddingTop: 10,
    },
    text: {
        color: theme.colors.gray,
        textDecorationLine: 'underline',
        textAlign: 'right',
        marginRight: 15,
        margin: 5,
    },
    textSelected: {
        color: theme.colors.yellow,
        textDecorationLine: 'underline',
        textAlign: 'right',
        marginRight: 15,
        margin: 5,
    },
    image: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 100,
        height: 100,
    },
};
