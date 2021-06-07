import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View, Text, FlatList } from 'react-native';
import SelectionItem from '../components/SelectionItem'
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
} from 'expo-ads-admob';

export default function YearSelection({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [years, setYears] = useState([]);
    const GetYears = new Promise(function (resolve, reject) {
        fetch('*')
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error));

    })


    useEffect(() => {
        GetYears
            .then((res) => {
                var arr = [];
                for (var i in res) {
                    arr.push(
                        {
                            "description": res[i].description,
                            "key": res[i].id.toString(),
                            "text": res[i].year,
                        });
                }
                setYears(arr);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, []);


    const pressHandler = (key) => {
        navigation.navigate('ChapterSelection', { year: key });
        //todo get chapters of the year via key 
    }

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={years}
                    renderItem={({ item }) => (
                        <SelectionItem item={item} pressHandler={pressHandler} />
                    )}
                />

            )}
            <AdMobBanner
                bannerSize="banner"
                adUnitID="*"
                onDidFailToReceiveAdWithError = {err => {console.log(err)} }
                servePersonalizedAds  
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})