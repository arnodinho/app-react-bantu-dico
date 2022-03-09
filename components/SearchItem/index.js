import React from 'react';
import {TouchableOpacity, Text, View, TextInput, Image} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
export default function SearchItem(props) {
  const {onPress, definition} = props;
  console.log('entrée dans le composant searchItem');
  return (
    <TouchableOpacity style={{flex: 1, alignItems: 'center'}} onPress={onPress}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.button}>
        <Text style={styles.definitionTitle} numberOfLines={1}>
          {definition.target.word}
        </Text>
        <Text style={styles.definitionType}>- {definition.target.type} -</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
