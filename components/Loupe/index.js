import React from 'react';
import {TouchableOpacity, Text, View, TextInput, Image} from 'react-native';
import styles from './styles';
import Touchable from 'react-native-platform-touchable';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Loupe(props) {
  return (
    <View style={styles.loupe}>
      <Icon name="search" size={150} color={'white'} />
    </View>
  );
}
