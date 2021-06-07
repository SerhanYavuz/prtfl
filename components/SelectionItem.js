import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';



export default function SelectionHandler({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <Text style = {styles.text}>{item.text}</Text>
                <Text style = {styles.description}> {item.description} </Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    
    item: {
        padding: 16,
        margin: 16,
        borderColor: 'coral',
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: 'dashed'
    },
    text:{
        fontSize: 24,
        fontWeight: 'bold'
    },
    description:{
        fontSize : 12,
        color:'#216334'
    }
})