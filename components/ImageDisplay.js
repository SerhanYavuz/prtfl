import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


export default function ImageDisplay({ imageUrl, text }) {

    console.log('ImageDisplay', imageUrl);
    
    
    return (

        <View style={styles.container}>
            <Image style={styles.image} source={{uri: imageUrl}} />
            <Text style={styles.text} >{text}</Text>
        </View>



    )
}



const styles = StyleSheet.create({

    container: {
        padding: 16,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'coral',
        borderWidth: 1,
        borderRadius: 30,
        borderStyle: 'dashed',
        flex: 1,
    },
    image: {
        width: 200,
        height: 300,
        alignSelf: 'center',
        borderRadius: 30
    },
    text: {
        alignSelf: 'center',
        fontSize: 32,
        fontWeight: 'bold'
    }
})

