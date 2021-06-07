import React, {useState}from 'react';
import {StyleSheet, FlatList,View, Text} from 'react-native';


export default function getData(){
    const [chapters, setChapters] = useState([
        { text: 'Chapter 1', description: 'Animals', key: '1' },
        { text: 'Chapter 2', description: 'Things', key: '2' }
    ]);
    const year = navigation.getParam('year')
    const pressHandler = (key) => {
        //repo.getImages()
        navigation.navigate('Home', {images: key, year: year} );
    }

    return (
        <View style = {styles.container}>
            <FlatList
                data={chapters}
                renderItem={({ item }) => (
                    <SelectionItem item={item} pressHandler={pressHandler} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:24,
        backgroundColor:'#fff'
    }
})