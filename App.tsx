import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import DeviceScreen from "@/screens/DeviceScreen";
import ShopScreen from "@/screens/ShopScreen";
import {store} from './store';
import {Provider} from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer independent={true}>
                <Stack.Navigator>
                    <Stack.Screen name="Shop" component={ShopScreen}/>
                    <Stack.Screen name="Device" component={DeviceScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
