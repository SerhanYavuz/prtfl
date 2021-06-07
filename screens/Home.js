import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, ImageBackground } from 'react-native';
import ListenButton from '../components/ListenButton'
import NextButton from '../components/NextButton'
import PrevButton from '../components/PrevButton';

export default function Home({ navigation }) {
    //get Images
    const [images, setImages] = useState([]);
    const [imageSource, setImageSource] = useState({ uri: '', index: 0, objectName: '' });
    const [isLoading, setLoading] = useState(true);

    const chapter = navigation.getParam('chapter');
    const year = navigation.getParam('year');

    const GetImages = new Promise(function (resolve, reject) {
        fetch('*' + year + '/chapter/' + chapter)
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error));

    })

    useEffect(() => {

        GetImages
            .then((res) => {
                var arr = [];
                for (var i in res) {
                    arr.push(
                        {
                            id: res[i].id,
                            imageLocation: "*" + res[i].imageLocation.substring(5),
                            objectName: res[i].objectName,
                        });
                }
                console.log('arr -> ', arr);
                setImages(arr);
                console.log(images);
                setImageSource({ uri: arr[0].imageLocation, index: 0, objectName: arr[0].objectName });
            })

            .catch((err) => console.log(err))
            .finally(() => { setLoading(false) });
    }, []);

  

    const onNext = () => {
        var curIndex = imageSource.index;
        if (curIndex < images.length - 1) {
            curIndex++;
            setImageSource({ uri: images[curIndex].imageLocation, index: curIndex, objectName: images[curIndex].objectName })
        }
    }

    const onPrev = () => {
        var curIndex = imageSource.index;
        console.log(images);
        if (imageSource.index > 0) {
            curIndex--;
            setImageSource({ uri: images[curIndex].imageLocation, index: curIndex, objectName: images[curIndex].objectName })
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                {isLoading ? <ActivityIndicator /> : (
                    <ImageBackground style={styles.bgImage} source={imageSource} imageStyle={{ borderRadius: 30 }}>
                        <View style={styles.imageBottom}>
                            <Text style={styles.text} >{imageSource.objectName}</Text>
                        </View>

                    </ImageBackground>
                )}


            </View>
            <View style={styles.bottomBar}>

                <PrevButton pressHandler={onPrev} />
                <ListenButton word={imageSource.objectName} />
                <NextButton pressHandler={onNext} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        maxWidth: 800,
        flex: 1,
        padding: 24,
        backgroundColor: '#fff'
    },
    bottomBar: {
        flexDirection: 'row',
        flex: 1,
        alignSelf: 'center'
    },
    imageContainer: {
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'coral',
        borderWidth: 1,
        borderRadius: 30,
        borderStyle: 'dashed',
        flex: 3,
    },
    bgImage: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
    },
    text: {
        backgroundColor: '#fff',
        padding: 16,
        fontSize: 32,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    imageBottom: {
        flex: 1,
        marginBottom: 16,
        justifyContent: 'flex-end'
    }
})

