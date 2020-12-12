import 'react-native-gesture-handler'

import React from 'react';
import {Provider} from "react-redux";
import {store} from "./src/redux/store";
import GalleryContainer from "./src/components/Gallery/GalleryContainer";
import ImageScreen from "./src/components/Gallery/ImageScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

export default function App() {

    const Stack = createStackNavigator()

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                   <Stack.Screen name='Gallery' component={GalleryContainer}/>
                   <Stack.Screen name='ImageScreen' component={ImageScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}


