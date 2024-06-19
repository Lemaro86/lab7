import {View, StyleSheet, ScrollView, TextInput, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react';
import {axiosInstance} from '@/API';
import {setDevices} from '@/store/deviceSlice';
import DeviceCard from '../components/DeviceCard';

// @ts-ignore
export default function ShopScreen({navigation}) {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    // @ts-ignore
    const {devices} = useSelector((store) => store.device);

    async function getAllDevices(v: any) {
        console.log(v);
        try {
            const title = v !== '' ? `?title=${v}` : '';
            await axiosInstance
                .get(`/service/${title}`)
                .then((response) => dispatch(setDevices(response?.data)));
        } catch (e) {
            console.log('error', e);
        }
    }

    useEffect(() => {
        getAllDevices(value);
    }, [dispatch, value]);

    const handleChange = (e: any) => {
        setValue(e.target.value);
    }

    return (
        <ScrollView>
            <View style={styles.page}>
                <TextInput
                    style={styles.input}
                    onChange={(e) => handleChange(e)}
                    value={value}
                    placeholder='Введите услугу'
                />
                {!!devices && devices.length > 0 ? devices.map((device: any) => (
                    <DeviceCard key={device.pk} {...device} navigation={navigation}/>
                )) : <Text style={styles.notFound}>Услуги не найдены</Text>}
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    page: {
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
    },
    input: {
        width: 360,
        height: 40,
        fontSize: 24,
        lineHeight: 40,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ccc',
        margin: 'auto',
        marginTop: 20,
        borderRadius: 6,
        paddingLeft: 20,
        paddingRight: 20,
    },
    notFound: {
        fontSize: 24,
        lineHeight: 28,
        textAlign: 'center',
        margin: 'auto',
        marginTop: 40,
        paddingBottom: 40
    }
});
