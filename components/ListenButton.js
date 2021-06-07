import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import * as Speech from 'expo-speech';

export default function ListenButton({ word }) {
    const wordToSpeak = word;


    const pressHandler = () => {
        //speak word
        Speech.speak(wordToSpeak, {language:'en', pitch:1 ,rate:0.75});
    }
    return (
        <TouchableOpacity onPress={() => pressHandler()}>
            <View style={styles.item}>
                <Entypo style= {styles.buttonIcon} name="sound" />
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