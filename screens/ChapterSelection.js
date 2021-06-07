import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator,FlatList, View } from 'react-native';
import SelectionItem from '../components/SelectionItem'


export default function ChapterSelection({ navigation }) {
    const [chapters, setChapters] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const year = navigation.getParam('year')

    const GetChapters = new Promise(function (resolve, reject) {
        fetch('*' + year)
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error));

    })

    useEffect(() => {
        GetChapters
            .then((res) => {
                var arr = [];
                for (var i in res) {
                   
                    arr.push(
                        {
                            "description": res[i].description,
                            "key": res[i].id.toString(),
                            "text": res[i].chapterName,
                        });
                }
                setChapters(arr);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, []);


    const pressHandler = (key) => {
        //repo.getImages()
        //will get images here
        navigation.navigate('Home', { chapter: key, year: year });
    }

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={chapters}
                    renderItem={({ item }) => (
                        <SelectionItem item={item} pressHandler={pressHandler} />
                    )}
                />
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff'
    }
})