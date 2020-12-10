import React from 'react';
import {StyleSheet, View} from 'react-native';
import { Provider} from "react-redux";
import {store} from "./src/redux/store";
import GalleryContainer from "./src/components/Gallery/GalleryContainer";

export function App (){


    return (
        <View className={styles.container}>
            <Provider store={store}>
                <GalleryContainer  />
            </Provider>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '70%',
        borderBottomColor: 'red',
        borderWidth: 2,
        padding: 10
    }
});

