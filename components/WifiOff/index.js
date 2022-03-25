import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function WifiOff(props) {
  return (
    <View style={styles.loupe}>
      <Icon name="wifi-off" size={100} color={'white'} />
      <Text style={styles.text}>
        L'application a besoin d'une connexion à internet pour fonctionner
        correctement
      </Text>
    </View>
  );
}
