import {View, Text, Image, StyleSheet, Button} from 'react-native';
import React from 'react';

type ICard = {
    pk: number;
    title: string;
    description: string;
    url?: string;
    cost: string;
    navigation?: any;
}

export default function DeviceCard(props: ICard) {
    const img = props.url ? props.url.replace(/localhost/, '192.168.1.143') : '';
    return (
        <View style={styles.main}>
            <Text style={styles.title}>{props.title} 12</Text>
            <View style={styles.imgBox}>
                <Image style={styles.img} source={{uri: `${props.url}`}} resizeMode='contain'/>
            </View>
            <Text style={styles.desc}>{props.description}</Text>
            <Text style={styles.cost}>{parseInt(props.cost)} Р</Text>
            <Button title='Подробнее' onPress={() => props.navigation.navigate('Device', {pk: props.pk})}/>
        </View>
    );
}


const styles = StyleSheet.create({
    main: {
        width: 360,
        marginTop: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 40
    },
    imgBox: {
        width: 360,
        height: 250,
    },
    img: {
        width: 360,
        height: 250,
        marginBottom: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        height: 46
    },
    desc: {
        fontSize: 16,
        lineHeight: 18,
        marginBottom: 20,
        minHeight: 72,
    },
    cost: {
        marginBottom: 20,
        fontSize: 24
    }
});

