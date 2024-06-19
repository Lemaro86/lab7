import {View, Text, Button, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {axiosInstance} from "@/API";
import {setDevice} from "@/store/deviceSlice";
import {StyleSheet} from 'react-native';

type IDeviceScreen = {
    navigation: any;
    route: any;
}

export default function DeviceScreen({navigation, route}: IDeviceScreen) {
    const dispatch = useDispatch();
    // @ts-ignore
    const {device} = useSelector((store) => store.device);
    const {pk} = route.params;

    const getInfo = async () => {
        await axiosInstance
            .get(`/service/${pk}/`)
            .then((response) => dispatch(setDevice(response?.data)));
    }

    useEffect(() => {
        getInfo();
    }, [dispatch]);

    return (
        <View style={styles.main}>
            <Text style={styles.title}>{device.title}</Text>
            <Image style={styles.img} source={{uri: `${device.url}`}}/>
            <Text style={styles.desc}>{device.description}</Text>
            <Text style={styles.cost}>Цена: {device.cost} Р</Text>
            <Button title={'Назад'} onPress={() => navigation.navigate('Shop')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        width: 360,
        marginTop: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    img: {
        width: 360,
        height: 250,
        marginBottom: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },
    desc: {
        fontSize: 16,
        lineHeight: 18,
        marginBottom: 20
    },
    cost: {
        marginBottom: 20,
        fontSize: 24
    }
});
