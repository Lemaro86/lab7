import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

type ICard = {
    title: string;
    description: string;
    url?: string;
    cost: string;
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 150,
        height: 150,
    }
});

export default function DeviceCard(props: ICard) {
    const img = props.url  ? props.url.replace(/localhost/, '192.168.1.143'): '';
    return (
        <View>
            <Text>{props.title}</Text>
            <Text>{props.description}</Text>
            <Text style={{fontWeight: 'bold'}}>{parseInt(props.cost)} Р</Text>
            <Text>{props.url}</Text>
            {img && <Image style={styles.tinyLogo} source={{uri: img}} resizeMode='contain'/>}
        </View>
    );
}
