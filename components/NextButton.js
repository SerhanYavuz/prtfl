import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 


export default function NextButton({pressHandler}) {


    return (
        <TouchableOpacity onPress={() => pressHandler()}>
            <View style={styles.item}>
                <Entypo style= {styles.buttonIcon} name="chevron-thin-right" />
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    
    item: {
        padding: 16,
        margin: 16,
        justifyContent:'center',
        alignItems: 'center',
        borderColor: 'coral',
        borderWidth: 1,
        borderRadius: 100,
        borderStyle: 'dashed',
        width: 75
    },
    buttonIcon:{
        fontSize: 36,
        color: 'coral'
    }
})