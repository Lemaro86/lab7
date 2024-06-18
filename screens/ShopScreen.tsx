import {View, StyleSheet, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect} from 'react';
import {axiosInstance} from '@/API';
import {setDevices} from '@/store/deviceSlice';
import DeviceCard from '../components/DeviceCard';

// @ts-ignore
export default function ShopScreen({navigation}) {
    const dispatch = useDispatch();
    // @ts-ignore
    const {devices} = useSelector((store) => store.device);

    useEffect(() => {
        async function getAllDevices() {
            await axiosInstance.get('/service/').then((response) => dispatch(setDevices(response?.data)));
        }

        getAllDevices();
    }, [dispatch]);

    return (
        <ScrollView>
            <View style={styles.page}>
                {!!devices && devices.map((device) => (
                    <DeviceCard key={device.pk} {...device} navigation={navigation}/>
                ))}
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    page: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});
