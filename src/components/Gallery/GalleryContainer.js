import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {setImagesTC} from "../../redux/reducers/galleryReducer";
import {Image, View, Text, StyleSheet, ScrollView,TouchableOpacity} from "react-native";

const GalleryContainer = ({setImagesTC, images, navigation}) => {

    useEffect(() => {
        setImagesTC()
    }, [])


    return (
        <ScrollView>
        <View style={styles.wrap}>
            {images.map(image => {
                return (
                    <View key={image.id} style={styles.column}>
                        <TouchableOpacity onPress={() => navigation.navigate('ImageScreen', {
                            itemId: image.id,
                            params: image
                        })}>
                        <Image
                            style={styles.img}
                            alt=""
                            source={{uri: image.urls.small}}
                        />
                        </TouchableOpacity>
                        <Text style={styles.name}>{image.user.name}</Text>
                    </View>
                )
            })}
        </View>
</ScrollView>



)}


const mapStateToProps = state => {
    return {
        images: state.gallery.images
    }
}

const styles = StyleSheet.create({
    wrap: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    img: {
        margin: 2,
        width: 150,
        height: 150
    },
    name: {
        fontSize: 20,
        color: 'white',
        width: 130,
        top: -30
    }
})

export default connect(mapStateToProps, {setImagesTC})(GalleryContainer)