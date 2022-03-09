import React from 'react';
import {TouchableOpacity, Text, View, TextInput, Image} from 'react-native';
import styles from './styles';
import Touchable from 'react-native-platform-touchable';
export default function ListItem(props) {
  const {navigation, onPress, definition, style, loading, outline} = props;
  return (
    <TouchableOpacity style={styles.option} onPress={onPress}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{definition.word}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
