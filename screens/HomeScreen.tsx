import * as React from 'react';
import { StyleSheet, Text, View  } from 'react-native';

import Albums from '../components/Albums';

const albums ={
  id: '1',
  imageUri: 'https://cdn.pixabay.com/photo/2018/01/05/07/05/people-3062246_1280.jpg',
  artistsHeadline: 'Ninho, Migos, Post Malone',

}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
       <Albums albums={albums}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
