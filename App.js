import React, { useState } from 'react';
import { StyleSheet,Image, Text, Button, View, FlatList } from 'react-native';
import Navigator from './routes/HomeStack'

export default function App() {

  return (
    <View style={styles.container}>
      <Navigator/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

});
