import React from 'react';
import {TouchableOpacity, Text, View, TextInput, Image} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
export default function SearchItem({onPress, definition, source, target}) {
  console.log('entrée dans le composant searchItem');

  const handleTranslation = () => {
    if (source === 'sango' || source === 'lingala') {
      return (
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.button}>
          <Text style={styles.definitionTitle} numberOfLines={1}>
            {definition.source.word}
          </Text>
          <Text style={styles.definitionType}>
            - {definition.source.type} -
          </Text>
        </LinearGradient>
      );
    }

    return (
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.button}>
        <Text style={styles.definitionTitle} numberOfLines={1}>
          {definition.target.word}
        </Text>
        <Text style={styles.definitionType}>- {definition.target.type} -</Text>
      </LinearGradient>
    );
  };

  return (
    <TouchableOpacity style={{flex: 1, alignItems: 'center'}} onPress={onPress}>
      {handleTranslation()}
    </TouchableOpacity>
  );
}
