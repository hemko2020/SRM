import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {Albums} from '../../types';

export type AlbumProps = {
    albums:{
    id: string;
    imageUrl: string;
    artistsHeadline: string;

    }
    
}


const Albums = (props:AlbumProps) => (

    <View style={styles.container}>
        <Image source={{uri: props.albums.imageUrl}} style={styles.image}/>
        <Text style={styles.text}>{props.albums.artistsHeadline}</Text>

        {/* image of the album */}
         {/* Artists headline */}
    </View>
)

export default Albums;