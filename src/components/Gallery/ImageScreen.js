import React from 'react'
import {Dimensions, Image, TouchableOpacity} from "react-native";


const ImageScreen = ({navigation, route}) => {

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
                style={{width: windowWidth, height: windowHeight}}
                alt='Hello'
                source={{uri: route.params.params.urls.small}}/>
        </TouchableOpacity>
    )
}


export default ImageScreen